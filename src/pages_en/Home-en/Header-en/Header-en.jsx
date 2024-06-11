
import './Header.css';
import NAVBAR_EN from './NavBar-en';


function Header_en() {

  return (
    <header className="Home-Header" id="Header" >
      <NAVBAR_EN currentPage="home"/>
      <h1>h1: Al-Sabah Real Estate System </h1>
      <h2>h2: Al-Sabah Real Estate System </h2>
      <h3>h3: Al-Sabah Real Estate System </h3>
      <p>p: Al-Sabah Real Estate System </p>
      <a href="/"> Al-Sabah Real Estate System </a>
      <br />
      <br />
      <button> Al-Sabah Real Estate System </button>
      <br />
      <br />
      <a href="/"> <button> العربية </button> </a>
    </header>
  );
}

export default Header_en;
