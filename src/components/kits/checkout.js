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
import XCircle from "../../assets/images/XCircle.png"
import Slider from "react-slick"; 


// const [checked, setChecked] = useState(false);
// const [radioValue, setRadioValue] = useState('1');

// const radios = [
//   { name: 'Active', value: '1' },
//   { name: 'Radio', value: '2' },
//   { name: 'Radio', value: '3' },
// ];


class Checkouts extends Component { 

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
                    <div className="fs18 text-left fw300 mt-3 mb-5"><span className="col14 fw300 mr-1">Kits</span> / 
                    <span className="col14 ml-1">Kit Details</span> / <span className="col29 fw500">Checkout</span></div>  

                    <Row> 
                    <Col md={6} className="m-auto">   
                        <div className="checkoutDetails">
                            <div className="fw500 col64 orderOne">Order Summary</div>
                            <div className="orderCat"> 
                                <div className="orderImgFirst">
                                    <Image src={Kits1} alt="banImg" /> 
                                </div> 
                                <div className="p-4 bg63">     
                                    <div className="catOne mb-2">  
                                        <div className="fs22 fw500 col64">I’M Sexy</div>
                                        <div className="fs22 fw500 col64"><i className="fa fa-inr"></i> 1630</div>
                                    </div> 
                                    <div className="mb-2 fs17 col14 fw500">3 months kit plan</div> 
                                    <div className="fs17 col14 fw500">1 Kit</div>  
                                    <hr className="hrB" /> 
                                    <div className="promocodes">
                                         <Button className="btnPromo">Have Promo Code?</Button>
                                         <div className="promo2 d-none">   
                                              <span className="position-relative">  
                                                  <Button className="btnPromo minBtn">FFTW</Button>  
                                                  <Image src={XCircle} alt="" />  
                                              </span> 
                                              <span className="fs14 fw700 col26 text-uppercase ml-3">Apply</span> 
                                         </div> 
                                    </div>
                                </div>
                                <div className="orderTwo mt-3">  
                                    <div className="catOne">   
                                        <div className="fs16 fw500 col18">Total Amount</div>
                                        <div className="fs22 fw600 col18"><i className="fa fa-inr"></i> 1615</div> 
                                    </div> 
                                </div>
                            </div>
                            
                        </div>
                        <div className="mt-5 mb-5 text-center"> 
                            <Button className="btnTyp5">proceed</Button>
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
export default Checkouts; 










