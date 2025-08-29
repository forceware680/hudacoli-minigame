
import React from 'react';

interface EndScreenProps {
  status: 'win' | 'lose';
  onRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ status, onRestart }) => {
  const isWin = status === 'win';
  const title = isWin ? 'You Did It!' : 'Oh No, Too Awkward!';
  const message = isWin
    ? "Huda Coli reached the goal! He can now enjoy some peaceful alone time."
    : "Huda Coli got too close and his social anxiety peaked! He's retreated for the day.";
  const buttonColor = isWin ? 'bg-green-500 hover:bg-green-600 focus:ring-green-300' : 'bg-rose-500 hover:bg-rose-600 focus:ring-rose-300';

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-8 rounded-lg shadow-2xl text-center">
      <h2 className={`text-3xl font-bold ${isWin ? 'text-green-400' : 'text-rose-400'} mb-4`}>
        {title}
      </h2>
      <p className="text-lg text-gray-300 mb-8 max-w-md">{message}</p>
      <button
        onClick={onRestart}
        className={`px-8 py-3 text-white font-bold rounded-lg focus:outline-none focus:ring-4 transform hover:scale-105 transition-transform duration-200 ${buttonColor}`}
      >
        Play Again
      </button>
    </div>
  );
};

export default EndScreen;
