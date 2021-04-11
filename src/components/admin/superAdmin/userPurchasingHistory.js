import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Table } from "react-bootstrap";
import NavBar from "../../core/nav";
import Footer from "../../core/footer";       
import Deleteicon from "../../../assets/images/delete_icon.svg";  
import { Link } from "react-router-dom";        

class UserPurchasingHistory extends Component {   
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
                                <div className="fs22 fw600 col10 mt-4 mb-4 pl-4">User Purchasing History</div>  
                                        <div className="mainTables"> 
                                        <Table bordered size="lg">
                                            <thead>
                                                <tr>
                                                    <th>User</th>
                                                    <th>Email ID</th>
                                                    <th>Name</th>
                                                    <th>Months</th> 
                                                    <th>Category</th>
                                                    <th>Action</th> 
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Mr. Andrew d’souza</td> 
                                                    <td>andrew@gmail.com</td>
                                                    <td>Smart Plan</td>
                                                    <td>3 Months</td>
                                                    <td>
                                                        <div className="d-flex elpCategory">
                                                            <span className="luv">Luv</span><span className="pray">Pray</span>
                                                        </div>
                                                    </td>
                                                    <td> 
                                                        <span><Image src={Deleteicon} className="pointer" /></span>  
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mr. Andrew d’souza</td> 
                                                    <td>andrew@gmail.com</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td> 
                                                        <span><Image src={Deleteicon} className="pointer" /></span>  
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mr. Andrew d’souza</td> 
                                                    <td>andrew@gmail.com</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td> 
                                                        <span><Image src={Deleteicon} className="pointer" /></span>  
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mr. Andrew d’souza</td> 
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td> 
                                                        <span><Image src={Deleteicon} className="pointer" /></span>  
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mr. Andrew d’souza</td> 
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
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

export default UserPurchasingHistory; 



