import React, { useEffect, useRef } from 'react';
import NavBar from "../Home/Header/NavBar";
import './About-us.css';
import '../Pages.css';
import Footer from '../../pages_ar/Home/Footer/Footer';
import Contact from '../../pages_ar/Home/Contact/Contact';

function About_us() {

  return (
    <div className="About-us" id="About-us" lang="ar">
      <div className="About-us-Header Page-Header">
        <NavBar currentPage="about-us"/>
      </div>
      
      <Contact />
      <Footer />
    </div>
  );
}

export default About_us;
