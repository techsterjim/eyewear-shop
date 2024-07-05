import { useEffect } from 'react';

import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import BlogContent from '../components/BlogContent';
import FeaturedProducts from '../components/FeaturedProducts';
import ScrollToTop from '../components/ScrollToTop';

import blogData from '../data/homePageBlogData';

function HomePage() {
  useEffect(() => {
    document.title = 'VAROVIS Eyewear Online Store';
  }, []);

  return (
    <div className="screen-home">
      <Hero 
        title="Discover Your Perfect Pair"
        subtitle="High-quality eyewear at unbeatable prices"
        imageUrl="/path/to/hero-image.jpg"
      />
      <FeaturedCollection 
        title="Our Featured Collection"
        description="Explore the latest trends in eyewear"
      />
      <BlogContent 
        content={blogData} 
        headerTitle="Latest Posts"
        showReadMore // Boolean attribute written without value
      />
      <FeaturedProducts 
        title="Bestselling Eyewear"
        showRatings // Boolean attribute written without value
      />
      <ScrollToTop />
    </div>
  );
}
export default HomePage;





































