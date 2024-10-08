
import NavBar from '../Pages-sections/Pages-nav/NavBar';
import './Services.css'
import Footer from '../../pages_ar/Home/Footer/Footer';
import INTEREST from '../../pages_ar/Home/Interest/Interest';
import { faChevronLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SERVICES from '../Home/Services/Services';


function Services() {  

  return (
    <div className="Services-page " id="Services-page" lang="ar">

        <div className="Services-Header Page-Header">
          <NavBar currentPage="services"/>
          <div className="Services-header-title page-header-title">

            <h2> خدماتنا </h2>

            <div className="title-nav">
            
            <a href="/" className="icon-link" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faHome} />
              </a>

            <FontAwesomeIcon className="arrow-link" icon={faChevronLeft}/> 

            <a href="/services" >
              <h5> خدماتنا </h5>
            </a>
              

          </div>

          </div>
        </div>

        <SERVICES />
        <INTEREST />
        <Footer />
    </div>
  );
}

export default Services;