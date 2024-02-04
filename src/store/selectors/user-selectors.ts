import { RootState } from '..';
import { Profile } from '../../models/enums';

export const selectActiveUser = (state: RootState) => state.user.activeUser;
export const selectUserInitialLetter = (state: RootState) =>
  state.user.activeUser?.name[0].toLocaleUpperCase();
export const selectUserProfile = (state: RootState) =>
  state.user.activeUser?.profile;
export const selectHasActiveUser = (state: RootState) =>
  state.user.activeUser !== undefined;
export const selectIsAdminUser = (state: RootState) =>
  state.user.activeUser?.profile === Profile.ADMIN;
export const selectIsEditing = (state: RootState) => state.user.editing;
export const selectShowUserModal = (state: RootState) =>
  state.user.showUserModal;
export const selectSelectedUser = (state: RootState) => state.user.selectedUser;
export const selectUsers = (state: RootState) => state.user.users;
