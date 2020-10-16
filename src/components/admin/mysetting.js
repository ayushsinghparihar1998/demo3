import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab, Table } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";

import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Checkgreen from "../../assets/images/checkgreen.svg";
import Yellowstar from "../../assets/images/stars.png";
import Aflag from "../../assets/images/australia_flag.svg";
import Iflag from "../../assets/images/india_flag.svg";

class Mysetting extends Component {
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout pt-4 pb-5"> 
                    <Container>
                        <div className="mysetting">
                            <div className="search_listeners">
                                <Col md={9} lg={9} col={12} className="m-auto"> 
                                    <Row>      
                                        <Col lg={3} md={4}>
                                            <div className="col1 fw500 fs18 mt-2">Search Listeners</div>
                                        </Col>
                                        <Col lg={5} md={5}>
                                            <Form.Group>
                                                <Form.Control type="text" placeholder="Find Keywords" className="inputTyp2 input3" id="outlined-email" variant="outlined" name="screenName" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={3} md={3}>
                                            <Button className="btnTyp5 bTyp5">Search</Button>
                                        </Col>
                                    </Row> 
                                </Col>
                            </div>  
                             
                            <Row>
                                <Col md={9} lg={9} col={12} className="m-auto">
                                    <div className="table_paymentlayout">
                                        <Table bordered>
                                            <thead>
                                                <tr>
                                                    <th>Listener</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>John Wade</td>
                                                    <td>
                                                        <Button className="btnTyp9 unblock">Unblock</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Rechard D’souza</td>
                                                    <td>
                                                        <Button className="btnTyp9 unblock">Unblock</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Florence Smith</td>
                                                    <td>
                                                        <Button className="btnTyp9 unblock">Unblock</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Daniel Taylor</td>
                                                    <td>
                                                        <Button className="btnTyp9 unblock">Unblock</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Stephen Thomas</td>
                                                    <td>
                                                        <Button className="btnTyp9 unblock">Unblock</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Harriet Evans</td>
                                                    <td>
                                                        <Button className="btnTyp9 unblock">Unblock</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Michael Davies</td>
                                                    <td>
                                                        <Button className="btnTyp9 unblock">Unblock</Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Mysetting; 
