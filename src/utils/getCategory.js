const getCategory = (string) => {
  let type;

  if (string === 'shades') type = 'sunglasses';
  if (string === 'frames') type = 'eyeglasses';

  return type;
};

export default getCategory;
