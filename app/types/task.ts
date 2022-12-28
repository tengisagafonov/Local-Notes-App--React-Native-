export enum Status {
  Draft = 'Draft',
  Published = 'Published',
}

export type TaskType = {
  title: string;
  description: string;
  status: Status;
  priority: 0 | 1 | 2 | 3;
};
