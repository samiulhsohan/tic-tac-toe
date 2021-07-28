import React from 'react';
import { useAppSelector } from '../store/hooks';
import { getHistory } from '../store/game';
import { getShowHistory } from '../store/ui';
import { useRef } from 'react';
import { useEffect } from 'react';

const History = () => {
  const showHistory = useAppSelector(getShowHistory);
  const history = useAppSelector(getHistory);

  const historyBox = useRef<any>(null);

  useEffect(() => {
    if (historyBox.current) {
      historyBox.current.scrollTop = historyBox.current.scrollHeight;
    }
  }, [history]);

  return (
    <div>
      {showHistory && (
        <div className="history" ref={historyBox}>
          <h1 className="history__title">Action History</h1>

          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'MOVE' && (
                <p>
                  {item.player} is placed on square {item.move}
                </p>
              )}

              {item.type === 'START' && <p>New game started</p>}

              {item.type === 'DRAW' && <p>Match ended as draw</p>}

              {item.type === 'WON' && (
                <p>
                  {item.player} won! Congratulations!{' '}
                  <span className="history__emoji">🎉</span>
                </p>
              )}

              {(item.type === 'DRAW' || item.type === 'WON') && <hr />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
