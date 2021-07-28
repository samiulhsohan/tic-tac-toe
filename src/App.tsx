import React, { useState, useEffect, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  useAppSelector,
  useAppDispatch,
  getWinner,
  restartGame,
  getShowHistory,
} from './store';
import { Board, GameInfo, GameControl, History } from './components';

(window as any).soundManager.setup({ debugMode: false });

const App = () => {
  const dispatch = useAppDispatch();

  const winner = useAppSelector(getWinner);
  const showHistory = useAppSelector(getShowHistory);

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
      <div>
        <div className="container">
          <div className="game">
            <GameInfo />
            <Board />
            <GameControl />
          </div>

          {showHistory && <History />}
        </div>

        <Toaster toastOptions={{ style: { fontSize: '1.6rem' } }} />
      </div>
    );
  }
};

export default App;
