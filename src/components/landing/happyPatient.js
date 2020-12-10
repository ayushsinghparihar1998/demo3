import React, { Component } from "react";
import { Nav, NavDropdown, Carousel, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import Testimonials1 from '../../assets/images/user_1.JPG';
import Testimonials2 from '../../assets/images/user_2.JPG';
import Inverted from '../../assets/images/inverted-commas1.svg';
import Invertedtwo from '../../assets/images/inverted-commas2.svg';

class Happypatient extends Component {      
    render() {
        return (
            <div className="happyPatient">    
                <Container>
                    <div className="fs40 col14 fw600 w-100">Happy Users</div>
                    <div className="col14 fs20 fw400 w-100 pt-3 mb-5">What people say about us. Here are comments from individuals who have visited Counselor.</div> 
                    
                    <Carousel>
                        <Carousel.Item> 
                            <div className="fs17 italic_style col11 fw400 mb-5">
                                <div className="profileImage">
                                    <Image src={Testimonials2} alt="Testimonials" className="mb-2" />
                                </div> 
                                <Image src={Inverted} alt="" className="invertedone" />
                                <span className="txt_testi">After having a bad luck on some relationships, I was all cloaked in depression. if it would'nt be for counselling at ELNP, i would never have been able to move forward in life. This platform totally allows one to vent out at the times of need giving me a reason to love myself and live a better life</span>
                                <Image src={Invertedtwo} alt="" className="invertedtwo" />
                            </div>
                            
                            <div className="fs20 col12 fw500 mb-2">Sonal Puri (Member)</div>
                            <div className="fs15 col8">Saturday, October 10</div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="fs17 italic_style col11 fw400 mb-5"> 
                                <div className="profileImage">  
                                    <Image src={Testimonials1} alt="" className="mb-2" />
                                </div> 
                                <Image src={Inverted} alt="" className="invertedone" />
                                <span className="txt_testi">After my journey of being a Parent of two boys showing different difficulties, I wanted an ear to hear me out on my
depressing life matters. I’m so Thankful for getting such a compassionate listener at ease of my home and truly having
such a wonderful experience.</span> 
                                <Image src={Invertedtwo} alt="" className="invertedtwo" />                         
                            </div>
                            
                            <div className="fs18 col12 fw500 mb-2">Megha Bhatia (Member)</div> 
                            <div className="fs15 col8">Monday, October 5</div>  

                        </Carousel.Item> 

                    </Carousel>
                </Container>
            </div>
        )
    }
}

export default Happypatient;
