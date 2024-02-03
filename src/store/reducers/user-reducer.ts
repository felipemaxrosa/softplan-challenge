import { createReducer } from '@reduxjs/toolkit';

import { userActions } from '../actions';
import { User } from '../../models/interfaces';

export interface UserReducerState {
  activeUser?: User;
  selectedUser?: User;
  editing: boolean;
  loading: boolean;
  showUserModal: boolean;
  submitting: boolean;
  users: User[];
}

const userInitialState: UserReducerState = {
  editing: false,
  loading: false,
  showUserModal: false,
  submitting: false,
  users: [],
};

export const userReducer = createReducer(userInitialState, (userBuilder) => {
  userBuilder.addCase(
    userActions.setActiveUser.fulfilled,
    (state, { payload }) => ({
      ...state,
      activeUser: payload,
    })
  );
  userBuilder.addCase(userActions.userLogout.fulfilled, (state) => ({
    ...state,
    activeUser: undefined,
  }));
  userBuilder.addCase(userActions.showUserModal, (state, { payload }) => ({
    ...state,
    showUserModal: payload,
  }));
  userBuilder.addCase(userActions.newUser, (state) => ({
    ...state,
    showUserModal: true,
    editing: false,
  }));
  userBuilder.addCase(userActions.showMyProfileModal, (state, { payload }) => ({
    ...state,
    showUserModal: payload,
    editing: payload,
    selectedUser: payload ? state.activeUser : undefined,
  }));
});
