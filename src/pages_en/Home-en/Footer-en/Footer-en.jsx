import React from 'react';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faMapMarkerAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faSnapchat, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faPhone, faMapMarkerAlt, faQuestionCircle, faInstagram, faFacebookF, faSnapchat, faXTwitter, faTiktok);

function Footer_en() {
  return (
    <div className="Home-Footer" id="Home-Footer">
      <div className="Footer-Body">
        <div className="Footer-Content">

          <div className="Footer-Section about-footer">
            <div className='Footer-img-Wrapper'>
              <img src={require('../../../Assets/Logo/LOGO.png')} alt="Logo" />
            </div>
            <ul>
              <li className="question">We are here to answer all your inquiries</li>
              <li className="email">example@gmail.com</li>
              <li className="phone">0966547995411</li>
              <li className="location">Saudi Arabia - Riyadh</li>
            </ul>
          </div>
          <div className="Footer-Section links-footer">
            <h3>Quick Links</h3>
            <ul>
              <li><a className='link' href="/">Home</a></li>
              <li><a className='link' href="/about-us">About Us</a></li>
              <li><a className='link' href="/blog">Blog</a></li>
              <li><a className='link' href="/services">Our Services</a></li>
              <li><a className='link' href="/join-us">Join Us</a></li>
              <li><a className='link' href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
          <div className="Footer-Section services-footer">
            <div className="Services-Links">
              <h3>Working Hours</h3>
              <ul>
                <li>Sunday - Thursday</li>
                <li>9 AM - 5 PM</li>
              </ul>
            </div>
          </div>
          <div className="Footer-Section news-section">
            <h3>Subscribe to our Newsletter</h3>
            <div className="newsletter-input">
              <button type="submit">Subscribe</button>
              <input type="email" placeholder="Email Address" />
            </div>
          </div>
        </div>
      </div>
      <div className="Footer-Copyright">
        <div className="Footer-Copyright-Content">
          <p>2024 | &copy; All rights reserved for Al-Sabah Real Estate</p>
          <div className="Social-Buttons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSnapchat} /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer_en;
