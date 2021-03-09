import cnpj from '../lib/cnpj';

/**
 * Document numbers are false data generated
 * https://www.4devs.com.br/gerador_de_cnpj
 */
export default describe('CNPJ tests', () => {
  test('Receive number', () => {
    expect(cnpj(29569426000142)).toBe('29.569.426/0001-42');
  });

  test('Receive string', () => {
    expect(cnpj('37605560000180')).toBe('37.605.560/0001-80');
  });

  test('Receive with special characters', () => {
    expect(cnpj('24.859.980/0001-40')).toBe('24.859.980/0001-40');
  });

  test('When over size', () => {
    expect(cnpj('484927610001341')).toBe('48.492.761/0001-34');
  });
});
