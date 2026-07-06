import type { Grid } from '../entities/grid';
import type { Building, BuildingType } from '../entities/building';
import type { Villager } from '../entities/villager';
import { BUILDING_DEFINITIONS, HOUSE_CAP, VISUAL_VARIANT_COUNT } from '../entities/building';

export interface GameState {
  phase: 'placingTownHall' | 'playing';
  grid: Grid;
  buildings: Building[];
  villagers: Villager[];
  wood: number;
  stockpileCapacity: number;
  townHallTier: number;
  houseCount: number;
  houseCap: number;
  foresterTimer: number;
  foresterPlaced: boolean;
  isPlacing: boolean;
  selectedBuildingType: BuildingType | null;
  gameTime: number;
  selectedBuildingId: string | null;
  saplings: Array<{ x: number; y: number; growthTimer: number }>;
}

export type GameAction =
  | { type: 'INIT_GAME' }
  | { type: 'START_PLACING'; buildingType: BuildingType }
  | { type: 'CANCEL_PLACING' }
  | { type: 'PLACE_BUILDING'; x: number; y: number }
  | { type: 'UPGRADE_BUILDING'; buildingId: string; variantSeed: number }
  | { type: 'GATHER'; x: number; y: number }
  | { type: 'SELECT_BUILDING'; buildingId: string | null }
  | { type: 'TICK'; foresterPick: number }
  | { type: 'SAVE' }
  | { type: 'LOAD' };

const GATHER_ANIM_DURATION = 60;
const SAPLING_GROWTH_TIME = 1800;
const FORESTER_INTERVAL = 1800;
const FORESTER_RADIUS = 5;

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_PLACING': {
      const def = BUILDING_DEFINITIONS.find((b) => b.type === action.buildingType);
      if (!def) return state;
      if (state.wood < def.baseCost) return state;
      return { ...state, isPlacing: true, selectedBuildingType: action.buildingType };
    }

    case 'CANCEL_PLACING':
      return { ...state, isPlacing: false, selectedBuildingType: null };

    case 'PLACE_BUILDING': {
      const { x, y } = action;
      const tile = state.grid[x]?.[y];
      if (!tile || tile.type !== 'empty') return state;

      const buildingType = state.selectedBuildingType;
      if (!buildingType) return state;

      const def = BUILDING_DEFINITIONS.find((b) => b.type === buildingType);
      if (!def) return state;

      if (buildingType === 'townHall' && state.phase === 'placingTownHall') {
        const newBuilding: Building = {
          id: `building-${state.gameTime}`,
          type: 'townHall', tier: 1, visualVariant: 0, x, y,
        };
        return {
          ...state, phase: 'playing',
          grid: gridWithOccupied(state.grid, x, y, newBuilding.id),
          buildings: [...state.buildings, newBuilding],
          isPlacing: false, selectedBuildingType: null,
          wood: state.wood - def.baseCost,
        };
      }

      if (buildingType === 'house' && state.houseCount >= state.houseCap) return state;
      if (state.wood < def.baseCost) return state;

      const newBuilding: Building = {
        id: `building-${state.gameTime}`,
        type: buildingType, tier: 1, visualVariant: 0, x, y,
      };

      return {
        ...state,
        grid: gridWithOccupied(state.grid, x, y, newBuilding.id),
        buildings: [...state.buildings, newBuilding],
        wood: state.wood - def.baseCost,
        houseCount: buildingType === 'house' ? state.houseCount + 1 : state.houseCount,
        foresterPlaced: buildingType === 'forester' || state.foresterPlaced,
        isPlacing: false, selectedBuildingType: null,
      };
    }

    case 'UPGRADE_BUILDING': {
      const building = state.buildings.find((b) => b.id === action.buildingId);
      if (!building) return state;

      const def = BUILDING_DEFINITIONS.find((b) => b.type === building.type);
      if (!def || building.tier >= def.maxTier) return state;

      const cost = def.upgradeCost[building.tier];
      if (cost === undefined || state.wood < cost) return state;

      // Use provided seed instead of Math.random()
      const variant = action.variantSeed % VISUAL_VARIANT_COUNT;
      const upgraded: Building = { ...building, tier: building.tier + 1, visualVariant: variant };

      let newTownHallTier = state.townHallTier;
      let newHouseCap = state.houseCap;

      if (building.type === 'townHall') {
        newTownHallTier = building.tier + 1;
        newHouseCap = HOUSE_CAP[newTownHallTier] ?? state.houseCap;
      }

      return {
        ...state,
        buildings: state.buildings.map((b) => (b.id === action.buildingId ? upgraded : b)),
        wood: state.wood - cost,
        townHallTier: newTownHallTier,
        houseCap: newHouseCap,
      };
    }

    case 'GATHER': {
      const { x, y } = action;
      const tile = state.grid[x]?.[y];
      if (!tile || (tile.type !== 'tree' && tile.type !== 'sapling')) return state;

      // Find nearest idle villager
      let bestVillager: Villager | null = null;
      let bestDist = Infinity;
      for (const v of state.villagers) {
        if (v.state !== 'idle') continue;
        const dist = Math.abs(v.x - x) + Math.abs(v.y - y);
        if (dist < bestDist) { bestDist = dist; bestVillager = v; }
      }
      if (!bestVillager) return state;

      const path = findPath(state.grid, bestVillager.x, bestVillager.y, x, y);

      return {
        ...state,
        villagers: state.villagers.map((v) =>
          v.id === bestVillager!.id
            ? { ...v, state: 'walking' as const, targetX: x, targetY: y, path, animationTimer: 0 }
            : v
        ),
      };
    }

    case 'SELECT_BUILDING':
      return { ...state, selectedBuildingId: action.buildingId };

    case 'TICK': {
      let newWood = state.wood;
      let foresterTimer = state.foresterTimer;
      let saplings = [...state.saplings];
      const newGrid = gridClone(state.grid);
      const newVillagers = state.villagers.map((v) => ({ ...v }));

      if (state.foresterPlaced) {
        foresterTimer++;
        if (foresterTimer >= FORESTER_INTERVAL) {
          foresterTimer = 0;
          const forester = state.buildings.find((b) => b.type === 'forester');
          if (forester) {
            const empty = findEmptyTilesNear(forester.x, forester.y, state.grid, FORESTER_RADIUS);
            if (empty.length > 0) {
              const idx = action.foresterPick % empty.length;
              const spot = empty[idx];
              newGrid[spot.x][spot.y] = { ...newGrid[spot.x][spot.y], type: 'sapling', walkable: true };
              saplings.push({ x: spot.x, y: spot.y, growthTimer: SAPLING_GROWTH_TIME });
            }
          }
        }
      }

      saplings = saplings
        .map((s) => ({ ...s, growthTimer: s.growthTimer - 1 }))
        .filter((s) => {
          if (s.growthTimer <= 0) {
            const tile = newGrid[s.x]?.[s.y];
            if (tile?.type === 'sapling') newGrid[s.x][s.y] = { ...tile, type: 'tree' };
            return false;
          }
          return true;
        });

      for (const v of newVillagers) {
        if (v.state === 'gathering') {
          if (v.animationTimer <= 0) {
            const tile = newGrid[v.targetX]?.[v.targetY];
            if (tile && (tile.type === 'tree' || tile.type === 'sapling')) {
              newGrid[v.targetX][v.targetY] = { ...tile, type: 'empty', walkable: true, occupiedBy: null };
              const room = state.stockpileCapacity - newWood;
              newWood += Math.min(room, 3);
            }
            v.state = 'idle'; v.targetX = -1; v.targetY = -1; v.path = []; v.animationTimer = 0;
          } else {
            v.animationTimer--;
          }
        } else if (v.state === 'walking') {
          if (v.path.length > 0) {
            const [nx, ny] = v.path[0];
            v.path = v.path.slice(1);
            v.x = nx; v.y = ny;
          }
          if (v.path.length === 0) {
            v.state = 'gathering';
            v.animationTimer = GATHER_ANIM_DURATION;
          }
        }
      }

      return {
        ...state, grid: newGrid, villagers: newVillagers, wood: newWood,
        foresterTimer, saplings, gameTime: state.gameTime + 1,
      };
    }

    case 'SAVE':
    case 'LOAD':
      return state; // I/O handled outside the reducer in Game.dispatch

    default:
      return state;
  }
}

// ─── A* Pathfinding ──────────────────────────────────────────────────────

interface PathNode {
  x: number; y: number; g: number; f: number;
  parent: PathNode | null;
}

function findPath(grid: Grid, fromX: number, fromY: number, toX: number, toY: number): [number, number][] {
  const fx = Math.floor(fromX), fy = Math.floor(fromY);
  const tx = toX, ty = toY;
  if (fx === tx && fy === ty) return [];

  const cols = grid.length;
  const rows = grid[0].length;

  // Check bounds
  if (tx < 0 || tx >= cols || ty < 0 || ty >= rows) return [];
  if (fx < 0 || fx >= cols || fy < 0 || fy >= rows) return [];

  const closed = new Set<string>();
  const open: PathNode[] = [{ x: fx, y: fy, g: 0, f: heuristic(fx, fy, tx, ty), parent: null }];
  const key = (x: number, y: number) => `${x},${y}`;

  while (open.length > 0) {
    // Sort by f-score (cheapest first)
    open.sort((a, b) => a.f - b.f);
    const current = open.shift()!;
    const ck = key(current.x, current.y);

    if (current.x === tx && current.y === ty) {
      return reconstructPath(current);
    }

    closed.add(ck);

    for (const [dx, dy] of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
      const nx = current.x + dx, ny = current.y + dy;
      if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) continue;

      const tile = grid[nx][ny];
      // Allow walking onto tree/sapling tiles (the target)
      if (!tile.walkable && !(nx === tx && ny === ty)) continue;

      const nk = key(nx, ny);
      if (closed.has(nk)) continue;

      const g = current.g + 1;
      const existing = open.find((n) => n.x === nx && n.y === ny);
      if (existing) {
        if (g < existing.g) {
          existing.g = g;
          existing.f = g + heuristic(nx, ny, tx, ty);
          existing.parent = current;
        }
      } else {
        open.push({ x: nx, y: ny, g, f: g + heuristic(nx, ny, tx, ty), parent: current });
      }
    }
  }

  return []; // No path found
}

function heuristic(ax: number, ay: number, bx: number, by: number): number {
  return Math.abs(ax - bx) + Math.abs(ay - by);
}

function reconstructPath(node: PathNode): [number, number][] {
  const path: [number, number][] = [];
  let current: PathNode | null = node;
  while (current?.parent) {
    path.unshift([current.x, current.y]);
    current = current.parent;
  }
  return path;
}

// ─── Grid Helpers ────────────────────────────────────────────────────────

function gridClone(grid: Grid): Grid {
  return grid.map((col) => col.map((t) => ({ ...t })));
}

function gridWithOccupied(grid: Grid, x: number, y: number, id: string): Grid {
  const g = gridClone(grid);
  g[x][y] = { ...g[x][y], type: 'building', occupiedBy: id, walkable: false };
  return g;
}

function findEmptyTilesNear(cx: number, cy: number, grid: Grid, radius: number): Array<{ x: number; y: number }> {
  const empty: Array<{ x: number; y: number }> = [];
  for (let dx = -radius; dx <= radius; dx++) {
    for (let dy = -radius; dy <= radius; dy++) {
      const tile = grid[cx + dx]?.[cy + dy];
      if (tile?.type === 'empty') empty.push({ x: cx + dx, y: cy + dy });
    }
  }
  return empty;
}