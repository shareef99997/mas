import React, { useEffect, useRef } from 'react';
import NavBar from '../Home/Header/NavBar';
import './Services.css'
import Footer from '../../pages_ar/Home/Footer/Footer';
import Contact from '../../pages_ar/Home/Contact/Contact';

function Services() {  

  return (
    <div className="Services-page " id="Services-page" lang="ar">

        <div className="Services-Header Page-Header">
        <NavBar currentPage="services"/>
        </div>

        <Contact />
        <Footer />
    </div>
  );
}

export default Services;