const { startConfetti } = require('./script');

describe('startConfetti function', () => {
  test('should be a function', () => {
    expect(typeof startConfetti).toBe('function');
  });

  test('should fail intentionally for demonstration', () => {
    expect(1 + 1).toBe(3);
  });
});
