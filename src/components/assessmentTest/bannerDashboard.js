import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";  
import NavBar from "../core/navAdmin";
import Footer from "../core/footer";
class BannerDashboard extends Component {  
  render() {
    return (
      <div className="page__wrapper innerpage">  
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout adminProfessinal addKits pt-4 pb-5">    
          <Container>
              <Col md={12} lg={12}>          
                <div className="professor_search ViewQa">      
                    <div className="fs22 fw600 col10 mb-4">  
                        Question Answer    
                    </div>  

                    <Row>
                        <Col md={4}>
                             <div className="dashboardBannerOne">
                                  <div>    
                                    <div className="fs14 fw500 col18">Subscribe to our Lifestyle Plan for FREE Audio & Video Calls</div> 
                                    <Button type="button" className="btnTyp6">Subscribe Now</Button> 
                                  </div>
                             </div>

                             <div className="mt-4"></div>

                             <div className="dashboardBannerTwo">  
                                  <Col md={9} className="ml-auto">     
                                    <div className="fs15 fw400 col1">                                
                                        <span className="col150 fw500">LUV</span> <span className="col14 fw500">&</span> <span className="col134 fw500">PRAY</span> (3 Months) 
                                    </div> 
                                    <div className="col18 fs14 fw500 mt-1">You have subscribed to LUV & PRAY Plans!
                                    </div> 
                                    <div className="col18 fs14 fw300 mt-1">22 March 2020</div>  
                                  </Col>
                             </div>

                             <div className="mt-4"></div>

                             <div className="dashboardBannerThree">  
                                  <div className="subsc">Subscription <br/> Plan</div> 
                                  <Col md={9} className="ml-auto">     
                                    <div className="fs15 fw400 col1">                                
                                        <span className="col150 fw500">LUV</span> <span className="col14 fw500">&</span> <span className="col134 fw500">PRAY</span> (3 Months) 
                                    </div> 
                                    <div className="col18 fs14 fw500 mt-1">You have subscribed to LUV & PRAY Plans!
                                    </div> 
                                    <div className="col18 fs14 fw300 mt-1">22 March 2020</div>  
                                  </Col>
                             </div>

                        </Col>
                        <Col md={4}>
                            <div className="dashboardBannerFour"> 
                                  <Col md={5}>
                                      <div className="jakao col18 fw600 text-center"><div>JKAO
                                      <span className="fw300 fs11 d-block">Active Coupon</span></div></div> 
                                  </Col>
                                  <Col md={7}>    
                                    <div className="col18 fs14 fw500 mt-1">FEELING FAB KIT</div> 
                                    <div className="col18 fs14 fw300 mt-1">Valid till 25 March</div>  
                                    <div className="col18 fs14 fw300 mt-1">Issued on 10 Fab 2021</div> 
                                  </Col>
                             </div>

                             <div className="mt-4"></div> 

                             <div className="dashboardBannerFour fiveBans">  
                                  <Col md={5}>
                                      <div className="jakao col18 fw600 text-center"><div>TFOE
                                      <span className="fw300 fs11 d-block">Active Coupon</span></div></div> 
                                  </Col>
                                  <Col md={7}>    
                                    <div className="col18 fs14 fw500 mt-1">FEELING FAB KIT</div> 
                                    <div className="col18 fs14 fw300 mt-1">Valid till 25 March</div>  
                                    <div className="col18 fs14 fw300 mt-1">Issued on 10 Fab 2021</div> 
                                  </Col>
                             </div>
                             
                             <div className="mt-4"></div>

                             <div className="dashboardBannerOne">
                                  <div>    
                                    <div className="fs14 fw500 col18">Subscribe to our Lifestyle Plan for FREE Audio & Video Calls</div> 
                                    <Button type="button" className="btnTyp6">Subscribe Now</Button> 
                                  </div>
                             </div>

                             <div className="mt-4"></div> 

                             <div className="dashboardBannerSix">      
                                  <div className="w-100">    
                                    <div className="fs15 fw500 subsc col18">    
                                        Purchased KIT
                                    </div> 
                                    <ul>
                                         <li>
                                              <div className="pull-left col18 fw600 fs15">I’M Sexy <span className="ml-1 col18 fw300 fs13">(3 months)</span></div> 
                                              <div className="pull-right col18 fw300 fs13">22 Mar 2021</div> 
                                         </li>
                                    </ul>
                                  </div>   
                             </div>  


                        </Col>
                    </Row>
                </div>
              </Col>  
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BannerDashboard;  

