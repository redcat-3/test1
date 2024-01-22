export const DECIMAL = 10;

export const TaskError = {
  TaskExists: 'Task with this email already exists',
  NotFound : 'Task is not found',
  InvalidData: 'Data is invalid',
  Delete : 'Task is not deleted',
} as const;

export const TaskMessages = {
  Add: 'Task successfully added',
  TaskFound: 'Task is found',
  TaskUpdated: 'Task is updated',
  List: 'Task list is found',
  Remove: "Task removed"
} as const;

export const TaskPath = {
  Main:'task',
  Id:'list/:id',
  List:'list',
  Add:'add',
} as const;
  