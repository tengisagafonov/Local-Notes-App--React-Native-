import {combineReducers} from '@reduxjs/toolkit';
import postSlice from './reduxes/post';

export const rootReducer = combineReducers({
  post: postSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
