
import NavBar from "../Home/Header/NavBar";
import './About-us.css';
import '../Pages.css';
import Footer from '../../pages_ar/Home/Footer/Footer';
import INTEREST from '../../pages_ar/Home/Interest/Interest';

function About_us() {

  return (
    <div className="About-us" id="About-us" lang="ar">
      <div className="About-us-Header Page-Header">
        <NavBar currentPage="about-us"/>
      </div>
      
      <INTEREST />
      <Footer />
    </div>
  );
}

export default About_us;
