import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col, Carousel } from "react-bootstrap";
import community from '../../assets/images/community.svg';
import freechat from '../../assets/images/free-chat.svg';
import therapy from '../../assets/images/therapy.svg';
// import women from '../../assets/images/header_banner2.svg';
import women from '../../assets/images/header_banner3.png'; 
import user from '../../assets/images/user.svg';
import usercomment from '../../assets/images/user-comment.svg';
import usersend from '../../assets/images/user-send.svg';                                             

class Banner extends Component {               
    render() {
        return (
            <Container>

                <Row>
                    <Col md={6}> 
                    <Carousel className="baner_carousel">     
                        <Carousel.Item>
                        {/* <div className="fs40 pt-120 ptn-170 col18 fw600 mb-4">Need a Constant Companion? Come talk to us, you're never alone</div> */}
                              <div className="fs40 pt-120 ptn-170 col64 fw600 mb-4">Eat Well</div>
                                    {/* <div className="fw300 col18 fs20 mb-5">Time to get out of that imaginary confined space<br />
                    Our trained Listeners are ready to extend their helping hand</div> */}
                              <div className="fw300 col64 fs20 mb-5">
                                    Eat - If you don't make time for your wellness, you will be forced to make time for your Illness. 
                              </div>
                               <div className="mt-4">   
                                    <Button type="submit" className="btnTyp5 talkBtn fs18 fw400 mr-3">Talk to us
                                    </Button> 
                                    <Button type="submit" className="btnTyp5 talkBtntwo fs18 fw400">Wellness assessment tests
                                    </Button> 
                                    <span className="fs13 col13 coming_m">Coming soon</span>
                              </div>
                        </Carousel.Item>  
                        <Carousel.Item>                  
                        {/* <div className="fs40 pt-120 ptn-170 col18 fw600 mb-4">Need a Constant Companion? Come talk to us, you're never alone</div> */}
                            <div className="fs40 pt-120 ptn-170 col64 fw600 mb-4">Luv Often</div>
                               <div className="fw300 col64 fs20 mb-5">  
                                    Luv - I am stronger than Depression and I am braver than Loneliness and nothing will ever exhaust me
                              </div>
                            <div className="mt-4"> 
                                <Button type="submit" className="btnTyp5 talkBtn fs18 fw400 mr-3">Talk to us</Button> 
                                <Button type="submit" className="btnTyp5 talkBtntwo fs18 fw400">Wellness assessment tests
                                </Button> 
                                <span className="fs13 col13 coming_m">Coming soon</span>
                            </div>
                        </Carousel.Item> 
                        <Carousel.Item>              
                       
                        <div className="fs40 pt-120 ptn-170 col64 fw600 mb-4">Pray Always</div>      
                             <div className="fw300 col64 fs20 mb-5">
                                  Pray - Let's take a few minutes to day our prayer for the world to heal and come together in these difficult times. Please be safe.
                             </div>  
                                <div className="mt-4">  
                                    <Button type="submit" className="btnTyp5 talkBtn fs18 fw400 mr-3">Talk to us</Button>  
                                    <Button type="submit" className="btnTyp5 talkBtntwo fs18 fw400">Wellness assessment tests
                                    </Button>  
                                    <span className="fs13 col13 coming_m">Coming soon</span> 
                                </div> 
                        </Carousel.Item> 
                    </Carousel>
                    </Col>
                    <div className="header2banner"> 
                        <Image src={women} alt="" className="w-100" /> 
                    </div>
                </Row>


                <Row className="d-none">  
                    <Col md={3} col={12} className="mb-5">      
                        <div className="baner2 bannerset">
                            <Image src={freechat} alt="" className="pt-2" />
                            <div className="fs18 fw600 col6 pt-2">Free Chat</div> 
                            <div className="col14 fs12 fw300 pt-1 pl-4 pr-4">Need someone to talk to you? Build your self-confidence by venting to non-judgemental and supportive Listeners.</div>
                            <Image src={usercomment} alt="" className="pt-3 user_set" />
                        </div>
                    </Col>
                    <Col md={3} col={12} className="mb-5">     
                        <div className="baner3 bannerset">
                            <Image src={therapy} alt="" className="pt-2" />
                            <div className="fs18 fw600 col7 pt-2">Professional Help</div> 
                            <div className="col14 fs12 fw300 pt-1 pl-4 pr-4">Trusted advice, counselling and guidance for weight loss and management, relationship issues and mental health, it is relatively inexpensive compared to traditional therapy.</div>
                            <Image src={usersend} alt="" className="pt-3 mt-3 user_set" />
                        </div>
                    </Col>
                    <Col md={3} col={12} className="mb-5">  
                        <div className="baner1 bannerset">
                            <Image src={community} alt="" className="pt-2" />
                            <div className="fs18 fw600 col5 pt-2">Community / CSR</div>
                            <div className="col14 fs12 fw300 pt-1 pl-4 pr-4">Your employees are at the core of your success. Increase productivity and create positive work environment by our EAP (Employee Assistance Program).</div> 
                            <Image src={user} alt="" className="pt-3 mt-3 user_set" />

                        </div>
                    </Col>
                    <Col md={3} col={12}>     
                        <Image src={women} alt="" className="w-100" />   
                    </Col>
                </Row>

            </Container> 
        )
    }
}

export default Banner; 
