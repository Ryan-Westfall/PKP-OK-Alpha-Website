import React from 'react';
import {Link} from 'gatsby';

import logo from '../images/logo.png';
import logoonly from '../images/logo-only.png';
import textonly from '../images/logotext-only.png';




class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
<div className="contact-div">

    <div className="left-box">
        <div>
            <span id="border">Phi Kappa Psi Fraternity</span>
            <p>720 Elm Avenue</p>
            <p>Norman, OK 73072</p>
            {/* <p>cpfran6@ou.edu</p> */}
        </div>
    </div>

    <div className="right-box">
        <img src={logoonly}/>
    </div>
    
</div>
        );
    }
}




export default Contact;