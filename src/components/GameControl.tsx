import React from 'react';
import toast from 'react-hot-toast';
import { resetGame } from '../store/game';
import { useAppDispatch } from '../store/hooks';
import { toggleShowHistory } from '../store/ui';
import Button from './Button';

const GameControl = () => {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(resetGame());
    toast.success('Game has been rest!');
  };

  const handleShowHistory = () => dispatch(toggleShowHistory());

  return (
    <div className="game-control">
      <Button onClick={handleReset}>Reset Game</Button>
      <Button onClick={handleShowHistory}>Action History</Button>
    </div>
  );
};

export default GameControl;
