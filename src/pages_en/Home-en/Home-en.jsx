/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css';
import HEADER_EN from './Header-en/Header-en';
import SERVICES_EN from './Services-en/Services-en';
import PROJECTS_EN from './Projects-en/Projects-en';
import ABOUT_EN from './About-en/About-en';
import FOOTER_EN from '../Home-en/Footer-en/Footer-en';
import CONTACT_EN from '../Home-en/Contact-en/Contact-en';


function Home() {
  return (
    <div className="Home" lang="en">
      <HEADER_EN />
      <ABOUT_EN />
      <SERVICES_EN />
      <PROJECTS_EN />
      <CONTACT_EN />
      <FOOTER_EN />
    </div>
  );
}

export default Home;
