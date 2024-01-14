import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PhotoListResponse } from 'apis/images';

export interface ImageState {
  images: PhotoListResponse[];
}

const initialState: ImageState = {
  images: [],
};

export const ImageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<PhotoListResponse[]>) => {
      state.images = action.payload;
    },
    clearImages: state => {
      state.images = [];
    },
  },
});

export const { setImages, clearImages } = ImageSlice.actions;

export default ImageSlice.reducer;
