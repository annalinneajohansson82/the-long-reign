import type { Grid } from '../entities/grid';
import type { Building, BuildingType } from '../entities/building';
import type { Villager } from '../entities/villager';
import { BUILDING_DEFINITIONS, HOUSE_CAP, VISUAL_VARIANT_COUNT } from '../entities/building';

// ─── Game State ──────────────────────────────────────────────────────────

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

// ─── Actions ─────────────────────────────────────────────────────────────

export type GameAction =
  | { type: 'INIT_GAME' }
  | { type: 'START_PLACING'; buildingType: BuildingType }
  | { type: 'CANCEL_PLACING' }
  | { type: 'PLACE_BUILDING'; x: number; y: number }
  | { type: 'UPGRADE_BUILDING'; buildingId: string }
  | { type: 'GATHER'; x: number; y: number }
  | { type: 'SELECT_BUILDING'; buildingId: string | null }
  | { type: 'TICK' }
  | { type: 'SAVE' }
  | { type: 'LOAD' };

// ─── Constants ───────────────────────────────────────────────────────────

const GATHER_ANIM_DURATION = 60;
const SAPLING_GROWTH_TIME = 1800;
const FORESTER_INTERVAL = 1800;
const FORESTER_RADIUS = 5;

// ─── Reducer ─────────────────────────────────────────────────────────────

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

      // Town hall placement
      if (buildingType === 'townHall' && state.phase === 'placingTownHall') {
        const newBuilding: Building = {
          id: `building-${state.gameTime}`,
          type: 'townHall',
          tier: 1,
          visualVariant: 0,
          x,
          y,
        };
        const newGrid = gridWithOccupied(state.grid, x, y, newBuilding.id);
        return {
          ...state,
          phase: 'playing',
          grid: newGrid,
          buildings: [...state.buildings, newBuilding],
          isPlacing: false,
          selectedBuildingType: null,
          wood: state.wood - def.baseCost,
        };
      }

      // House cap check
      if (buildingType === 'house' && state.houseCount >= state.houseCap) return state;
      if (state.wood < def.baseCost) return state;

      const newBuilding: Building = {
        id: `building-${state.gameTime}`,
        type: buildingType,
        tier: 1,
        visualVariant: 0,
        x,
        y,
      };

      return {
        ...state,
        grid: gridWithOccupied(state.grid, x, y, newBuilding.id),
        buildings: [...state.buildings, newBuilding],
        wood: state.wood - def.baseCost,
        houseCount: buildingType === 'house' ? state.houseCount + 1 : state.houseCount,
        foresterPlaced: buildingType === 'forester' || state.foresterPlaced,
        isPlacing: false,
        selectedBuildingType: null,
      };
    }

    case 'UPGRADE_BUILDING': {
      const building = state.buildings.find((b) => b.id === action.buildingId);
      if (!building) return state;

      const def = BUILDING_DEFINITIONS.find((b) => b.type === building.type);
      if (!def || building.tier >= def.maxTier) return state;

      const cost = def.upgradeCost[building.tier];
      if (cost === undefined || state.wood < cost) return state;

      const variant = Math.floor(Math.random() * VISUAL_VARIANT_COUNT);
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

      const idleVillager = state.villagers.find((v) => v.state === 'idle');
      if (!idleVillager) return state;

      const path = simplePath(Math.floor(idleVillager.x), Math.floor(idleVillager.y), x, y);

      return {
        ...state,
        villagers: state.villagers.map((v) =>
          v.id === idleVillager.id
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

      // Forester spawn
      if (state.foresterPlaced) {
        foresterTimer++;
        if (foresterTimer >= FORESTER_INTERVAL) {
          foresterTimer = 0;
          const forester = state.buildings.find((b) => b.type === 'forester');
          if (forester) {
            const spot = findEmptyTileNear(forester.x, forester.y, state.grid, FORESTER_RADIUS);
            if (spot) {
              const tile = newGrid[spot.x][spot.y];
              newGrid[spot.x][spot.y] = { ...tile, type: 'sapling', walkable: true };
              saplings.push({ x: spot.x, y: spot.y, growthTimer: SAPLING_GROWTH_TIME });
            }
          }
        }
      }

      // Sapling growth
      saplings = saplings
        .map((s) => ({ ...s, growthTimer: s.growthTimer - 1 }))
        .filter((s) => {
          if (s.growthTimer <= 0) {
            const tile = newGrid[s.x]?.[s.y];
            if (tile && tile.type === 'sapling') {
              newGrid[s.x][s.y] = { ...tile, type: 'tree' };
            }
            return false;
          }
          return true;
        });

      // Villager movement & gathering
      for (const v of newVillagers) {
        if (v.state === 'gathering') {
          if (v.animationTimer <= 0) {
            const tile = newGrid[v.targetX]?.[v.targetY];
            if (tile && (tile.type === 'tree' || tile.type === 'sapling')) {
              newGrid[v.targetX][v.targetY] = { ...tile, type: 'empty', walkable: true, occupiedBy: null };
              const room = state.stockpileCapacity - newWood;
              newWood += Math.min(room, 3);
            }
            v.state = 'idle';
            v.targetX = -1;
            v.targetY = -1;
            v.path = [];
            v.animationTimer = 0;
          } else {
            v.animationTimer--;
          }
        } else if (v.state === 'walking') {
          if (v.path.length > 0) {
            const [nx, ny] = v.path[0];
            v.path = v.path.slice(1);
            v.x = nx;
            v.y = ny;
          }
          if (v.path.length === 0) {
            v.state = 'gathering';
            v.animationTimer = GATHER_ANIM_DURATION;
          }
        }
      }

      return {
        ...state,
        grid: newGrid,
        villagers: newVillagers,
        wood: newWood,
        foresterTimer,
        saplings,
        gameTime: state.gameTime + 1,
      };
    }

    case 'SAVE': {
      try {
        localStorage.setItem('tlr-save', JSON.stringify(state));
      } catch {
        // quota exceeded
      }
      return state;
    }

    case 'LOAD': {
      try {
        const data = localStorage.getItem('tlr-save');
        if (data) return JSON.parse(data) as GameState;
      } catch {
        // corrupt save
      }
      return state;
    }

    default:
      return state;
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────

function gridClone(grid: Grid): Grid {
  return grid.map((col) => col.map((t) => ({ ...t })));
}

function gridWithOccupied(grid: Grid, x: number, y: number, id: string): Grid {
  const g = gridClone(grid);
  g[x][y] = { ...g[x][y], type: 'building', occupiedBy: id, walkable: false };
  return g;
}

function simplePath(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number
): [number, number][] {
  const path: [number, number][] = [];
  let cx = fromX;
  let cy = fromY;
  while (cx !== toX || cy !== toY) {
    if (cx < toX) cx++;
    else if (cx > toX) cx--;
    else if (cy < toY) cy++;
    else if (cy > toY) cy--;
    path.push([cx, cy]);
  }
  return path;
}

function findEmptyTileNear(
  cx: number,
  cy: number,
  grid: Grid,
  radius: number
): { x: number; y: number } | null {
  const empty: Array<{ x: number; y: number }> = [];
  for (let dx = -radius; dx <= radius; dx++) {
    for (let dy = -radius; dy <= radius; dy++) {
      const nx = cx + dx;
      const ny = cy + dy;
      const tile = grid[nx]?.[ny];
      if (tile && tile.type === 'empty') {
        empty.push({ x: nx, y: ny });
      }
    }
  }
  return empty.length > 0 ? empty[Math.floor(Math.random() * empty.length)] : null;
}
