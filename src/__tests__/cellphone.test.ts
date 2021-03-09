import cellphone from '../lib/cellphone';

export default describe('Cellphone tests', () => {
  test('Receive number', () => {
    expect(cellphone(11900000000)).toBe('(11) 90000-0000');
  });

  test('Receive string', () => {
    expect(cellphone('00000000000')).toBe('(00) 00000-0000');
  });

  test('When over size', () => {
    expect(cellphone('000000000001')).toBe('(00) 00000-0000');
  });

  test('Receive with special characters', () => {
    expect(cellphone('(00) 00000-0000')).toBe('(00) 00000-0000');
  });
});
