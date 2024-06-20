import React, { useEffect, useRef } from 'react';
import './Services.css';
import Workflow from './Workflow';

function Services_en() {

  const titleRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

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

    if (title) {
      title.classList.add('hidden');
      title.dataset.animation = 'fade-in-right';
      observer.observe(title);
    }

    if (section1) {
      section1.classList.add('hidden');
      section1.dataset.animation = 'fade-in-up';
      observer.observe(section1);
    }

    if (section2) {
      section2.classList.add('hidden');
      section2.dataset.animation = 'fade-in-left';
      observer.observe(section2);
    }

    return () => {
      if (title) observer.unobserve(title);
      if (section1) observer.unobserve(section1);
      if (section2) observer.unobserve(section2);
    };
  }, []);

  return (
    <div className="Home-Services" id="Home-Services" >
      <h2 className='section-title-en' ref={titleRef}> What do we offer you? </h2>
      <body className='Home-Services-body'>

        <div className='Home-Services-Section' ref={section1Ref}>

          <div className='Service-Box'>
            <div className='Service-Title Service-Title-1'>
              <h2> Real Estate Marketing </h2>
            </div>
            <div className='Service-Description'>
              <p> Having a professional real estate broker between the seller and the buyer greatly helps in making the real estate deal successful. What distinguishes us at Al-Sabah Real Estate Company is the quality and professionalism of the real estate marketing product. We are distinguished by non-exclusive marketing in cooperation with real estate marketing companies and hundreds of offices with professional management that facilitates the speed of vacating and gaining the developer's satisfaction.  </p>
              <a href="/services"> Learn more <span> &larr; </span></a>
            </div>
          </div>
          <div className='Service-Box'>
            <div className='Service-Title Service-Title-2'>
              <h2> Real Estate Marketing </h2>
            </div>
            <div className='Service-Description'>
              <p> Having a professional real estate broker between the seller and the buyer greatly helps in making the real estate deal successful. What distinguishes us at Al-Sabah Real Estate Company is the quality and professionalism of the real estate marketing product. We are distinguished by non-exclusive marketing in cooperation with real estate marketing companies and hundreds of offices with professional management that facilitates the speed of vacating and gaining the developer's satisfaction. </p>
              <a href="/services"> Learn more <span> &larr; </span></a>
            </div>
          </div>
          <div className='Service-Box'>
            <div className='Service-Title Service-Title-3'>
              <h2> Real Estate Marketing </h2>
            </div>
            <div className='Service-Description'>
              <p> Having a professional real estate broker between the seller and the buyer greatly helps in making the real estate deal successful. What distinguishes us at Al-Sabah Real Estate Company is the quality and professionalism of the real estate marketing product. We are distinguished by non-exclusive marketing in cooperation with real estate marketing companies and hundreds of offices with professional management that facilitates the speed of vacating and gaining the developer's satisfaction.  </p>
              <a href="/services"> Learn more <span> &larr; </span></a>
            </div>
          </div>
          <div className='Service-Box'>
            <div className='Service-Title Service-Title-4'>
              <h2> Real Estate Marketing </h2>
            </div>
            <div className='Service-Description'>
              <p> Having a professional real estate broker between the seller and the buyer greatly helps in making the real estate deal successful. What distinguishes us at Al-Sabah Real Estate Company is the quality and professionalism of the real estate marketing product. We are distinguished by non-exclusive marketing in cooperation with real estate marketing companies and hundreds of offices with professional management that facilitates the speed of vacating and gaining the developer's satisfaction.  </p>
              <a href="/services"> Learn more <span> &larr; </span></a>
            </div>
          </div>

        </div>
        
        <Workflow/>
      </body>
      
    </div>
  );
}

export default Services_en;
