
import React, { useState, useCallback } from 'react';
import { GameState } from './types';
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import EndScreen from './components/EndScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [lastGameResult, setLastGameResult] = useState<'win' | 'lose' | null>(null);

  const handleStartGame = useCallback(() => {
    setGameState(GameState.Playing);
  }, []);

  const handleGameOver = useCallback(() => {
    setLastGameResult('lose');
    setGameState(GameState.End);
  }, []);

  const handleWin = useCallback(() => {
    setLastGameResult('win');
    setGameState(GameState.End);
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case GameState.Playing:
        return <Game onGameOver={handleGameOver} onWin={handleWin} />;
      case GameState.End:
        return <EndScreen status={lastGameResult!} onRestart={handleStartGame} />;
      case GameState.Start:
      default:
        return <StartScreen onStart={handleStartGame} />;
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200 font-sans p-4">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-cyan-400 tracking-wider mb-2">
          Huda Coli's Challenge
        </h1>
        <p className="text-center text-gray-400 mb-8">An Epic Tale of Social Navigation</p>
        {renderContent()}
      </div>
      <footer className="text-gray-500 text-sm mt-8">
        <p>Built by a world-class senior frontend React engineer.</p>
      </footer>
    </main>
  );
};

export default App;
