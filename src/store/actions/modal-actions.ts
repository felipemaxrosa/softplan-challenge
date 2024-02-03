import { createAction } from '@reduxjs/toolkit';

const SHOW_USER_PROFILE = 'MODAL/SHOW_USER_PROFILE';

export const showUserProfileModal = createAction<boolean>(SHOW_USER_PROFILE);
