// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export interface Page {
  current_page: number;
  links: { next?: string; previous?: string };
  page_size: number;
  total_count: number;
}

export interface WillogMeta {
  page?: Page;
  code?: number;
  systemCode?: string;
  userMessage?: string;
  systemMessage?: string;
}

export interface WillogResponse<T> {
  data: T;
  meta: WillogMeta;
}

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { 'Content-type': 'application/json' },
  timeout: 15000,
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error(error);

    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error(error);

    return Promise.reject(error);
  },
);

export { instance as axiosInstance };
