
import './Work.css';
import NavBar from "../Pages-nav-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import INTEREST_EN from '../Home-en/Interest-en/Interest-en';



function Work_en() {

  return (
    <div className="Work" id="Work" lang="en">
      <header className="Work-Header Page-Header-en">
        <NavBar currentPage={'Work'} />
      </header>

      <INTEREST_EN />
      <Footer />
    </div>
  );
}

export default Work_en;
