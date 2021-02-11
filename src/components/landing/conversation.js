import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import conversations from '../../assets/images/conversations.svg';
import professionals from '../../assets/images/professionals.svg';

class Conversations extends Component {
  render() {
    return (
        <div className="conversations">             
            <Container>
                <Row>
                    <Col md={6}> 
                        {/* <Image src={conversations} alt="" />    
                        <div className="fs36 fw600 col9">1,000</div>     
                        <div className="col3 fs32 fw600">Conversations</div>  
                        <div className="fs22 fw300 col14 pt-2">The India's Largest Emotional Support System</div>  */}
                        <div className="elpVideo">
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/GXS3c4ANQP8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div> 
                    </Col>

                    <Col md={6}> 
                        {/* <Image src={professionals} alt="" className="pt-4 mt-4" />
                        <div className="fs40 fw600 col9">180</div> 
                        <div className="col3 fs36 fw600">Professional Therapists</div>
                        <div className="fs22 fw300 col14 pt-2">Over 60 trained listeners Helped
                        over<br/> 200 people</div> */}     
                        <div className="elpVideo">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/B8G846WVA2I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                        {/* <div className="fs22 fw500 col14 mt-4">  
                            Over 300,000 trained listeners Helped over 25 million people</div> */}
                        </div> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}

export default Conversations; 

