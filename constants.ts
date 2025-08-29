import { GameObject } from './types';

export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 600;
export const PLAYER_SIZE = 30;
export const PLAYER_SPEED = 200; // pixels per second
export const NPC_SIZE = 32;
export const NPC_SPEED = 60; // pixels per second
export const GOAL_SIZE = 40;
export const COLLISION_DISTANCE = (PLAYER_SIZE + NPC_SIZE) / 2;

export const INITIAL_NPCS: GameObject[] = [
  {
    id: 'npc1',
    position: { x: 200, y: 100 },
    size: NPC_SIZE,
    velocity: { dx: 0, dy: 1 },
  },
  {
    id: 'npc2',
    position: { x: 600, y: 450 },
    size: NPC_SIZE,
    velocity: { dx: 0, dy: -1 },
  },
  {
    id: 'npc3',
    position: { x: 100, y: 300 },
    size: NPC_SIZE,
    velocity: { dx: 1, dy: 0 },
  },
  {
    id: 'npc4',
    position: { x: 700, y: 200 },
    size: NPC_SIZE,
    velocity: { dx: -1, dy: 0 },
  },
    {
    id: 'npc5',
    position: { x: 400, y: 500 },
    size: NPC_SIZE,
    velocity: { dx: 1.2, dy: 0 }, // This one is slightly faster
  },
];

export const GOAL_POSITION = { x: GAME_WIDTH - GOAL_SIZE - 20, y: GAME_HEIGHT / 2 - GOAL_SIZE / 2 };
