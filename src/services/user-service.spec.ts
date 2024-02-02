import { storageService } from '.';
import { mockUsers } from '../store/mocks';
import { STORAGE_USERS } from '../constants';
import * as userService from './user-service';

describe('userService', () => {
  beforeAll(() => {
    storageService.setItem(STORAGE_USERS, mockUsers);
  });

  it('should return NULL if user not found', () => {
    const user = { name: 'some', password: '1234' };
    const result = userService.validateCredentials(user);

    expect(result).toBeNull();
  });

  it('should return the properly user', () => {
    const user = { name: 'user', password: '1234' };
    const result = userService.validateCredentials(user);

    expect(result).toBeTruthy();
  });
});
