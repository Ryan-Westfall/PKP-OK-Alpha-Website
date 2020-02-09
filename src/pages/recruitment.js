import React from "react"
import {Helmet} from "react-helmet";
import { Link } from "gatsby"

import Nav from "../components/Nav.js"
import Contact from "../components/contact.js";

import clean from "../images/clean.jpg"
import founder from "../images/founder.jpg"


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
    <div className="wrapper-recruitment">
      <div className="pic-section" id="one">
        <img src={founder}/>
      </div>
      <div className="about-section" id="one">
        <h1>A Brotherhood United</h1>
        <hr width="50%"/>
        <p> Phi Kappa Psi is a brotherhood, with a lifelong commitment to friendship that will supersede your time in college, founded upon the values that every Phi Psi embodies. Our brotherhood has stood the tests of time and has successfully brought together like-minded individuals seeking to make the world a better place for all who are less fortunate.
        </p>
      </div>
      <div className="pic-section" id="two">
        <img src={clean}/>
      </div>
      <div className="about-section" id="two">
        <h1>Let's Connect</h1>
        <hr width="50%"/>
        <p> The brothers of Phi Kappa Psi at the University of Oklahoma are looking for ambitious young men wanting to prove themselves and become better in the process. We recognize that a college student's number one priority is to learn, and we strongly believe it’s our role to help to better your education. We also believe that life is a balance, and that college is no different: A good scholastic life needs a good social life to balance it out. That is why we offer not only a strong academic program but also a variety of social functions that include community service, intramural sports, exchanges with sororities, brotherhood events, and much more.
        </p>
      </div>
    </div>
    <Contact/>
  </div>
  );
