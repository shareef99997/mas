
import './Projects.css';
import NavBar from "../Home-en/Header-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import Contact from '../Home-en/Contact-en/Contact-en';



function Projects_en() {

  return (
    <div className="Projects" id="Projects" lang="en">
      <header className="Projects-Header Page-Header-en">
        <NavBar currentPage={'Projects'} />
      </header>

      <Contact />
      <Footer />
    </div>
  );
}

export default Projects_en;
