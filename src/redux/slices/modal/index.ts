import { ReactElement, ReactNode } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ConfirmInfo {
  visible?: boolean;
  title?: string;
  message: string | ReactElement;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}

export interface AlertInfo {
  visible?: boolean;
  title?: string;
  onCancel?: () => void;
  contents: ReactNode | string;
  subText?: string;
}

export interface FullImageInfo {
  visible?: boolean;
  imageList: string[];
  onCancel?: () => void;
  initialPage?: number;
}

export interface BottomSheetInfo {
  visible?: boolean;
  content: ReactNode;
  title: string;
}

export interface BottomModalInfo {
  visible?: boolean;
  title: string;
  content: ReactNode;
}

export interface BottomSelectorInfo {
  visible?: boolean;
  title: string;
  selectors: {
    title: string;
    onPress: () => void | Promise<void> | null;
  }[];
}

export interface BottomFilterInfo {
  visible?: boolean;
  title: string;
  selectors: {
    title: string;
    onPress: () => void | Promise<void> | null;
  }[];
  selected: string | null;
}

export interface ModalState {
  confirm: ConfirmInfo;
  alert: AlertInfo;
  fullImage: FullImageInfo;
  bottomSheet: BottomSheetInfo;
  bottomModal: BottomModalInfo;
  bottomSelector: BottomSelectorInfo;
  bottomFilter: BottomFilterInfo;
}

const initialState: ModalState = {
  confirm: {
    visible: false,
    message: '',
  },
  alert: {
    visible: false,
    contents: null,
  },
  fullImage: {
    visible: false,
    imageList: [],
  },
  bottomSheet: {
    visible: false,
    content: null,
    title: '',
  },
  bottomModal: {
    visible: false,
    title: '',
    content: null,
  },
  bottomSelector: {
    visible: false,
    title: '',
    selectors: [],
  },
  bottomFilter: {
    visible: false,
    title: '',
    selectors: [],
    selected: null,
  },
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showConfirm: (state, action: PayloadAction<ConfirmInfo>) => {
      state.confirm = { ...action.payload, visible: true };
    },
    dismissConfirm: state => {
      state.confirm = { visible: false, message: '' };
    },
    showAlert: (state, action: PayloadAction<AlertInfo>) => {
      state.alert = { ...action.payload, visible: true };
    },
    dismissAlert: state => {
      state.alert = {
        visible: false,
        contents: null,
        subText: undefined,
        title: undefined,
      };
    },
    showFullImage: (state, action: PayloadAction<FullImageInfo>) => {
      state.fullImage = { ...action.payload, visible: true };
    },
    dismissFullImage: state => {
      state.fullImage = { visible: false, imageList: [] };
    },
    showBottomSheet: (state, action: PayloadAction<BottomSheetInfo>) => {
      state.bottomSheet = {
        content: action.payload.content,
        title: action.payload.title,
        visible: true,
      };
    },
    dismissBottomSheet: state => {
      state.bottomSheet = { visible: false, content: null, title: '' };
    },
    showBottomModal: (state, action: PayloadAction<BottomModalInfo>) => {
      state.bottomModal = {
        content: action.payload.content,
        title: action.payload.title,
        visible: true,
      };
    },
    dismissBottomModal: state => {
      state.bottomModal = { visible: false, title: '', content: null };
    },
    showBottomSelector: (state, action: PayloadAction<BottomSelectorInfo>) => {
      state.bottomSelector = {
        visible: true,
        title: action.payload.title,
        selectors: action.payload.selectors,
      };
    },
    dismissBottomSelector: state => {
      state.bottomSelector = {
        visible: false,
        title: '',
        selectors: [],
      };
    },
    showBottomFilter: (state, action: PayloadAction<BottomFilterInfo>) => {
      state.bottomFilter = {
        visible: true,
        title: action.payload.title,
        selectors: action.payload.selectors,
        selected: action.payload.selected,
      };
    },
    dismissBottomFilter: state => {
      state.bottomFilter = {
        visible: false,
        title: '',
        selectors: [],
        selected: null,
      };
    },
  },
});

export const {
  showConfirm,
  dismissConfirm,
  showAlert,
  dismissAlert,
  showFullImage,
  dismissFullImage,
  showBottomSheet,
  dismissBottomSheet,
  showBottomModal,
  dismissBottomModal,
  showBottomSelector,
  dismissBottomSelector,
  showBottomFilter,
  dismissBottomFilter,
} = modalSlice.actions;

export default modalSlice.reducer;
