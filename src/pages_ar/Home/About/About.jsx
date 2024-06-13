import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [activeSection, setActiveSection] = useState('section1');

  useEffect(() => {
    const sections = ['section1', 'section2', 'section3'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % sections.length;
      setActiveSection(sections[index]);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'section1':
        return (
          <div className="about-top-section">
            <section className="right-section">
              <div className="img-wrapper">
                <img className="About-pic" src={require('../../../Assets/Icons/goals.png')} alt="Section 1 Image" />
              </div>
            </section>
            <section className="left-section">
              <p>تضم شركة منظومة الصباح العقارية نخبة من المسوقين ذوي الخبرة والاحترافية العالمية، ولديها قاعدة كبيرة من العملاء والمستثمرين في المجال العقاري، كما أنها قادرة على جذب كافة أطياف العملاء عبر مواقع التواصل الاجتماعي، كما أن لديها تعاون وثيق مع أكبر الشركات التسويقية والمكاتب العقارية في أنحاء الرياض بهدف الوصول لسرعة إفراغ وتسهيل عملية البيع (إدارة تسويق باحترافية وإتقان).</p>
            </section>
          </div>
        );
      case 'section2':
        return (
          <div className="about-top-section">
            <section className="right-section">
              <div className="img-wrapper">
                <img className="About-pic" src={require('../../../Assets/Icons/vision.png')} alt="Section 2 Image" />
              </div>
            </section>
            <section className="left-section">
              <p>هي ان نصبح واحدة من الشركات الرائدة في إدارة مجال التسويق العقاري في المملكة العربية السعودية من خلال جودة العمل والتي تلبي إحتياجات عملائنا</p>
            </section>
          </div>
        );
      case 'section3':
        return (
          <div className="about-top-section">
            <section className="right-section">
              <div className="img-wrapper">
                <img className="About-pic" src={require('../../../Assets/Icons/message.png')} alt="Section 3 Image" />
              </div>
            </section>
            <section className="left-section">
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
        <div className="" id="about-top-section">
          <section className="About-title-description">
            <h2>منظومة الصباح العقارية</h2>
            <p>شركة منظومة الصباح العقارية شركة رائدة في مجال إدارة التسويق العقاري انطلقت عام 2018 ولديها خبرة ونجاح باهر في مجال الوساطة العقارية والتسويق العقاري</p>
            <div className="button-container">
              <a href="#Services">
                <button alt="#Services">تعرف علينا</button>
              </a>
            </div>
          </section>
        </div>
        <div className="about-bottom-section">
          <div className="info-section">
            {renderContent()}
          </div>
          <div className="selector-section">
            <button
              className={activeSection === 'section1' ? 'active' : ''}
              onClick={() => setActiveSection('section1')}
            >
              اهدافنا
            </button>
            <button
              className={activeSection === 'section2' ? 'active' : ''}
              onClick={() => setActiveSection('section2')}
            >
              رؤيتنا
            </button>
            <button
              className={activeSection === 'section3' ? 'active' : ''}
              onClick={() => setActiveSection('section3')}
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
