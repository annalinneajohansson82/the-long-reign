// Grid coordinate
export interface Position {
  x: number;
  y: number;
}

// Tile types on the grid
export type TileType = 'empty' | 'tree' | 'sapling' | 'building' | 'stockpile';

export interface GridTile {
  x: number;
  y: number;
  type: TileType;
  occupiedBy: string | null; // Entity ID if occupied
  walkable: boolean;         // false for buildings, true for empty/tree
}

export type Grid = GridTile[][];
