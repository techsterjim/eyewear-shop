import framesData from './json/framesProductData.json';
import shadesData from './json/shadesProductData.json';

function getSubfolder(type, isCompressed) {
  let subfolder;

  if (type === 'shades') {
    subfolder = isCompressed ? 'shadesImages-compressed' : 'shadesImages';
  }

  if (type === 'frames') {
    subfolder = isCompressed ? 'framesImages-compressed' : 'framesImages';
  }

  return subfolder;
}

function getImgUrl(fileName, type, isMain, isCompressed = false) {
  const ext = 'jpg';
  const subfolder = getSubfolder(type, isCompressed);
  const number = isMain ? '1' : '2';

  const imgURL = new URL(
    `../assets/img/${subfolder}/${fileName}-${number}.${ext}`,
    import.meta.url,
  ).href;

  return imgURL;
}

function mapImage(item) {
  const fileName = item.title.toLowerCase().split(' ').join('-');

  return {
    ...item,
    images: {
      main: getImgUrl(fileName, item.type, true),
      side: getImgUrl(fileName, item.type, false),
    },
    compressedImages: {
      main: getImgUrl(fileName, item.type, true, true),
      side: getImgUrl(fileName, item.type, false, true),
    },
  };
}

export const eyeglassesData = framesData.map((item) =>
  Object.freeze(mapImage(item)),
);

export const sunglassesData = shadesData.map((item) =>
  Object.freeze(mapImage(item)),
);

export const allProductsData = [...eyeglassesData, ...sunglassesData];
