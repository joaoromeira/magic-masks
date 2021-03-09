import clear from '../lib/clear';

describe('Clear tests', () => {
  test('Receive with special characters', () => {
    expect(clear('1.0.0')).toBe('100');
  });
});
