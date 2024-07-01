
import './Services.css'
import NavBar from "../Pages-nav-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import INTEREST_EN from '../Home-en/Interest-en/Interest-en';

function Services_en() {  


  return (
    <div className="Services-page " id="Services-page" lang="en">

        <div className="Services-Header Page-Header-en">
        <NavBar currentPage="services"/>
        </div>
        
        <INTEREST_EN />
        <Footer />
    </div>
  );
}

export default Services_en;
