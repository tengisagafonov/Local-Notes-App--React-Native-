export enum Status {
  Draft = 'Draft',
  Published = 'Published',
}

export type TaskType = {
  id: number;
  title: string;
  description: string;
  status: Status;
  priority: 0 | 1 | 2;
  isSubmitted: boolean;
};

export type updateTaskActionType = {
  id: number;
  data: string;
};

export type updateStatusActionType = {
  id: number;
  data: Status;
};

export type updatePriorityActionType = {
  id: number;
  data: 0 | 1 | 2;
};

export type updateTaskType = {
  id: number;
  task: TaskType;
};
