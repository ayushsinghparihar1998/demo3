import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab, Modal, Table } from "react-bootstrap";
import NavBar from "../../core/nav";
import Footer from "../../core/footer"; 
import Requestuser from "../../../assets/images/pro_img.svg";
import Requestusertwo from "../../../assets/images/pro_img2.svg";
import Visibilitys from "../../../assets/images/visibilitys.png";      
import Deleteicon from "../../../assets/images/delete_icon.svg";
import ArrowDownload from "../../../assets/images/arrow_download.png";  
import { Link } from "react-router-dom";       

class DownloadPdf extends Component {   

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
                    <div className="profile_layout ListenerTests myAssesstestMain pt-4 pb-5">   
                        <div className="chatsearch w-100">
                            <div className="myAssesstest"> 
                                <div className="fs22 fw600 col10 mt-4 mb-4 pl-4">Downloaded PDF</div> 
                                        <div className="mainTables"> 
                                        <Table bordered size="lg">
                                            <thead>
                                                <tr>
                                                    <th>User’s Email ID</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>28 Jan, 2021</td> 
                                                    <td> 
                                                        <span><Image src={Deleteicon} className="pointer" /></span>  
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>29 Jan, 2021</td> 
                                                    <td> 
                                                        <span><Image src={Deleteicon} className="pointer" /></span>  
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>28 Jan, 2021</td> 
                                                    <td> 
                                                        <span><Image src={Deleteicon} className="pointer" /></span>  
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>28 Jan, 2021</td> 
                                                    <td> 
                                                        <span><Image src={Deleteicon} className="pointer" /></span>  
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>28 Jan, 2021</td> 
                                                    <td> 
                                                        <span><Image src={Deleteicon} className="pointer" /></span>  
                                                    </td>
                                                </tr>
                                            </tbody>
                                            </Table>
                                        </div>
                                  
                            </div>

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

export default DownloadPdf;   



