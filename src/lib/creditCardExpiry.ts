/**
 * @Method: Returns the value masked with this pattern 00/00.
 * @Param {string | number}
 * @Return {string}
 */
const creditCardExpiry = (value: string | number): string => {
  const string = value.toString();

  const formattedString = string
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(.\d{2})\d+?$/, '$1')
    .replace('.', '/');

  return formattedString;
};

export default creditCardExpiry;
