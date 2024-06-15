
import NavBar from '../Home/Header/NavBar';
import './Projects.css';
import Footer from '../../pages_ar/Home/Footer/Footer';
import INTEREST from '../../pages_ar/Home/Interest/Interest';

function Projects() {
  return (
    <div className="Projects" id="Projects" lang="ar">
      <header className="Projects-Header Page-Header">
        <NavBar currentPage={'Projects'} />
      </header>

      <INTEREST />
      <Footer />
    </div>
  );
}

export default Projects;
