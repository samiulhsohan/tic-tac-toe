import React from 'react';
import { resetGame, restartGame } from '../store/game';
import { useAppDispatch } from '../store/hooks';
import Button from './Button';

const GameControl = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="game-control">
      <Button onClick={() => dispatch(restartGame())}>Restart Game</Button>
      <Button onClick={() => dispatch(resetGame())}>Reset Game</Button>
    </div>
  );
};

export default GameControl;
