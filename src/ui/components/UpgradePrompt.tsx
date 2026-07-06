import type { Building } from '../../game/entities/building';
import { BUILDING_DEFINITIONS } from '../../game/entities/building';

interface UpgradePromptProps {
  buildingId: string;
  buildings: Building[];
  wood: number;
  onUpgrade: (id: string) => void;
  onClose: () => void;
}

export function UpgradePrompt({
  buildingId,
  buildings,
  wood,
  onUpgrade,
  onClose,
}: UpgradePromptProps) {
  const building = buildings.find((b) => b.id === buildingId);
  if (!building) return null;

  const def = BUILDING_DEFINITIONS.find((d) => d.type === building.type);
  if (!def) return null;

  const canUpgrade = building.tier < def.maxTier;
  const cost = canUpgrade ? def.upgradeCost[building.tier] : undefined;
  const canAfford = cost !== undefined && wood >= cost;

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '16px',
        background: 'rgba(0,0,0,0.85)',
        color: '#fff',
        fontFamily: 'monospace',
        borderRadius: '8px',
        border: '1px solid #444',
        pointerEvents: 'auto',
        minWidth: '200px',
      }}
    >
      <div style={{ fontSize: '14px', marginBottom: '4px' }}>
        {def.label}
      </div>
      <div style={{ fontSize: '12px', color: '#888', marginBottom: '12px' }}>
        Tier {building.tier} / {def.maxTier}
      </div>

      {canUpgrade ? (
        <button
          onClick={() => {
            onUpgrade(buildingId);
            onClose();
          }}
          disabled={!canAfford}
          style={{
            padding: '6px 12px',
            fontSize: '14px',
            fontFamily: 'monospace',
            background: canAfford ? '#4a4' : '#333',
            color: canAfford ? '#fff' : '#555',
            border: '1px solid ' + (canAfford ? '#6c6' : '#444'),
            borderRadius: '4px',
            cursor: canAfford ? 'pointer' : 'not-allowed',
            width: '100%',
          }}
        >
          Upgrade → Tier {building.tier + 1} ({cost} wood)
        </button>
      ) : (
        <div style={{ color: '#888', fontSize: '12px', marginBottom: '12px' }}>
          Maximum tier reached
        </div>
      )}

      <button
        onClick={onClose}
        style={{
          marginTop: '8px',
          padding: '4px 8px',
          fontSize: '12px',
          fontFamily: 'monospace',
          background: '#333',
          color: '#aaa',
          border: '1px solid #555',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Close
      </button>
    </div>
  );
}
