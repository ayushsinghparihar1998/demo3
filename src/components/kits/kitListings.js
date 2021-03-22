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


class KitListings extends Component {

  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="kitListings">
            <Container>
                <div className="kitplans mt-4 mb-4"> 
                    <div className="fs28 col8 text-center fw500 mt-3 mb-5">KITS PLAN</div>     
                    <Row>
                        <Col md={4} sm={6}>
                            <div className="mb-4">  
                                <Image src={KitOne} className="emotions" />   
                                <div className="col64 fw500 fs22 mb-1 mt-3">Emotional Welness Kit</div> 
                                <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                <div className="d-flex mb-2">  
                                    <span className="italics col14 fs16 fw400 mr-2">From</span> 
                                    <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span> 
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="mb-4">
                                <Image src={KitTwo} className="emotions" />   
                                <div className="col64 fw500 fs22 mb-1 mt-3">I’M Sexy</div> 
                                <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                <div className="d-flex mb-2">  
                                    <span className="italics col14 fs16 fw400 mr-2">From</span> 
                                    <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span> 
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="mb-4">
                                <Image src={KitThree} className="emotions" />   
                                <div className="col64 fw500 fs22 mb-1 mt-3">Feeling Fab</div> 
                                <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                <div className="d-flex mb-2">  
                                    <span className="italics col14 fs16 fw400 mr-2">From</span> 
                                    <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span> 
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="mb-4">
                                <Image src={KitOne} className="emotions" />   
                                <div className="col64 fw500 fs22 mb-1 mt-3">Feeling Fab</div> 
                                <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                <div className="d-flex mb-2">  
                                    <span className="italics col14 fs16 fw400 mr-2">From</span> 
                                    <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span> 
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="mb-4">
                                <Image src={KitTwo} className="emotions" />   
                                <div className="col64 fw500 fs22 mb-1 mt-3">I’M Sexy</div> 
                                <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                <div className="d-flex mb-2">  
                                    <span className="italics col14 fs16 fw400 mr-2">From</span> 
                                    <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span> 
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="mb-4">
                                <Image src={KitThree} className="emotions" />   
                                <div className="col64 fw500 fs22 mb-1 mt-3">Emotional Welness Kit</div> 
                                <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                <div className="d-flex mb-2">  
                                    <span className="italics col14 fs16 fw400 mr-2">From</span> 
                                    <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span> 
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="mb-4">
                                <Image src={KitOne} className="emotions" />   
                                <div className="col64 fw500 fs22 mb-1 mt-3">I’M Sexy</div> 
                                <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                <div className="d-flex mb-2">  
                                    <span className="italics col14 fs16 fw400 mr-2">From</span> 
                                    <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span> 
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="mb-4">
                                <Image src={KitTwo} className="emotions" />   
                                <div className="col64 fw500 fs22 mb-1 mt-3">Feeling Fab</div> 
                                <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                <div className="d-flex mb-2">  
                                    <span className="italics col14 fs16 fw400 mr-2">From</span> 
                                    <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span> 
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="mb-4"> 
                                <Image src={KitThree} className="emotions" />   
                                <div className="col64 fw500 fs22 mb-1 mt-3">Emotional Welness Kit</div> 
                                <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                <div className="d-flex mb-2">  
                                    <span className="italics col14 fs16 fw400 mr-2">From</span> 
                                    <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span> 
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
export default KitListings; 
