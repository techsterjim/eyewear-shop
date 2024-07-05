// Create a function to format a number with optional locale and options
const formatPrice = (number, locales = 'en-US', options = { style: 'currency', currency: 'USD' }) => {
  const formatter = new Intl.NumberFormat(locales, options);
  return formatter.format(number);
};

export default formatPrice;
