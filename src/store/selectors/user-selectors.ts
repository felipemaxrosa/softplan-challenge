import { RootState } from '..';

export const selectActiveUser = (state: RootState) => state.user.activeUser;
