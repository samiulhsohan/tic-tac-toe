import React from 'react';
import { CircleIcon, CrossIcon } from '../icons';
import { TPlayer } from '../store';

interface SquareProps {
  value: TPlayer;
  idx: number;
  onClick: (idx: number) => void;
}

const Square = ({ value, idx, onClick }: SquareProps) => {
  return (
    <div className="square" onClick={() => onClick(idx)}>
      {value === 'cross' && (
        <CrossIcon size="6rem" color="var(--color-cross)" />
      )}
      {value === 'circle' && (
        <CircleIcon size="6rem" color="var(--color-circle)" />
      )}
    </div>
  );
};

export default Square;
