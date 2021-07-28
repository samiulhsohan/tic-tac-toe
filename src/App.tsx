import React, { useState, useEffect, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { getWinner, restartGame } from './store/game';
import Board from './components/Board';
import GameInfo from './components/GameInfo';
import GameControl from './components/GameControl';
import History from './components/History';

(window as any).soundManager.setup({ debugMode: false });

const App = () => {
  const dispatch = useAppDispatch();

  const winner = useAppSelector(getWinner);

  const [loading, setLoading] = useState(true);

  // using ref to ignore useEffect's dependency linting warning
  const initiate = useRef(() => {});
  initiate.current = () => {
    if (winner) {
      dispatch(restartGame());
    }
    setLoading(false);
  };

  useEffect(() => {
    initiate.current();
  }, []);

  if (loading) {
    return null;
  } else {
    return (
      <div className="container">
        <div className="game">
          <GameInfo />
          <Board />
          <GameControl />
        </div>

        <History />

        <Toaster toastOptions={{ style: { fontSize: '1.6rem' } }} />
      </div>
    );
  }
};

export default App;
