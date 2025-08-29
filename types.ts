
export interface Position {
  x: number;
  y: number;
}

export interface Velocity {
  dx: number;
  dy: number;
}

export interface GameObject {
  id: string;
  position: Position;
  size: number;
  velocity?: Velocity;
}

export enum GameState {
  Start,
  Playing,
  End,
}
