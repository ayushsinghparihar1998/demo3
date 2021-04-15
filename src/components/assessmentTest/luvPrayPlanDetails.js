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
} from "react-bootstrap";  
import NavBar from "../core/navAdmin";
import Footer from "../core/footer";
import { Link } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import validateInput from "../../common/validations/validationAddDomain";
import { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";
import Editicon from "../../assets/images/edit_icon.svg";
import Deleteicon from "../../assets/images/delete_icon.svg";
import blogclock from "../../assets/images/blogclock.png"; 
import UserChats from "../../assets/images/user_chat5.svg"; 
import Infos from "../../assets/images/infos.png"; 


import constant from "../../constant"; 
class LuvPrayPlanDetails extends Component {   
  render() {
    return (
      <div className="page__wrapper innerpage">  
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout luvPrayDetails pt-4 pb-5">     
          <Container>
              <Col md={12} lg={12}>          
                <div className="professor_search ViewQa"> 
                     <div className="fs18 text-left fw500 mt-3 mb-5"> 
                         <span className="col14 fw300 mr-1">Dashboard</span> /
                         <span className="col29 fs18 ml-1"> LUV & PRAY Plan</span>  
                    </div> 
                    <Col md={6} className="m-auto">     
                        <div className="luvPrayList">   
                            <div className="luvTwo"> 
                                <div className="prayDetails">    
                                     <div>
                                         <div className="col18 ">22 March 2020</div>
                                         <div className="">Hello Melisa,</div>
                                         <div>Subscription Plan: <span>LUV & PRAY</span> (Basic)</div>
                                         <div>
                                             <span><i className="fa fa-inr"></i> 1750</span>
                                             <span><i className="fa fa-inr"></i> 1630</span> 
                                         </div>
                                     </div>
                                </div>
                                <div className="planSecond"> 
                                    <div className="fs18 fw500 col64 mb-2">Renewal and Next payment</div>
                                    <div className="fs14 fw300 col14">Next payment due in 3 months (June 11, 2021), will be deducted for subscription renewal</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
              </Col>  
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LuvPrayPlanDetails; 

