import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Profileban from "../../assets/images/profile_ban.svg";
import Profileimg from "../../assets/images/profile_img.svg";
import Usaflag from "../../assets/images/usa_flag.svg";
import warningS from "../../assets/images/w_signal.svg";
import Yellowstar from "../../assets/images/stars.png";
import Chatuser from "../../assets/images/chat_user.svg"; 

import { getLocalStorage } from "../../common/helpers/Utils";        

class ListenerProfile extends Component {        
  render() { 
    return (
      <div className="page__wrapper innerpage">     
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>

          <div className="profile_layout listenerprofile pt-4 pb-5">
            <Container>
                <div className="myprofile w-100">   
                  <div className="d-flex position-relative mb-4 pb-2">     
                        <div className="profile_top">   
                            <Image src={Profileimg} alt="" className="r50 border_profile" />    
                            <Image src={Usaflag}  
                            alt="" width='50px' className="r50 flags" /> 
                        </div>
                        <div className="mt-3 mb-4 pb-2 ml-4">   
                            <div className="fs18 fw600 col1 pb-1">Melisa R. Wright</div>
                            <div className="col23 fs16 fw500 pb-1">Listener
                                <Image src={warningS} alt="" className="ml-2" />  
                            </div>
                            <div className="mt-1 col27 fw400">Finding myself....</div> 
                            <div>
                                <Image src={Yellowstar} alt="" className="mr-1" /> 
                                <Image src={Yellowstar} alt="" className="mr-1" /> 
                                <Image src={Yellowstar} alt="" className="mr-1" /> 
                                <Image src={Yellowstar} alt="" className="mr-1" /> 
                                <Image src={Yellowstar} alt="" />   
                            </div>
                        </div>
                        
                        <div className="ml-auto">  
                                <Button className="btnType21 fs15 fw500 greenone"><Image src={Chatuser} /> CHAT NOW</Button>
                        </div>

                    </div>
                    <hr />
                    <Col lg={9} md={12}> 
                    <div className="col1 fs18 fw600 mt-3">About</div> 
                    <div className="fw400 fs15 col28 mt-3">I enjoy working with individuals of all capacities as I     view the role of therapist as one in which you help the client learn to cope with the       pressures of daily life. <strong className="fw500 col40">Read more...</strong>
                    </div>
                    <div className="col1 fs18 fw600 mt-3 pt-2">My Schedule</div> 
                    </Col>
                </div> 

                

            </Container>
          </div> 
        <Footer />
      </div>
    );
  }
}
export default ListenerProfile;


