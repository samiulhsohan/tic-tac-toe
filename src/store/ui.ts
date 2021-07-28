import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { RootState } from '.';

interface IUI {
  showHistory: boolean;
}

const initialState: IUI = {
  showHistory: false,
};

const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showHistoryToggled: (state: IUI) => {
      state.showHistory = !state.showHistory;
    },
  },
});

export const { showHistoryToggled } = slice.actions;
export default slice.reducer;

// Action creators
export const toggleShowHistory = () => showHistoryToggled();

// Selector
export const getShowHistory = createSelector(
  (state: RootState) => state.ui.showHistory,
  (showHistory) => showHistory
);
