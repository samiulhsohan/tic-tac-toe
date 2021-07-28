import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Confetti from 'react-confetti';
import { useWindowSize } from '../hooks';
import CircleIcon from '../icons/CircleIcon';
import CrossIcon from '../icons/CrossIcon';
import { getWinner, restartGame } from '../store/game';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Button from './Button';

const WinnerModal = () => {
  const dispatch = useAppDispatch();
  const [width, height] = useWindowSize();

  const winner = useAppSelector(getWinner);

  const getBackgroundColor = () => {
    if (winner === 'cross') return 'var(--color-cross)';
    if (winner === 'circle') return 'var(--color-circle)';
    return 'var(--color-draw)';
  };

  return (
    <div>
      {winner && winner !== 'draw' && (
        <Confetti width={width} height={height} gravity={0.12} numberOfPieces={250} />
      )}

      <CSSTransition
        in={!!winner}
        timeout={300}
        classNames="winner-animation"
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
    </div>
  );
};

export default WinnerModal;
