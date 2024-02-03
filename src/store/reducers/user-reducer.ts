import { createReducer } from '@reduxjs/toolkit';

import { User } from '../../models/interfaces';
import { userActions } from '../actions';

export interface UserReducerState {
  loading: boolean;
  submitting: boolean;
  editing: boolean;
  activeUser?: User;
  users: User[];
}

const userInitialState: UserReducerState = {
  editing: false,
  loading: false,
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
});
