import React from 'react';
import { getCurrentPlayer, getScore } from '../store/game';
import { useAppSelector } from '../store/hooks';
import GameScore from './GameScore';
import WinnerModal from './WinnerModal';

const GameInfo = () => {
  const currentPlayer = useAppSelector(getCurrentPlayer);
  const score = useAppSelector(getScore);

  return (
    <div className="game-info">
      <WinnerModal />

      <div className="game-info__score">
        <GameScore player="cross" {...{ currentPlayer }} score={score.cross} />
        <GameScore
          player="circle"
          {...{ currentPlayer }}
          score={score.circle}
        />
      </div>
    </div>
  );
};

export default GameInfo;
