
import NavBar from '../Home/Header/NavBar';
import './Services.css'
import Footer from '../../pages_ar/Home/Footer/Footer';
import INTEREST from '../../pages_ar/Home/Interest/Interest';

function Services() {  

  return (
    <div className="Services-page " id="Services-page" lang="ar">

        <div className="Services-Header Page-Header">
        <NavBar currentPage="services"/>
        </div>

        <INTEREST />
        <Footer />
    </div>
  );
}

export default Services;