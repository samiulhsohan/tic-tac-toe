import React from 'react';
import CircleIcon from '../icons/CircleIcon';
import CrossIcon from '../icons/CrossIcon';
import { TPlayer } from '../store/game';

interface GameScoreProps {
  player: TPlayer;
  currentPlayer: string;
  score: number;
}

const GameScore = ({ player, currentPlayer, score }: GameScoreProps) => {
  return (
    <div
      className={
        'game-info__score__player ' +
        (player === currentPlayer
          ? `game-info__score__player-active-${player}`
          : '')
      }
    >
      {player === 'cross' && <CrossIcon color="#05f" size="2rem" />}
      {player === 'circle' && <CircleIcon color="#05f" size="2rem" />}
      <p>{score}</p>
    </div>
  );
};

export default GameScore;
