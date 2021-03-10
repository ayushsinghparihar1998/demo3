import React, { Component } from "react";
import { Nav, NavDropdown, Carousel, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import Testimonials1 from '../../assets/images/user_1.JPG';
import Testimonials2 from '../../assets/images/user_2.JPG';
import Inverted from '../../assets/images/inverted-commas1.svg';
import Invertedtwo from '../../assets/images/inverted-commas2.svg';
import Slider from "react-slick"; 

class Happypatient extends Component {               
    render() { 
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    adaptiveHeight: true,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ],
          };
        return (
            <div className="happyPatient">    
                <Container>
                    <div className="fs40 col8 fw600 w-100">Happy ELNP Members</div>   
                    <div className="col14 fs20 fw400 w-100 pt-3 mb-5 pb-2">             
                        What people say about us.  
                        {/* Here are comments from individuals who have visited Counselor.     */}
                    </div> 
                    <div>  
                        <Slider {...settings}>    
                        <div>
                            <div className="main_caro">
                                <div className="fs17 italic_style col11 fw400 mb-5"> 
                                    {/* <div className="profileImage">
                                        <Image src={Testimonials2} alt="Testimonials" className="mb-2" />
                                    </div>  */}
                                    <div className="fs17 col12 fw500 mb-1 italic_item">Abraham Jhone | IT Manager</div>
                                    <div className="fs15 col13 mb-3 pb-1">Monday, May 2</div>
                                    <Image src={Inverted} alt="" className="invertedone" />
                                    <div className="txt_testi italic_item fs15 mt-2"> 
                                    After my parents both suffered from some tragic events recently. Iwas all cloaked in depression. Thank god such a good therapists as these exist, helping people in severely anxious conditions to spring back to a normal way of life!
                                    </div>
                                    <Image src={Invertedtwo} alt="" className="invertedtwo" />
                                </div> 
                                
                            </div>
                        </div>
                        <div>
                            <div className="main_caro">  
                                <div className="fs17 italic_style col11 fw400 mb-5"> 
                                    {/* <div className="profileImage">
                                        <Image src={Testimonials2} alt="Testimonials" className="mb-2" />
                                    </div>  */}
                                    <div className="fs17 col12 fw500 mb-1 italic_item">Jihaan Advani | Events & Membership Head</div>
                                    <div className="fs15 col13 mb-3 pb-1">Monday, May 2</div>
                                    <Image src={Inverted} alt="" className="invertedone" />
                                    <div className="txt_testi italic_item fs15 mt-2"> 
                                    After my parents both suffered from some tragic events recently. Iwas all cloaked in depression. Thank god such a good therapists as these exist, helping people in severely anxious conditions to spring back to a normal way of life!
                                    </div>
                                    <Image src={Invertedtwo} alt="" className="invertedtwo" />
                                </div> 
                                
                            </div>
                        </div>
                        <div>
                            <div className="main_caro">
                                <div className="fs17 italic_style col11 fw400 mb-5"> 
                                    {/* <div className="profileImage">
                                        <Image src={Testimonials2} alt="Testimonials" className="mb-2" />
                                    </div>  */}
                                    <div className="fs17 col12 fw500 mb-1 italic_item">Abraham Jhone | IT Manager</div>
                                    <div className="fs15 col13 mb-3 pb-1">Monday, May 2</div>
                                    <Image src={Inverted} alt="" className="invertedone" />
                                    <div className="txt_testi italic_item fs15 mt-2"> 
                                    After my parents both suffered from some tragic events recently. Iwas all cloaked in depression. Thank god such a good therapists as these exist, helping people in severely anxious conditions to spring back to a normal way of life!
                                    </div>
                                    <Image src={Invertedtwo} alt="" className="invertedtwo" />
                                </div> 
                                
                            </div>
                        </div>
                        <div>
                            <div className="main_caro"> 
                                <div className="fs17 italic_style col11 fw400 mb-5"> 
                                    {/* <div className="profileImage">
                                        <Image src={Testimonials2} alt="Testimonials" className="mb-2" />
                                    </div>  */}
                                    <div className="fs17 col12 fw500 mb-1 italic_item">Jihaan Advani | Events & Membership Head</div>
                                    <div className="fs15 col13 mb-3 pb-1">Monday, May 2</div>
                                    <Image src={Inverted} alt="" className="invertedone" />
                                    <div className="txt_testi italic_item fs15 mt-2"> 
                                    After my parents both suffered from some tragic events recently. Iwas all cloaked in depression. Thank god such a good therapists as these exist, helping people in severely anxious conditions to spring back to a normal way of life!
                                    </div>
                                    <Image src={Invertedtwo} alt="" className="invertedtwo" />
                                </div> 
                                
                            </div>
                        </div>
                        
                        </Slider>
                    </div>

                    <Row className="d-none">  
                         <Col md={6}> 
                             <div className="main_caro">
                                <div className="fs17 italic_style col11 fw400 mb-5"> 
                                    {/* <div className="profileImage">
                                        <Image src={Testimonials2} alt="Testimonials" className="mb-2" />
                                    </div>  */}
                                    <div className="fs17 col12 fw500 mb-1 italic_item">Abraham Jhone | IT Manager</div>
                                    <div className="fs15 col13 mb-3 pb-1">Monday, May 2</div>
                                    <Image src={Inverted} alt="" className="invertedone" />
                                    <div className="txt_testi italic_item fs15 mt-2"> 
                                    After my parents both suffered from some tragic events recently. Iwas all cloaked in depression. Thank god such a good therapists as these exist, helping people in severely anxious conditions to spring back to a normal way of life!
                                    </div>
                                    <Image src={Invertedtwo} alt="" className="invertedtwo" />
                                </div> 
                                
                            </div>
                         </Col> 
                         <Col md={6}>
                             <div className="main_caro">
                                <div className="fs17 italic_style col11 fw400 mb-5"> 
                                    {/* <div className="profileImage">  
                                        <Image src={Testimonials1} alt="" className="mb-2" />
                                    </div>  */}
                                    <div className="fs16 col12 fw500 mb-1 italic_item"> 
                                        Jihaan Advani | Events & Membership Head
                                    </div>   
                                    <div className="fs15 col13 mb-3 pb-1">Monday, May 2</div>   
                                    <Image src={Inverted} alt="" className="invertedone" />
                                    <div className="txt_testi italic_item fs15 mt-2"> 
                                    After my parents both suffered from some tragic events recently. Iwas all cloaked in depression. Thank god such a good therapists as these exist, helping people in severely anxious conditions to spring back to a normal way of life!
                                    </div> 
                                    <Image src={Invertedtwo} alt="" className="invertedtwo" />                         
                                </div>
                            
                                
                             </div>
                         </Col>  
                    </Row>

                    <Carousel className="d-none">   
                        <Carousel.Item> 
                            <div className="fs17 italic_style col11 fw400 mb-5">
                                <div className="profileImage">
                                    <Image src={Testimonials2} alt="Testimonials" className="mb-2" />
                                </div> 
                                <Image src={Inverted} alt="" className="invertedone" />
                                <div className="txt_testi mt-5">After having a bad luck on some relationships, I was all cloaked in depression. if it would'nt be for counselling at ELNP, i would never have been able to move forward in life. This platform totally allows one to vent out at the times of need giving me a reason to love myself and live a better life</div>
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
                                <div className="txt_testi mt-5">After my journey of being a Parent of two boys showing different difficulties, I wanted an ear to hear me out on my
depressing life matters. I’m so Thankful for getting such a compassionate listener at ease of my home and truly having
such a wonderful experience.</div> 
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
