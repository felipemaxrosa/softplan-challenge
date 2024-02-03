import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { mockUsers } from '../mocks';
import { User } from '../../models/interfaces';
import { storageService } from '../../services';
import { STORAGE_USERS, STORAGE_ACTIVE_USER } from '../../constants';

const BOOTSTRAP = 'USER/BOOTSTRAP';

const DELETE_USER = 'USER/DELETE_USER';
const EDIT_USER = 'USER/EDIT_USER';
const LOGOUT_USER = 'USER/LOGOUT_USER';
const NEW_USER = 'USER/NEW_USER';
const ADD_USER = 'USER/ADD_USER';
const SET_ACTIVE_USER = 'USER/SET_ACTIVE_USER';
const SHOW_MY_PROFILE_MODAL = 'USER/SHOW_MY_PROFILE_MODAL';
const SHOW_USER_MODAL = 'USER/SHOW_USER_MODAL';
const UPDATE_USER = 'USER/UPDATE_USER';

export const bootstrap = createAsyncThunk(BOOTSTRAP, (state, { dispatch }) => {
  storageService.setItem(STORAGE_USERS, mockUsers);
  const activeUser = storageService.getItem<User>(STORAGE_ACTIVE_USER);

  if (activeUser) {
    dispatch(setActiveUser(activeUser));
  }
});

export const newUser = createAction(NEW_USER);
export const addUser = createAsyncThunk<User[], User>(ADD_USER, (newUser) => {
  const allUsers = storageService.getItem<User[]>(STORAGE_USERS) ?? [];
  newUser.id = allUsers.length + 1;

  allUsers.push(newUser);
  storageService.setItem(STORAGE_USERS, allUsers);

  return allUsers;
  // Mostrar tabela com esses usuarios atualizados
});
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
export const showUserModal = createAction<boolean>(SHOW_USER_MODAL);
export const showMyProfileModal = createAction<boolean>(SHOW_MY_PROFILE_MODAL);
