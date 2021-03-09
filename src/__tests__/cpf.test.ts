import cpf from '../lib/cpf';

export default describe('CPF tests', () => {
  test('CPF likes number', () => {
    expect(cpf(10000000000)).toBe('100.000.000-00');
  });

  test('CPF likes string', () => {
    expect(cpf('00000000000')).toBe('000.000.000-00');
  });

  test('CPF over size', () => {
    expect(cpf('000000000001')).toBe('000.000.000-00');
  });
});
