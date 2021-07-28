import React from 'react';
import toast from 'react-hot-toast';
import { resetGame, useAppDispatch, toggleShowHistory } from '../store';
import { Button } from '.';

const GameControl = () => {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(resetGame());
    toast.success('Game has been rest!');
  };

  const handleShowHistory = () => dispatch(toggleShowHistory());

  return (
    <div className="game-control">
      <Button onClick={handleReset} variant="danger">
        Reset Game
      </Button>
      <Button onClick={handleShowHistory} variant="primary">
        Action History
      </Button>
    </div>
  );
};

export default GameControl;
