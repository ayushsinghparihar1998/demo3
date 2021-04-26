import React, { Component } from "react";
import { connect } from "react-redux";
import {
   Button,
   NavDropdown,
   Carousel,
   Container,
   Row,
   Col,
   Image,
   Form,
   Tabs,
   Tab,
   Modal,
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Copys from "../../assets/images/copy_icon.svg";
import Warningtwo from "../../assets/images/w_signal.svg";
import Progresss from "../../assets/images/progress_bar.svg";
import Stars from "../../assets/images/stars.svg";
import Hearttwo from "../../assets/images/heart2.svg";
import Medals from "../../assets/images/medals.svg";
import Rflag from "../../assets/images/r_flag.svg";
import Facebooknew from "../../assets/images/facebook_new.svg";
import Instagramnew from "../../assets/images/instagram_new.svg";
import Creditcard from "../../assets/images/credit-card.svg";
import Subscriptions from "../../assets/images/subscription_plan.svg";
import Paymentmethod from "../../assets/images/payment-method.svg";
import Gmail from '../../assets/images/gmail1.svg';
import Whatsapp from '../../assets/images/whatsapp1.svg';
import Quotetwo from '../../assets/images/quote_two.svg';
import Quotefour from '../../assets/images/quote4.png';
import Blogs from '../../assets/images/blogs.svg';
import Blogstwo from '../../assets/images/blogs2.svg';
import Blogsthree from '../../assets/images/blogs3.svg';
import ELPRxApiService from "../../common/services/apiService";
import constant from '../../constant'

import {
   FacebookIcon,
   FacebookShareButton,
} from "react-share";

import SocketIOClient from "socket.io-client";
import {
   getLocalStorage,
   removeLocalStorage,
   showErrorMessage,
} from "../../common/helpers/Utils";
import {
   actionGetRecentJoin,
   actionGetUserDashBoard,
} from "../../common/redux/actions";
import socketClass from "../../common/utility/socketClass";
import RecentChat from "../ChatShared/RecentChat/RecentChat";
import ActiveUsers from "../ChatShared/ActiveUsers/ActiveUsers";
import Quotes from "../quotes";
import BlogList from "../blogList";
import FunFact from "../funfacts";
// const SOCKET_IO_URL = "http://103.76.253.131:8282";
const socket = socketClass.getSocket();
// SocketIOClient(SOCKET_IO_URL);
// socket.connect();
class CorporateDashboard extends Component {   
   render() { 
      return (
         <div className="page__wrapper innerpage">
            <div className="main_baner">
               <NavBar {...this.props} />
            </div>
            <div className="userdashboards pt-4 pb-5">
               <Container>
                  <Row>
                     <Col md={9}>
                        <Row>
                           <Col md={4} className="pl-0">
                              <div className="left_sidebar">
                                 <RecentChat />
                                 
                                 <div className="inner_side">
                                    <div className="upgrade">
                                       <Button className="btnType17">Upgrade to Premium Account</Button>
                                    </div>
                                 </div>
                                 <div className="inner_side">
                                    <div className="benefits">
                                       <div className="pb-2 col14 fw500 fs15">Benefits of becoming a Listener</div>
                                       <Button className="btnType18">Learn More</Button>
                                    </div>
                                 </div>
                                 <div className="inner_side">
                                    <div className="share_user">
                                       <span className="col1 fs18 fw500 mr-3">Share us on:</span>
                                       <span className="mr-2">
                                         <FacebookShareButton> 
                                           <FacebookIcon /></FacebookShareButton></span> 
                                    </div>
                                 </div>
                              </div>
                           </Col>

                           <Col md={8} className="pl-0">
                              <div className="user_body">
                                 <div className="inner_body mb-3">
                                    <div className="d-flex justify-content-between border_yellow">
                                       <Row className="w-100">
                                          <Col lg={4} md={4} xs={12} className="pr-0">
                                             <div className="col1 fw400 fs13 mt-2">Need to talk to someone?</div>
                                          </Col>
                                          <Col lg={6} md={6} xs={10} className="pl-0">
                                             <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Control as="select"
                                                   className="selectTyp1 select3"
                                                   name="date" 
                                                >
                                                   <option>Select Category</option> 
                                                </Form.Control>
                                             </Form.Group>
                                          </Col>
                                          <Col lg={2} md={2} xs={2} className="text-right">
                                             <Button className="btnTyp5 smallbtn">chat</Button>
                                          </Col>
                                       </Row>
                                    </div>
                                 </div>
                                 <div className="inner_body mb-3">
                                    <div className="test_eat fs18 col18">Test your Eat Luv Pray Quotient</div>
                                 </div>

                                 <FunFact />

                                 <Quotes />

                              </div>
                           </Col>
                           {/*<BlogList />*/}   
                        </Row>
                     </Col>

                     <Col md={3}>
                        <div className="right_sidebar">  
                           <div className="right_inner_side">
                              <div className="chat-bg chatn fs600 fs17 col18 pl-3 pointer"> 
                                 <Button className="btnType18 d-block twos">My Account</Button>
                              </div> 
                              <div className="m-3 pb-3 bg-grays">
                                 <div className="d-flex mb-2">
                                    <Image src={Creditcard} alt="" className="pointer" />
                                    <span className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                                       Remaining Credits
                                   </span>
                                 </div>
                              </div>
                              <div className="m-3 pb-3 bg-grays">
                                 <div className="d-flex mb-2">
                                    <Image src={Subscriptions} alt="" className="pointer" />
                                    <span className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                                       Subscriptions
                                    </span>
                                 </div>
                              </div>
                              <div className="m-3 pb-3 bg-grays">
                                 <div className="d-flex mb-2">
                                    <Image src={Paymentmethod} alt="" className="pointer" />
                                    <span className="pl-3 mt-auto mb-auto col14 fs16 fw400"> 
                                       Payments
                                    </span>
                                 </div>
                              </div>
                           </div> 
                           <div className="right_inner_side">
                              <div className="chat-pink fs600 fs17 fs_set col18 pl-3 pointer"> 
                                 <Image src={Rflag} alt="" className="mr-2" />
                                 <span className="d_text"> Discover Subcommunities </span>   
                              </div>
                           </div>
                           <div className="right_inner_side">
                              <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                                 My Personal Link
                              </div>
                              <div className="p-3">
                                 <div className="fs14 col14 fw400">
                                    Share your link to earn rewards & help us to support
                                    more people
                                 </div>
                                 <Form.Group className="d-flex mt-4">
                                    <Form.Control
                                       id="referURL"
                                       type="text"
                                       readOnly
                                       className="inputTyp4"
                                       
                                    />
                                    <Button className="btnTyp8">  
                                       <Image src={Copys} alt="" className="" />
                                    </Button>
                                 </Form.Group>
                                 <div className="text-center sharethis"> 
                                    <span className="col1 fs12 fw500 mr-1">Share this code on Social Media:</span>
                                    <Image src={Gmail} alt="" className="mr-2" />
                                    <a><Image src={Whatsapp} alt="" className="" /></a> 
                                 </div>
                              </div>
                           </div>
                           <div className="right_inner_side">
                              <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                                 Recent join
                              </div>
                             
                                
                            <div className="d-flex m-3 border-bottom">
                                <div className="position-relative">
                                {/* <Image src={} alt="" className="r50 pt-1" />  */}
                                </div>
                                <div className="mt-auto mb-auto pl-3">
                                <div className="fs15 col14 fw500">Hello</div>
                                <div className="col27 fs13 fw500">Detail</div> 
                                </div>
                            </div>
                                     
                              {/* 
                  <div className="d-flex m-3 border-bottom">
                     <div className="position-relative">
                        <Image src={UserChat2} alt="" className="r50 pt-1" />
                     </div>
                     <div className="mt-auto mb-auto pl-3">
                        <div className="fs15 col14 fw500">Scott Smith</div>
                        <div className="col27 fs13 fw500">Listeners</div>
                     </div>
                  </div>
                  */}
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
            <Footer />
         </div>
      );
   }
}
export default CorporateDashboard;  

