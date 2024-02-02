import * as localService from './storageService';

describe('localService', () => {
  it('should call localStorage.setItem properly', () => {
    const key = 'testKey';
    const value = 'testValue';

    localService.setItem(key, value);

    expect(localStorage.getItem(key)).toBe(value);
  });
});
