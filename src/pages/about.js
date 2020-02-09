import React from "react"
import {Helmet} from "react-helmet";
import { Link } from "gatsby"

import Nav from "../components/Nav.js"
import Contact from "../components/contact.js"

import old from "../images/old.jpg";
import henry from "../images/henry.jpg";


export default () =>  (
    
  <div>
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>OUPhiPsi</title>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
    <Nav/>
    <div className="wrapper-about">
      <div className="pic-section" id="one">
        <img src={old}></img>
      </div>
      <div className="about-section" id="one">
        <h1>Our Beginnings</h1>
        <hr width="50%"/>
        <p> The Phi Kappa Psi fraternity was founded on February 19, 1852, by William H. Letterman and Charles P.T. Moore, two Jefferson College students in the little college town of Canonsburg, Pennsylvania. They were caring for their friends stricken during an epidemic of typhoid fever at the college. Through their experience, an appreciation of the great joy of serving others came into their lives. They called on others to join them, and a brotherhood was founded. It flourished and gradually grew to other colleges and universities throughout the country. Idealists all, the Phi Kappa Psi founders believed the fraternity should complement the work of the university by cultivating those humanities without which the educated man fails of his greatest usefulness. 
        </p>
      </div>
      <div className="pic-section" id="two">
        <img src={henry}></img>
      </div>

      <div className="about-section" id="two">
        <p> The Phi Kappa Psi fraternity was founded on February 19, 1852, by William H. Letterman and Charles P.T. Moore, two Jefferson College students in the little college town of Canonsburg, Pennsylvania. They were caring for their friends stricken during an epidemic of typhoid fever at the college. Through their experience, an appreciation of the great joy of serving others came into their lives. They called on others to join them, and a brotherhood was founded. It flourished and gradually grew to other colleges and universities throughout the country. Idealists all, the Phi Kappa Psi founders believed the fraternity should complement the work of the university by cultivating those humanities without which the educated man fails of his greatest usefulness. 
        </p>
      </div>
    </div>
    <Contact/>
  </div>
  );
