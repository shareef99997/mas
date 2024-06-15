/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css';
import HEADER from './Header/Header';
import SERVICES from './Services/Services';
import WORK from './Work/Work';
import ABOUT from './About/About';
import PARTNERS from './Partners/Partners';
import FOOTER from '../Home/Footer/Footer';
import INTEREST from './Interest/Interest';


function Home() {
  return (
    <div className="Home" lang="ar">
      
      <HEADER />
      <ABOUT />
      <PARTNERS />
      <SERVICES />
      <WORK />
      <INTEREST />
      <FOOTER />
    </div>
  );
}

export default Home;
