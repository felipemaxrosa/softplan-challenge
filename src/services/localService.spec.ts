import * as localService from './localService';

describe('localService', () => {
  it('should call localStorage.setItem properly', () => {
    const key = 'testKey';
    const value = 'testValue';

    localService.setLocalService(key, value);

    expect(localStorage.getItem(key)).toBe(value);
  });
});
