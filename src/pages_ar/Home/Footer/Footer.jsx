import React from 'react';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faMapMarkerAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faSnapchat, faXTwitter,faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(faEnvelope, faPhone, faMapMarkerAlt, faQuestionCircle, faInstagram, faFacebookF, faSnapchat, faXTwitter,faTiktok);


function Footer() {
  return (
    <div className="Home-Footer" id="Home-Footer">
      <div className="Footer-Body">
        <div className="Footer-Content">

          <div className="Footer-Section about-footer">
            <div className='Footer-img-Wrapper'>
              <img src={require('../../../Assets/Logo/LOGO.png')} alt="Logo" />
            </div>
            <ul>          
            <li className="question" >    في خدمتكم للجواب على جميع استفسراتكم  </li>
            <li className="email">example@gmail.com</li>
              <li className="phone" >0966547995411</li>
              <li className="location" >المملكة العربية السعودية - الرياض</li>

            </ul>
          </div>
          <div className="Footer-Section links-footer" >
          <h3>روابط سريعة</h3>
            <ul>
              <li><a className='link' href="/" >الرئيسية</a> </li>
              <li> <a className='link' href="/about-us" >من نحن</a></li>
              <li> <a className='link' href="/blog" >المدونة</a> </li>
              <li> <a className='link' href="/services" >خدماتنا</a> </li>
              <li> <a className='link' href="/join-us" >انضم الينا</a> </li>
              <li> <a className='link' href="/contact-us" > تواصل معنا </a> </li>
            
            </ul>
          </div>
          <div className="Footer-Section services-footer" >
            <div className="Services-Links">
            <h3> مواعيد العمل  </h3>
            <ul>
              <li> الأحد - الخميس </li>
              <li lang='en'>    9 AM - 5 PM  </li>   
            
            </ul>
              
            </div>
          </div>
          <div className="Footer-Section news-section" >
            <h3>متابعة نشرتنا الإخبارية</h3>
            <div className="newsletter-input">
              <button type="submit"> اشترك </button>
              <input  type="email" placeholder="البريد الإلكتروني" />
            </div>
          </div>
          
          
          
        </div>
      </div>
      <div className="Footer-Copyright">
        <div className="Footer-Copyright-Content">
        
          <p>   2024 | &copy;كل الحقوق محفوظة لصالح مؤسسة الصباح العقارية     </p>
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

export default Footer;

