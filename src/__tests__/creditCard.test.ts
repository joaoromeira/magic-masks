import creditCard from '../lib/creditCard';

/**
 * Document numbers are false data generated
 * https://www.4devs.com.br/gerador_de_numero_cartao_credito
 */
export default describe('Credit card tests', () => {
  test('Receive number', () => {
    expect(creditCard(5554531530649576)).toBe('5554.5315.3064.9576');
  });

  test('Receive string', () => {
    expect(creditCard('5349142303516099')).toBe('5349.1423.0351.6099');
  });

  test('Receive with special characters', () => {
    expect(creditCard('5443.2690.8625.5721')).toBe('5443.2690.8625.5721');
  });

  test('When over size', () => {
    expect(creditCard('55405955207003651')).toBe('5540.5955.2070.0365');
  });
});
