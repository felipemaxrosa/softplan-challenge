import { createReducer } from '@reduxjs/toolkit';

import { modalActions } from '../actions';

export interface ModalReducerState {
  alertModal: {
    open: boolean;
    message: string;
  };
}

const modalInitialState: ModalReducerState = {
  alertModal: {
    open: false,
    message: '',
  },
};

export const modalReducer = createReducer(modalInitialState, (modalBuilder) => {
  modalBuilder.addCase(modalActions.setAlertModal, (state, { payload }) => ({
    ...state,
    alertModal: {
      ...state.alertModal,
      open: payload.open,
      message: payload.message,
    },
  }));
  modalBuilder.addCase(modalActions.closeAlertModal, (state) => ({
    ...state,
    alertModal: {
      ...state.alertModal,
      open: false,
    },
  }));
});
