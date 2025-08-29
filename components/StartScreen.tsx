
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => (
  <div className="flex flex-col items-center justify-center bg-gray-800 p-8 rounded-lg shadow-2xl text-center">
    <h2 className="text-3xl font-bold text-white mb-4">Welcome, Brave Adventurer!</h2>
    <p className="text-lg text-gray-300 mb-6 max-w-md">
      Huda Coli needs to get to the goal! Guide him through the crowded space. His social battery is low, so don't let him get too close to anyone!
    </p>
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-cyan-400 mb-2">Controls</h3>
      <p className="text-gray-400">Use <kbd className="font-sans px-2 py-1.5 text-sm font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">W</kbd> <kbd className="font-sans px-2 py-1.5 text-sm font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">A</kbd> <kbd className="font-sans px-2 py-1.5 text-sm font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">S</kbd> <kbd className="font-sans px-2 py-1.5 text-sm font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">D</kbd> or <span className="font-bold">Arrow Keys</span> to move.</p>
    </div>
    <button
      onClick={onStart}
      className="px-8 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 transform hover:scale-105 transition-transform duration-200"
    >
      Start Game
    </button>
  </div>
);

export default StartScreen;
