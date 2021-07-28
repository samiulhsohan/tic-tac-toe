import React from 'react';
import CircleIcon from '../icons/CircleIcon';
import CrossIcon from '../icons/CrossIcon';
import { TPlayer } from '../store/game';

interface SquareProps {
  value: TPlayer;
  idx: number;
  onClick: (idx: number) => void;
}

const Square = ({ value, idx, onClick }: SquareProps) => {
  return (
    <div className="square" onClick={() => onClick(idx)}>
      {value === 'cross' && <CrossIcon size="6rem" color="#ffb100" />}
      {value === 'circle' && <CircleIcon size="6rem" color="#00dea1" />}
    </div>
  );
};

export default Square;
