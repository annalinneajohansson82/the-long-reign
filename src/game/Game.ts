import { Application, Container } from 'pixi.js';
import { gameReducer, type GameState, type GameAction } from './state/GameState';
import { createInitialState } from './state/initialState';
import { renderGrid, renderBuildings, renderVillagers, renderTrees } from './render/index';
import { saveGame, loadGame } from '../save/saveManager';

const TILE_SIZE = 32;

export class Game {
  readonly app: Application;
  private state: GameState;
  private readonly stateContainer: Container;
  private dirty = true;
  private autoSaveInterval: ReturnType<typeof setInterval> | null = null;
  private listeners: Array<(state: GameState) => void> = [];
  private clickHandler: ((e: MouseEvent) => void) | null = null;
  private beforeunloadHandler: (() => void) | null = null;

  constructor(container: HTMLElement) {
    this.app = new Application();
    this.stateContainer = new Container();
    const saved = loadGame();
    this.state = saved ?? createInitialState();
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

    // Canvas click handler
    this.clickHandler = (e: MouseEvent) => this.handleClick(e);
    (this.app.canvas as HTMLCanvasElement).addEventListener('click', this.clickHandler);

    // beforeunload save
    this.beforeunloadHandler = () => saveGame(this.state);
    window.addEventListener('beforeunload', this.beforeunloadHandler);

    // Tick loop — only re-render when dirty
    this.app.ticker.add(() => {
      this.dispatch({ type: 'TICK', foresterPick: Math.random() });
    });

    // Auto-save every 30s
    this.autoSaveInterval = setInterval(() => {
      saveGame(this.state);
    }, 30000);

    this.render();
  }

  private eventToGrid(e: MouseEvent): { x: number; y: number } | null {
    const canvas = this.app.canvas as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
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

    if (this.state.phase === 'placingTownHall') {
      this.dispatch({ type: 'START_PLACING', buildingType: 'townHall' });
      this.dispatch({ type: 'PLACE_BUILDING', x, y });
      return;
    }

    if (this.state.isPlacing && this.state.selectedBuildingType) {
      this.dispatch({ type: 'PLACE_BUILDING', x, y });
      return;
    }

    if (tile.type === 'tree' || tile.type === 'sapling') {
      this.dispatch({ type: 'GATHER', x, y });
      return;
    }

    if (tile.type === 'building' || tile.type === 'stockpile') {
      if (tile.occupiedBy) {
        this.dispatch({ type: 'SELECT_BUILDING', buildingId: tile.occupiedBy });
      }
    }
  }

  getState(): GameState {
    return this.state;
  }

  subscribe(listener: (state: GameState) => void): () => void {
    this.listeners.push(listener);
    return () => { this.listeners = this.listeners.filter((l) => l !== listener); };
  }

  dispatch(action: GameAction) {
    this.state = gameReducer(this.state, action);
    this.dirty = true;
    this.listeners.forEach((l) => l(this.state));
    // Only re-render on non-TICK actions or when state actually changed
    if (this.app.ticker.started) this.render();
  }

  private render() {
    if (!this.dirty) return;
    this.stateContainer.removeChildren();
    renderGrid(this.stateContainer, this.state.grid);
    renderTrees(this.stateContainer, this.state.grid, this.state.saplings);
    renderBuildings(this.stateContainer, this.state.buildings);
    renderVillagers(this.stateContainer, this.state.villagers);
    this.dirty = false;
  }

  destroy() {
    if (this.autoSaveInterval) clearInterval(this.autoSaveInterval);
    if (this.clickHandler) {
      (this.app.canvas as HTMLCanvasElement)?.removeEventListener('click', this.clickHandler);
    }
    if (this.beforeunloadHandler) {
      window.removeEventListener('beforeunload', this.beforeunloadHandler);
    }
    saveGame(this.state);
    this.app.destroy(true);
  }
}