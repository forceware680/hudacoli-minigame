
import React from 'react';

export const PlayerIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g>
      <circle cx="50" cy="50" r="45" fill="#06b6d4" stroke="#e0f2fe" strokeWidth="5"/>
      <circle cx="40" cy="40" r="8" fill="white"/>
      <circle cx="60" cy="40" r="8" fill="white"/>
      <path d="M 35 65 Q 50 75 65 65" stroke="white" strokeWidth="5" fill="none"/>
    </g>
  </svg>
);

export const NpcIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g>
      <circle cx="50" cy="50" r="45" fill="#f43f5e" stroke="#fecdd3" strokeWidth="5"/>
      <circle cx="40" cy="40" r="8" fill="white"/>
      <circle cx="60" cy="40" r="8" fill="white"/>
      <path d="M 30 60 C 40 70, 60 70, 70 60" stroke="white" strokeWidth="5" fill="none" />
    </g>
  </svg>
);

export const GoalIcon: React.FC = () => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
        <path d="M20,10 L80,10 L80,30 L70,30 L70,20 L30,20 L30,70 L60,70 L60,80 L20,80z" fill="#facc15" />
        <path d="M70,40 L90,60 L70,80z" fill="#facc15" />
        <text x="50" y="60" fontFamily="Verdana" fontSize="20" fill="#fef08a" textAnchor="middle" dominantBaseline="middle">GOAL</text>
    </svg>
);
