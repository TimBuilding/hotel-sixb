const parseNumber = (value: string): number => {
  return parseInt(value.replace(/\D/g, ""));
};

export default parseNumber;