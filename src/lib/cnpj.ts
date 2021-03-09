/**
 * @Method: Returns the value masked with this pattern 00.000.000/0000-00.
 * @Param {string | number}
 * @Return {string}
 */
const cnpj = (value: string | number): string => {
  const string = value.toString();

  const formattedString = string
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(.\d{2})\d+?$/, '$1');

  return formattedString;
};

export default cnpj;
