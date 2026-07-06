import type { Game } from '../game/Game';
import { useGameState } from './hooks/useGameState';
import { WoodCounter } from './components/WoodCounter';
import { Toolbar } from './components/Toolbar';
import { UpgradePrompt } from './components/UpgradePrompt';

interface AppProps {
  game: Game;
}

export function App({ game }: AppProps) {
  const state = useGameState(game);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
      <WoodCounter wood={state.wood} capacity={state.stockpileCapacity} />

      {state.phase === 'playing' && (
        <Toolbar
          wood={state.wood}
          houseCount={state.houseCount}
          houseCap={state.houseCap}
          townHallTier={state.townHallTier}
          isPlacing={state.isPlacing}
          selectedType={state.selectedBuildingType}
          onSelect={(type) => game.dispatch({ type: 'START_PLACING', buildingType: type })}
          onCancel={() => game.dispatch({ type: 'CANCEL_PLACING' })}
        />
      )}

      {state.selectedBuildingId && (
        <UpgradePrompt
          buildingId={state.selectedBuildingId}
          buildings={state.buildings}
          wood={state.wood}
          onUpgrade={(id) => game.dispatch({ type: 'UPGRADE_BUILDING', buildingId: id })}
          onClose={() => game.dispatch({ type: 'SELECT_BUILDING', buildingId: null })}
        />
      )}
    </div>
  );
}
