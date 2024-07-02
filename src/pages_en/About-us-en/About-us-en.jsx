import NavBar from "../Pages-sections-en/Pages-nav-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import INTEREST_EN from '../Home-en/Interest-en/Interest-en';
import './About-us.css';
import '../Pages.css';
import { faChevronRight, faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ABOUT_SECTION from "../Pages-sections-en/About-section-en/About-en";

function About_us_en() {

  return (
    <div className="About-us" id="About-us" lang="en">

      <div className="About-us-Header Page-Header-en ">
        <NavBar currentPage="about-us"/>
        <div className="about-us-header-title page-header-title">

          <h2> About Us </h2>

          <div className="title-nav">
           
            <a href="/en/" className="icon-link" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faHome} />
            </a>

            <FontAwesomeIcon className="arrow-link" icon={faChevronRight}/> 

            <a href="/en/about-us" >
              <h5> About Us </h5>
            </a>
         </div>

        </div>
      </div>

      <div className="About-us-body" >

        <div className="About-alsabah">
          <div className="About-first-section">
            <h3> Al-Sabah Real Estate Company </h3>
            <p> Al-Sabah Real Estate Company includes a select group of marketers with global expertise and professionalism, and has a large base of clients and investors in the real estate field. It is also capable of attracting all types of clients through social media platforms. Additionally, it has close cooperation with the largest marketing companies and real estate offices throughout Riyadh to achieve quick clearance and facilitate the sales process (professional and precise marketing management).
            </p>
            <a href="#Manager-word"><button> Chairman's Word </button></a> 
          </div>
          <div className="About-second-section">
            <img src={require('../../Assets/Images/about-us.jpg')} alt="" />
          </div>
        </div>
        <ABOUT_SECTION />
        <div className="Manager-word" id="Manager-word">
          <div className="About-second-section">
            <img src={require('../../Assets/Images/about-us.jpg')} alt="" />
          </div>

          <div className="About-first-section">
              <h3> Chairman's Word </h3>
              <p> Al-Sabah Real Estate Company includes a select group of marketers with global expertise and professionalism, and has a large base of clients and investors in the real estate field. It is also capable of attracting all types of clients through social media platforms. Additionally, it has close cooperation with the largest marketing companies and real estate offices throughout Riyadh to achieve quick clearance and facilitate the sales process (professional and precise marketing management).
              </p>
              <h4> Chairman of the Board <br /> Awad Saeed Al-Asmary </h4>
          </div>
        </div>
      </div>

      <INTEREST_EN />
      <Footer />
    </div>
  );
}

export default About_us_en;
