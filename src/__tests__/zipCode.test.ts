import zipCode from '../lib/zipCode';

describe('Zip code tests', () => {
  test('Zip code likes number', () => {
    expect(zipCode(15650000)).toBe('15650-000');
  });

  test('Zip code likes string', () => {
    expect(zipCode('15650000')).toBe('15650-000');
  });
});
