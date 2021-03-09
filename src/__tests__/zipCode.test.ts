import zipCode from '../lib/zipCode';

describe('Zip code tests', () => {
  test('Receive number', () => {
    expect(zipCode(15650000)).toBe('15650-000');
  });

  test('Receive string', () => {
    expect(zipCode('15650000')).toBe('15650-000');
  });

  test('When over size', () => {
    expect(zipCode('156500001')).toBe('15650-000');
  });

  test('Receive with special characters', () => {
    expect(zipCode('15650-000')).toBe('15650-000');
  });
});
