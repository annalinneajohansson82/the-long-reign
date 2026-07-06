import type { Position } from './grid';

export type BuildingType = 'townHall' | 'house' | 'stockpile' | 'forester';

export interface Building {
  id: string;
  type: BuildingType;
  tier: number;
  visualVariant: number;
  x: number;
  y: number;
  position?: Position;
}

export interface BuildingDefinition {
  type: BuildingType;
  label: string;
  maxTier: number;
  baseCost: number;                            // Wood cost to place (tier 1)
  upgradeCost: Record<number, number>;         // tier → cost to upgrade to next
  unlocksAtTownHallTier: number;               // Town hall tier required to build
}

export const BUILDING_DEFINITIONS: BuildingDefinition[] = [
  {
    type: 'townHall',
    label: 'Town Hall',
    maxTier: 6,
    baseCost: 0,
    upgradeCost: { 1: 50, 2: 150, 3: 450, 4: 1350, 5: 4050 },
    unlocksAtTownHallTier: 1,
  },
  {
    type: 'house',
    label: 'House',
    maxTier: 2,
    baseCost: 10,
    upgradeCost: { 1: 30 },
    unlocksAtTownHallTier: 2,
  },
  {
    type: 'stockpile',
    label: 'Stockpile',
    maxTier: 1,
    baseCost: 5,
    upgradeCost: {},
    unlocksAtTownHallTier: 2,
  },
  {
    type: 'forester',
    label: "Forester's Hut",
    maxTier: 1,
    baseCost: 20,
    upgradeCost: {},
    unlocksAtTownHallTier: 2,
  },
];

/** House cap per town hall tier. Key = tier, value = max houses. */
export const HOUSE_CAP: Record<number, number> = {
  1: 2,
  2: 4,
  3: 6,
  4: 10,
  5: 15,
  6: 25,
};

export const STOCKPILE_CAPACITY = 50;

export const VISUAL_VARIANT_COUNT = 3;
