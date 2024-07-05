import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';

import ImageWrapper from '../components/ImageWrapper';
import BlogContent from '../components/BlogContent';
import ScrollToTop from '../components/ScrollToTop';

import blogData from '../data/aboutPageBlogData';

import mainImg1 from '../assets/img/unsplash/frame-13.jpg';
import mainImg2 from '../assets/img/unsplash/frame-10.jpg';
import mainImg3 from '../assets/img/unsplash/sun-11.jpg';

import mainImgComp1 from '../assets/img/unsplash-compressed/frame-13.jpg';
import mainImgComp2 from '../assets/img/unsplash-compressed/frame-10.jpg';
import mainImgComp3 from '../assets/img/unsplash-compressed/sun-11.jpg';

import eyecareImg from '../assets/img/unsplash/store-7.jpg';
import eyecareImgComp from '../assets/img/unsplash-compressed/store-7.jpg';

function AboutPage() {
  useEffect(() => {
    document.title = 'The VAROVIS Experience | VAROVIS Eyewear Online Store';
  }, []);

  return (
    <main className="story">
      <section className="story-header">
        <h1 className="story-header__title">Vision for Superior Eyewear</h1>
        <p className="story-header__text">
          With a range of unique styles and color options, we are confident 
          that our collection has something With a focus on both comfort 
          and functionality, our products are exquisitely designed to meet 
          the latest fashion trends. Providing a variety of styles and colors, 
          we are confident that our collection will meet every taste and style.
        </p>
        <p className="story-header__text">
          Each frame is crafted with precision, utilizing high-quality materials 
          and cutting-edge technology. With VAROVIS frames, you&apos;ll be able to 
          put your best foot forward.
        </p>
      </section>

      <section className="story-main">
        <ImageWrapper className="story-main__panel panel-1">
          <ProgressiveImage src={mainImg1} placeholder={mainImgComp1}>
            {(src, loading) => (
              <img
                src={src}
                alt="Guy in office wearing glasses and a denim jacket"
                className={`story-main__img ${loading && 'img--loading'}`}
                loading="lazy"
              />
            )}
          </ProgressiveImage>
        </ImageWrapper>
        <div className="story-main__panel panel-2 about-us">
          <h2 className="story-main__title">About us</h2>
          <p className="story-main__text">
            It all began with a simple goal: to craft top-notch, stylish 
            glasses that help people express themselves confidently.
          </p>
          <p className="story-main__text">
            With a team of passionate designers and eyewear enthusiasts, 
            we strive to create frames that are both durable and stylish.
          </p>
          <p className="story-main__text">
            With a focus on comfort and functionality, we exquisitely 
            design our products to meet the latest fashion trends. 
            Providing a variety of styles and colors, we are confident 
            that our collection will meet every taste and style.
          </p>
          <Link to="/products/" className="story-main__btn-link">
            Browse Products
          </Link>
        </div>
        <div className="story-main__panel panel-3 eyeglasses">
          <h2 className="story-main__title">Eyewear For Everyone</h2>
          <p className="story-main__text">
            At VAROVIS, we think everyone should have stylish, 
            affordable eyewear. That&apos;s why we create trendy frames 
            that everyone can enjoy.
          </p>
          <p className="story-main__text">
            From classic to modern styles, our frames are made to 
            fit all tastes and preferences, so our customers can 
            easily find the right pair of glasses.
          </p>
          <p className="story-main__text">
            Accessibility is our top priority, and we&apos;re proud to 
            help folks worldwide see better and look their best—
            it&apos;s what drives everything we do!
          </p>
          <Link to="/products/eyeglasses" className="story-main__btn-link">
            Browse Frames
          </Link>
        </div>
        <ImageWrapper className="story-main__panel panel-4">
          <ProgressiveImage src={mainImg2} placeholder={mainImgComp2}>
            {(src, loading) => (
              <img
                src={src}
                alt="Woman wearing round eyeglasses and a beige cape"
                className={`story-main__img ${loading && 'img--loading'}`}
                loading="lazy"
              />
            )}
          </ProgressiveImage>
        </ImageWrapper>
        <ImageWrapper className="story-main__panel panel-5">
          <ProgressiveImage src={mainImg3} placeholder={mainImgComp3}>
            {(src, loading) => (
              <img
                src={src}
                alt="Guy wearing vintage round sunglasses and a printed shirt"
                className={`story-main__img ${loading && 'img--loading'}`}
                loading="lazy"
              />
            )}
          </ProgressiveImage>
        </ImageWrapper>
        <div className="story-main__panel panel-6 sunglasses">
          <h2 className="story-main__title">Responsible Shade</h2>
          <p className="story-main__text">
            We are dedicated to creating a positive impact on our 
            world. As a responsible business, we believe in giving 
            back to the communities we serve and in safeguarding 
            the planet we all share.
          </p>
          <p className="story-main__text">
            From using sustainable materials and manufacturing practices to
            supporting local charities and non-profits, we are constantly
            striving to make a difference.
          </p>
          <p className="story-main__text">
            When you choose our brand, you are not just getting a pair of
            stylish and functional glasses - you are also joining us in our
            commitment to making a positive impact on the world.
          </p>
          <Link to="/products/sunglasses" className="story-main__btn-link">
            Browse Shades
          </Link>
        </div>
      </section>

      <section className="story-eyecare">
        <div className="story-eyecare__info">
          <h3 className="story-eyecare__title">
            Our dedication to providing top-notch eye care
          </h3>
          <p className="story-eyecare__text">
            Because we believe everyone deserves top-notch eye care, 
            we&apos;ve partnered with several organizations to promote 
            awareness and fund programs that provide vision care to 
            those in need.
          </p>
          <p className="story-eyecare__text">
            With each purchase, we offer instructional materials 
            and support aimed at helping our customers maintain 
            excellent eye health for years to come.
          </p>

          <Link to="/eyecare" className="story-eyecare__link">
            Learn more
          </Link>
        </div>
        <ImageWrapper className="story-eyecare__img-wrapper">
          <ProgressiveImage src={eyecareImg} placeholder={eyecareImgComp}>
            {(src, loading) => (
              <img
                src={src}
                alt="Guy wearing vintage round sunglasses and a printed shirt"
                className={`story-eyecare__img ${loading && 'img--loading'}`}
                loading="lazy"
              />
            )}
          </ProgressiveImage>
        </ImageWrapper>
      </section>

      <BlogContent
        content={blogData}
        headerTitle="An online eyeglasses community rooted in the values of a close-knit neighborhood"
      />

      <section className="story-visit">Visit us</section>
      <ScrollToTop />
    </main>
  );
}
export default AboutPage;
