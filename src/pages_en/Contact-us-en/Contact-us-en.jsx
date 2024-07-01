
import './Contact-us.css';
import NavBar from "../Pages-nav-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import INTEREST_EN from '../Home-en/Interest-en/Interest-en';


function Contact_us_en() {



  return (
    <div className="Contact-us" id="Contact-us" lang="en">
      <div className="Contact-us-Header Page-Header-en">
        <NavBar currentPage="contact-us" />
      </div>
      <INTEREST_EN />
      <Footer />
    </div>
  );
}

export default Contact_us_en;
