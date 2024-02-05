import { Profile } from '../../models/enums';
import { User } from '../../models/interfaces';

export const mockUsers: User[] = [
  {
    id: 1,
    email: 'admin@test.com',
    password: 'admin',
    name: 'admin',
    profile: Profile.ADMIN,
  },
  {
    id: 2,
    email: 'user@test.com',
    password: 'user',
    name: 'user',
    profile: Profile.USER,
  },
];
