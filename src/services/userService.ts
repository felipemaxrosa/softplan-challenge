import { User } from '../models/interfaces';
import { mockUsers } from '../store/mocks';

interface Credentials {
  name: string;
  password: string;
}
const validateCredentials = ({ name, password }: Credentials): User | null => {
  const validUser = mockUsers.find(
    (user) => user.name === name && user.password === password
  );

  if (!validUser) return null;

  return validUser;
};

export { validateCredentials };
