
import './Services.css'
import NavBar from "../Pages-sections-en/Pages-nav-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import INTEREST_EN from '../Home-en/Interest-en/Interest-en';

import { faChevronRight, faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Services_en() {  


  return (
    <div className="Services-page " id="Services-page" lang="en">

        <div className="Services-Header Page-Header-en">
        <NavBar currentPage="services"/>
        <div className="services-header-title page-header-title">

          <h2> Services </h2>

          <div className="title-nav">
           
          <a href="/" className="icon-link" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faHome} />
            </a>

          <FontAwesomeIcon className="arrow-link" icon={faChevronRight}/> 

          <a href="/about-us" >
            <h5> Services </h5>
          </a>
            

         </div>

        </div>
        </div>
        
        <INTEREST_EN />
        <Footer />
    </div>
  );
}

export default Services_en;
