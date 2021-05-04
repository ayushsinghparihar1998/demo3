import React, { Component } from "react";

import {
  Container,
  Col
} from "react-bootstrap";  
import NavBar from "../core/navAdmin"; 
import Footer from "../core/footer";

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
                                         <div className="col18 setPos">22 March 2020</div>
                                         <div className="fs28 fw500 col18">Hello Melisa,</div>
                                         <div className="fs18 col18 fw400">Subscription Plan: 
                                         <span className="fw600 ml-1 col134">LUV <span className="col18">&</span> <span className="col150">PRAY</span></span> (Basic)</div> 
                                         <div className="mt-2 fs22 fw500 col18"> 
                                             <span className="mr-2"><del><i className="fa fa-inr"></i> 1750</del></span>    
                                             <span><i className="fa fa-inr"></i> 1630</span>  
                                             <span className="fs18 fw400 ml-1">(3 Months)</span>  
                                         </div>
                                     </div>
                                </div>
                                <div className="planSecond">   
                                    <div className="fs18 fw500 col64 mb-2">Renewal and Next payment</div>
                                    <div className="fs14 fw400 col14">Next payment due in 3 months (June 11, 2021), will be deducted for subscription renewal</div>
                                </div>
                            </div>
                            <div className="luvThree mt-3">   
                                <div className="col151 fw400 fs18">Cancel Subscription Plan</div> 
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

