import * as userService from './userService';

describe('userService', () => {
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
