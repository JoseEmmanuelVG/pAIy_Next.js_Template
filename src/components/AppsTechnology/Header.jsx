import React from 'react';
//= Components
import Navbar from './Navbar';

function Header() {
  return (
    <header className="tc-header-style4">
      <Navbar />
      <div className="container">
        <div className="info wow fadeInUp slow">
          <h1 className="highlight-text"> Through Gubbi </h1>
          {/* Corrige la estructura HTML */}
          <div className="lead-text">
            <p>Connecting Rural Communities to the Financial World.</p>
            <h2>An application designed for the unbanked in rural areas.</h2>
          </div>
          <div className="btns">
            <a href="#"> <img src="/home_4/assets/img/header/apple.svg" alt="Apple Store" /> </a>
            <a href="#"> <img src="/home_4/assets/img/header/play.svg" alt="Google Play" /> </a>
          </div>
        </div>
      </div>
      <div className="shaps">
        <img src="/home_4/assets/img/header/shap1.png" alt="Shape 1" className="shap-1" />
        <span className="shap-2 parallaxed"></span>
        <img src="/home_4/assets/img/header/img_GUBBI.png" alt="Gubbi Image" className="img" data-speed="1" data-lag="0.7" />
      </div>
    </header>
  );
}

export default Header;
