import React from 'react';
import { getCurrentPlayer, getWinner, getScore } from '../store/game';
import { useAppSelector } from '../store/hooks';

const GameInfo = () => {
  const currentPlayer = useAppSelector(getCurrentPlayer);
  const winner = useAppSelector(getWinner);
  const score = useAppSelector(getScore);

  return (
    <div>
      <h1>Winner is {winner}</h1>
      <h1>{currentPlayer}'s turn</h1>
      <h2>
        cross: {score.cross} || circle: {score.circle}
      </h2>
    </div>
  );
};

export default GameInfo;
