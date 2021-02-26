import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import VideoIcon from "../../assets/images/videoIcon.png";
import BlogProcessFour from "../../assets/images/p_blogs4.svg";
import BlogProcessFive from "../../assets/images/blog4.png"; 
import { connect } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import { Popover } from 'antd';
import {
    actionSearchListner,
    actionAddrating
} from '../../common/redux/actions';

class Chatsearch extends Component {
    render() {
       
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="ngo_services media_details pt-4 pb-5">
                    <Container>
                        <div className="ngo_listing mt-4 mb-4">
                            <div className="col8 fw600 fs22 text-center w-100 text-uppercase mt-4 pt-3">blog2</div>
                            <hr className="ngohr"></hr> 
                            <Row className="mt-4">
                                <Col md={12}> 
                                    <div className="ngo_details mt-2"> 
                                        <div className="elpVideoblog">      
                                            <Image
                                            src={BlogProcessFive} 
                                            className="iconVideomain"
                                            /> 
                                            <div>  
                                                <Image
                                                    src={VideoIcon}  
                                                    className="iconVideo" 
                                                    onClick={this.handleShow}  
                                                /> 
                                                <iframe  
                                                width="100%"
                                                height="400"
                                                // src={this.state.url}
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen
                                                ></iframe>

                                            </div>
                                        </div>

                                        <div className="pt-3 pb-3">
                                            <div className="col14 fs14 fw400 pt-1">Thursday Feb 18th 2021</div>
                                            <div className="fs14 col28 fw300 pt-3 line_txt">Test</div> 
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
export default Chatsearch; 




