import React from 'react';
import './Sponsor.css';

import icon1 from './images/Vector.png'
import icon2 from './images/Vector(1).png'
import icon3 from './images/Vector(2).png'
import icon4 from './images/Vector(3).png'
import icon5 from './images/Vector(4).png'
import icon6 from './images/Vector(5).png'

function Icons(){
    return (
        <div className="icon">
            
            <a href="#1"><img src={icon1} alt="icon"/></a>
        
            <a href="#1"><img src={icon2} alt="icon"/></a>

            <a href="#1"><img src={icon3} alt="icon"/></a>

            <a href="#1"><img src={icon4} alt="icon"/></a>

            <a href="#1"><img src={icon5} alt="icon"/></a>
    
            <a href="#1"><img src={icon6} alt="icon"/></a>
               
        </div>
    )
}

export default Icons;
