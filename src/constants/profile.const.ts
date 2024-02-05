import { Profile } from '../models/enums';

export const PROFILE_SELECT_ITEMS = [
  {
    label: Profile.ADMIN.toUpperCase(),
    value: Profile.ADMIN,
  },
  {
    label: Profile.USER.toUpperCase(),
    value: Profile.USER,
  },
];
