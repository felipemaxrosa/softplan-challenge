import { createAction } from '@reduxjs/toolkit';

const SHOW_MY_PROFILE = 'MODAL/SHOW_MY_PROFILE';

export const showMyProfileModal = createAction<boolean>(SHOW_MY_PROFILE);
