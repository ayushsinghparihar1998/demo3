import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";

import Donationheart from "../../assets/images/donation_heart.png";
import Contentbox from "../../assets/images/boxes.png";
import Nextbtn from "../../assets/images/next-button.png"; 

class Compaign extends Component { 
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>

                <div className="profile_layout donatedatas pt-4 pb-5">   
                    <Container>
                        <div className="myprofile w-100"> 
                            <div className="col10 fw400 fs32 mb-2">Participate in ELNP Research</div>
                            <div className="fs16 fw300 col14 mb-3">  
                                <strong>ELNP</strong> is simply text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                            <div className="fs16 fw300 col14 mb-3">  
                            ELNP is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </div>
                            <div className="fs16 fw300 col14 mb-3">  
                                ELNP is simply dummy text of the printing and typesetting industry. 
                            </div>
                            <div className="w-100 text-center participates mt-4 mb-4">    
                                Opportunity to Participate Coming Soon!    
                            </div>
                            <div className="col1 fw500 fs20 mb-3">  
                                Want to help researchers understand social media use and mental health?
                            </div> 
                            <div className="fs16 fw300 col14 mb-3">  
                                <strong>ELNP</strong> is simply text of the printing and typesetting  
                                  <span className="col40 pl-1">industry.</span> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                            <div className="fs16 fw300 col14 mb-3">  
                            ELNP is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </div>
                            <div className="fs16 fw300 col14 mb-3">  
                                ELNP is simply dummy text of the printing and typesetting 
                                <span className="col40 pl-1">industry. </span> 
                            </div> 
                            <div className="faqs"> 
                                <div className="fw400 fs22 col1 pl-30">FAQ</div>
                                <div className="questions">Who can I contact with questions?</div>
                                <div className="answers">     
                                    Please contact research@7cups.com and we will happily answer any questions and provide more details.
                                </div>
                                <div className="questions">Who can I contact with questions?</div>
                                <div className="answers">
                                    Please contact research@7cups.com and we will happily answer any questions and provide more details.
                                </div>
                                <div className="questions">Who can I contact with questions?</div>
                                <div className="answers">
                                    Please contact research@7cups.com and we will happily answer any questions and provide more details.
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Compaign; 


