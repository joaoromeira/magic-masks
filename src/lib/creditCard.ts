/**
 * @Method: Returns the value masked with this pattern 0000.0000.0000.0000.
 * @Param {string | number}
 * @Return {string}
 */
const creditCard = (value: string | number): string => {
  const string = value.toString();

  const formattedString = string
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1.$2')
    .replace(/(\d{4})(\d)/, '$1.$2')
    .replace(/(\d{4})(\d{1,2})/, '$1.$2')
    .replace(/(\d{4})\d+?$/, '$1');

  return formattedString;
};

export default creditCard;
