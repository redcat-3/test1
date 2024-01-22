export const BACKEND_URL = 'http://localhost:4000/api';
export const REQUEST_TIMEOUT = 5000;
export const DEFAULT_NOT_FOUND_MESSAGE = 'К сожалению ничего не нашлось';

export enum AppRoute {
  Main = '/',
  Error404 = '/error404',
}

export enum APIRoute {
  List = '/task/list',
  Add = '/task/add',
}

export enum NameSpace {
  Task = 'task'
}

export const TitleLength = {
  Min: 1,
  Max: 15,
};

export const DescriptionLength = {
  Min: 10,
  Max: 140,
};

export const ErrorMessage = {
  Title: `Mинимальная длина ${TitleLength.Min} символ, максимальная длина ${TitleLength.Max} символов`,
  Description: `Mинимальная длина ${DescriptionLength.Min} символов, максимальная длина ${DescriptionLength.Max} символов`,
  Form: 'Необходимо заполнить все поля',
} as const
