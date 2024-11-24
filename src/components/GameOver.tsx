import React from 'react';
import { Frown } from 'lucide-react';

interface GameOverProps {
  score: number;
}

export const GameOver: React.FC<GameOverProps> = ({ score }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg">
      <div className="text-center text-white">
        <Frown className="w-16 h-16 mx-auto mb-4 text-red-500" />
        <h2 className="text-2xl font-bold mb-2">Game Over!</h2>
        <p className="text-xl">Final Score: {score}</p>
      </div>
    </div>
  );
};