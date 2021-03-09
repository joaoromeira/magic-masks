import clear from '../lib/clear';

describe('Unmask tests', () => {
  test('Unmask likes string', () => {
    expect(clear('1.0.0')).toBe('100');
  });
});
