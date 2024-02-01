import { Profile } from '../enums';
export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  profile: Profile;
}
