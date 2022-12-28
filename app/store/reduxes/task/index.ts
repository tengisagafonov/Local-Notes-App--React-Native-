import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TaskType} from 'types/task';

interface TaskStateI {
  tasks: TaskType[];
}

const initialState: TaskStateI = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    clearState: state => {
      state.tasks = [];
    },
    addPost: (state, action: PayloadAction<TaskType>) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const {clearState, addPost} = taskSlice.actions;

export default taskSlice.reducer;
