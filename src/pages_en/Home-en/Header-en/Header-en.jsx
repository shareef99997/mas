
import './Header.css';
import NAVBAR_EN from './NavBar-en';


function Header_en() {

  return (
    <header className="Home-Header" id="Header" >
      <NAVBAR_EN currentPage="home"/>
      <h1>h1: Hello World </h1>
      <h2>h2: Hello World </h2>
      <h3>h3: Hello World </h3>
      <p>p: Hello World </p>
      <a href="/"> Hello World </a>
      <br />
      <br />
      <button> Hello World </button>
      <br />
      <br />
      <a href="/"> <button> العربية </button> </a>
    </header>
  );
}

export default Header_en;
