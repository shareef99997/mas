
import './Work.css';
import NavBar from "../Pages-sections-en/Pages-nav-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import INTEREST_EN from '../Home-en/Interest-en/Interest-en';
import { faChevronRight, faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WORK from '../Pages-sections-en/Work-section-en/Work-en-section';
import PARTNERS from '../Home-en/Partners-en/Partners-en';

function Work_en() {

  return (
    <div className="Work" id="Work" lang="en">
      <header className="Work-Header Page-Header-en">
        <NavBar currentPage={'Work'} />
        <div className="work-header-title page-header-title">

          <h2> Work </h2>

          <div className="title-nav">
           
          <a href="/en/" className="icon-link" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faHome} />
            </a>

          <FontAwesomeIcon className="arrow-link" icon={faChevronRight}/> 

          <a href="/en/Work" >
            <h5> Work </h5>
          </a>
            

         </div>

        </div>
      </header>
      <PARTNERS/>
      <WORK/>
      <INTEREST_EN />
      <Footer />
    </div>
  );
}

export default Work_en;
