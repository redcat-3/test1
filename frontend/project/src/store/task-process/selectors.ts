import { NameSpace } from '../../constant';
import { State } from '../../types/state';
import { Task } from '../../types/task-data';

export const getTasksDataLoadingStatus = (state: State): boolean => state[NameSpace.Task].isTasksDataLoading;
export const getTasks = (state: State): Task[] => state[NameSpace.Task].tasks;