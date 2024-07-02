
import NavBar from '../Pages-sections/Pages-nav/NavBar';
import Footer from '../Home/Footer/Footer';
import INTEREST from '../Home/Interest/Interest';
import { faChevronLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WORK from '../Pages-sections/Work-section/Work-section';
import PARTNERS from '../Home/Partners/Partners';

function Work() {
  return (
    <div className="Work" id="Work" lang="ar">
      <header className="Work-Header Page-Header">
        <NavBar currentPage={'Work'} />
        <div className="Work-header-title page-header-title">

          <h2> الأعمال </h2>

          <div className="title-nav">
           
          <a href="/" className="icon-link" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faHome} />
            </a>

          <FontAwesomeIcon className="arrow-link" icon={faChevronLeft}/> 

          <a href="/about-us" >
            <h5> الأعمال </h5>
          </a>
            

         </div>

        </div>
        
      </header>
      <PARTNERS />
      <WORK />
      <INTEREST />
      <Footer />
    </div>
  );
}

export default Work;
