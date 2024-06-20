import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import './Partners.css';
import '../sections.css';

function Partners() {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const numbersRef = useRef(null);
  const counters = useRef([100, 8, 800]);
  const [startCount, setStartCount] = useState(false);

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

    const numberObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setStartCount(true);
            numberObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const title = titleRef.current;
    const section = sectionRef.current;
    const numbers = numbersRef.current;

    if (title) {
      title.classList.add('hidden');
      title.dataset.animation = 'fade-in-right';
      observer.observe(title);
    }

    if (section) {
      section.classList.add('hidden');
      section.dataset.animation = 'fade-in-left';
      observer.observe(section);
    }

    if (numbers) {
      numberObserver.observe(numbers);
    }

    return () => {
      if (title) observer.unobserve(title);
      if (section) observer.unobserve(section);
      if (numbers) numberObserver.unobserve(numbers);
    };
  }, []);

  return (
    <div className="Home-Partners" id="Home-Partners">
      <h2 className="partners-section-title section-title" ref={titleRef}>شركاء النجاح</h2>
      <div className='Partners-Section'>
        <div className='carousel'>
          <div className="logos" ref={sectionRef}>
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 1' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 2' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 3' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 4' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 5' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 6' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 7' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 8' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 9' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 10' />
          </div>
        </div>
      </div>
      <div className='Numbers-section' ref={numbersRef}>
        {['الرقم الأول', 'الرقم الثاني', 'الثالث الأول'].map((title, index) => (
          <div className='number-square' key={index}>
            <h3 className='container-title'>{title}</h3>
            <div className='number-container'>
              <div className='numbers'>
                {startCount && (
                  <CountUp className='countup' start={0} end={counters.current[index]} duration={3.5} />
                )}
              </div>
              <span>+</span>
            </div>

            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
