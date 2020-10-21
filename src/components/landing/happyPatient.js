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
                    <div className="fs40 col10 fw700 w-100">Happy Users</div>
                    <div className="col14 fs20 fw500 w-100 pt-3 mb-4">What people say about us. Here are comments from individuals who have visited Counselor.</div>
                    <Carousel>
                        <Carousel.Item>
                            <div className="fs17 italic_style col11 fw400 mb-5">
                                <Image src={Inverted} alt="" className="invertedone" />
                            After having a bad luck on some relationships, I was all cloaked in depression. if it would'nt for the counselling at ELNP, i
would have never been able to move forward in life. This platform totally allows one to vent out at the times of need
giving me a reason to love myself and live a better life
                            <Image src={Invertedtwo} alt="" className="invertedtwo" />
                            </div>
                            <Image src={Testimonials2} alt="Testimonials" className="mt-4 mb-2" />
                            <div className="fs20 col12 fw500 mb-2">Sonal Puri </div>
                            <div className="fs15 col13">Monday, May 2</div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="fs17 italic_style col11 fw400 mb-5">
                                <Image src={Inverted} alt="" className="invertedone" />
                                After my journey of being a Parent of two boys showing different difficulties, I wanted an ear to hear me out on my
depressing life matters. I’m so Thankful for getting such a compassionate listener at ease of my home and truly having
such a wonderful experience.

                            <Image src={Invertedtwo} alt="" className="invertedtwo" />
                            </div>
                            <Image src={Testimonials1} alt="" className="mt-4 mb-2" />
                            <div className="fs18 col12 fw500 mb-2">Megha Bhatia</div>
                            <div className="fs15 col13">Monday, May 2</div>
                        </Carousel.Item>

                    </Carousel>
                </Container>
            </div>
        )
    }
}

export default Happypatient;
