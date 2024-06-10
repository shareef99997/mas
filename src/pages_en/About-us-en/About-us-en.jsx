import React, { useEffect, useRef } from 'react';
import NavBar from "../Home-en/Header-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import Contact from '../Home-en/Contact-en/Contact-en';
import './About-us.css';
import '../Pages.css';

function About_us_en() {

  return (
    <div className="About-us" id="About-us" lang="en">
      <div className="About-us-Header Page-Header-en ">
        <NavBar currentPage="about-us"/>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default About_us_en;
