import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';

import ScrollToTop from '../components/ScrollToTop';
import ImageWrapper from '../components/ImageWrapper';
import dogPicture from '../assets/img/unsplash/frame-11.jpg';
import dogPictureCompressed from '../assets/img/unsplash-compressed/frame-11.jpg';

function UnderConstruction() {
  useEffect(() => {
    document.title = '404 Not Found - VAROVIS Eyewear Online Store';
  }, []);

  return (
    <div className="tbd">
      <span className="tbd__404">404 - ERROR</span>
      <h1 className="tbd__title">OOPS!</h1>
      <div className="tbd__img--wrapper">
        <ImageWrapper>
          <ProgressiveImage src={dogPicture} placeholder={dogPictureCompressed}>
            {(src, loading) => (
              <img
                src={src}
                alt="A golden retriever wearing glasses"
                className={`tbd__img ${loading && 'img--loading'}`}
              />
            )}
          </ProgressiveImage>
        </ImageWrapper>
      </div>
      <h3 className="tbd__subtitle">This is awkward...</h3>
      <p className="tbd__text">
        Oops! It looks like you&apos;ve wandered off the beaten path. The page 
        you were looking for may have been moved, deleted, or doesn&apos;t exist. 
        Don&apos;t worry, let&apos;s get you back on track. You can return to our 
        homepage to explore more, or contact our support team if you need 
        further assistance. We apologize for any inconvenience. Here is 
        a picture of a dog with glasses instead.
      </p>
      <p className="tbd__text">Try the links below!</p>
      <div className="tbd__btn-container">
        <Link
          to="/"
          className="tbd__btn
        "
        >
          HOME
        </Link>
        <Link
          to="/products"
          className="tbd__btn
        "
        >
          SHOP ALL
        </Link>
        <Link
          to="/products/eyeglasses"
          className="tbd__btn
        "
        >
          SHOP OPTICAL
        </Link>
        <Link
          to="/products/sunglasses"
          className="tbd__btn
        "
        >
          SHOP SUNNIES
        </Link>
      </div>
      <ScrollToTop />
    </div>
  );
}
export default UnderConstruction;
