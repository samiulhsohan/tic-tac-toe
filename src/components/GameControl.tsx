import React from 'react';
import { resetGame } from '../store/game';
import { useAppDispatch } from '../store/hooks';

const GameControl = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => {}}>Restart Game</button>
      <button onClick={() => dispatch(resetGame())}>Reset Game</button>
    </div>
  );
};

export default GameControl;
