import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { calculateWinner } from './utils';
import { useAppSelector, useAppDispatch } from './store/hooks';
import {
  getBoard,
  getCurrentPlayer,
  togglePlayer,
  updateBoard,
  setWinner,
  getWinner,
  resetGame,
  getScore,
} from './store/game';

const App = () => {
  const dispatch = useAppDispatch();

  const board = useAppSelector(getBoard);
  const currentPlayer = useAppSelector(getCurrentPlayer);
  const winner = useAppSelector(getWinner);
  const score = useAppSelector(getScore);

  const handleClick = (idx: number) => {
    if (board[idx] || winner) return;

    const newBoard = [...board];
    newBoard[idx] = currentPlayer;

    dispatch(updateBoard(newBoard));
    dispatch(togglePlayer());
  };

  useEffect(() => {
    const winner = calculateWinner(board);

    if (winner) {
      dispatch(setWinner(winner));
    }
  }, [board, dispatch]);

  return (
    <div className="App">
      <h1>Winner is {winner}</h1>
      <h1>{currentPlayer}'s turn</h1>
      <h2>
        cross: {score.cross} || circle: {score.circle}
      </h2>

      {winner && (
        <button onClick={() => dispatch(resetGame())}>Reset game</button>
      )}

      <div className="board">
        {board.map((value, idx) => (
          <div className="square" key={idx} onClick={() => handleClick(idx)}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
