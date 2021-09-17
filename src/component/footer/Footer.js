import React from 'react';
import Copyright from './Copyright';
import Contactus from './Contactus';
import './Footer.css';
import Contactinfo from './Contactinfo';

function Footer(){
    return (
        <div>
            <Contactinfo />
            <Contactus />
            <Copyright />
        </div>
    )
}

export default Footer;