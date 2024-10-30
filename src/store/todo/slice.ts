import { createSlice } from '@reduxjs/toolkit';
import reducer from './reducer';
import { todoState } from './state'


const slice = createSlice({
  name: 'todo',
  initialState: todoState,
  reducers: { ...reducer },
});

export const todoAction = slice.actions;
export const todoSlice = slice.reducer;
