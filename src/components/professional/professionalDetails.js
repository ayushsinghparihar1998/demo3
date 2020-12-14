import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Profileban from "../../assets/images/profile_ban.svg";
import Profileimg from "../../assets/images/profile_img.svg";
import Usaflag from "../../assets/images/india_flag.svg";
import warningS from "../../assets/images/w_signal.svg";
import { connect } from 'react-redux';
import { actionGetProfile } from '../../common/redux/actions';
import * as moment from 'moment';
import { getLocalStorage } from "../../common/helpers/Utils";
import CONSTANTS from "../../common/helpers/Constants";
import NavBarAdmin from "../core/navAdmin";
import Ritikaimg from "../../assets/images/Ritika.png"; 

class Myprofile extends Component {  
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout pt-4 pb-5">
                    <Container>
                        <Row>
                            <div className="myprofile profiledetails">  
                                <div className="detailone"> 
                                    <Row>
                                        <Col md={4}>
                                            <div className="leftprofile">
                                                <Image src={Ritikaimg} alt="" /> 
                                            </div>
                                        </Col>
                                        <Col md={8}>
                                            <div className="rightprofile">              
                                                <div className="fs24 col3 fw600 mb-1">Ritika Aggarwal</div> 
                                                
                                                <div className="col3 fw500 mt-1 mb-2">Work Experience: 
                                                <span className="col14 fw400 ml-2">10 Years</span></div>

                                                <div className="col3 fw500 mt-1 mb-2">Language: 
                                                <span className="col14 fw400 ml-2">Hindi, English and Marathi</span></div>
                                               
                                                <div className="col3 fw500 mt-1 mb-2">Age: 
                                                <span className="col14 fw400 ml-2">35 Years</span></div>

                                                {/* <div className="col3 fw500 mt-1 mb-2">Qualifications: 
                                                <span className="col14 fw400 ml-2">Master of Arts in Counselling Psychology, Columbia University</span></div>  */}
 
                                                <div className="d-flex mt-4">   
                                                    <Button variant="primary" type="submit" className="btnTyp5 mr-3">  
                                                        Email 
                                                    </Button> 

                                                    <Button variant="primary" type="submit" className="btnTyp5 mr-3">  
                                                        Call  
                                                    </Button> 

                                                    <Button variant="primary" type="submit" className="btnTyp5">  
                                                        BOOK A SESSION  
                                                    </Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div> 

                                <div className="detailtwo">   
                                    <Col md={12}> 
                                        <div className="fs32 col3 text-center fw500 mb-4"> 
                                            Master of Education in Counselling Psychology; Mental Health Track, Columbia University
                                        </div> 
                                        <div className="boxexone">
                                            Master of Arts in Counselling Psychology, Columbia University 
                                        </div>
                                        <div className="boxexone">
                                            Postgraduate Diploma in Counselling Psychological Skills, St. Francis College
                                        </div> 
                                    </Col>
                                </div> 

                                <div className="detailthree"> 
                                    <Col md={12}>
                                        <div className="fs32 col3 fw600 text-center mb-4">Biography</div>
                                        <div className="fs17 col3 fw500 mb-2">Which bucket would your therapy style fit into primarily?</div>
                                        <div className="fs15 col14 fw400 mb-3">It is essential to explore the struggles that one brings into the therapy room before deciding the therapeutic approach and the interventions. I draw from various therapeutic modalities, including Cognitive Behavioural Therapy, mindfulness-based psychotherapy, and psychodynamic therapy, depending on the individual’s needs. It becomes crucial to explore the past with some individuals; in that case, I would supplement my Cognitive Behavioural Therapy with psychodynamic interventions.</div>

                                        <div className="fs15 col14 fw400 mb-3"> 
                                            Therapy helps to alter self-defeating narratives into powerful ones filled with acceptance and compassion. For long-lasting alterations, it helps the individual realize where these self-defeating narratives are coming from, which often involves exploring the past and the influence of relationships. Then the work would involve unlearning much of this conditioning and replacing old beliefs with more realistic, compassionate and empowering ones.
                                        </div> 

                                    </Col>
                                </div>

                            </div>
                        </Row>
                    </Container> 
                </div> 
                <Footer /> 
            </div>
        );
    }
}

export default Myprofile;  

