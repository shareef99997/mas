import React, { useState, useEffect, useRef } from 'react';
import './About-section.css';

function About() {
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
      firstSection.dataset.animation = 'fade-in-left';
      observer.observe(firstSection);
    }
  
    if (secondSection) {
      secondSection.classList.add('hidden');
      secondSection.dataset.animation = 'fade-in-right';
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
        firstSection.classList.remove('fade-in-left');
        void firstSection.offsetWidth; // Trigger reflow
        firstSection.classList.add('hidden', 'fade-in-left');
      }
      if (secondSection) {
        secondSection.classList.remove('fade-in-right');
        void secondSection.offsetWidth; // Trigger reflow
        secondSection.classList.add('hidden', 'fade-in-right');
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
            <section className="right-section" ref={firstSectionRef}>
              <div className="img-wrapper">
                <img className="About-pic" src={require('../../../Assets/Icons/goals.png')} alt="Goals Icon" />
              </div>
            </section>
            <section className="left-section" ref={secondSectionRef}>
              <p>تضم شركة منظومة الصباح العقارية نخبة من المسوقين ذوي الخبرة والاحترافية العالمية، ولديها قاعدة كبيرة من العملاء والمستثمرين في المجال العقاري، كما أنها قادرة على جذب كافة أطياف العملاء عبر مواقع التواصل الاجتماعي، كما أن لديها تعاون وثيق مع أكبر الشركات التسويقية والمكاتب العقارية في أنحاء الرياض بهدف الوصول لسرعة إفراغ وتسهيل عملية البيع (إدارة تسويق باحترافية وإتقان).</p>
            </section>
          </div>
        );
      case 'section2':
        return (
          <div className="about-top-section">
            <section className="right-section" ref={firstSectionRef}>
              <div className="img-wrapper">
                <img className="About-pic" src={require('../../../Assets/Icons/vision.png')} alt="Vision Icon" />
              </div>
            </section>
            <section className="left-section" ref={secondSectionRef}>
              <p>هي ان نصبح واحدة من الشركات الرائدة في إدارة مجال التسويق العقاري في المملكة العربية السعودية من خلال جودة العمل والتي تلبي إحتياجات عملائنا</p>
            </section>
          </div>
        );
      case 'section3':
        return (
          <div className="about-top-section">
            <section className="right-section" ref={firstSectionRef}>
              <div className="img-wrapper">
                <img className="About-pic" src={require('../../../Assets/Icons/message.png')} alt="Message Icon" />
              </div>
            </section>
            <section className="left-section" ref={secondSectionRef}>
              <p>وجود وسيط عقاري محترف بين البائع والمشتري يساعد بشكل كبير في إنجاح الصفقة العقارية. وما يميزنا في شركة منظومة الصباح العقارية هو جودة واحترافية منتج التسويق العقاري، حيث إننا نتميز بالتسويق غير الحصري بالتعاون مع شركات تسويق عقارية ومئات المكاتب بإدارة محترفة تسهل سرعة إفراغ وكسب رضا المطور. ولدينا القدرة للوصول لأكبر شريحة من العملاء المهتمين بالمجال العقاري.</p>
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
        
        <div className="about-bottom-section">
          <div className="info-section">
            {renderContent()}
          </div>
          <div className="selector-section" ref={selectionSectionRef}>
            <button
              className={activeSection === 'section1' ? 'active' : ''}
              onClick={() => handleSectionChange('section1')}
            >
              اهدافنا
            </button>
            <button
              className={activeSection === 'section2' ? 'active' : ''}
              onClick={() => handleSectionChange('section2')}
            >
              رؤيتنا
            </button>
            <button
              className={activeSection === 'section3' ? 'active' : ''}
              onClick={() => handleSectionChange('section3')}
            >
              رسالتنا
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
