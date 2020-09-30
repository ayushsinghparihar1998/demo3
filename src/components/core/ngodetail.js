import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Requestuser from "../../assets/images/pro_img.svg";
import Ngoone from "../../assets/images/ngo1.svg";
import Ngotwo from "../../assets/images/ngo2.svg";
import Ngothree from "../../assets/images/ngo3.svg"; 
import Ngodetails from "../../assets/images/ngo_detail.svg";  

import { connect } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import { Popover } from 'antd';
import {
    actionSearchListner,
    actionAddrating
} from '../../common/redux/actions'; 

class Ngodetail extends Component {   
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div> 
                <div className="ngo_services">
                    <Container>
                        <div className="ngo_listing mt-4 mb-4">   
                            <div className="col14 fw600 fs22 text-center w-100 mt-4 pt-3">
                                Child and Social Welfare Society
                            </div>
                            <hr className="ngohr" />  
                            <Row className="mt-4">          
                                <Col lg={12}>   
                                    <div className="ngo_details">     
                                        <Image src={Ngodetails} alt="" className="w-100" />    
                                        <div className="pt-3 pb-3">   
                                            <div className="col1 fs18 fw600">Child and Social Welfare Society</div>
                                            <div className="col14 fs14 fw400 pt-1">Founded in 1970</div> 
                                            <div className="fs14 col28 fw300 pt-3">We know taking your first chats can be challenging and often you have questions. Our community leaders are here to support you as you become the best listener possible! Here you will find a full list of our incredible Mentors, Mentor Leaders & Ambassadors!
all new listeners are required to connect with a quality mentor in their first week. To get started, just message a mentor from the list below! Or, <strong className="col23 fw600">you can sign up to be paired with a mentor.</strong> For immediate mentor support with an ongoing chat please visit the Listener Support Room any time.</div> 

                                            <div className="fs24 fw500 col14 mt-5">Charity is willingly given from the heart</div>
                                            <div className="fs15 fw300 col14 pt-2">Charity Fund your first chats can be challenging and often you have questions. Our community leaders are here to support you as you become the best listener possible!</div>
                                            <Button className="btnTyp5 mt-5">DONATE NOW</Button> 
                                        </div>
                                    </div>
                                </Col> 
                                
                            </Row>
                        </div> 
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Ngodetail;

