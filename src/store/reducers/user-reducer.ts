import { createReducer } from '@reduxjs/toolkit';

import { User } from '../../models/interfaces';
import { userActions } from '../actions';

export interface UserReducerState {
  loading: boolean;
  submitting: boolean;
  activeUser?: User;
  users: User[];
}

const userInitialState: UserReducerState = {
  loading: false,
  submitting: false,
  users: [],
};

export const userReducer = createReducer(userInitialState, (userBuilder) => {
  userBuilder.addCase(userActions.setActiveUser, (state, { payload }) => ({
    ...state,
    activeUser: payload,
  }));
});
