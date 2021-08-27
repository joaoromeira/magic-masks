import clear from './clear';
import cnpj from './cnpj';

const cpf = (string: string) =>
  string
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2');

/**
 * @Method: Returns the value masked with this pattern 000.000.000-00 or 00.000.000/0000-00.
 * @Param {string | number}
 * @Return {string}
 */
const cpfOrCnpj = (value: string | number): string => {
  const string = clear(value.toString());

  if (string.length <= 11) {
    return cpf(string);
  }

  return cnpj(string);
};

export default cpfOrCnpj;
