import cellphoneOrPhone from '../lib/cellphoneOrPhone';

export default describe('Cellphone or phone tests', () => {
  test('Cellphone size, likes number', () => {
    expect(cellphoneOrPhone(17900000000)).toBe('(17) 90000-0000');
  });

  test('Cellphone size, likes string', () => {
    expect(cellphoneOrPhone('00000000000')).toBe('(00) 00000-0000');
  });

  test('Cellphone size, when over size', () => {
    expect(cellphoneOrPhone('000000000001')).toBe('(00) 00000-0000');
  });

  test('Phone size, likes number', () => {
    expect(cellphoneOrPhone(1790000000)).toBe('(17) 9000-0000');
  });

  test('Phone size, likes string', () => {
    expect(cellphoneOrPhone('0000000000')).toBe('(00) 0000-0000');
  });

  // Transform phone to cellphone
  test('Phone size, when over size', () => {
    expect(cellphoneOrPhone('00000000001')).toBe('(00) 00000-0001');
  });
});
