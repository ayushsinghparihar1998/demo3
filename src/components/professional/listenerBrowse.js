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

class ListenerBrowse extends Component { 
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
                <div className="search-listing">
                   <Row>
                      <Col lg={4} md={6}>
                      <div className="subscribes active">
                         <div className="subleft">
                            <Image src={Subscribes} alt=""/>
                            <span>Subscribe</span>
                         </div>
                         <div className="text-right mt-4 mr-3">
                            <Image src={Messagefour} alt="" />
                            <span className="fs13 col14 fw400 ml-1">340</span>
                         </div>
                         <div className="text-center position-relative">
                            <span className="onlines"></span>
                            <span className="offline d-none"></span> 
                            <span className="onlineyellow d-none"></span>
                            <Image width={100} src={Requestuser} className="r50" />
                            <Image src={Aflag} alt="" className="flagset" />
                         </div>
                         <div className="col1 fs18 fw600 mt-4">HopePeaceHappiness</div>
                         <div className="fs14 col14 fw400">Master 10</div>
                         <div className="fs14 col14 fw400">Listens to Over in last week
                         </div>
                         <div className="starrating">
                            {/* <ReactStars
                            count={5}
                            value={item.u_rating ? item.u_rating :0}
                            onChange={this.ratingChanged(item.id)}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            size={24}
                            //  color="#FABE2C" 
                            activeColor="#FABE2C"
                            /> */}
                         </div>
                         <div>
                            <hr className="shr" />
                            <div className="fs14 col29 fw300 content_set">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            </div>
                            <Popover content="Hello User" title="Title" trigger="click">
                               <div className="mt-3 mb-3 col10 fs14 fw600 pointer">
                                  Read More
                               </div>
                            </Popover>
                         </div>
                         <div>  
                         </div>
                      </div>
                      </Col>   
                      <Col lg={4} md={6}>
                      <div className="subscribes">
                         <div className="text-right mt-4 mr-3">
                            <Image src={Messagefour} alt="" />
                            <span className="fs13 col14 fw400 ml-1">340</span>
                         </div>
                         <div className="text-center position-relative">
                            <span className="onlines"></span>
                            <span className="offline d-none"></span> 
                            <span className="onlineyellow d-none"></span>
                            <Image width={100} src={Requestuser} className="r50" />
                            <Image src={Aflag} alt="" className="flagset" />
                         </div>
                         <div className="col1 fs18 fw600 mt-4">HopePeaceHappiness</div>
                         <div className="fs14 col14 fw400">Master 10</div>
                         <div className="fs14 col14 fw400">Listens to Over in last week
                         </div>
                         <div className="starrating">
                            {/* <ReactStars
                            count={5}
                            value={item.u_rating ? item.u_rating :0}
                            onChange={this.ratingChanged(item.id)}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            size={24}
                            //  color="#FABE2C" 
                            activeColor="#FABE2C"
                            /> */}
                         </div>
                         <div>
                            <hr className="shr" />
                            <div className="fs14 col29 fw300 content_set">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            </div>
                            <Popover content="Hello User" title="Title" trigger="click">
                               <div className="mt-3 mb-3 col10 fs14 fw600 pointer">
                                  Read More
                               </div>
                            </Popover>
                         </div>
                         <div>  
                         </div>
                      </div>
                      </Col> 
                      <Col lg={4} md={6}>
                      <div className="subscribes">
                         <div className="subleft">
                            <Image src={Subscribes} alt=""/>
                            <span>Subscribe</span>
                         </div>
                         <div className="text-right mt-4 mr-3">
                            <Image src={Messagefour} alt="" />
                            <span className="fs13 col14 fw400 ml-1">340</span>
                         </div>
                         <div className="text-center position-relative">
                            <span className="onlines"></span>
                            <span className="offline d-none"></span> 
                            <span className="onlineyellow d-none"></span>
                            <Image width={100} src={Requestuser} className="r50" />
                            <Image src={Aflag} alt="" className="flagset" />
                         </div>
                         <div className="col1 fs18 fw600 mt-4">HopePeaceHappiness</div>
                         <div className="fs14 col14 fw400">Master 10</div>
                         <div className="fs14 col14 fw400">Listens to Over in last week
                         </div>
                         <div className="starrating">
                            {/* <ReactStars
                            count={5}
                            value={item.u_rating ? item.u_rating :0}
                            onChange={this.ratingChanged(item.id)}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            size={24}
                            //  color="#FABE2C" 
                            activeColor="#FABE2C"
                            /> */}
                         </div>
                         <div>
                            <hr className="shr" />
                            <div className="fs14 col29 fw300 content_set">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            </div>
                            <Popover content="Hello User" title="Title" trigger="click">
                               <div className="mt-3 mb-3 col10 fs14 fw600 pointer">
                                  Read More
                               </div>
                            </Popover>
                         </div>
                         <div>  
                         </div>
                      </div>
                      </Col> 
                      <div className="text-center w-100">
                         <Button
                            className="btnTyp12"
                            >
                         show more
                         </Button>
                      </div>
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
    export default ListenerBrowse;

