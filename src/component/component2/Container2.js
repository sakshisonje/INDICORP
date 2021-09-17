import React from "react";
import './Container2.css';
import {Row,Col} from 'react-bootstrap';
import img1 from './images/cover.png';
import img2 from './images/cover (1).png';
import img3 from './images/cover (2).png';
import img4 from './images/cover (3).png';

function Container2() {
    return(
        <div className="container2">
            <div className="content">
                <h2>
                    Practice Advice
                </h2>
                <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="cards">
                <Row className="row">
                    <Col className="col">
                        <div className="title">
                            <h5>A single source of Truth</h5>
                            <p>Newton thought that light was made up of particles, but then it was discovered </p>
                        </div>
                        <img src={img1} alt="image1"/>
                    </Col>
                    <Col className="col">
                        <div className="title">
                            <h5>Fastest way to organise</h5>
                            <p>“Quantum mechanics” is the description of the behaviour of matter</p>
                        </div>
                        <img src={img2} alt="image2"/>
                    </Col>
                    <Col className="col">
                        <div className="title">
                            <h5>Fastest way to take Action</h5>
                            <p>They describe a universe consisting of bodies moving</p>
                        </div>
                        <img src={img3} alt="image3"/>
                    </Col>
                    <Col className="col">
                        <div className="title">
                            <h5>Work better together</h5>
                            <p>They finally obtained a consistent description of the behaviour </p>
                        </div>
                        <img src={img4} alt="image4"/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Container2;