import { greet, add } from './index.js';

describe('greet', () => {
  test('should return a greeting message', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  test('should throw an error if name is not provided', () => {
    expect(() => greet()).toThrow('Name is required');
  });

  test('should throw an error if name is empty string', () => {
    expect(() => greet('')).toThrow('Name is required');
  });
});

describe('add', () => {
  test('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should add negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });

  test('should add zero', () => {
    expect(add(5, 0)).toBe(5);
  });
});
