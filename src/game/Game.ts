import { Application, Container } from 'pixi.js';
import { gameReducer, type GameState, type GameAction } from './state/GameState';
import { createInitialState } from './state/initialState';
import { renderGrid, renderBuildings, renderVillagers, renderTrees } from './render/index';
const TILE_SIZE = 32;

export class Game {
  readonly app: Application;
  private state: GameState;
  private readonly stateContainer: Container;
  private autoSaveInterval: ReturnType<typeof setInterval> | null = null;
  private listeners: Array<(state: GameState) => void> = [];
  private clickHandler: ((e: MouseEvent) => void) | null = null;

  constructor(container: HTMLElement) {
    this.app = new Application();
    this.stateContainer = new Container();
    this.state = createInitialState();
    this.init(container);
  }

  private async init(container: HTMLElement) {
    await this.app.init({
      resizeTo: container,
      backgroundColor: 0x1a1a2e,
      antialias: true,
    });

    container.appendChild(this.app.canvas as HTMLCanvasElement);
    this.app.stage.addChild(this.stateContainer);

    // Click handler
    this.clickHandler = (e: MouseEvent) => this.handleClick(e);
    (this.app.canvas as HTMLCanvasElement).addEventListener('click', this.clickHandler);

    // Tick loop
    this.app.ticker.add(() => {
      this.dispatch({ type: 'TICK' });
    });

    // Auto-save every 30s
    this.autoSaveInterval = setInterval(() => {
      this.dispatch({ type: 'SAVE' });
    }, 30000);

    this.render();
  }

  /** Convert a mouse event to grid coordinates */
  private eventToGrid(e: MouseEvent): { x: number; y: number } | null {
    const canvas = this.app.canvas as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    // Account for canvas scaling
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const gx = Math.floor((px * scaleX) / TILE_SIZE);
    const gy = Math.floor((py * scaleY) / TILE_SIZE);
    const grid = this.state.grid;
    if (gx < 0 || gx >= grid.length || gy < 0 || gy >= grid[0].length) return null;
    return { x: gx, y: gy };
  }

  private handleClick(e: MouseEvent) {
    const coord = this.eventToGrid(e);
    if (!coord) return;

    const { x, y } = coord;
    const tile = this.state.grid[x]?.[y];
    if (!tile) return;

    // Phase 1: Placing the first town hall
    if (this.state.phase === 'placingTownHall') {
      this.dispatch({ type: 'START_PLACING', buildingType: 'townHall' });
      this.dispatch({ type: 'PLACE_BUILDING', x, y });
      return;
    }

    // Building placement mode
    if (this.state.isPlacing && this.state.selectedBuildingType) {
      this.dispatch({ type: 'PLACE_BUILDING', x, y });
      return;
    }

    // Click on tree = gather
    if (tile.type === 'tree' || tile.type === 'sapling') {
      this.dispatch({ type: 'GATHER', x, y });
      return;
    }

    // Click on building = select
    if (tile.type === 'building' || tile.type === 'stockpile') {
      if (tile.occupiedBy) {
        this.dispatch({ type: 'SELECT_BUILDING', buildingId: tile.occupiedBy });
      }
      return;
    }
  }

  getState(): GameState {
    return this.state;
  }

  subscribe(listener: (state: GameState) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  dispatch(action: GameAction) {
    this.state = gameReducer(this.state, action);
    this.render();
    this.listeners.forEach((l) => l(this.state));
  }

  private render() {
    this.stateContainer.removeChildren();
    renderGrid(this.stateContainer, this.state.grid);
    renderTrees(this.stateContainer, this.state.grid, this.state.saplings);
    renderBuildings(this.stateContainer, this.state.buildings);
    renderVillagers(this.stateContainer, this.state.villagers);
  }

  destroy() {
    if (this.autoSaveInterval) clearInterval(this.autoSaveInterval);
    if (this.clickHandler) {
      (this.app.canvas as HTMLCanvasElement)?.removeEventListener('click', this.clickHandler);
    }
    this.app.destroy(true);
  }
}
