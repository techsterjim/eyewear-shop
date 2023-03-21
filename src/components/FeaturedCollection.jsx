import { Link } from 'react-router-dom';

import img1 from '../assets/img/unsplash/ad-3.jpg';
import img2 from '../assets/img/unsplash/frame-12.jpg';

function FeaturedCollection() {
  return (
    <section className="featured-coll">
      <div className="featured-coll__col-1">
        <div className="featured-coll__text-wrapper">
          <h4 className="featured-coll__title">Collection</h4>
          <p className="featured-coll__details">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
            voluptates neque commodi optio, minima incidunt, consequatur a quia
            repudiandae nostrum perferendis.
          </p>
          <Link to="/products" className="featured-coll__link">
            FIND OUT NOW
          </Link>
        </div>
        <img
          src={img2}
          alt="Sample of a model"
          className="featured-coll__img model"
        />
      </div>
      <div className="featured-coll__col-2">
        <img
          src={img1}
          alt="Sample of an ad in the featured collection"
          className="featured-coll__img main"
        />
        <button type="button" className="featured-coll__button">
          <Link to="/products">SEE THE COLLECTION</Link>
        </button>
      </div>
    </section>
  );
}
export default FeaturedCollection;