import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StateDisplaySliceState {
  appState: object;
}

const initialState: StateDisplaySliceState = {
  appState: {},
};

export const stateDisplaySlice = createSlice({
  name: 'stateDisplay',
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<object>) => {
      state.appState = action.payload;
    },
  },
});

export const { setAppState } = stateDisplaySlice.actions;
