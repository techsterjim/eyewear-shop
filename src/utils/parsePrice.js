const parsePrice = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const trimmedString = string.trim();
  
  // Check if the string starts with a dollar sign (USD-specific)
  if (!trimmedString.startsWith('$')) {
    throw new Error('String does not start with a dollar sign ($) for USD');
  }

  // Remove the dollar sign and any commas, then parse to float
  const numberString = trimmedString.slice(1).split(',').join('');
  
  const price = Number.parseFloat(numberString);
  
  if (isNaN(price)) {
    throw new Error('Invalid price format for USD');
  }
  
  return price;
};

export default parsePrice;

