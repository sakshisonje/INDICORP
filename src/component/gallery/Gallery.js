import './Gallery.css';
import { Row,Col } from 'react-bootstrap';
import Video from './Video';
import img1 from './images/Vector.png';
import img2 from './images/Vector(1).png';
function Gallery(){

   
    return (
        <div className="gallery" id="Product">
            <div className="gallery-text">
                <h2>We are providing best business service.</h2>
                <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <Row className="row">
                <Col className="video">
                    <Video />  
                </Col>
                <Col className="text">
                    <h2>Most trusted in our field</h2>
                    <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                    <div className="info1">
                        <span><img src={img1} alt="img"/></span><h5>the quick fox jumps over the lazy dog</h5>
                        <h6>Things on a very small scale ...</h6>
                        <span><img src={img2} alt="img"/></span><h5>the quick fox jumps over the lazy dog</h5>
                        <h6>Things on a very small scale ...</h6>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Gallery;