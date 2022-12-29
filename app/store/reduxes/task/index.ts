import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  Status,
  TaskType,
  updatePriorityActionType,
  updateStatusActionType,
  updateTaskActionType,
  updateTaskType,
} from 'types/task';

interface TaskStateI {
  tasks: TaskType[];
  counter: number;
  hasDrafted: boolean;
  hasChangesInNew: boolean;
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
  counter: 0,
  hasDrafted: false,
  hasChangesInNew: false,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    clearState: state => {
      state.tasks = [];
      state.counter = 0;
      state.hasDrafted = false;
    },
    refreshDraft: state => {
      let index = state.tasks.findIndex(item => item.id === state.counter - 1);
      state.tasks[index] = emptyTask(state.counter - 1);
      state.hasChangesInNew = false;
    },
    createTask: (state, action: PayloadAction<number>) => {
      if (!state.hasDrafted) {
        state.tasks = [...state.tasks, emptyTask(action.payload)];
        state.counter += 1;
        state.hasDrafted = true;
      }
    },
    addTask: (state, action: PayloadAction<number>) => {
      state.tasks.filter(i => i.id === action.payload)[0].isSubmitted = true;
      state.hasDrafted = false;
      state.hasChangesInNew = false;
    },
    updateTask: (state, action: PayloadAction<updateTaskType>) => {
      let index = state.tasks.findIndex(
        item => item.id === action.payload.task.id,
      );
      state.tasks[index] = action.payload.task;
    },
    updateDescriptionTaskById: (
      state,
      action: PayloadAction<updateTaskActionType>,
    ) => {
      state.tasks.filter(i => i.id === action.payload.id)[0].description =
        action.payload.data;
      state.hasChangesInNew = true;
    },
    updateTitleTaskById: (
      state,
      action: PayloadAction<updateTaskActionType>,
    ) => {
      state.tasks.filter(i => i.id === action.payload.id)[0].title =
        action.payload.data;
      state.hasChangesInNew = true;
    },
    updateStatusTaskById: (
      state,
      action: PayloadAction<updateStatusActionType>,
    ) => {
      state.tasks.filter(i => i.id === action.payload.id)[0].status =
        action.payload.data;
      state.hasChangesInNew = true;
    },
    updatePriorityTaskById: (
      state,
      action: PayloadAction<updatePriorityActionType>,
    ) => {
      state.tasks.filter(i => i.id === action.payload.id)[0].priority =
        action.payload.data;
      state.hasChangesInNew = true;
    },
    deleteById: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(item => item.id !== action.payload);
    },
  },
});

export const {
  clearState,
  addTask,
  createTask,
  deleteById,
  updateDescriptionTaskById,
  updatePriorityTaskById,
  updateStatusTaskById,
  updateTitleTaskById,
  updateTask,
  refreshDraft,
} = taskSlice.actions;

export default taskSlice.reducer;
