
import './Projects.css';
import NavBar from "../Home-en/Header-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import INTEREST_EN from '../Home-en/Interest-en/Interest-en';



function Projects_en() {

  return (
    <div className="Projects" id="Projects" lang="en">
      <header className="Projects-Header Page-Header-en">
        <NavBar currentPage={'Projects'} />
      </header>

      <INTEREST_EN />
      <Footer />
    </div>
  );
}

export default Projects_en;
