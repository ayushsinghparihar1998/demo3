import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Requestuserthree from "../../assets/images/pro_img3.svg";
import Aflag from "../../assets/images/australia_flag.svg";
import Iflag from "../../assets/images/india_flag.svg";
import Messagefour from "../../assets/images/msg4.svg";
import Melida from "../../assets/images/melida.svg";
import Searches from "../../assets/images/searches.svg";
import Starblank from "../../assets/images/starempty.svg";
import Starfill from "../../assets/images/starfill.svg";
import Subscribes from "../../assets/images/subscribes.svg";
import { connect } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import { Popover } from 'antd';

class ProfessinalBlog extends Component { 
    render() { 
    return (
    <div className="page__wrapper innerpage">
       <div className="main_baner">
          <NavBar {...this.props} />
       </div>
       <div className="profile_layout pt-4 pb-5">
          <Container>
             <div className="chatsearch w-100">
                <div className="search-box">
                   <Row>
                      <Col lg={3} md={4}>
                      <div className="col1 fw500 fs18 mt-2">Need to talk to someone?</div>
                      </Col>
                      <Col lg={3} md={5}>
                      <Form.Group> 
                         <Form.Control
                            type="text"
                            placeholder="Find Keywords"
                            className="inputTyp2 input3"
                            id="outlined-email"
                            variant="outlined"
                            name="screenName"
                            />
                      </Form.Group>
                      </Col>
                      <Col lg={3} md={3}>
                      <Button className="btnTyp5 bTyp5">
                      Search
                      </Button>
                      </Col>
                   </Row>
                </div>
             </div>
          </Container>
       </div>
       <Footer />
    </div>
    );
    }
    }
    export default ProfessinalBlog; 

