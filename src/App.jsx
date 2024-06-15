/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Home from './pages_ar/Home/Home.jsx';
import AboutUs from './pages_ar/About-us/About-us'; 
import Services from './pages_ar/Services/Services';
import Work from './pages_ar/Work/Work';
import JoinUs from './pages_ar/Join-us/Join-us';
import ContactUs from './pages_ar/Contact-us/Contact-us';

import HOME_EN from './pages_en/Home-en/Home-en.jsx';
import ABOUTUS_EN from './pages_en/About-us-en/About-us-en.jsx'; 
import SERVICES_EN from './pages_en/Services-en/Services-en.jsx';
import JOINUS_EN from './pages_en/Join-us-en/Join-us-en.jsx';
import CONTACTUS_EN from './pages_en/Contact-us-en/Contact-us-en.jsx';

import React, { useState, useEffect } from 'react';
import WORK_EN from './pages_en/Home-en/Work-en/Work-en.jsx';


function App() {

  const [scrolled, setScrolled] = useState(false);

  const scrollToHeader = () => {
    const header = document.getElementById('Header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 400); // You can adjust the scroll offset value as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const renderPage = () => {
    const path = window.location.pathname;
    switch (path) {
      case '/about-us':
        return <AboutUs />;
      case '/services':
        return <Services />;
      case '/Work':
        return <Work />;
      case '/join-us':
        return <JoinUs />;
      case '/contact-us':
        return <ContactUs />;

        
      case '/en/':
        return <HOME_EN />;
      case '/en/about-us':
        return <ABOUTUS_EN />;
      case '/en/services':
        return <SERVICES_EN />;
      case '/en/Work':
        return <WORK_EN />;
      case '/en/join-us':
        return <JOINUS_EN />;
      case '/en/contact-us':
        return <CONTACTUS_EN />;
      case '/':
      default:
        return <Home />;
    }
  };

  return (
    <div className="Home">
      {renderPage()}
      <button className={`up-arrow ${scrolled ? 'scrolled-arrow' : ''}`} onClick={scrollToHeader}>
        <div className="arrow-button">
          <img src={require('./Assets/Icons/up-arrow.png')} alt="Up Arrow" />
        </div>
      </button>
    </div>
  );
}

export default App;
