/**
 * @Method: Returns the value masked with this pattern #####-###.
 * @Param {string | number}
 * @Return {string}
 */
const zipCode = (value: string | number): string => {
  const string = value.toString();

  const formattedString = string
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');

  return formattedString;
};

export default zipCode;
