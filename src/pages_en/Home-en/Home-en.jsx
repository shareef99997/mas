/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css';
import HEADER_EN from './Header-en/Header-en';
import ABOUT_EN from './About-en/About-en';
import PARTNERS_EN from '../Home-en/Partners-en/Partners-en';
import SERVICES_EN from './Services-en/Services-en';
import WORK_EN from './Work-en/Work-en';
import BLOG_EN from './Blog-en/Blog-en';
import INTEREST_EN from '../Home-en/Interest-en/Interest-en';
import FOOTER_EN from '../Home-en/Footer-en/Footer-en';


function Home() {
  return (
    <div className="Home" lang="en">
      <HEADER_EN />
      <ABOUT_EN />
      <PARTNERS_EN />
      <SERVICES_EN />
      <WORK_EN />
      <BLOG_EN />
      <INTEREST_EN />
      <FOOTER_EN />
    </div>
  );
}

export default Home;
