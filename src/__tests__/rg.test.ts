import rg from '../lib/rg';

describe('RG tests', () => {
  test('RG likes number', () => {
    expect(rg(100000000)).toBe('10.000.000-0');
  });

  test('RG likes string', () => {
    expect(rg('000000000')).toBe('00.000.000-0');
  });

  test('RG over size', () => {
    expect(rg('0000000001')).toBe('00.000.000-0');
  });

  // test('RG with letter', () => {
  //   expect(rg('00000000X')).toBe('00.000.000-X');
  // });
});
