import React from 'react';
import './Partners.css';

function Partners() {
  return (
    <div className="Home-Partners" id="Home-Partners">
      <h1 className="section-title">شركاء النجاح</h1>
      <div className='Partners-Section'>
        <div className='carousel'>

          <div class="logos">
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 1' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 2' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 3' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 4' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 5' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 6' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 7' />
            <img src={require("../../../Assets/Logo/LOGO.png")} alt='Partner 8' />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Partners;
