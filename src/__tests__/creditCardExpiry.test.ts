import creditCardExpiry from '../lib/creditCardExpiry';

export default describe('Credit card expiry tests', () => {
  test('Receive number', () => {
    expect(creditCardExpiry(1021)).toBe('10/21');
  });

  test('Receive string', () => {
    expect(creditCardExpiry('1228')).toBe('12/28');
  });

  test('Receive with special characters', () => {
    expect(creditCardExpiry('01/24')).toBe('01/24');
  });

  test('When over size', () => {
    expect(creditCardExpiry('07/254')).toBe('07/25');
  });
});
