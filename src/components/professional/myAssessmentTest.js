import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab, Modal, Table } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Visibilitys from "../../assets/images/visibilitys.png";      
import ArrowDownload from "../../assets/images/arrow_download.png";        

class MyAssessmentTest extends Component {

    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout myAssesstestMain pt-4 pb-5">
                    <Container>
                        <div className="chatsearch w-100">
                            <div className="myAssesstest"> 
                                <div className="col8 fw600 fs28 mt-4 mb-5 text-center">MY ASSESSMENT TEST</div> 
                                <Row>
                                    <Col lg={12}>
                                        <div className="mainTables">
                                        <Table bordered size="lg">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Test Name</th>
                                                    <th>Category</th>
                                                    <th>Scores</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>28 Jan, 2021</td> 
                                                    <td>Mental Health</td>
                                                    <td><span className="eat">Eat</span></td>
                                                    <td>45</td>
                                                    <td>
                                                        <span><Image src={Visibilitys} className="pointer" /></span>
                                                        <span className="pl-3"><Image src={ArrowDownload} className="pointer" /></span>  
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>22 Jan, 2021</td> 
                                                    <td>Emotional Health</td>
                                                    <td><span className="luv">Luv</span></td>
                                                    <td>35</td>
                                                    <td>
                                                        <span><Image src={Visibilitys} className="pointer" /></span>
                                                        <span className="pl-3"><Image src={ArrowDownload} className="pointer" /></span>  
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>23 Jan, 2021</td> 
                                                    <td>Health Disorder</td>
                                                    <td><span className="pray">Pray</span></td>
                                                    <td>25</td>
                                                    <td>
                                                        <span><Image src={Visibilitys} className="pointer" /></span>
                                                        <span className="pl-3"><Image src={ArrowDownload} className="pointer" /></span>  
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>24 Jan, 2021</td> 
                                                    <td>Mental Health</td>
                                                    <td><span className="eat">Eat</span></td>
                                                    <td>35</td>
                                                    <td>
                                                        <span><Image src={Visibilitys} className="pointer" /></span>
                                                        <span className="pl-3"><Image src={ArrowDownload} className="pointer" /></span>  
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>27 Jan, 2021</td> 
                                                    <td>Emotional Health</td> 
                                                    <td><span className="luv">Luv</span></td> 
                                                    <td>10</td>
                                                    <td>
                                                        <span><Image src={Visibilitys} className="pointer" /></span>
                                                        <span className="pl-3"><Image src={ArrowDownload} className="pointer" /></span>  
                                                    </td>
                                                </tr> 
                                            </tbody>
                                            </Table>
                                        </div>
                                    </Col> 
                                </Row>
                            </div>

                        </div>
                    </Container>
                </div> 

                <Footer />
            </div>
        );
    }
}

export default MyAssessmentTest; 



