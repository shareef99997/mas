
import './Contact-us.css';
import NavBar from "../Pages-nav-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import INTEREST_EN from '../Home-en/Interest-en/Interest-en';

import { faChevronRight, faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact_us_en() {



  return (
    <div className="Contact-us" id="Contact-us" lang="en">
      <div className="Contact-us-Header Page-Header-en">
        <NavBar currentPage="contact-us" />
        <div className="contact-us-header-title page-header-title">

          <h2> Contact Us </h2>

          <div className="title-nav">
           
          <a href="/" className="icon-link" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faHome} />
            </a>

          <FontAwesomeIcon className="arrow-link" icon={faChevronRight}/> 

          <a href="/about-us" >
            <h5> Contact Us </h5>
          </a>
            

         </div>

        </div>
      </div>

      <INTEREST_EN />
      <Footer />
    </div>
  );
}

export default Contact_us_en;
