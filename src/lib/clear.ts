/**
 * @Method: Returns the value without special characters.
 * @Param {string}
 * @Return {string}
 */
const clear = (value: string): string => value.replace(/\D/g, '');

export default clear;
