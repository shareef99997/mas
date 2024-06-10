import React, { useEffect, useRef } from 'react';
import './Services.css'
import NavBar from "../Home-en/Header-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import Contact from '../Home-en/Contact-en/Contact-en';

function Services_en() {  


  return (
    <div className="Services-page " id="Services-page" lang="en">

        <div className="Services-Header Page-Header-en">
        <NavBar currentPage="services"/>
        </div>
        
        <Contact />
        <Footer />
    </div>
  );
}

export default Services_en;
