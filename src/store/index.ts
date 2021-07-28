export { default as store, persistor } from './configureStore';
export type { RootState, AppDispatch } from './configureStore';
export {
  default as gameReducer,
  historyAdded,
  addHistory,
  boardUpdated,
  gameReset,
  gameRestarted,
  getBoard,
  getCurrentPlayer,
  getHistory,
  getScore,
  getWinner,
  playerToggled,
  resetGame,
  restartGame,
  setWinner,
  togglePlayer,
  updateBoard,
  winnerSet,
} from './game';
export type { TWinner, TPlayer } from './game';
export { useAppDispatch, useAppSelector } from './hooks';
export { default as reducer } from './reducer';
export {
  default as uiReducer,
  showHistoryToggled,
  getShowHistory,
  toggleShowHistory,
} from './ui';
