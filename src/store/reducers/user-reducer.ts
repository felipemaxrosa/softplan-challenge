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
  filteredUsers: User[];
}

const userInitialState: UserReducerState = {
  editing: false,
  loading: false,
  showUserModal: false,
  submitting: false,
  users: [],
  filteredUsers: [],
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
    selectedUser: undefined,
    editing: false,
  }));
  userBuilder.addCase(userActions.showMyProfileModal, (state, { payload }) => ({
    ...state,
    showUserModal: payload,
    editing: payload,
    selectedUser: payload ? state.activeUser : undefined,
  }));
  userBuilder.addCase(userActions.setUsers, (state, { payload }) => ({
    ...state,
    users: payload,
    loading: false,
  }));
  userBuilder.addCase(userActions.setFilteredUsers, (state, { payload }) => ({
    ...state,
    filteredUsers: state.users.filter((user) => user.name.includes(payload)),
  }));
  userBuilder.addCase(userActions.editUser, (state, { payload }) => ({
    ...state,
    selectedUser: payload,
    editing: true,
    showUserModal: true,
  }));
  userBuilder.addCase(
    userActions.deleteUser.fulfilled,
    (state, { payload }) => ({
      ...state,
      users: payload,
    })
  );
  userBuilder.addCase(userActions.addUser.fulfilled, (state, { payload }) => ({
    ...state,
    users: [...state.users, payload],
    filteredUsers: [...state.filteredUsers, payload],
    selectedUser: undefined,
  }));
  userBuilder.addCase(
    userActions.updateUser.fulfilled,
    (state, { payload }) => ({
      ...state,
      filteredUsers: state.filteredUsers.map((user) =>
        user.id !== payload.id ? user : payload
      ),
      users: state.users.map((user) =>
        user.id !== payload.id ? user : payload
      ),
      selectedUser: undefined,
      editing: false,
    })
  );
});
