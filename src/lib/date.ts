const snap = (value: string | number, min: number, max: number): number => {
  const target = Number(value);

  switch (true) {
    case target < min:
      return min;
    case target > max:
      return max;
    default:
      return target;
  }
};

/**
 * @Method: Returns the value masked with this pattern 01/01/0001 (min) and 12/31/9999 (max).
 * @Param {string}
 * @Return {string}
 */
const date = (value: string): string => {
  const string = value.replace(/\D/g, '');

  if (string.length === 8) {
    const day = snap(string.slice(0, 2), 1, 31).toString().padStart(2, '0');
    const month = snap(string.slice(2, 4), 1, 12).toString().padStart(2, '0');
    const year = snap(string.slice(4, 8), 1, 9999).toString().padStart(4, '0');

    return `${day}/${month}/${year}`;
  }

  return string
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1');
};

export default date;
