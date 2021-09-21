import React from 'react';
import {Button} from 'react-bootstrap';
import './Footer.css';
function Contactinfo(){
    return (
        <div className="contact-info" id="Contact">
            <div className="contact-text">
                <h3>Consulting Agency For Your Business</h3>
                <p>the quick fox jumps over the lazy dog</p>
            </div>
            
            <div className="form">
                <form>
                   <div className="input-box">
                       <label for="name" >First Name</label><br/>
                       <input type="text" class="name" id="name"/>
                   </div>
                   <div className="input-box">
                       <label for="contact">Contact Number</label><br/>
                       <input type="contact" class="phone" id="contact"/>
                   </div>
                   <div className="input-box">
                       <label for="email">Email Address</label><br/>
                       <input type="email" class="email" id="email"/>
                   </div>
                   <div className="input-box">
                       <label for="message">Message</label><br/>
                       <textarea id="message"></textarea>
                   </div>
                   <Button className="button2">Contact Us</Button>
                </form>
            </div>
            
        </div>
    )
}

export default Contactinfo;