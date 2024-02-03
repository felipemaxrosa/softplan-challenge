import { RootState } from '..';

export const selectShowMyProfileModal = (state: RootState) =>
  state.modal.showMyProfile;
