import img1 from '../assets/img/unsplash/store-1.jpg';
import img2 from '../assets/img/unsplash/frame-4.jpg';
import img3 from '../assets/img/unsplash/sun-5.jpg';

import imgComp1 from '../assets/img/unsplash-compressed/store-1.jpg';
import imgComp2 from '../assets/img/unsplash-compressed/frame-4.jpg';
import imgComp3 from '../assets/img/unsplash-compressed/sun-5.jpg';

const blogData = [
  {
    id: 'blog-post-new-loc-tokyo',
    category: 'locations',
    title: "We're opening in Tokyo!",
    description:
      "We're excited to announce our new location in Tokyo! Discover our unique collection of glasses and sunglasses in the heart of the city. We can't wait for you to explore our latest designs.",
    img: img1,
    imgCompressed: imgComp1,
    imgAlt: 'Depiction of the store display of frames',
  },
  {
    id: 'blog-post-meet-family',
    category: 'community',
    title: 'Meet our VAROVIS Family',
    description:
      'At our brand, we place a great emphasis on the value of community and family. From our dedicated team members to our loyal customers, we see everyone as a part of the larger family that makes our brand what it is today.',
    img: img2,
    imgCompressed: imgComp2,
    imgAlt:
      'Black man holding his child and kissing their cheek.',
  },
  {
    id: 'blog-post-events-eye-spy',
    category: 'Notable Events',
    title: 'Eye Spy',
    description:
      'Top Hollywood stars rock our timeless frames, from red carpets to casual outings.',
    img: img3,
    imgCompressed: imgComp3,
    imgAlt:
      'Happy woman wearing sunglasses, flashing peace signs.',
  },
];

export default blogData;
