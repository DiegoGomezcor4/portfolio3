import React, { useState, useEffect, useCallback } from 'react';
import { GameOver } from './GameOver';
import { useInterval } from '../hooks/useInterval';
import { Trophy, Play } from 'lucide-react';

type Position = {
  x: number;
  y: number;
};

const GRID_SIZE = 20;
const CELL_SIZE = 25;
const INITIAL_SPEED = 150;
const SPEED_INCREASE = 5;

const initialSnake = [
  { x: 10, y: 10 },
  { x: 10, y: 11 },
];

const createFood = (snake: Position[]): Position => {
  while (true) {
    const food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    if (!snake.some(segment => segment.x === food.x && segment.y === food.y)) {
      return food;
    }
  }
};

export const Game: React.FC = () => {
  const [snake, setSnake] = useState<Position[]>(initialSnake);
  const [food, setFood] = useState<Position>(createFood(initialSnake));
  const [direction, setDirection] = useState<string>('UP');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(INITIAL_SPEED);

  const moveSnake = useCallback(() => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case 'UP':
        head.y -= 1;
        break;
      case 'DOWN':
        head.y += 1;
        break;
      case 'LEFT':
        head.x -= 1;
        break;
      case 'RIGHT':
        head.x += 1;
        break;
    }

    // Check collision with walls
    if (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE
    ) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    // Check collision with self
    if (
      newSnake.some(segment => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    newSnake.unshift(head);

    // Check if food is eaten
    if (head.x === food.x && head.y === food.y) {
      setFood(createFood(newSnake));
      setScore(prev => {
        const newScore = prev + 10;
        if (newScore > highScore) {
          setHighScore(newScore);
        }
        return newScore;
      });
      setSpeed(prev => Math.max(prev - SPEED_INCREASE, 50));
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, direction, food, highScore]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, isPlaying]);

  useInterval(
    () => {
      moveSnake();
    },
    isPlaying ? speed : null
  );

  const startGame = () => {
    setSnake(initialSnake);
    setFood(createFood(initialSnake));
    setDirection('UP');
    setScore(0);
    setSpeed(INITIAL_SPEED);
    setGameOver(false);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-white">
            <Trophy className="w-6 h-6" />
            <span className="text-xl font-semibold">Score: {score}</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <span className="text-xl font-semibold">Best: {highScore}</span>
          </div>
        </div>

        <div
          className="relative bg-black/20 backdrop-blur-sm rounded-lg"
          style={{
            width: GRID_SIZE * CELL_SIZE,
            height: GRID_SIZE * CELL_SIZE,
          }}
        >
          {snake.map((segment, index) => (
            <div
              key={index}
              className="absolute bg-white rounded-sm transition-all duration-100"
              style={{
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
                left: segment.x * CELL_SIZE,
                top: segment.y * CELL_SIZE,
                opacity: index === 0 ? 1 : 0.8 - index * 0.02,
              }}
            />
          ))}
          <div
            className="absolute bg-red-500 rounded-full transition-all duration-200"
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: food.x * CELL_SIZE,
              top: food.y * CELL_SIZE,
            }}
          />
        </div>

        {!isPlaying && (
          <button
            onClick={startGame}
            className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-indigo-600 hover:to-purple-600 transition-all duration-200"
          >
            <Play className="w-5 h-5" />
            {gameOver ? 'Play Again' : 'Start Game'}
          </button>
        )}

        {gameOver && <GameOver score={score} />}

        <div className="mt-4 text-white/80 text-center">
          <p>Use arrow keys to control the snake</p>
        </div>
      </div>
    </div>
  );
};