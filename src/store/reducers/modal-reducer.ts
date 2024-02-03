import { createReducer } from '@reduxjs/toolkit';

import { modalActions } from '../actions';

export interface ModalReducerState {
  showMyProfile: boolean;
}

const modalInitialState: ModalReducerState = {
  showMyProfile: true,
};

export const modalsReducer = createReducer(modalInitialState, (userBuilder) => {
  userBuilder.addCase(modalActions.showMyProfile, (state, { payload }) => ({
    ...state,
    showMyProfile: payload,
  }));
});
