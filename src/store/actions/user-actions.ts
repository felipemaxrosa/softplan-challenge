import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { mockUsers } from '../mocks';
import { User } from '../../models/interfaces';
import { storageService } from '../../services';
import { STORAGE_USERS, STORAGE_ACTIVE_USER } from '../../constants';

const BOOTSTRAP = 'USER/BOOTSTRAP';

const NEW_USER = 'USER/NEW_USER';
const UPDATE_USER = 'USER/UPDATE_USER';
const DELETE_USER = 'USER/DELETE_USER';
const EDIT_USER = 'USER/EDIT_USER';
const SET_ACTIVE_USER = 'USER/SET_ACTIVE_USER';
const LOGOUT_USER = 'USER/LOGOUT_USER';

export const bootstrap = createAsyncThunk(BOOTSTRAP, (state, { dispatch }) => {
  storageService.setItem(STORAGE_USERS, mockUsers);
  const activeUser = storageService.getItem<User>(STORAGE_ACTIVE_USER);

  if (activeUser) {
    dispatch(setActiveUser(activeUser));
  }
});

export const newUser = createAction<User>(NEW_USER);
export const updateUser = createAsyncThunk<void, User>(
  UPDATE_USER,
  (userToUpdate) => {
    const allUsers = storageService.getItem<User[]>(STORAGE_USERS);

    const userIndex = allUsers?.findIndex(
      (user) => user.id === userToUpdate.id
    );

    const updatedUsers = allUsers?.map((user, index) => {
      if (index === userIndex) return userToUpdate;

      return user;
    });
    storageService.setItem(STORAGE_USERS, updatedUsers);
  }
);
export const editUser = createAction(EDIT_USER);
export const deleteUser = createAction<{ id: number }>(DELETE_USER);
export const setActiveUser = createAsyncThunk<
  User | undefined,
  User | undefined
>(SET_ACTIVE_USER, (user) => {
  storageService.setItem(STORAGE_ACTIVE_USER, user);
  return user;
});
export const userLogout = createAsyncThunk(LOGOUT_USER, () => {
  storageService.clearItem(STORAGE_ACTIVE_USER);
});
