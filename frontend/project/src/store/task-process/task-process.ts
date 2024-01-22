import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constant';
import { TaskProcess } from '../../types/state';
import { fetchTaskDeleteAction, fetchTasksAction } from '../api-actions';

const initialState: TaskProcess = {
  tasks: [],
  isTasksDataLoading: false
};

export const taskProcess = createSlice({
  name: NameSpace.Task,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchTasksAction.pending, (state) => {
      state.isTasksDataLoading = true;
    })
    .addCase(fetchTasksAction.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.isTasksDataLoading = false;
    })
    .addCase(fetchTasksAction.rejected, (state) => {
      state.isTasksDataLoading = false;
    });
  }
});
export const {} = taskProcess.actions;
