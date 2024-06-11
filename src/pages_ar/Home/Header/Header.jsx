import './Header.css';



function Header() {

  return (
    <header className="Home-Header" id="Header">
      <div className="video-background">
      {/* <video autoPlay muted loop className="header-video">
        <source src={require('./../../../Assets/Videos/Riyadh_vid.mp4')} />
        Your browser does not support the video tag.
      </video> */}
      </div>
      <div className="overlay"></div>
      <section className='Header-Body'>
      <div className="home-content">
          <h1>منظومة الصباح العقارية </h1>
          <a href="#About"><button > سجل اهتمامك الآن </button></a>
        </div>
      </section>
        
    </header>
  );
}

export default Header;
