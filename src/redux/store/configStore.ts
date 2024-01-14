import { combineReducers, createStore } from '@reduxjs/toolkit';
import images from '../slices/image';
import modal from '../slices/modal';

export const rootReducer = combineReducers({
  modal,
  images,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

export default rootReducer;
