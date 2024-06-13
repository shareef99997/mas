import React, { useRef } from 'react';
import './Header.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, EffectFade } from 'swiper/modules';
import NAVBAR from './NavBar';

function Header() {
  const slides = [
    {
      img: require('./../../../Assets/Pages-images/Home_Slider1.jpg'),
      text: "نخبة من المسوقين ذوي الخبرة واحترافية العالمية"
    },
    {
      img: require('./../../../Assets/Pages-images/Home_Slider2.jpg'),
      text: " قاعدة كبيرة من العملاء والمستثمرين في المجال العقاري  "
    },
    {
      img: require('./../../../Assets/Pages-images/Home_Slider3.jpg'),
      text: " حلول عقارية متميزة تقوم على اسس علمية وعملية "
    },
    {
      img: require('./../../../Assets/Pages-images/Home_Slider4.jpg'),
      text: " أحدث النظم المستخدمة في مجال الخدمات العقارية "
    }
  ];

  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    const activeSlide = swiperRef.current.swiper.slides[swiperRef.current.swiper.activeIndex];
    const overlay = activeSlide.querySelector('.overlay');
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.701)'; // Reset background color
    overlay.style.opacity = '0'; // Initially set overlay to transparent
    setTimeout(() => {
      overlay.style.opacity = '1'; // Gradually change overlay to dark
    }, 500);
    const textElement = activeSlide.querySelector('.slide-text');
    textElement.classList.remove('slide-in');
    void textElement.offsetWidth; // Trigger reflow
    setTimeout(() => {
      textElement.classList.add('slide-in'); // Gradually change overlay to dark
    }, 500);
    
  };

  return (
    <header className="Home-Header" id="Header">
      <NAVBAR currentPage="home" />

      <div className="img-slider">
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5500, // 5.5 seconds delay between slides
            disableOnInteraction: false,
          }}
          effect="fade" // Use the fade effect
          fadeEffect={{ crossFade: true }} // Configure cross-fade
          modules={[Autoplay, EffectFade]} // Include required modules
          onSlideChange={handleSlideChange}
          speed={1000}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <div className='overlay'></div>
                <img className="Header-pic" src={slide.img} alt={`Header  ${index + 1}`} />
                <p className="slide-text slide-in">{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='Header-Content'>
        <h1> عنوان الصفحة الأولى </h1>
        <a href="#Home-About">
          <button className="Header-Button"> إبدأ الآن </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
