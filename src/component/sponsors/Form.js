import React from 'react';
import {Button } from 'react-bootstrap';
import './Sponsor.css'
function Form(){
    return (
        <div className="back">
            <div className="front">
                <h3>Subscribe For Latest Newsletter</h3>
                <div className="form">
                    <input placeholder="Your Email" />
                    <Button className="button">Contact Us</Button>
                </div>
            </div>
        </div>
    )
}

export default Form;