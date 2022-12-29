export enum Status {
  Draft = 'Draft',
  Published = 'Published',
}

export type TaskType = {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: 0 | 1 | 2;
};
