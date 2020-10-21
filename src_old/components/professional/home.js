import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Profileban from "../../assets/images/profile_ban.svg";
import Profileimg from "../../assets/images/profile_img.svg";
import Usaflag from "../../assets/images/usa_flag.svg";
import warningS from "../../assets/images/w_signal.svg";
import Camera from "../../assets/images/camera.svg";
import Cameratwo from "../../assets/images/camera-white.svg";
import Requestuser from "../../assets/images/pro_img.svg"; 
import Requestusertwo from "../../assets/images/pro_img2.svg"; 
import Requestuserthree from "../../assets/images/pro_img3.svg"; 
import Aflag from "../../assets/images/australia_flag.svg";
import Iflag from "../../assets/images/india_flag.svg";  

class Homepage extends Component {  
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout pt-4 pb-5">
                    <Container>
                        <Row>
                            <div className="myprofile">
                                <Image src={Profileban} alt="" className="w-100" /> 
                                <div className="text-center profile_top">
                                    <Image src={Profileimg} alt="" className="r50 border_profile" />
                                </div>
                                <div className="text-center mt-4 mb-4 pb-2">
                                    <div className="fs18 fw600 col1 pb-1">Melisa R. Wright</div>
                                    <div className="col23 fs16 fw500 pb-1">
                                        Listener - Novice 
                                        <Image src={warningS} alt="" className="ml-2" />
                                    </div>
                                    <div className="col27 fw400 fs14">Finding myself....</div>
                                    <div className="border_bottoms mt-3"></div>
                                </div>
                                <div className="text-center user_tab">     
                                    <Tabs defaultActiveKey="request">
                                        <Tab eventKey="request" title="Requested">
                                            <div className="p-5">
                                                <div className="d-flex pt-5 pb-5 text-left border-grays">    
                                                    <div className="mr-4">
                                                        <Image src={Requestuser} alt="" className="r50" /> 
                                                    </div>
                                                    <div className="pl-2">           
                                                        <div className="d-flex justify-content-between">      
                                                            <div>
                                                                <div className="col1 fw500 fs18 pb-1">Veronica Wade-Hampton</div> 
                                                                <div className="col40 fs15 fw400 pb-1">Category: Depression, Work Stress,  Bullying
                                                                </div>
                                                                <div className="fs14 fw400 col54 pb-1">Licensed Professional Counselor, LPC</div>
                                                            </div>
                                                            <div className="">  
                                                                <span className="col28 fs14 fs400 pr-3"> 
                                                                    Victoria
                                                                </span>
                                                                <Image src={Aflag} alt="" />  
                                                                <div className="col40 fs14 fs400 pt-1">901-647-8522</div> 
                                                            </div>  
                                                        </div>

                                                        <div className="col28 fs15 fw400 pt-1">I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life.  <span className="col40 fw500">Read more...</span>
                                                        </div>    
                                                    </div>
                                                </div> 

                                                <div className="d-flex pt-5 pb-5 text-left border-grays">    
                                                    <div className="mr-4"> 
                                                        <Image src={Requestusertwo} alt="" className="r50" /> 
                                                    </div>
                                                    <div className="pl-2">        
                                                        <div className="d-flex justify-content-between">      
                                                            <div>
                                                                <div className="col1 fw500 fs18 pb-1">Hope Hadding
                                                                </div> 
                                                                <div className="col40 fs15 fw400 pb-1">Category: Alcohol/Drug Use, Family Stress, Financial Stress
                                                                </div>
                                                                <div className="fs14 fw400 col54 pb-1">Licensed Professional Counselor, LPC</div>
                                                            </div>
                                                            <div className="">  
                                                                <span className="col28 fs14 fs400 pr-3"> 
                                                                    Mumbai
                                                                </span>
                                                                <Image src={Iflag} alt="" />  
                                                                <div className="col40 fs14 fs400 pt-1">91 9826098260
                                                                </div>  
                                                            </div>  
                                                        </div>

                                                        <div className="col28 fs15 fw400 pt-1">I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life.  <span className="col40 fw500">Read more...</span>
                                                        </div>    
                                                    </div>
                                                </div> 

                                                <div className="d-flex pt-5 pb-5 text-left">      
                                                    <div className="mr-4">
                                                        <Image src={Requestuserthree} alt="" className="r50" /> 
                                                    </div>
                                                    <div className="pl-2">        
                                                        <div className="d-flex justify-content-between">      
                                                            <div>
                                                                <div className="col1 fw500 fs18 pb-1">Evelyn Coker
                                                                </div> 
                                                                <div className="col40 fs15 fw400 pb-1">Category: Alcohol/Drug Use, Family Stress, Financial Stress
                                                                </div>
                                                                <div className="fs14 fw400 col54 pb-1">Licensed Professional Counselor, LPC</div>
                                                            </div>
                                                            <div className="">  
                                                                <span className="col28 fs14 fs400 pr-3"> 
                                                                    Mumbai  
                                                                </span>
                                                                <Image src={Iflag} alt="" />  
                                                                <div className="col40 fs14 fs400 pt-1">91 9826098260</div> 
                                                            </div>  
                                                        </div>

                                                        <div className="col28 fs15 fw400 pt-1">I enjoy working with individuals of all capacities as I view the role of therapist as one in which you help the client learn to cope with the pressures of daily life.  <span className="col40 fw500">Read more...</span>
                                                        </div>    
                                                    </div>
                                                </div> 
                                        </div> 
                                        
                                        </Tab>
                                        <Tab eventKey="ongoing" title="Ongoing">
                                            
                                        </Tab>
                                        <Tab eventKey="completed" title="Completed">           

                                        </Tab> 

                                    </Tabs>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Homepage;
