import img1 from '../assets/img/unsplash/frame-16.jpg';
import img2 from '../assets/img/unsplash/store-5.jpg';
import img3 from '../assets/img/unsplash/frame-2.jpg';

import imgComp1 from '../assets/img/unsplash-compressed/frame-16.jpg';
import imgComp2 from '../assets/img/unsplash-compressed/store-5.jpg';
import imgComp3 from '../assets/img/unsplash-compressed/frame-2.jpg';

const blogData = [
  {
    id: 'blog-post-dogs-glasses',
    category: 'feel good',
    title: 'Gallery of dogs wearing glasses',
    description:
      "Dogs of all breeds and sizes are embracing a fun and playful trend, from classic aviators to colorful frames, making a bold fashion statement that cannot be ignored.",
    img: img1,
    imgCompressed: imgComp1,
    imgAlt: 'Black pug in a grey sweater wearing round glasses',
  },
  {
    id: 'blog-post-take-care-of-eyes-teenager',
    category: 'proper eyecare',
    title: 'How to take care of your eyes as a teenager',
    description:
      'Our experts share insights on various healthy habits, from adequate sleep to balanced nutrition, aimed at preventing eye strain, maintaining healthy vision, and reducing the risk of long-term eye issues.',
    img: img2,
    imgCompressed: imgComp2,
    imgAlt:
      'Glasses in front of a blurred eye test, with the part inside the lens clear and non-blurry',
  },
  {
    id: 'blog-post-eye-doctor-asia',
    category: 'legacy',
    title: 'The eye doctor who traveled across Asia',
    description:
      "An eye doctor's journey to remote Asian villages, providing essential eye care to children. ",
    img: img3,
    imgCompressed: imgComp3,
    imgAlt: 'Elderly eye doctor wearing clear frames',
  },
];

export default blogData;
