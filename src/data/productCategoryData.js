import imgAllProducts from '../assets/img/unsplash/frame-9.jpg';
import imgSunglasses from '../assets/img/unsplash/sun-1.jpg';
import imgEyeglasses from '../assets/img/unsplash/frame-7.jpg';

import imgCompressedAllProducts from '../assets/img/unsplash-compressed/frame-9.jpg';
import imgCompressedSunglasses from '../assets/img/unsplash-compressed/sun-1.jpg';
import imgCompressedEyeglasses from '../assets/img/unsplash-compressed/frame-7.jpg';

import { allProductsData, sunglassesData, eyeglassesData } from './productData';

export const allProductsCategoryData = {
  documentTitle: 'COLLECTION | Shop all products - VAROVIS Eyewear Store',
  banner: {
    title: 'All Products',
    description:
      'Featuring our iconic frames, this collection embodies the essence of downtown living, evoking urban energy, creativity, and excitement while ensuring comfort and functionality.',
    img: imgAllProducts,
    imgCompressed: imgCompressedAllProducts,
    imgAlt: 'Female model wearing glasses',
  },
  products: allProductsData,
};

export const eyeglassesCategoryData = {
  documentTitle: 'OPTICAL | Trendy Frames & Styles - VAROVIS Eyewear Store',
  banner: {
    title: 'Optical Shop',
    description:
      'Explore our latest eyeglass frames, offering style and sophistication for every taste.',
    img: imgEyeglasses,
    imgCompressed: imgCompressedEyeglasses,
    imgAlt: 'Male model wearing glasses',
  },
  products: eyeglassesData,
};

export const sunglassesCategoryData = {
  documentTitle: 'SUNGLASSES | Trendy Frames & Styles - VAROVIS Eyewear Store',
  banner: {
    title: 'Shades Store',
    description:
      "Our latest sunglasses blend fashion with function, designed for style, comfort, and durability, perfect for any adventure.",
    img: imgSunglasses,
    imgCompressed: imgCompressedSunglasses,
    imgAlt: 'Female model on boat wearing sunglasses',
  },
  products: sunglassesData,
};
