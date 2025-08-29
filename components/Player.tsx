
import React from 'react';
import { Position } from '../types';
import { PlayerIcon } from './icons';
import { PLAYER_SIZE } from '../constants';

interface PlayerProps {
  position: Position;
}

const Player: React.FC<PlayerProps> = ({ position }) => (
  <div
    className="absolute transition-transform duration-75 ease-linear"
    style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
      width: `${PLAYER_SIZE}px`,
      height: `${PLAYER_SIZE}px`,
    }}
  >
    <PlayerIcon />
  </div>
);

export default Player;
