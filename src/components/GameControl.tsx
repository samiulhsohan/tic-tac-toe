import React from 'react';
import toast from 'react-hot-toast';
import { resetGame } from '../store/game';
import { useAppDispatch } from '../store/hooks';
import Button from './Button';

const GameControl = () => {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(resetGame());
    toast.success('Game has been rest!');
  };

  return (
    <div className="game-control">
      <Button onClick={handleReset}>Reset Game</Button>
    </div>
  );
};

export default GameControl;
