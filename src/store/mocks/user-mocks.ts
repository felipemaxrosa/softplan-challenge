import { Profile } from '../../models/enums';
import { User } from '../../models/interfaces';

export const mockUsers: User[] = [
  {
    id: 1,
    email: 'admin@test.com',
    password: '1234',
    name: 'admin',
    profile: Profile.ADMIN,
  },
  {
    id: 2,
    email: 'user@test.com',
    password: '1234',
    name: 'user',
    profile: Profile.USER,
  },
];
