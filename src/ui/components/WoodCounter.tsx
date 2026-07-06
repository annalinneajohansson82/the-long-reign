interface WoodCounterProps {
  wood: number;
  capacity: number;
}

export function WoodCounter({ wood, capacity }: WoodCounterProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '8px 16px',
        background: 'rgba(0,0,0,0.6)',
        color: '#fff',
        fontFamily: 'monospace',
        fontSize: '18px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <span style={{ color: '#8B4513' }}>🪵</span>
      <span>{wood}</span>
      <span style={{ color: '#666', fontSize: '14px' }}>/ {capacity}</span>
    </div>
  );
}
