import type { GameState } from './GameState';
import type { Grid, GridTile } from '../entities/grid';

const COLS = 30;
const ROWS = 20;
const TREE_COUNT = 25;
const VILLAGER_COUNT = 10;

/** Generate a sparse tree distribution that clears space around center */
function generateTrees(): Array<{ x: number; y: number }> {
  const positions: Array<{ x: number; y: number }> = [];
  const occupied = new Set<string>();
  for (let i = 0; i < TREE_COUNT; i++) {
    let x: number, y: number, key: string;
    do {
      x = Math.floor(Math.random() * COLS);
      y = Math.floor(Math.random() * ROWS);
      key = `${x},${y}`;
    } while (
      occupied.has(key) ||
      (Math.abs(x - 15) < 3 && Math.abs(y - 10) < 3)
    );
    occupied.add(key);
    positions.push({ x, y });
  }
  return positions;
}

function buildGrid(): Grid {
  const trees = generateTrees();
  const treeSet = new Set(trees.map((t) => `${t.x},${t.y}`));
  const grid: Grid = [];

  for (let x = 0; x < COLS; x++) {
    grid[x] = [];
    for (let y = 0; y < ROWS; y++) {
      const isTree = treeSet.has(`${x},${y}`);
      grid[x][y] = {
        x,
        y,
        type: isTree ? 'tree' : 'empty',
        occupiedBy: null,
        walkable: true, // Trees are walkable — villagers must be able to path to them
      } as GridTile;
    }
  }
  return grid;
}

function generateVillagers() {
  const villagers = [];
  for (let i = 0; i < VILLAGER_COUNT; i++) {
    villagers.push({
      id: `villager-${i}`,
      x: 12 + Math.floor(Math.random() * 6),
      y: 8 + Math.floor(Math.random() * 4),
      state: 'idle' as const,
      targetX: -1,
      targetY: -1,
      path: [],
      animationTimer: 0,
    });
  }
  return villagers;
}

export function createInitialState(): GameState {
  return {
    phase: 'placingTownHall',
    grid: buildGrid(),
    buildings: [],
    villagers: generateVillagers(),
    wood: 5,
    stockpileCapacity: 50,
    townHallTier: 1,
    houseCount: 0,
    houseCap: 2,
    foresterTimer: 0,
    foresterPlaced: false,
    isPlacing: false,
    selectedBuildingType: null,
    gameTime: 0,
    selectedBuildingId: null,
    saplings: [],
  };
}