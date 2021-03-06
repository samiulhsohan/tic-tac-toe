import React from 'react';
import Sound from 'react-sound';
import { CSSTransition } from 'react-transition-group';
import Confetti from 'react-confetti';
import { useWindowSize } from '../hooks';
import { CircleIcon, CrossIcon } from '../icons';
import {
  getWinner,
  restartGame,
  useAppSelector,
  useAppDispatch,
} from '../store';
import { Button } from '.';

const WinnerModal = () => {
  const dispatch = useAppDispatch();
  const [width, height] = useWindowSize();

  const winner = useAppSelector(getWinner);

  return (
    <div>
      {winner && winner !== 'draw' && (
        <Confetti
          width={width}
          height={height}
          gravity={0.12}
          numberOfPieces={250}
        />
      )}

      <Sound
        url="/assets/win.mp3"
        playStatus={winner && winner !== 'draw' ? 'PLAYING' : 'STOPPED'}
      />

      <CSSTransition
        in={!!winner}
        timeout={300}
        classNames="winner-animation"
        unmountOnExit
      >
        <div className="game-info__winner">
          <div className="game-info__winner__info">
            {winner === 'cross' && <CrossIcon size="3rem" />}
            {winner === 'circle' && <CircleIcon size="3rem" />}

            {winner && <p>{winner === 'draw' ? "It's a draw!" : 'Won!'}</p>}

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
