import React from 'react';
import { CSSTransition } from 'react-transition-group';
import CircleIcon from '../icons/CircleIcon';
import CrossIcon from '../icons/CrossIcon';
import {
  getCurrentPlayer,
  getWinner,
  getScore,
  restartGame,
} from '../store/game';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Button from './Button';

const GameInfo = () => {
  const dispatch = useAppDispatch();

  const currentPlayer = useAppSelector(getCurrentPlayer);
  const winner = useAppSelector(getWinner);
  const score = useAppSelector(getScore);

  const getBackgroundColor = () => {
    if (winner === 'cross') return 'var(--color-cross)';
    if (winner === 'circle') return 'var(--color-circle)';
    return 'var(--color-draw)';
  };

  return (
    <div className="game-info">
      <CSSTransition
        in={!!winner}
        timeout={300}
        classNames="station-animation"
        unmountOnExit
      >
        <div className="game-info__winner">
          <div
            className="game-info__winner__info"
            style={{ backgroundColor: getBackgroundColor() }}
          >
            {winner === 'cross' && <CrossIcon size="3rem" />}
            {winner === 'circle' && <CircleIcon size="3rem" />}

            <p>{winner === 'draw' ? "It's a draw!" : 'Won!'}</p>

            <div className="game-info__winner__info__cta">
              <Button
                variant="secondary"
                onClick={() => dispatch(restartGame())}
              >
                Play Again
              </Button>
            </div>
          </div>
        </div>
      </CSSTransition>

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
