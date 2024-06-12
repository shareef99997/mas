/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css';
import HEADER from './Header/Header';
import SERVICES from './Services/Services';
import Projects from './Projects/Projects';
import ABOUT from './About/About';
import FOOTER from '../Home/Footer/Footer';
import CONTACT from '../Home/Contact/Contact';


function Home() {
  return (
    <div className="Home" lang="ar">
      
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
