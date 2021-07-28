import React from 'react';
import { getCurrentPlayer, getScore, useAppSelector } from '../store';
import { GameScore, WinnerModal } from '.';

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
