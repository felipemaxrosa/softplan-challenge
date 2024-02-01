import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { mockUsers } from '../mocks';
import { localService } from '../../services';
import { User } from '../../models/interfaces';

const BOOTSTRAP = 'USER/BOOTSTRAP';

const NEW_USER = 'USER/NEW_USER';
const EDIT_USER = 'USER/EDIT_USER';
const DELETE_USER = 'USER/DELETE_USER';
const SET_ACTIVE_USER = 'USER/SET_ACTIVE_USER';

const STORAGE_USERS = 'SOFTPLAN_USERS';

export const bootstrap = createAsyncThunk(BOOTSTRAP, () => {
  localService.setLocalService(STORAGE_USERS, JSON.stringify(mockUsers));
});

export const newUser = createAction<User>(NEW_USER);
export const editUser = createAction<User>(EDIT_USER);
export const deleteUser = createAction<{ id: number }>(DELETE_USER);
export const setActiveUser = createAction<User>(SET_ACTIVE_USER);
