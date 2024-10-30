import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todo/slice';

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']