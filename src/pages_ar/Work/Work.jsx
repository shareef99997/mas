
import NavBar from '../Home/Header/NavBar';
import './Work.css';
import Footer from '../Home/Footer/Footer';
import INTEREST from '../Home/Interest/Interest';

function Work() {
  return (
    <div className="Work" id="Work" lang="ar">
      <header className="Work-Header Page-Header">
        <NavBar currentPage={'Work'} />
      </header>

      <INTEREST />
      <Footer />
    </div>
  );
}

export default Work;
