import phone from '../lib/phone';

export default describe('Phone or phone tests', () => {
  test('Receive number', () => {
    expect(phone(1190000000)).toBe('(11) 9000-0000');
  });

  test('Receive string', () => {
    expect(phone('0000000000')).toBe('(00) 0000-0000');
  });

  test('When over size', () => {
    expect(phone('00000000001')).toBe('(00) 0000-0000');
  });

  test('Receive with special characters', () => {
    expect(phone('(00) 0000-0000')).toBe('(00) 0000-0000');
  });
});
