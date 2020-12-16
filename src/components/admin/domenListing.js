import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab, Table } from "react-bootstrap";
import NavBar from "../core/nav"; 
import Footer from "../core/footer";
import Deleteicon from "../../assets/images/delete_icon.svg";

class DomainListing extends Component {                                           
    render() {  
        return (
            <div className="page__wrapper innerpage">    
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout adminProfessinal pt-4 pb-5">  
                    <Container>
                        <Row>
                            <Col md={3} className="pr-1">
                                <div className="adminsidebar">
                                    <div className="inner_area">
                                        <div className="chat-bg fs600 fs17 col18 pl-3 pointer">Links</div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="">
                                                <div className="fs14 col28 fw500"> USER LISTING</div>
                                            </div>
                                        </div> 
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="">
                                                <div className="fs14 col28 fw500"> PROFESSIONAL LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className=""> 
                                                <div className="fs14 col23 fw500"> LISTENER LISTING</div>
                                            </div>
                                        </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"> LISTENER Q&A</div>
                                            </div>
                                        </div> 
                                        <div className="d-flex m-3 pb-3 border-bottom"> 
                                            <div className="position-relative">
                                                <div className="fs14 col28 fw500"> CATEGORY</div> 
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </Col>  
                            <Col md={9} className="pl-1">              
                                <div className="corporateMember d_detail">    
                                        <div className="domainSave"> 
                                            <div>     
                                                <div className="fs22 col10 mb-1">Domain listing</div>         
                                                <div className="fs15 fw400 col14 mb-4">
                                                    Lorem Ipsum is simply dummy and typesetting industry. 
                                                </div>
                                            </div>
                                            <div className="ml-auto">    
                                                <Button variant="primary" type="submit" className="btnTyp5">  
                                                    Save 
                                                </Button>  
                                            </div>
                                            <div>

                                            </div> 
                                        </div>
                                        <Table bordered> 
                                            <thead>
                                                <tr> 
                                                    <th>Domain</th>
                                                    <th>No. of Employees</th>
                                                    <th>Total Audio/Video (hrs)</th>  
                                                    <th>ACTION</th>         
                                                </tr>
                                            </thead>
                                            <tbody>       
                                                <tr>
                                                    <td>adobe.com</td>  
                                                    <td>50</td>
                                                    <td>12 hrs</td>
                                                    <td>Active </td>   
                                                </tr>
                                                <tr>
                                                    <td>adobe.com</td>  
                                                    <td>50</td>
                                                    <td>12 hrs</td>
                                                    <td>Active </td>   
                                                </tr>
                                                <tr>
                                                    <td>adobe.com</td>  
                                                    <td>50</td>
                                                    <td>12 hrs</td>
                                                    <td>Active </td>   
                                                </tr>
                                                <tr>
                                                    <td>adobe.com</td>  
                                                    <td>50</td>
                                                    <td>12 hrs</td>
                                                    <td>Active </td>   
                                                </tr>
                                                <tr>
                                                    <td>adobe.com</td>  
                                                    <td>50</td>
                                                    <td>12 hrs</td>
                                                    <td>Active </td>   
                                                </tr>
                                            </tbody> 
                                        </Table>
                                        
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

export default DomainListing; 




