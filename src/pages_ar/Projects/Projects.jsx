
import NavBar from '../Home/Header/NavBar';
import './Projects.css';
import Footer from '../../pages_ar/Home/Footer/Footer';
import Contact from '../../pages_ar/Home/Contact/Contact';

function Projects() {
  return (
    <div className="Projects" id="Projects" lang="ar">
      <header className="Projects-Header Page-Header">
        <NavBar currentPage={'Projects'} />
      </header>

      <Contact />
      <Footer />
    </div>
  );
}

export default Projects;
