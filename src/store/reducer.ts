import { combineReducers } from 'redux';
import { gameReducer, uiReducer } from '.';

export default combineReducers({
  game: gameReducer,
  ui: uiReducer,
});
