
import React from 'react';
import { GameObject } from '../types';
import { NpcIcon } from './icons';
import { NPC_SIZE } from '../constants';

interface NpcProps {
  npc: GameObject;
}

const Npc: React.FC<NpcProps> = ({ npc }) => (
  <div
    className="absolute"
    style={{
      left: `${npc.position.x}px`,
      top: `${npc.position.y}px`,
      width: `${NPC_SIZE}px`,
      height: `${NPC_SIZE}px`,
    }}
  >
    <NpcIcon />
  </div>
);

export default Npc;
