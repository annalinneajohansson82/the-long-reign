import type { GameState } from '../game/state/GameState';

const SAVE_KEY = 'tlr-save';

export function saveGame(state: GameState): void {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch {
    // Storage quota exceeded — silently fail
  }
}

export function loadGame(): GameState | null {
  try {
    const data = localStorage.getItem(SAVE_KEY);
    if (data) return JSON.parse(data) as GameState;
  } catch {
    // Corrupt or missing save
  }
  return null;
}

export function clearSave(): void {
  localStorage.removeItem(SAVE_KEY);
}
