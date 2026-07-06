import type { BuildingType } from '../../game/entities/building';
import { BUILDING_DEFINITIONS } from '../../game/entities/building';

interface ToolbarProps {
  wood: number;
  houseCount: number;
  houseCap: number;
  townHallTier: number;
  isPlacing: boolean;
  selectedType: BuildingType | null;
  onSelect: (type: BuildingType) => void;
  onCancel: () => void;
}

const BUILD_BUTTONS: Array<{ type: BuildingType; icon: string }> = [
  { type: 'house', icon: '🏠' },
  { type: 'stockpile', icon: '📦' },
  { type: 'forester', icon: '🌲' },
];

export function Toolbar({
  wood,
  houseCount,
  houseCap,
  townHallTier,
  isPlacing,
  selectedType,
  onSelect,
  onCancel,
}: ToolbarProps) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '8px 16px',
        background: 'rgba(0,0,0,0.6)',
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
        pointerEvents: 'auto',
      }}
    >
      {BUILD_BUTTONS.map(({ type, icon }) => {
        const def = BUILDING_DEFINITIONS.find((d) => d.type === type)!;
        const canAfford = wood >= def.baseCost;
        const isUnlocked = townHallTier >= def.unlocksAtTownHallTier;
        const isHouseCapped = type === 'house' && houseCount >= houseCap;
        const active = isPlacing && selectedType === type;

        return (
          <button
            key={type}
            onClick={() => (active ? onCancel() : onSelect(type))}
            disabled={!isUnlocked || !canAfford || isHouseCapped}
            title={
              !isUnlocked
                ? `Unlocks at town hall tier ${def.unlocksAtTownHallTier}`
                : isHouseCapped
                  ? `House cap reached (${houseCount}/${houseCap})`
                  : `${def.label} (${def.baseCost} wood)`
            }
            style={{
              padding: '8px 16px',
              fontSize: '16px',
              fontFamily: 'monospace',
              background: active ? '#4a4a8a' : isUnlocked && canAfford && !isHouseCapped ? '#333' : '#222',
              color: isUnlocked && canAfford && !isHouseCapped ? '#fff' : '#555',
              border: active ? '2px solid #6a6aaa' : '1px solid #444',
              borderRadius: '4px',
              cursor: isUnlocked && canAfford && !isHouseCapped ? 'pointer' : 'not-allowed',
              opacity: isUnlocked && canAfford && !isHouseCapped ? 1 : 0.5,
            }}
          >
            {icon} {def.label} ({def.baseCost})
          </button>
        );
      })}

      {isPlacing && (
        <button
          onClick={onCancel}
          style={{
            padding: '8px 16px',
            fontSize: '16px',
            fontFamily: 'monospace',
            background: '#8b0000',
            color: '#fff',
            border: '1px solid #cc0000',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          ✕ Cancel
        </button>
      )}
    </div>
  );
}
