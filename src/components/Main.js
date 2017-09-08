import React from "react";
// import { Link } from "react-router";
// import Navbar from "./common/Navbar";
// import Footer from "./common/Footer";

import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';

const Main = props => (
  <div className="wrapper">

      <video className="video-container video-container-overlay" id="video-background" autoPlay="true" >
        <source src="/assets/video/splashintro.mp4" type="video/mp4" />
      </video>

        <div className="navigation navigation--main">
          <div className="navigation-wrapper">
            <a className="navigation__logo-link emerge" data-duration="600" data-effect="slide" data-right="64px"  >
              <img className="navigation__logo" width="220" src="/assets/img/logo/VRooms_V8Logo180.png" alt="VRooms" /> 

            </a>
            <div className="navigation-mobile js-open-menu">
              <div className="navigation-mobile__icon js-open-menu-btn"></div>
            </div>
            <nav className="navigation-menu emerge" data-duration="600" data-effect="slide" data-left="64px">
                <span className="navigation-menu__link">
                  AGENTS
                </span>
                <a href="/pricing" className="navigation-menu__link ">PRICING</a>
                <a href="/showcase" className="navigation-menu__link ">SHOWCASE</a>
                <a href="/contact" className="navigation-menu__link ">CONTACT US</a>



                <a rel="signup" href="#signup" className="navigation-menu__link navigation-menu__link--hidden navigation-menu__link--lng a-signup">sign up</a>
                <a data-auth="no" href="https://watch.appfollow.io?ref=github.com" className="navigation-menu__sign_in a-login">sign in</a>
            </nav>
          </div>
        </div>
      </div>
);

export default Main;


    // <Navbar />
    // {props.children}
    // <Footer />

// ================================================================================

     // Navigation link code for content refresh within same page
     // <ul className="nav navbar-nav">
     //    <li className={location.pathname === "/" && "active"}>
     //      <Link to="/">Home</Link>
     //    </li>
     //    <li className={location.pathname === "/favorites" && "active"}>
     //      <Link to="/favorites">Favorites</Link>
     //    </li>
     //  </ul>