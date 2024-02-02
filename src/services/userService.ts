import { storageService } from '.';
import { User } from '../models/interfaces';
import { STORAGE_USERS } from '../constants';

interface Credentials {
  name: string;
  password: string;
}
const validateCredentials = ({ name, password }: Credentials): User | null => {
  const users = storageService.getItem<User[]>(STORAGE_USERS);
  const validUser = users?.find(
    (user) => user.name === name && user.password === password
  );

  if (!validUser) return null;

  return validUser;
};

export { validateCredentials };
