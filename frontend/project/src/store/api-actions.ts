import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { APIRoute } from '../constant';
import { Task } from '../types/task-data';

export const createAction = createAsyncThunk<Task, Task, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('task/add', async (newTask, {dispatch, extra: api}) => {
  const {data} = await api.post<Task>(APIRoute.Add, newTask);
  return data;
});

 export const fetchTasksAction = createAsyncThunk<Task[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('task/fetchTasks', async (_arg, {dispatch, extra: api}) => {
  const {data} = await api.get<Task[]>(APIRoute.List);
  return data;
});

export const fetchTaskUpdateAction = createAsyncThunk<Task, Task, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('task/fetchTaskUpdate', async (task, {dispatch, extra: api}) => {
  const {data} = await api.patch<Task>(`${APIRoute.List}/${task.id}`, task);
  return data;
});

export const fetchTaskDeleteAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('task/fetchTaskDelete',
  async (id, {dispatch, extra: api}) => {
    await api.delete(`${APIRoute.List}/${id}`);
  },
);