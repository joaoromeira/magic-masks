/**
 * Functions
 */
import cellphone from './cellphone';
import cellphoneOrPhone from './cellphoneOrPhone';
import clear from './clear';
import cnpj from './cnpj';
import cpf from './cpf';
import cpfOrCnpj from './cpfOrCnpj';
import creditCard from './creditCard';
import creditCardExpiry from './creditCardExpiry';
import currency from './currency';
import date from './date';
import phone from './phone';
import zipCode from './zipCode';

export { default as cellphone } from './cellphone';
export { default as cellphoneOrPhone } from './cellphoneOrPhone';
export { default as clear } from './clear';
export { default as cnpj } from './cnpj';
export { default as cpf } from './cpf';
export { default as cpfOrCnpj } from './cpfOrCnpj';
export { default as creditCard } from './creditCard';
export { default as creditCardExpiry } from './creditCardExpiry';
export { default as currency } from './currency';
export { default as date } from './date';
export { default as phone } from './phone';
export { default as zipCode } from './zipCode';

const masks = {
  cellphone,
  cellphoneOrPhone,
  clear,
  cnpj,
  cpf,
  cpfOrCnpj,
  creditCard,
  creditCardExpiry,
  currency,
  date,
  phone,
  zipCode,
};

export type IMagicMasks = typeof masks;
export type IMagicMasksNames =
  | 'cellphone'
  | 'cellphoneOrPhone'
  | 'cnpj'
  | 'cpf'
  | 'cpfOrCnpj'
  | 'creditCard'
  | 'creditCardExpiry'
  | 'currency'
  | 'date'
  | 'phone'
  | 'zipCode';

export default masks;
