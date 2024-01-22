import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import browserHistory from './browser-history';
import { store } from './store';
import HistoryRouter from './components/history-router/history-router';
import { fetchTasksAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

store.dispatch(fetchTasksAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store = { store }>
    <HistoryRouter history={ browserHistory }>
      <ToastContainer />
      <App />
    </HistoryRouter>
  </Provider>,
);
