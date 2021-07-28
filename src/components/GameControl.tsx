import React from 'react';
import { resetGame, restartGame } from '../store/game';
import { useAppDispatch } from '../store/hooks';

const GameControl = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="game-control">
      <button onClick={() => dispatch(restartGame())}>Restart Game</button>
      <button onClick={() => dispatch(resetGame())}>Reset Game</button>
    </div>
  );
};

export default GameControl;
