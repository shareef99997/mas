
import './Header.css';
import NavBar from './NavBar';


function Header() {


  return (
    <header className="Home-Header" id="Header" >
      <NavBar currentPage="home"/>
      <h1>h1: اهلا وسهلا </h1>
      <h2>h2: اهلا وسهلا </h2>
      <h3>h3: اهلا وسهلا </h3>
      <p>p: اهلا وسهلا </p>
      <a href="/"> اهلا وسهلا </a>
      <br />
      <br />
      <button> اهلا وسهلا </button>
      <br />
      <br />
      <a href="/en/"> <button> English </button> </a>
      
    </header>
  );
}

export default Header;
