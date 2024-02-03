import * as localService from './storage-service';

describe('localService', () => {
  it('should call localStorage.setItem properly', () => {
    const key = 'some-key';
    const value = { value: 'some-value' };

    localService.setItem(key, value);

    expect(localStorage.getItem(key)).toBe(JSON.stringify(value));
  });

  it('should call localStorage.getItem properly', () => {
    const key = 'some-key';
    const value = { value: 'some-value' };

    localService.setItem(key, value);

    const result = localService.getItem(key);

    expect(result).toEqual(value);
  });
});
