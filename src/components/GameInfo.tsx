import React from 'react';
import CircleIcon from '../icons/CircleIcon';
import CrossIcon from '../icons/CrossIcon';
import { getCurrentPlayer, getWinner, getScore } from '../store/game';
import { useAppSelector } from '../store/hooks';

const GameInfo = () => {
  const currentPlayer = useAppSelector(getCurrentPlayer);
  const winner = useAppSelector(getWinner);
  const score = useAppSelector(getScore);

  return (
    <div className="game-info">
      <div className="game-info__score">
        <div
          className={
            'game-info__score__player ' +
            (currentPlayer === 'cross'
              ? 'game-info__score__player-active-cross'
              : '')
          }
        >
          <CrossIcon color="#05f" size="2rem" />
          <p>{score.cross}</p>
        </div>
        <div
          className={
            'game-info__score__player ' +
            (currentPlayer === 'circle'
              ? 'game-info__score__player-active-circle'
              : '')
          }
        >
          <CircleIcon color="#05f" size="2rem" />
          <p>{score.circle}</p>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
