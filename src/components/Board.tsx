import React from 'react';
import {
  getBoard,
  getCurrentPlayer,
  getWinner,
  setWinner,
  togglePlayer,
  updateBoard,
} from '../store/game';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import calculateWinner from '../utils/winner';
import Square from './Square';

const Board = () => {
  const dispatch = useAppDispatch();

  const board = useAppSelector(getBoard);
  const currentPlayer = useAppSelector(getCurrentPlayer);
  const winner = useAppSelector(getWinner);

  const handleClick = (idx: number) => {
    if (board[idx] || winner) return;

    const newBoard = [...board];
    newBoard[idx] = currentPlayer;

    dispatch(updateBoard(newBoard));

    const _winner = calculateWinner(newBoard);
    if (_winner) {
      dispatch(setWinner(_winner));
    } else {
      dispatch(togglePlayer());
    }
  };

  return (
    <div className="board">
      {board.map((value, idx) => (
        <Square {...{ value }} {...{ idx }} onClick={handleClick} key={idx} />
      ))}
    </div>
  );
};

export default Board;
