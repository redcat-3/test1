import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace} from '../constant';
import { taskProcess } from './task-process/task-process';

export const rootReducer = combineReducers({
  [NameSpace.Task]: taskProcess.reducer
});
