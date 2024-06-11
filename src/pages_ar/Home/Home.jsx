/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css';
import HEADER from './Header/Header';
import NAVBAR from './Header/NavBar';
import SERVICES from './Services/Services';
import Projects from './Projects/Projects';
import ABOUT from './About/About';
import FOOTER from '../Home/Footer/Footer';
import CONTACT from '../Home/Contact/Contact';


function Home() {
  return (
    <div className="Home" lang="ar">
      <NAVBAR currentPage="home" />
      <HEADER />
      <HEADER />
      <ABOUT />
      <SERVICES />
      <Projects />
      <CONTACT />
      <FOOTER />
    </div>
  );
}

export default Home;
