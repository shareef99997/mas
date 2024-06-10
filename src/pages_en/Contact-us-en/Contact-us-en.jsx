
import './Contact-us.css';
import NavBar from "../Home-en/Header-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import Contact from '../Home-en/Contact-en/Contact-en';


function Contact_us_en() {



  return (
    <div className="Contact-us" id="Contact-us" lang="en">
      <div className="Contact-us-Header Page-Header-en">
        <NavBar currentPage="contact-us" />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Contact_us_en;
