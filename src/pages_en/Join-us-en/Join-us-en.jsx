
import './Join-us.css';
import NavBar from "../Pages-nav-en/NavBar-en";
import Footer from '../Home-en/Footer-en/Footer-en';
import INTEREST_EN from '../Home-en/Interest-en/Interest-en';


function Join_us_en() {

  return (
    <div className="Join-us" id="Join-us" lang="en">
      <div className="Join-us-Header Page-Header-en">
        <NavBar currentPage="join-us" />
      </div>

      <INTEREST_EN />
      <Footer />
    </div>
  );
}

export default Join_us_en;
