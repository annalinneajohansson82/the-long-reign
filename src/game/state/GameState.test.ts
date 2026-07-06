import { describe, it, expect, beforeEach } from 'vitest';
import { gameReducer, type GameState } from './GameState';
import { createInitialState } from './initialState';

describe('gameReducer', () => {
  let state: GameState;

  beforeEach(() => {
    state = createInitialState();
  });

  it('should handle START_PLACING when affordable', () => {
    state = { ...state, wood: 20, isPlacing: false };
    const next = gameReducer(state, { type: 'START_PLACING', buildingType: 'house' });
    expect(next.isPlacing).toBe(true);
    expect(next.selectedBuildingType).toBe('house');
  });

  it('should reject START_PLACING when unaffordable', () => {
    state = { ...state, wood: 0 };
    const next = gameReducer(state, { type: 'START_PLACING', buildingType: 'house' });
    expect(next.isPlacing).toBe(false);
  });

  it('should handle CANCEL_PLACING', () => {
    state = { ...state, isPlacing: true, selectedBuildingType: 'house' };
    const next = gameReducer(state, { type: 'CANCEL_PLACING' });
    expect(next.isPlacing).toBe(false);
    expect(next.selectedBuildingType).toBeNull();
  });

  it('should place the first town hall and transition to playing phase', () => {
    // Find an empty tile
    const emptyX = 10, emptyY = 10;
    state = {
      ...state,
      selectedBuildingType: 'townHall',
      isPlacing: true,
      wood: 0,
      phase: 'placingTownHall',
    };
    const next = gameReducer(state, { type: 'PLACE_BUILDING', x: emptyX, y: emptyY });
    expect(next.phase).toBe('playing');
    expect(next.buildings).toHaveLength(1);
    expect(next.buildings[0].type).toBe('townHall');
    expect(next.grid[emptyX][emptyY].type).toBe('building');
  });

  it('should handle UPGRADE_BUILDING', () => {
    state = {
      ...state,
      phase: 'playing',
      wood: 100,
      buildings: [
        { id: 'b-1', type: 'townHall', tier: 1, visualVariant: 0, x: 15, y: 10 },
      ],
    };
    const next = gameReducer(state, {
      type: 'UPGRADE_BUILDING',
      buildingId: 'b-1',
      variantSeed: 0,
    });
    expect(next.buildings[0].tier).toBe(2);
    expect(next.wood).toBe(100 - 50); // 50 cost for T1→T2
    expect(next.townHallTier).toBe(2);
    expect(next.houseCap).toBe(4);
  });

  it('should upgrade house and apply visual variant', () => {
    state = {
      ...state,
      phase: 'playing',
      wood: 50,
      buildings: [
        { id: 'h-1', type: 'house', tier: 1, visualVariant: 0, x: 10, y: 10 },
      ],
    };
    const next = gameReducer(state, {
      type: 'UPGRADE_BUILDING',
      buildingId: 'h-1',
      variantSeed: 2,
    });
    expect(next.buildings[0].tier).toBe(2);
    expect(next.buildings[0].visualVariant).toBe(2 % 3); // 2
  });

  it('should not upgrade beyond max tier', () => {
    state = {
      ...state,
      phase: 'playing',
      wood: 999,
      buildings: [
        { id: 's-1', type: 'stockpile', tier: 1, visualVariant: 0, x: 5, y: 5 },
      ],
    };
    const next = gameReducer(state, {
      type: 'UPGRADE_BUILDING',
      buildingId: 's-1',
      variantSeed: 0,
    });
    expect(next.buildings[0].tier).toBe(1); // stockpile maxTier = 1
  });
});