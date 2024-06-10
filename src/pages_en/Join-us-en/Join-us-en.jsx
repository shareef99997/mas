import React, { useState } from 'react';
import './Join-us.css';
import NavBar from "../Home-en/Header-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import Contact from '../Home-en/Contact-en/Contact-en';


function Join_us_en() {

  return (
    <div className="Join-us" id="Join-us" lang="en">
      <div className="Join-us-Header Page-Header-en">
        <NavBar currentPage="join-us" />
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default Join_us_en;
