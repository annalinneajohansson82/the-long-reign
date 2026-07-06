import { Graphics, Container } from 'pixi.js';
import type { Grid } from '../entities/grid';

const TILE_SIZE = 32;
const GRID_COLOR = 0x2a2a4e;
const ALT_GRID_COLOR = 0x252545;

export function renderGrid(container: Container, grid: Grid): void {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      const g = new Graphics();
      const color = (x + y) % 2 === 0 ? GRID_COLOR : ALT_GRID_COLOR;
      g.rect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      g.fill(color);
      container.addChild(g);
    }
  }
}

export function renderTrees(
  container: Container,
  grid: Grid,
  _saplings: Array<{ x: number; y: number; growthTimer: number }>
): void {
  // Saplings rendered by grid tile state

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      const tile = grid[x][y];
      if (tile.type === 'tree') {
        const g = new Graphics();
        const px = x * TILE_SIZE;
        const py = y * TILE_SIZE;
        // Trunk
        g.rect(px + 12, py + 16, 8, 16);
        g.fill(0x5c4033);
        // Canopy
        g.circle(px + 16, py + 12, 10);
        g.fill(0x2d8a2d);
        container.addChild(g);
      } else if (tile.type === 'sapling') {
        const g = new Graphics();
        const px = x * TILE_SIZE;
        const py = y * TILE_SIZE;
        // Small sapling
        g.rect(px + 14, py + 24, 4, 8);
        g.fill(0x5c4033);
        g.circle(px + 16, py + 22, 5);
        g.fill(0x4caf4c);
        container.addChild(g);
      }
    }
  }
}

export function renderBuildings(
  container: Container,
  buildings: import('../entities/building').Building[]
): void {
  for (const building of buildings) {
    const g = new Graphics();
    const px = building.x * TILE_SIZE;
    const py = building.y * TILE_SIZE;

    switch (building.type) {
      case 'townHall': {
        // Size grows with tier
        const size = 20 + building.tier * 4;
        const t = building.tier;
        g.rect(px + (32 - size) / 2, py + (32 - size) / 2, size, size);
        if (t <= 2) g.fill(0x8b4513);       // wood
        else if (t <= 4) g.fill(0x696969);  // stone
        else g.fill(0xb8860b);               // grand
        // Roof
        g.poly([
          px + 16 - t * 2, py + 16 - t * 2,
          px + 16 + t * 2, py + 16 - t * 2,
          px + 16, py + 8 - t,
        ]);
        g.fill(0xcd5c5c);
        break;
      }
      case 'house': {
        const h = building.tier;
        const w = 24 + h * 4;
        const hh = 20 + h * 6;
        g.rect(px + (32 - w) / 2, py + (32 - hh), w, hh);
        g.fill(0xdeb887);
        // Roof
        g.poly([
          px + (32 - w) / 2 - 2, py + (32 - hh),
          px + (32 + w) / 2 + 2, py + (32 - hh),
          px + 16, py + (32 - hh) - 8 - h * 2,
        ]);
        g.fill(0xa0522d);

        // Tier 2 extras (visual variants)
        if (h >= 2) {
          const variant = building.visualVariant;
          if (variant === 0) {
            // Bench
            g.rect(px + 18, py + 28, 10, 4);
            g.fill(0x8b4513);
          } else if (variant === 1) {
            // Second story window
            g.rect(px + 12, py + 8, 8, 8);
            g.fill(0x87ceeb);
          } else {
            // Fence
            for (let i = 0; i < 3; i++) {
              g.rect(px + 6 + i * 8, py + 28, 4, 8);
              g.fill(0x8b4513);
            }
          }
        }
        break;
      }
      case 'stockpile': {
        g.rect(px + 2, py + 4, 28, 24);
        g.fill(0x8b4513);
        // Open top
        g.rect(px + 2, py + 4, 28, 4);
        g.fill(0xa0522d);
        break;
      }
      case 'forester': {
        g.rect(px + 4, py + 6, 24, 20);
        g.fill(0x556b2f);
        // Roof
        g.poly([px + 2, py + 6, px + 30, py + 6, px + 16, py - 2]);
        g.fill(0x2e7d32);
        break;
      }
    }

    container.addChild(g);
  }
}

export function renderVillagers(
  container: Container,
  villagers: import('../entities/villager').Villager[]
): void {
  for (const villager of villagers) {
    const g = new Graphics();
    const px = villager.x * TILE_SIZE;
    const py = villager.y * TILE_SIZE;

    // Body
    g.circle(px + 16, py + 16, 5);
    g.fill(0x87ceeb);

    // Head
    g.circle(px + 16, py + 10, 3);
    g.fill(0xffdbac);

    if (villager.state === 'gathering') {
      // Bending pose
      g.circle(px + 16, py + 18, 4);
      g.fill(0x90ee90);
    }

    container.addChild(g);
  }
}
