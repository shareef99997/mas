import React, { useState, useEffect, useRef } from 'react';
import './About.css';

function About_en() {
  const [activeSection, setActiveSection] = useState('section1');

  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const selectionSectionRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const buttonRef = useRef(null);

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
  
    const firstSection = firstSectionRef.current;
    const secondSection = secondSectionRef.current;
    const selectionSection = selectionSectionRef.current;
    const h1 = h1Ref.current;
    const p = pRef.current;
    const button = buttonRef.current;
  
    if (firstSection) {
      firstSection.classList.add('hidden');
      firstSection.dataset.animation = 'fade-in-right';
      observer.observe(firstSection);
    }
  
    if (secondSection) {
      secondSection.classList.add('hidden');
      secondSection.dataset.animation = 'fade-in-left';
      observer.observe(secondSection);
    }

    if (selectionSection) {
      selectionSection.classList.add('hidden');
      selectionSection.dataset.animation = 'fade-in-bottom';
      observer.observe(selectionSection);
    }

    if (h1) {
      h1.classList.add('hidden');
      h1.dataset.animation = 'fade-in-bottom';
      observer.observe(h1);
    }
    
    if (p) {
      p.classList.add('hidden');
      p.dataset.animation = 'fade-in-bottom';
      observer.observe(p);
    }

    if (button) {
      button.classList.add('hidden');
      button.dataset.animation = 'fade-in-bottom';
      observer.observe(button);
    }
  
    return () => {
      if (firstSection) observer.unobserve(firstSection);
      if (secondSection) observer.unobserve(secondSection);
      if (selectionSection) observer.unobserve(selectionSection);
      if (h1) observer.unobserve(h1);
      if (p) observer.unobserve(p);
      if (button) observer.unobserve(button);
    };
  }, []);

  useEffect(() => {
    const animateSections = () => {
      const firstSection = firstSectionRef.current;
      const secondSection = secondSectionRef.current;

      if (firstSection) {
        firstSection.classList.remove('fade-in-right');
        void firstSection.offsetWidth; // Trigger reflow
        firstSection.classList.add('hidden', 'fade-in-right');
      }
      if (secondSection) {
        secondSection.classList.remove('fade-in-left');
        void secondSection.offsetWidth; // Trigger reflow
        secondSection.classList.add('hidden', 'fade-in-left');
      }

      setTimeout(() => {
        if (activeSection === 'section1' || activeSection === 'section3') {
          if (firstSection) firstSection.classList.remove('hidden');
          if (secondSection) secondSection.classList.remove('hidden');
        } else if (activeSection === 'section2') {
          if (firstSection) firstSection.classList.remove('hidden');
          if (secondSection) secondSection.classList.remove('hidden');
        }
      }, 0);
    };

    animateSections();
  }, [activeSection]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'section1':
        return (
          <div className="about-top-section">
            <section className="right-section" ref={secondSectionRef}>
              <div className="img-wrapper">
                <img className="About-pic" src={require('../../../Assets/Icons/goals.png')} alt="Goals Icon" />
              </div>
            </section>
            <section className="left-section" ref={firstSectionRef}>
              <p>The Al-Sabah Real Estate System company includes a select group of experienced and internationally professional marketers. It has a large base of clients and investors in the real estate field and is capable of attracting all customer segments through social media platforms. It also has close cooperation with the largest marketing companies and real estate offices in Riyadh to achieve quick clearance and facilitate the sales process (professional marketing management and mastery).</p>
            </section>
          </div>
        );
      case 'section2':
        return (
          <div className="about-top-section">
            <section className="right-section" ref={secondSectionRef}>
              <div className="img-wrapper">
                <img className="About-pic" src={require('../../../Assets/Icons/vision.png')} alt="Vision Icon" />
              </div>
            </section>
            <section className="left-section" ref={firstSectionRef}>
              <p>To become one of the leading companies in managing the real estate marketing sector in Saudi Arabia through quality work that meets the needs of our customers.</p>
            </section>
          </div>
        );
      case 'section3':
        return (
          <div className="about-top-section">
            <section className="right-section" ref={secondSectionRef}>
              <div className="img-wrapper">
                <img className="About-pic" src={require('../../../Assets/Icons/message.png')} alt="Message Icon" />
              </div>
            </section>
            <section className="left-section" ref={firstSectionRef}>
              <p>with a professional real estate broker between the seller and the buyer helps in the success of the real estate transaction. What distinguishes us at Al-Sabah Real Estate System is the quality and professionalism of the real estate marketing product, as we specialize in non-exclusive marketing in collaboration with real estate marketing companies and hundreds of offices managed by professionals that facilitate quick clearance and ensure developer satisfaction. We have the capability to reach a segment of customers interested in the real estate.</p>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="Home-About" id="Home-About">
      <div className="About-Body">
        <div className="" id='about-top-section'>
          <section className="About-title-description">
            <h2 ref={h1Ref}>Al-Sabah Real Estate System</h2>
            <p ref={pRef}>Al-Sabah Real Estate System is a leading company in the field of real estate marketing management, launched in 2018 with remarkable success and experience in real estate mediation and marketing.</p>
            <div className="button-container" ref={buttonRef}>
              <a href="#Services">
                <button>Learn More About Us</button>
              </a>
            </div>
          </section>
        </div>
        <div className="about-bottom-section">
          <div className="info-section">
            {renderContent()}
          </div>
          <div className="selector-section" ref={selectionSectionRef}>
            <button
              className={activeSection === 'section1' ? 'active' : ''}
              onClick={() => handleSectionChange('section1')}
            >
              Our Goals
            </button>
            <button
              className={activeSection === 'section2' ? 'active' : ''}
              onClick={() => handleSectionChange('section2')}
            >
              Our Vision
            </button>
            <button
              className={activeSection === 'section3' ? 'active' : ''}
              onClick={() => handleSectionChange('section3')}
            >
              Our Mission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_en;
