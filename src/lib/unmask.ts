const unmask = (value: string): string => value.replace(/\D/g, '');

export default unmask;
