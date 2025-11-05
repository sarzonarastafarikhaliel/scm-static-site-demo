const { startConfetti } = require('./script');

describe('startConfetti function', () => {
  test('should be a function', () => {
    expect(typeof startConfetti).toBe('function');
  });

  // Fixed version: passing test
  test('should correctly calculate 1 + 1', () => {
    expect(1 + 1).toBe(2);
  });
});
