import {createSelector} from '@reduxjs/toolkit';
import {RootState} from 'app/store/rootReducer';

export const Tasks = {
  items: createSelector(
    (state: RootState) => state.task.tasks,
    value => value,
  ),
  hasDrafted: createSelector(
    (state: RootState) => state.task.hasDrafted,
    value => value,
  ),
};
