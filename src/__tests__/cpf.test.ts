import cpf from '../lib/cpf';

/**
 * Document numbers are false data generated
 * https://www.4devs.com.br/gerador_de_cpf
 */
export default describe('CPF tests', () => {
  test('Receive number', () => {
    expect(cpf(27597512015)).toBe('275.975.120-15');
  });

  test('Receive string', () => {
    expect(cpf('45685428049')).toBe('456.854.280-49');
  });

  test('Receive with special characters', () => {
    expect(cpf('566.050.610-04')).toBe('566.050.610-04');
  });

  test('When over size', () => {
    expect(cpf('725512660091')).toBe('725.512.660-09');
  });
});
