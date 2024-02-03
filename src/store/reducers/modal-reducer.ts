import { createReducer } from '@reduxjs/toolkit';

import { modalActions } from '../actions';

export interface ModalReducerState {
  userProfile: boolean;
  editingUser: boolean;
}

const modalInitialState: ModalReducerState = {
  userProfile: false,
  editingUser: false,
};

export const modalsReducer = createReducer(modalInitialState, (userBuilder) => {
  userBuilder.addCase(
    modalActions.showUserProfileModal,
    (state, { payload }) => ({
      ...state,
      userProfile: payload,
      editingUser: true,
    })
  );
});
