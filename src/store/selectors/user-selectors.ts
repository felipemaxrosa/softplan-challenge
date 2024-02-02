import { RootState } from '..';

export const selectActiveUser = (state: RootState) => state.user.activeUser;
export const selectUserInitialLetter = (state: RootState) =>
  state.user.activeUser?.name[0].toLocaleUpperCase();
export const selectUserProfile = (state: RootState) =>
  state.user.activeUser?.profile;
export const selectHasActiveUser = (state: RootState) =>
  state.user.activeUser !== undefined;
