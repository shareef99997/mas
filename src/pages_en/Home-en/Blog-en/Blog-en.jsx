import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay   } from 'swiper/modules';
import blogData from '../../../pages_ar/Blogs/blogData';
import './Blog-en.css';
import '../sections-en.css';

function Blog_en() {
  return (
    <div className="Home-Blog" id="Home-Blog">
      <h2 className="Blog-section-title section-title-en">
        Blog
      </h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        
        autoplay={{ delay: 3000,disableOnInteraction: false, }}
        speed={1000}
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView:2,
          },
        }}
        className="Blog-Section"
      >
        {blogData.map(blog => (
          <SwiperSlide key={blog.id} className="Blog-Box">
            <img src={blog.image} alt={blog.title}className="Blog-Image" /> 
              <div className='Blog-Box-content'>
                <div className="Blog-Date">{blog.date}</div>
                <div className="Blog-Title">{blog.title}</div>
                <div className="Blog-Paragraph">{blog.paragraph.substring(0, 100)}...</div>
                <button className="Blog-Button"> Show Article </button>
              </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Blog_en;
