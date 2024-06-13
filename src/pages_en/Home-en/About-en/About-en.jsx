import React, { useState } from 'react';
import './About.css';

function About_en() {
  const [activeSection, setActiveSection] = useState('section1');

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
              <p>The Al-Sabah Real Estate System company includes a select group of experienced and internationally professional marketers. It has a large base of clients and investors in the real estate field and is capable of attracting all customer segments through social media platforms. It also has close cooperation with the largest marketing companies and real estate offices in Riyadh to achieve quick clearance and facilitate the sales process (professional marketing management and mastery).</p>
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
              <p>To become one of the leading companies in managing the real estate marketing sector in Saudi Arabia through quality work that meets the needs of our customers.</p>
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
        <div className="about-top-section">
          <section className="About-title-description">
            <h2>Al-Sabah Real Estate System</h2>
            <p>Al-Sabah Real Estate System is a leading company in the field of real estate marketing management, launched in 2018 with remarkable success and experience in real estate mediation and marketing.</p>
            <div className="button-container">
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
          <div className="selector-section">
            <button
              className={activeSection === 'section1' ? 'active' : ''}
              onClick={() => setActiveSection('section1')}
            >
              Our Goals
            </button>
            <button
              className={activeSection === 'section2' ? 'active' : ''}
              onClick={() => setActiveSection('section2')}
            >
              Our Vision
            </button>
            <button
              className={activeSection === 'section3' ? 'active' : ''}
              onClick={() => setActiveSection('section3')}
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
