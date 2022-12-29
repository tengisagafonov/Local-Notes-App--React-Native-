import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Status, TaskType} from 'types/task';

interface TaskStateI {
  tasks: TaskType[];
  hasDrafted: boolean;
}

const emptyTask = (id: number): TaskType => ({
  id: id,
  description: '',
  title: '',
  isSubmitted: false,
  status: Status.Draft,
  priority: 0,
});

const initialState: TaskStateI = {
  tasks: [],
  hasDrafted: false,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    clearState: state => {
      state.tasks = [];
    },
    createTask: (state, action: PayloadAction<number>) => {
      state.tasks = [...state.tasks, emptyTask(action.payload)];
      state.hasDrafted = true;
    },
    addTask: (state, action: PayloadAction<number>) => {
      state.tasks[action.payload - 1].isSubmitted = true;
      state.hasDrafted = false;
    },
    updateTaskById: (state, action: PayloadAction<any>) => {
      state.tasks[action.payload.id] = action.payload.task;
    },
    deleteById: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(item => item.id !== action.payload);
    },
  },
});

export const {clearState, addTask, createTask, deleteById} = taskSlice.actions;

export default taskSlice.reducer;
