import currency from '../lib/currency';

const removeSpaces = (string: string): string => string.replace(/\s/g, '');

export default describe('Currency tests', () => {
  test('Receive number', () => {
    const value = currency(1000);
    expect(removeSpaces(value)).toBe('R$10,00');
  });

  test('Receive string', () => {
    const value = currency('1500');
    expect(removeSpaces(value)).toBe('R$15,00');
  });

  test('Receive with special characters', () => {
    const value = currency('R$ 30,00');
    expect(removeSpaces(value)).toBe('R$30,00');
  });

  /**
   * If allowPrefix is false, transform in int
   */
  test('Receive number without prefix', () => {
    expect(currency(1000, false)).toBe('10');
  });

  test('Receive string without prefix', () => {
    expect(currency('1500', false)).toBe('15');
  });

  test('Receive with special characters without prefix', () => {
    expect(currency('R$ 30,00', false)).toBe('30');
  });
});
