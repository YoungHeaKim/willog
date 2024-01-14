// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosPromise, AxiosRequestConfig } from 'axios';

import { axiosInstance as axios, WillogResponse } from './axios';

const AGENT_URL = '/agent';

export interface PhotoListResponse {
  id: string;
  width: number;
  height: number;
  liked_by_user: boolean;
  description: string;
  updated_at: string;
  urls: {
    raw: string;
    full: string;
    thumb: string;
    regular: string;
  };
  alt_description: string;
}

const getPhotoList = (
  params?: {
    page?: number;
    per_page?: number;
  },
  config?: AxiosRequestConfig,
): AxiosPromise<PhotoListResponse[]> => {
  return axios.get(
    `/photos?client_id=AB7AJWBOWmKJcZpAQeth73paSpWI1pfgbMTkWEepv7A`,
    {
      params,
      ...config,
    },
  );
};

const getSearchPhotoList = (
  params?: {
    page?: number;
    per_page?: number;
    query?: string;
  },
  config?: AxiosRequestConfig,
): AxiosPromise<{
  results: PhotoListResponse[];
  total: number;
  total_pages: number;
}> => {
  return axios.get(
    `/search/photos?client_id=AB7AJWBOWmKJcZpAQeth73paSpWI1pfgbMTkWEepv7A`,
    {
      params,
      ...config,
    },
  );
};

const getPhoto = (
  params?: { id: string },
  config?: AxiosRequestConfig,
): AxiosPromise<PhotoListResponse[]> => {
  return axios.get(`/photos/${params?.id}`, {
    ...config,
  });
};

const imageService = {
  getPhotoList,
  getSearchPhotoList,
  getPhoto,
};

export default imageService;
