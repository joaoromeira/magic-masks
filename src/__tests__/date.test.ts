import date from '../lib/date';

describe('Date tests', () => {
  test('Receive correct params', () => {
    expect(date('10072000')).toBe('10/07/2000');
  });

  test('Receive over date and month', () => {
    expect(date('32132000')).toBe('31/12/2000');
  });

  test('Receive less date and month', () => {
    expect(date('00002000')).toBe('01/01/2000');
  });
});
