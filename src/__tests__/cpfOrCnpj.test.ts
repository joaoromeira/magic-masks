import cpfOrCnpj from '../lib/cpfOrCnpj';

/**
 * Document numbers are false data generated
 * https://www.4devs.com.br/gerador_de_cpf
 * https://www.4devs.com.br/gerador_de_cnpj
 */
export default describe('CPF or CNPJ tests', () => {
  test('Receive cpf number', () => {
    expect(cpfOrCnpj(27597512015)).toBe('275.975.120-15');
  });

  test('Receive cpf string', () => {
    expect(cpfOrCnpj('45685428049')).toBe('456.854.280-49');
  });

  test('Receive cpf with special characters', () => {
    expect(cpfOrCnpj('566.050.610-04')).toBe('56.605.061/00');
  });

  test('When cpf over size transform in cnpj', () => {
    expect(cpfOrCnpj('725512660091')).toBe('72.551.266/00');
  });

  test('Receive cnpj number', () => {
    expect(cpfOrCnpj(29569426000142)).toBe('29.569.426/0001-42');
  });

  test('Receive cnpj string', () => {
    expect(cpfOrCnpj('37605560000180')).toBe('37.605.560/0001-80');
  });

  test('Receive cnpj with special characters', () => {
    expect(cpfOrCnpj('24.859.980/0001-40')).toBe('24.859.980/0001-40');
  });

  test('When cnpj over size', () => {
    expect(cpfOrCnpj('484927610001341')).toBe('48.492.761/0001-34');
  });
});
