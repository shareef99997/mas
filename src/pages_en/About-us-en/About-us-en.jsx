
import NavBar from "../Pages-nav-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import INTEREST_EN from '../Home-en/Interest-en/Interest-en';
import './About-us.css';
import '../Pages.css';
import { faChevronRight, faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About_us_en() {

  return (
    <div className="About-us" id="About-us" lang="en">
      <div className="About-us-Header Page-Header-en ">
        <NavBar currentPage="about-us"/>
        <div className="about-us-header-title page-header-title">

          <h2> About Us </h2>

          <div className="title-nav">
           
          <a href="/" className="icon-link" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faHome} />
            </a>

          <FontAwesomeIcon className="arrow-link" icon={faChevronRight}/> 

          <a href="/about-us" >
            <h5> About Us </h5>
          </a>
            

         </div>

        </div>
      </div>

      <INTEREST_EN />
      <Footer />
    </div>
  );
}

export default About_us_en;
