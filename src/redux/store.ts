import { configureStore } from '@reduxjs/toolkit';
import { leaderSlice } from './slices/leaders-slice';
import { modalSlice } from './slices/modal-slice';

export const store = configureStore({
  reducer: {
    leadersData: leaderSlice.reducer,
    modalData: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
