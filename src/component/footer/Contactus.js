import React from 'react';
import {Row,Col} from 'react-bootstrap';
import call from './images/call.png';
import location from './images/location.png';
import send from './images/send.png';
function Contactus(){
    return (
        <div className="contact">
            <Row>
                <Col className="col" md={4} lg={2} sm={4}>
                    <h5>Company Info</h5>
                    <a href="#">About Us</a><br />
                    <a href="#">Carrier</a><br />
                    <a href="#">We are hiring</a><br />
                    <a href="#">Blog</a>
                </Col>
                <Col className="col" md={4} lg={2} sm={4}>
                    <h5>Legal</h5>
                    <a href="#">About Us</a><br/>
                    <a href="#">Carrier</a><br />
                    <a href="#">We are hiring</a><br/>
                    <a href="#">Blog</a>
                </Col>
                <Col className="col" md={4} lg={2} sm={4}>
                    <h5>Features</h5>
                    <a href="#">Business Marketing</a><br />
                    <a href="#">User Analytic</a><br/>
                    <a href="#">Live Chat</a><br/>
                    <a href="#">Unlimited Support</a>
                </Col>
                <Col className="col" md={4} lg={2} sm={4}>
                    <h5>Resources</h5>
                    <a href="#">IOS & Android</a><br />
                    <a href="#">Watch a Demo</a><br />
                    <a href="#">Customers</a><br />
                    <a href="#">API</a>
                </Col>
                <Col className="col" md={4} sm={4}>
                    <h5>Get In Touch</h5>
                    <a href="#"><span><img src={call} alt="call"/></span>(480) 555-0103</a><br/>
                    <a href="#"><span><img src={location} alt="location"/></span>4517 Washington Ave.</a><br/>
                    <a href="#"><span><img src={send} alt="send"/></span>debra.holt@example.com</a><br/>
                </Col>
            </Row>
        </div>
    )
}

export default Contactus;