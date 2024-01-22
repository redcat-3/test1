export enum Status {
  Done = 'выполнено',
  InProgress = 'в процессе',
  Awaits = 'ожидает выполнения',
  Deleted = 'удалено'
};

export type Task = {
  id?: string;
  createdAt?: Date;
  title: string;
  description: string;
  status: Status;
}