import React, { useState, useEffect ,useRef } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const Work = () => {
  const initialVisibleItems = 8;
  const step = 8;
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const [delayedVisibleItems, setDelayedVisibleItems] = useState(initialVisibleItems);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const titleRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  
 useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.animation);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const title = titleRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;


    if (title) {
      title.classList.add('hidden');
      title.dataset.animation = 'fade-in-left';
      observer.observe(title);
    }

    if (section1) {
      section1.classList.add('hidden');
      section1.dataset.animation = 'fade-in-up';
      observer.observe(section1);
    }

    if (section2) {
      section2.classList.add('hidden');
      section2.dataset.animation = 'fade-in-up';
      observer.observe(section2);
    }

    if (section3) {
      section3.classList.add('hidden');
      section3.dataset.animation = 'fade-in-up';
      observer.observe(section3);
    }



    return () => {
      if (title) observer.unobserve(title);
      if (section1) observer.unobserve(section1);
      if (section2) observer.unobserve(section2);
      if (section3) observer.unobserve(section3);
    };
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setVisibleItems(initialVisibleItems);
    setDelayedVisibleItems(0);
    setTimeout(() => setDelayedVisibleItems(initialVisibleItems), 10);
  };

  const showMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + step);
    setTimeout(() => setDelayedVisibleItems(prevVisibleItems => prevVisibleItems + step), 0);
  };

  const showLessItems = (e) => {
    e.preventDefault();
    const currentScrollY = window.scrollY;
    setVisibleItems(prevVisibleItems => Math.max(prevVisibleItems - step, initialVisibleItems));
    setTimeout(() => setDelayedVisibleItems(prevVisibleItems => Math.max(prevVisibleItems - step, initialVisibleItems)), 0);
    window.scrollTo(0, currentScrollY);
  };

  const handleImageClick = (index) => {
    const filteredImages = filteredItems.map(item => ({
      original: item.src,
      thumbnail: item.src,
      originalAlt: item.category,
      thumbnailAlt: item.category
    }));
    setLightboxImages(filteredImages);
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const portfolioItems = [
    { id: 1, category: 'Villas', src: require('../../../Assets/Pages-images/Home_Slider3.jpg') },
    { id: 2, category: 'Villas', src: require('../../../Assets/Pages-images/Home_Slider3.jpg') },
    { id: 3, category: 'Villas', src: require('../../../Assets/Pages-images/Home_Slider3.jpg') },
    { id: 4, category: 'Villas', src: require('../../../Assets/Pages-images/Home_Slider3.jpg') },
    { id: 5, category: 'Apartments', src: require('../../../Assets/Pages-images/Home_Slider2.jpg') },
    { id: 6, category: 'Apartments', src: require('../../../Assets/Pages-images/Home_Slider2.jpg') },
    { id: 7, category: 'Apartments', src: require('../../../Assets/Pages-images/Home_Slider2.jpg') },
    { id: 8, category: 'Apartments', src: require('../../../Assets/Pages-images/Home_Slider2.jpg') },
    { id: 9, category: 'Apartments', src: require('../../../Assets/Pages-images/Home_Slider2.jpg') },
    { id: 10, category: 'Offices', src: require('../../../Assets/Pages-images/Home_Slider1.jpg') },
    { id: 11, category: 'Offices', src: require('../../../Assets/Pages-images/Home_Slider1.jpg') },
    { id: 12, category: 'Offices', src: require('../../../Assets/Pages-images/Home_Slider1.jpg') },
    { id: 13, category: 'Others', src: require('../../../Assets/Pages-images/Home_Slider4.jpg') },
    { id: 14, category: 'Others', src: require('../../../Assets/Pages-images/Home_Slider4.jpg') },
  ];

  const filteredItems = activeFilter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="Home-Work" id="Home-Work">
      <h2 className="Work-section-title section-title-en" ref={titleRef}>Our Work</h2>
      <div className='Work-section-filter'></div>
      <ul className="portfolio-filter" ref={section1Ref}>
        <li className={`list ${activeFilter === 'All' ? 'portfolio-filter-active' : ''}`} onClick={() => handleFilterClick('All')} data-filter="All">All</li>
        <li className={`list ${activeFilter === 'Villas' ? 'portfolio-filter-active' : ''}`} onClick={() => handleFilterClick('Villas')} data-filter="Villas">Villas</li>
        <li className={`list ${activeFilter === 'Apartments' ? 'portfolio-filter-active' : ''}`} onClick={() => handleFilterClick('Apartments')} data-filter="Apartments">Apartments</li>
        <li className={`list ${activeFilter === 'Offices' ? 'portfolio-filter-active' : ''}`} onClick={() => handleFilterClick('Offices')} data-filter="Offices">Offices</li>
        <li className={`list ${activeFilter === 'Others' ? 'portfolio-filter-active' : ''}`} onClick={() => handleFilterClick('Others')} data-filter="Others">Others</li>
      </ul>
      <div className="portfolio-container"ref={section2Ref}>
        {filteredItems.slice(0, visibleItems).map((item, index) => (
          <div key={item.id} className={`portfolio-box ${item.category} ${index < delayedVisibleItems ? 'show' : ''}`} onClick={() => handleImageClick(index)}>
            <img alt="" src={item.src} />
          </div>
        ))}
      </div>
      <div className="buttons-container" ref={section3Ref}>
        {visibleItems < filteredItems.length && (
          <button className="show-button" onClick={showMoreItems}>Show More</button>
        )}
        {visibleItems > initialVisibleItems && (
          <button className="show-button" onClick={showLessItems}>Show Less</button>
        )}
      </div>
      {lightboxOpen && (
        <div className="lightbox-container">
          <div className="close-button" onClick={closeLightbox}>
            X
          </div>
          <ImageGallery
            items={lightboxImages}
            startIndex={photoIndex}
            onClose={closeLightbox}
            showThumbnails={true}
            showPlayButton={false}
            showFullscreenButton={true}
            lazyLoad={true}
            useBrowserFullscreen={false}
          />
        </div>
      )}
    </div>
  );
};

export default Work;
