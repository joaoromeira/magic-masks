/**
 * @Method: Returns the value masked with this pattern 00.000.000/0000-00.
 * @param value {string | number}
 * @param options {boolean}
 * @Return {string}
 */
const currency = (value: string | number, allowPrefix = true): string => {
  const string = value.toString();

  const customOptions = allowPrefix
    ? {
        style: 'currency',
        currency: 'BRL',
      }
    : {};

  if (string.replace(/\D/g, '') !== '')
    return (parseInt(string.replace(/\D/g, ''), 10) / 100).toLocaleString(
      'pt-BR',
      customOptions
    );

  return '';
};

export default currency;
