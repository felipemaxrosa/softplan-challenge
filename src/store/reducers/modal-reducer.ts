import { createReducer } from '@reduxjs/toolkit';

import { modalActions } from '../actions';

export interface ModalReducerState {
  showMyProfile: boolean;
}

const modalInitialState: ModalReducerState = {
  showMyProfile: false,
};

export const modalsReducer = createReducer(modalInitialState, (userBuilder) => {
  userBuilder.addCase(
    modalActions.showMyProfileModal,
    (state, { payload }) => ({
      ...state,
      showMyProfile: payload,
    })
  );
});
