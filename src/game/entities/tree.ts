export interface Tree {
  id: string;
  x: number;
  y: number;
  isSapling: boolean;
  growthTimer: number; // ticks remaining until mature (0 = mature tree)
}
