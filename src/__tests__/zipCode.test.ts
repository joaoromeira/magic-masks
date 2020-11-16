import rg from '../lib/rg';

describe('Zip code tests', () => {
  test('Zip code likes number', () => {
    expect(rg(15650000)).toBe('15650-000');
  });

  test('Zip code likes string', () => {
    expect(rg('15650000')).toBe('15650-000');
  });
});
