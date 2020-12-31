import React, { Component } from "react";
import { Nav, NavDropdown,Carousel, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import Testimonials from '../../assets/images/testimonial.svg';
import Inverted from '../../assets/images/inverted-commas1.svg';
import Invertedtwo from '../../assets/images/inverted-commas2.svg';

class Happypatient extends Component { 
  render() {
    return (
        <div className="happyPatient">    
            <Container>
                    <div className="fs44 col10 fw700 w-100">Happy Patient</div>
                    <div className="col14 fs20 fw500 w-100 pt-3 mb-4">What people say about us. Here are comments from individuals who have visited Counselor.</div>
                    <Carousel>
                        <Carousel.Item>   
                            <div className="fs17 italic_style col11 fw400 mb-5"> 
                            <Image src={Inverted} alt="" className="invertedone" />
                            After my parents both suffered from some tragic events recently. Iwas all cloaked in depression.
                            Thank god such a good therapists as these exist, helping people in severely anxious conditions to spring 
                            back to a normal way of life!  
                            <Image src={Invertedtwo} alt="" className="invertedtwo" />
                            </div>
                            <Image src={Testimonials} alt="Testimonials" className="mt-4 mb-2" />  
                            <div className="fs20 col12 fw500 mb-2">Susan Merdinger</div> 
                            <div className="fs15 col13">Monday, May 2</div>
                        </Carousel.Item>

                        <Carousel.Item>  
                            <div className="fs17 italic_style col11 fw400 mb-5"> 
                            <Image src={Inverted} alt="" className="invertedone" />
                            After my parents both suffered from some tragic events recently. Iwas all cloaked in depression.
                            Thank god such a good therapists as these exist, helping people in severely anxious conditions to spring 
                            back to a normal way of life! 

                            <Image src={Invertedtwo} alt="" className="invertedtwo" />
                            </div>
                            <Image src={Testimonials} alt="" className="mt-4 mb-2" /> 
                            <div className="fs20 col12 fw500 mb-2">Susan Merdinger</div> 
                            <div className="fs15 col13">Monday, May 2</div>
                        </Carousel.Item> 

                        </Carousel>
            </Container>
        </div>
    )
  }
}

export default Happypatient;
