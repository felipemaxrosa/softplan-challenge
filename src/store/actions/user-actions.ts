import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { mockUsers } from '../mocks';
import { User } from '../../models/interfaces';
import { storageService } from '../../services';
import { STORAGE_USERS } from '../../constants';

const BOOTSTRAP = 'USER/BOOTSTRAP';

const NEW_USER = 'USER/NEW_USER';
const UPDATE_USER = 'USER/UPDATE_USER';
const DELETE_USER = 'USER/DELETE_USER';
const SET_ACTIVE_USER = 'USER/SET_ACTIVE_USER';

export const bootstrap = createAsyncThunk(BOOTSTRAP, () => {
  storageService.setItem(STORAGE_USERS, mockUsers);
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
export const deleteUser = createAction<{ id: number }>(DELETE_USER);
export const setActiveUser = createAction<User | undefined>(SET_ACTIVE_USER);
