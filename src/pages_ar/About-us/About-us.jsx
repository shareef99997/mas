
import NavBar from "../Pages-nav/NavBar";
import './About-us.css';
import '../Pages.css';
import Footer from '../../pages_ar/Home/Footer/Footer';
import INTEREST from '../../pages_ar/Home/Interest/Interest';

import { faChevronLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function About_us() {

  return (
    <div className="About-us" id="About-us" lang="ar">
      <div className="About-us-Header Page-Header">
        <NavBar currentPage="about-us"/>
        <div className="about-us-header-title page-header-title">

          <h2> عن المنظومة </h2>

          <div className="title-nav">
           
          <a href="/" className="icon-link" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faHome} />
            </a>

          <FontAwesomeIcon className="arrow-link" icon={faChevronLeft}/> 

          <a href="/about-us" >
            <h5>عن المنظومة</h5>
          </a>
            

         </div>

        </div>
        
      </div>
      <div className="About-us-body" >
        
      </div>
      <INTEREST />
      <Footer />
    </div>
  );
}

export default About_us;
