import React, { useState, useCallback } from 'react';
import { useKeyPress } from '../hooks/useKeyPress';
import { useGameLoop } from '../hooks/useGameLoop';
import Player from './Player';
import Npc from './Npc';
import { GoalIcon } from './icons';
import { GameObject } from '../types';
import {
  GAME_WIDTH,
  GAME_HEIGHT,
  PLAYER_SIZE,
  PLAYER_SPEED,
  NPC_SPEED,
  INITIAL_NPCS,
  COLLISION_DISTANCE,
  GOAL_POSITION,
  GOAL_SIZE
} from '../constants';

interface GameProps {
  onGameOver: () => void;
  onWin: () => void;
}

const Game: React.FC<GameProps> = ({ onGameOver, onWin }) => {
  const [playerPos, setPlayerPos] = useState({ x: 20, y: GAME_HEIGHT / 2 - PLAYER_SIZE / 2 });
  const [npcs, setNpcs] = useState<GameObject[]>(INITIAL_NPCS);
  const pressedKeys = useKeyPress();

  const updateGame = useCallback((deltaTime: number) => {
    const dt = deltaTime / 1000; // Convert delta time from ms to seconds

    // Calculate new player position
    let newPlayerX = playerPos.x;
    let newPlayerY = playerPos.y;
    const playerMoveDistance = PLAYER_SPEED * dt;
    if (pressedKeys.has('w') || pressedKeys.has('arrowup')) newPlayerY -= playerMoveDistance;
    if (pressedKeys.has('s') || pressedKeys.has('arrowdown')) newPlayerY += playerMoveDistance;
    if (pressedKeys.has('a') || pressedKeys.has('arrowleft')) newPlayerX -= playerMoveDistance;
    if (pressedKeys.has('d') || pressedKeys.has('arrowright')) newPlayerX += playerMoveDistance;

    // Boundary checks for player
    newPlayerX = Math.max(0, Math.min(newPlayerX, GAME_WIDTH - PLAYER_SIZE));
    newPlayerY = Math.max(0, Math.min(newPlayerY, GAME_HEIGHT - PLAYER_SIZE));
    
    // Calculate new NPC positions
    const newNpcs = npcs.map(npc => {
        let { x, y } = npc.position;
        let { dx, dy } = npc.velocity!;
        const npcMoveDistance = NPC_SPEED * dt;
        x += dx * npcMoveDistance;
        y += dy * npcMoveDistance;
        
        // Boundary checks for NPCs (bounce)
        if (x <= 0 || x >= GAME_WIDTH - npc.size) dx *= -1;
        if (y <= 0 || y >= GAME_HEIGHT - npc.size) dy *= -1;
        
        return { ...npc, position: { x, y }, velocity: { dx, dy } };
    });

    // Check for collisions and win condition using the calculated new positions
    const playerCenterX = newPlayerX + PLAYER_SIZE / 2;
    const playerCenterY = newPlayerY + PLAYER_SIZE / 2;

    for (const npc of newNpcs) {
      const npcCenterX = npc.position.x + npc.size / 2;
      const npcCenterY = npc.position.y + npc.size / 2;
      const distance = Math.sqrt(
        Math.pow(playerCenterX - npcCenterX, 2) + Math.pow(playerCenterY - npcCenterY, 2)
      );
      if (distance < COLLISION_DISTANCE) {
        onGameOver();
        return; // Stop further processing this frame
      }
    }
    
    const goalCenterX = GOAL_POSITION.x + GOAL_SIZE / 2;
    const goalCenterY = GOAL_POSITION.y + GOAL_SIZE / 2;
    const distanceToGoal = Math.sqrt(
        Math.pow(playerCenterX - goalCenterX, 2) + Math.pow(playerCenterY - goalCenterY, 2)
    );
    if (distanceToGoal < (PLAYER_SIZE + GOAL_SIZE) / 2) {
        onWin();
        return; // Stop further processing this frame
    }

    // If no game-ending condition was met, update the states
    setPlayerPos({ x: newPlayerX, y: newPlayerY });
    setNpcs(newNpcs);

  }, [pressedKeys, onGameOver, onWin, npcs, playerPos.x, playerPos.y]);

  useGameLoop(updateGame);

  return (
    <div
      className="relative bg-gray-800 rounded-lg shadow-inner overflow-hidden border-4 border-gray-700"
      style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
    >
      <Player position={playerPos} />
      {npcs.map(npc => (
        <Npc key={npc.id} npc={npc} />
      ))}
      <div
        className="absolute"
        style={{
            left: `${GOAL_POSITION.x}px`,
            top: `${GOAL_POSITION.y}px`,
            width: `${GOAL_SIZE}px`,
            height: `${GOAL_SIZE}px`
        }}>
            <GoalIcon />
      </div>
    </div>
  );
};

export default Game;
