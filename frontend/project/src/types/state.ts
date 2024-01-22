import {store} from '../store/index.js';
import { Task } from './task-data.js';

export type TaskProcess = {
  tasks: Task[];
  isTasksDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
