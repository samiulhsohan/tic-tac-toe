import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

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

  const calculateWinner = (board: string[]) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
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
