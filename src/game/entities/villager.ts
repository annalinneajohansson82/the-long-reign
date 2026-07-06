export type VillagerState = 'idle' | 'walking' | 'gathering';

export interface Villager {
  id: string;
  x: number;            // Current pixel position (sub-tile)
  y: number;
  state: VillagerState;
  targetX: number;      // Grid position they're walking to (if walking)
  targetY: number;
  path: [number, number][];  // Remaining path nodes
  animationTimer: number;    // Remaining gather animation frames
}
