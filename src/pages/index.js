import React from "react";
import {Helmet} from "react-helmet";
import { Link } from "gatsby";

import Nav from "../components/Nav.js";
import Contact from "../components/contact.js"
import ImageChanger from "../components/ImageChanger.js";


import house from"../images/house.jpg";
import quote from "../images/quote.png"

export default () =>  (
    
  <div className="wrapper">
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>OUPhiPsi</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
      <Nav></Nav>
      <div className="wrapper-index">
        <div className="pic-section" id="one">
            <img src={house}/>
        </div>
        <div className="about-section" id="one">
          <h1>Welcome to the Oklahoma Alpha Phi Kappa Psi Website</h1>
          <hr width="50%"/>
          <a>Phi Kappa Psi is a brotherhood of honorable men, honor bound to strive for intellectual, moral, and spiritual excellence. Originally founded by two men on February 19th 1852, the University of Oklahoma Alpha Chapter continues to represent and maintain the excellence in character and brotherhood first established over 160 years ago.
          </a>
        </div>
      </div>
      <Contact/>
  </div>
  );
