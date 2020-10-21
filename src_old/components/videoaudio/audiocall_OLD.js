import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav"; 
import Videousertwo from "../../assets/images/videousers.svg"; 
import Soundstwo from "../../assets/images/sounds.svg"; 
import Videomute from "../../assets/images/mute.svg";
import Videothree from "../../assets/images/video.svg";
import Videochat from "../../assets/images/chat.svg";
import Videodisconnect from "../../assets/images/dissconect.svg";   

class Audiocall extends Component {    
    render() {
        return (
            <div className="page__wrapper innerpage"> 
                <div className="main_baner">
                    <NavBar {...this.props} /> 
                </div>
                <div className="audiochat">   
                    <Container>
                        <div className="w-100 audiocontrol">       
                            <div className="mb-5"> 
                                <Image src={Videousertwo} alt="" className="mw-150" /> 
                                <div className="fs20 col18 fw500 mt-3">William Smith</div>
                                <div className="fs16 col18 fw300">Calling...</div> 
                            </div>
                            <div className="audiocontrolicon text-center">  
                                <Image src={Videomute} className="mr-3 pointer" />
                                <Image src={Videothree} className="mr-3 pointer" />
                                <Image src={Videodisconnect} className="pointer" /> 
                            </div>
                        </div>
                    </Container> 
                </div>

            </div>
        );
    }
}
export default Audiocall; 
