import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../../core/nav";
import Footer from "../../core/footer"; 
import Profileimg from "../../../assets/images/profile_img.svg";
import Usaflag from "../../../assets/images/usa_flag.svg";

class Userprofiledetail extends Component {

    render() {
    
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} /> 
                </div>
                <div className="profile_layout pt-4 pb-5">
                    <Container>
                        <Row> 
                            <div className="myprofile mt-3 w-100">    
                                <div className="text-center profile_top melisa">
                                    <Image src={Profileimg} alt="" className="r50 border_profile" />
                                    <Image src={Usaflag} alt="" className="r50 flags" />
                                </div>
                                <div className="text-center mt-4 mb-4 pb-2">
                                    <div className="col1 fs18 fw600 pb-1">Melisa R. Wright
                                    </div>
                                </div>
                                <div className="text-center user_tab">  
                                    <div className="">   
                                    <div className="layout mt-5">
                                                <div className="d-flex m-auto w35 border2">
                                                    <div className="fs16 col23 fw400 text-left w60">Name:</div>
                                                    <div className="fs16 col14 fw400 text-left w40">Melisa</div>
                                                </div>
                                            </div>
                                            <div className="layout">
                                                <div className="d-flex m-auto w35 border2">
                                                    <div className="fs16 col23 fw400 text-left w60">Email:</div>
                                                    <div className="fs16 col14 fw400 text-left w40">melisa_r@gmail.com
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="layout">
                                                <div className="d-flex m-auto w35 border2">
                                                    <div className="fs16 col23 fw400 text-left w60">Date of Birth:</div>
                                                    <div className="fs16 col14 fw400 text-left w40">Apr 29, 1998</div> 
                                                </div>
                                            </div>
                                        
                                    </div>
                                   
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
export default Userprofiledetail; 
