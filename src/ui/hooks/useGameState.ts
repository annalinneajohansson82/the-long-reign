import { useEffect, useState } from 'react';
import type { Game } from '../../game/Game';
import type { GameState } from '../../game/state/GameState';

export function useGameState(game: Game): GameState {
  const [state, setState] = useState<GameState>(game.getState());

  useEffect(() => {
    const unsub = game.subscribe(setState);
    return unsub;
  }, [game]);

  return state;
}
