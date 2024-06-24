/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css';
import HEADER from './Header/Header';
import ABOUT from './About/About';
import PARTNERS from './Partners/Partners';
import SERVICES from './Services/Services';
import WORK from './Work/Work';
import BLOG from './Blog/Blog';
import INTEREST from './Interest/Interest';
import FOOTER from '../Home/Footer/Footer';


function Home() {
  return (
    <div className="Home" lang="ar">
      
      <HEADER />
      <ABOUT />
      <PARTNERS />
      <SERVICES />
      <WORK />
       <BLOG />
      <INTEREST />
      <FOOTER />
    </div>
  );
}

export default Home;
