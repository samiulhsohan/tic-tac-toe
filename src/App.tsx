import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { calculateWinner } from './utils';

const App = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [crossTurn, setCrossTurn] = useState(true);
  const [winner, setWinner] = useState<null | string>(null);

  const handleClick = (idx: number) => {
    if (board[idx]) return;

    const sign = crossTurn ? 'cross' : 'circle';
    const newBoard = [...board];
    newBoard[idx] = sign;

    setBoard(newBoard);
    setCrossTurn(!crossTurn);
  };

  useEffect(() => {
    const winner = calculateWinner(board);

    if (winner) {
      setWinner(winner);
      setBoard(Array(9).fill(null));
      setCrossTurn(true);
    }
  }, [board]);

  return (
    <div className="App">
      <p>Winner is {winner}</p>
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
