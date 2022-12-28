import {combineReducers} from '@reduxjs/toolkit';
import taskSlice from './reduxes/task';

export const rootReducer = combineReducers({
  task: taskSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
