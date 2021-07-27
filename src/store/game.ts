import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from './configureStore';

export type TPlayer = 'cross' | 'circle';
export type TWinner = null | TPlayer | 'draw';

interface IGame {
  board: TPlayer[];
  winner: TWinner;
  currentPlayer: TPlayer;
}

const initialState: IGame = {
  board: Array(9).fill(null),
  winner: null,
  currentPlayer: 'cross',
};

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    boardUpdated: (state: IGame, action: PayloadAction<TPlayer[]>) => {
      state.board = action.payload;
    },
    playerToggled: (state: IGame) => {
      state.currentPlayer =
        state.currentPlayer === 'cross' ? 'circle' : 'cross';
    },
    winnerSet: (state: IGame, action: PayloadAction<TWinner>) => {
      state.winner = action.payload;
    },
    gameReset: (state: IGame) => {
      state.board = initialState.board;
      state.currentPlayer = initialState.currentPlayer;
      state.winner = initialState.winner;
    },
  },
});

export const { boardUpdated, playerToggled, winnerSet, gameReset } =
  slice.actions;
export default slice.reducer;

// Action creators
export const updateBoard = (board: TPlayer[]) => boardUpdated(board);
export const togglePlayer = () => playerToggled();
export const setWinner = (winner: TWinner) => winnerSet(winner);
export const resetGame = () => gameReset();

// Selector
export const getBoard = createSelector(
  (state: RootState) => state.game.board,
  (board) => board
);

export const getCurrentPlayer = createSelector(
  (state: RootState) => state.game.currentPlayer,
  (currentPlayer) => currentPlayer
);

export const getWinner = createSelector(
  (state: RootState) => state.game.winner,
  (winner) => winner
);
