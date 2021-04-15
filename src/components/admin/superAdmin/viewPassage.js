import React, { Component } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import NavBar from "../../core/nav";
import Footer from "../../core/footer";  
import Editicon from "../../../assets/images/edit_icon.svg"; 
import { Link } from "react-router-dom";        

class UserQuoteDetails extends Component {         
    render() {
        return ( 
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
            <div className="bg_lightBlue">             
            <Container>
                <Row>
                <Col md={3} className="pr-1">
                <div className="adminsidebar mt-4"> 
                  <div className="inner_area">
                    <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                      Quick Links
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom"> 
                      <div>
                        <div className="fs14 col28 fw500">
                          <Link to={{ pathname: `/admin` }}>Back</Link> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col> 
              <Col md={9} className="pl-1">
                    <div className="profile_layout viewPassages mt-4 pt-4 pb-5">    
                            <div className="PassagesList">    
                                <div className="d-flex justify-content-between borderBots"> 
                                    <div>
                                        <div className="col10 fw500 fs22 pb-1"> Hospitality Management</div>
                                        <div className="fs18 fw400 col14 pb-1">Number of questions 
                                        <span className="fw500 ml-1">: 120</span> 
                                        </div> 
                                    </div>
                                    <div className="col81 fs15 fs400 pr-3"> 
                                        <Button type="button" className="btnTyp12 approve">
                                            <Image src={Editicon} alt=""/> Edit Details</Button>       
                                    </div>
                                </div> 
                                <div className="col14 fs16 fw400"> 
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures <a className="readMores col10">Read more...</a> 
                                </div>
                            </div>
                            <div className="text-center mt-5 mb-5">
                                <Button type="button" className="btnTyp4">View Question & Answers</Button>    
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

export default UserQuoteDetails;  

