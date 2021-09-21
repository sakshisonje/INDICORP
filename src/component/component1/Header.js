import React from "react";
import './Header.css';
import {Container,Navbar,Nav,Row,Col,Card,Button} from 'react-bootstrap';
import img1 from './images/Vector.png';
import img2 from './images/Vector (1).png';
import img3 from './images/Vector (2).png';
import ham from './images/hamburger.png';

function Header()
{
    return (
        <div className="header" id="home">
            <Container>
                <Navbar className="navbar" expand="lg">
                    <Container>
                        <Navbar.Brand className="logo" href="#">Indicorp</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <span><img src={ham}/></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link className="Navlink" href="#home">Home</Nav.Link>
                            <Nav.Link className="Navlink" href="#Product">Product</Nav.Link>
                            <Nav.Link className="Navlink" href="#Pricing">Pricing</Nav.Link>
                            <Nav.Link className="Navlink" href="#Contact">Contact</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </Container>
            <div className="info">
                <h1>EMPOWER YOUR BUSINESS</h1>
                <p>We know how large objects will act, But things on a small scale.</p>
                <a className="firstbutton" href="#1">Get Quote Now</a>
                <a className="secondbutton" href="#1">Learn More</a>
            </div>

            <div className="card1">
                <Row className="textcard">
                    <Col className="textcol-1 cardbox">
                        <img src={img1} alt="img1"/>
                        <h3>Digital Marketing</h3>
                        <p>We focus on ergonomics and meeting you where you work. </p>
                    </Col>
                    <Col className="textcol-2 cardbox">
                        <img src={img2} alt="img2"/>
                        <h3>National top 50 firms</h3>
                        <p>Just type what's on your mind and we'll get you there.</p>
                    </Col>
                    <Col className="textcol-3 cardbox">
                        <img src={img3} alt="img3"/>
                        <h3>Digital Marketing</h3>
                        <p>the quick fox jumps over the lazy dog</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Header;