import React from 'react';
import toast from 'react-hot-toast';
import { resetGame, restartGame } from '../store/game';
import { useAppDispatch } from '../store/hooks';
import Button from './Button';

const GameControl = () => {
  const dispatch = useAppDispatch();

  const handleRestart = () => {
    dispatch(restartGame());
    toast.success('Game restarted!');
  };

  const handleReset = () => {
    dispatch(resetGame());
    toast.success('Game has been rest!');
  };

  return (
    <div className="game-control">
      <Button onClick={handleRestart}>Restart Game</Button>
      <Button onClick={handleReset}>Reset Game</Button>
    </div>
  );
};

export default GameControl;
