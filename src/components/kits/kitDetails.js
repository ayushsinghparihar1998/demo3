import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Form
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Splan from "../../assets/images/blog5.png"; 
import Arrowright from "../../assets/images/Arrowright.png";
import { Link, Redirect } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import VideoIcon from "../../assets/images/videoIcon.png";

import CrossTwo from "../../assets/images/crosstwo.png";
import logopink from "../../assets/images/elplogopink.png";

import YouTube from "react-youtube";
import validator from "validator";
import { getLocalStorage } from "../../common/helpers/Utils";
import CustomModal from "../modals/customModal";
import KitOne from "../../assets/images/kits.png";
import KitTwo from "../../assets/images/kits2.png";
import KitThree from "../../assets/images/kits3.png";
import RightArrow2 from "../../assets/images/rightarrow2.png"; 
import GiftBox from "../../assets/images/giftbox.png"; 
import Kits1 from "../../assets/images/kitd1.png"; 
import BannerS from "../../assets/images/bannerS.png";  
import Slider from "react-slick"; 


// const [checked, setChecked] = useState(false);
// const [radioValue, setRadioValue] = useState('1');

// const radios = [
//   { name: 'Active', value: '1' },
//   { name: 'Radio', value: '2' },
//   { name: 'Radio', value: '3' },
// ];

class KitDetails extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="kitDetailMain"> 
            <Container>
                <div className="kitDetailTwo mt-4 mb-4"> 
                    <div className="banLayout">
                        <div className="layTwo">Get 
                         <span className="text-uppercase ml-1 mr-1">free audio video calls</span> 
                          by buying any plan </div> 
                    </div> 
                    <div className="fs18 text-left fw500 mt-3 mb-5"><span className="col14 fw300 mr-1">Kits</span> / 
                    <span className="col29 fs18 ml-1">Kit Details</span></div>    

                    <Row>
                    <Col md={6}>
                         <div className="detailsLeft">
                              <div className="socialUser">
                                  <div className="fs24 fw500 col64">I’m Sexy</div>  
                                  <ul>
                                      <li><a className="faceBook"><i className="fa fa-facebook"></i></a></li>
                                      <li><a className="twiTter"><i className="fa fa-twitter"></i></a></li>
                                      <li><a className="enveLope"><i className="fa fa-envelope"></i></a></li>
                                      <li><a className="linkeDin"><i className="fa fa-linkedin"></i></a></li>
                                  </ul> 
                              </div>
                              <div className="fw400 fs15 col14 mt-2">      
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                              </div> 

                              <div className="thumbDetails">  
                                  <div>
                                      <Slider {...settings}>
                                        <div>
                                            <Image src={Kits1} alt="Kit" />  
                                        </div>
                                        <div>
                                            <Image src={Kits1} alt="Kit" />  
                                        </div> 
                                      </Slider>
                                    </div>
                                    <div className="thumbImg">
                                        <ul>
                                            <li><Image src={KitOne} className="thumb1" /></li>
                                            <li><Image src={KitTwo} className="thumb1" /></li>
                                            <li><Image src={KitThree} className="thumb1" /></li>
                                         </ul>
                                    </div>
                              </div>

                              <div className="overViews"> 
                                <div className="fs17 fw500 col14 mb-1">Description</div>
                                <div className="fw400 fs15 col14 mt-1"> 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                                </div>
                                <ul> 
                                    <li>  
                                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.   
                                    </li> 
                                    <li>
                                        It is a long established fact that a reader will be distracted. 
                                    </li>
                                    <li>
                                        It is a long established fact that a reader.  
                                    </li>
                                </ul>
                            </div>

                         </div> 
                    </Col> 
                    <Col md={6}>  
                        <div className="detailMonth">  
                            <div className="fw500 fs16 col64">Months</div> 
                            <div className="monthPlan"> 
                                <ul>
                                    <li>
                                        <div className="detailBtn">  
                                          <Form.Check
                                              type="radio"
                                              label="3 months"
                                              name="formHorizontalRadios"
                                              id="formHorizontalRadios1"
                                              className="active"
                                            />
                                        </div>
                                    </li>
                                    <li> 
                                        <div className="detailBtn"> 
                                            <Form.Check
                                              type="radio"
                                              label="6 months"
                                              name="formHorizontalRadios"
                                              id="formHorizontalRadios2"
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="detailBtn"> 
                                          <Form.Check
                                              type="radio"
                                              label="9 months"
                                              name="formHorizontalRadios"
                                              id="formHorizontalRadios3"
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="detailBtn"> 
                                          <Form.Check
                                              type="radio"
                                              label="12 months" 
                                              name="formHorizontalRadios"
                                              id="formHorizontalRadios4"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>    

                            <div className="col64 fs24 fw300"><strong className="fw600"> 
                                <span className="mr-3 fs20 fw400 col14">
                                    <del><i className="fa fa-inr"></i> 1750</del> 
                                </span> 
                                <i className="fa fa-inr"></i> 1630</strong> <span className="fs20">/ month</span>
                            </div> 

                            <div className="byBtnmain">   
                                <Button type="button" className="btnTyp5 byBtns">Buy Now <span><Image src={RightArrow2} /></span></Button>

                                <Button type="button" className="btnTyp5 gifts">Give as a gift <span><Image src={GiftBox} /></span></Button>
                            </div>

                            <div className="overViews">
                                <div className="fs17 fw500 col14 mb-1">Overview</div>
                                <ul>
                                    <li>
                                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.   
                                    </li> 
                                    <li>
                                        It is a long established fact that a reader will be distracted. 
                                    </li>
                                    <li>
                                        It is a long established fact that a reader.  
                                    </li>
                                </ul>
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
export default KitDetails; 



