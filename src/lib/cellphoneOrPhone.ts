import cellphone from './cellphone';
import clear from './clear';
import phone from './phone';

/**
 * @Method: Returns the value masked with this pattern (00) 00000.0000 or (00) 0000.0000.
 * @Param {string | number}
 * @Return {string}
 */
const cellphoneOrPhone = (value: string | number): string => {
  const string = value.toString();

  if (clear(string).length > 10) {
    return cellphone(string);
  }

  return phone(string);
};

export default cellphoneOrPhone;
