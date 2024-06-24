import React, { useState, useEffect } from 'react';
import './NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function NavBar_en({ currentPage }) {
 
  const [menuOpen, setMenuOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };
  

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="main-nav">
      <div className="top-bar">
        <div className="right-side">
          <div className="phone-number">
            <a href="tel:+966582635947">966582635947+</a>
          </div>
          <div className="email">
            <a href="mailto:info@example.com">info@example.com</a>
          </div>
          <div className="social-media">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="left-side">
          <div className="date-time">
            {dateTime.toLocaleString()}
          </div>
          <div className="lang">
            <button className="en">
              <a href="/"><i className="fas fa-globe"></i> العربية </a>
            </button>
          </div>
        </div>
      </div>
      <div className="nav-content">
        <div className="logo">
          <a href="/">
            <img src={require('../../../Assets/Logo/LOGO.png')} alt="Main Logo" />
          </a>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
          <li className={`${currentPage === 'home' ? 'active' : ''}`}>
            <a href="/">Home</a>
          </li>
          <li className={`${currentPage === 'about-us' ? 'active' : ''}`}>
            <a href="/about-us">About Us</a>
          </li>
          <li className={`${currentPage === 'services' ? 'active' : ''}`}>
            <a href="#Home-Services">Services</a>
          </li>
          <li className={`${currentPage === 'Work' ? 'active' : ''}`}>
            <a href="#Home-Work">Properties</a>
          </li>
          <li className={`${currentPage === 'Blog' ? 'active' : ''}`}>
            <a href="#Home-Blog"> Blog </a>
          </li>
          <li className={`${currentPage === 'join-us' ? 'active' : ''}`}>
            <a href="/join-us">Join Us</a>
          </li>
          <li className={`${currentPage === 'contact-us' ? 'active' : ''}`}>
            <a href="/contact-us">Contact Us</a>
          </li>
          <a className='nav-btn' href="#Home-Interest">
            <button className="Interest-btn navbtn">Register Your Interest</button>
          </a>
        </ul>

        <div className="interest-button">
          <a href="#Home-Interest">
            <button className="Interest-btn ">Register Your Interest</button>
          </a>
        </div>

        <div className={`burger-menu ${menuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar_en;
