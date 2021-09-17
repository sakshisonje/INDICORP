import React from 'react';
import facebook from './images/Vector.png';
import insta from './images/Vector1.png';
import twitter from './images/Vector2.png';
import youtube from './images/Vector3.png';
import './Footer.css';
function Copyright(){
    return (
        <div className="copyright">
            <p className="text">Made With Love By Figmaland All Right Reserved </p>
            <span>
                <a href="#"><img src={facebook} alt="facebook"/></a>
                <a href="#"><img src={insta} alt="insta"/></a>
                <a href="#"><img src={twitter} alt="twitter"/></a>
                <a href="#"><img src={youtube} alt="youtube"/></a>
            </span>
        </div>
    )
}export default Copyright;