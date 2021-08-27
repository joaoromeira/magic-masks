/**
 * @Method: Returns the value masked with this pattern 00.000.000/0000-00.
 * @Param {string | number}
 * @Return {string}
 */
const cnpj = (value: string | number): string => {
  let string = value.toString();

  string = string.replace(/\D/g, '')
  string = string.replace(/^(\d{2})(\d)/,"$1.$2")
  string = string.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
  string = string.replace(/\.(\d{3})(\d)/,".$1/$2")
  string = string.replace(/(\d{4})(\d)/,"$1-$2")
  string = string.replace(/(-\d{2})\d+?$/, '$1')

  return string;
};

export default cnpj;
