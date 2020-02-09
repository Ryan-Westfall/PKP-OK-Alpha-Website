import React from 'react';
import {Link} from 'gatsby';
import { slide as Menu } from 'react-burger-menu';

import logo from '../images/logo.png';
import logoonly from '../images/logo-only.png';
import textonly from '../images/logotext-only.png';




class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
<div className="navigation">
    <div className="nav-mobile" >

        <div className="hamburger-menu">
            <Menu>
                <Link to="/"><img src={logoonly}></img></Link>
                <ul className="hamburger-list">
                    <li className="hamburger-list-item">
                        <Link to="about" className="menu-item" href="/about">About Us</Link>
                    </li>
                    <li className="hamburger-list-item">
                        <Link to="recruitment" className="menu-item" href="/">Recruitment</Link>
                    </li>
                </ul>
            </Menu>
        </div>

        <div className="title-image">
            <Link to="/"><img src={logo}></img></Link>
        </div>
        
    </div>
</div>
        );
    }
}




export default Nav;