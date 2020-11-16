import unmask from '../lib/unmask';

describe('Unmask tests', () => {
  test('Unmask likes string', () => {
    expect(unmask('1.0.0')).toBe('100');
  });
});
