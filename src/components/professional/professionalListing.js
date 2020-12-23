import React, { Component, useState } from "react";

import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab, Modal } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Ritikaimg from "../../assets/images/Ritika.png";
import Samyukthaimg from "../../assets/images/Samyuktha.png";
import Shrishtiimg from "../../assets/images/Shrishti.png"; 
import Crossbtn from "../../assets/images/blue_cross.svg";
import { connect } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import { Popover } from 'antd'; 
import moment from "moment";    
// import React, { useState } from "react"; 
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import React, { useState } from "react";
// import DatePicker from "react-datepicker"; 
// import "react-datepicker/dist/react-datepicker.css";   

// import DatePicker from "react-datepicker"; 
// import "react-datepicker/dist/react-datepicker.css";


// const [selectedDate, setSelectedDate] = useState(null);
// const [startDate, setStartDate] = useState(new Date());   

class ProfessionalLsting extends Component {    
    constructor() {
        super();
        this.state = {
          show3: false,
        }
      } 

      bookSessionOpen = () => {
        this.setState({ show3: true });
      };
    
      bookSessionClose = () => {
        this.setState({ show3: false });
      };
    
    render() { 
        
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout professinal_list adminProfessinal pt-4 pb-5">    
                    <Container>
                        
                        <div className="chatsearch w-100"> 
                        <div className="professor_search"> 
                            <div className="fs20 col1 fw500 mb-4">Search Professional</div>  
                            <Form className="p_form">     
                                <Row> 
                                    <Col md="3">  
                                        <Form.Group controlId="formBasicTexts">
                                            <Form.Control type="text" placeholder="Search name" className="inputTyp2 inputpProcess" />       
                                        </Form.Group>
                                    </Col>
                                    <Col md="3">  
                                        <Form.Group controlId="formBasickeyword"> 
                                            <Form.Control type="text" placeholder="Search keyword" className="inputTyp2 inputpProcess" />      
                                        </Form.Group> 
                                    </Col>
                                    <Col md="3">  
                                        <Form.Group controlId="formBasickeyword"> 
                                        <Form.Control as="select" className="selectTyp1 selectsetone">
                                            <option>Search by professional</option>
                                            <option>professional</option> 
                                        </Form.Control>     
                                        </Form.Group> 
                                    </Col>
                                    <Col md="3" className="text-center">    
                                        <Button variant="primary process_btn" type="submit">
                                            search
                                        </Button>
                                    </Col>
                                </Row>
                            
                                <div className="checkCategory">  
                                    <Form.Group controlId="formBasicCheckbox1" className="row">
                                        <Form.Check type="checkbox" className="checkone checkfirst" label="Eat" />  
                                        <Form.Check type="checkbox" className="checktwo" label="Luv" />
                                        <Form.Check type="checkbox" className="checkthree active" label="Pray" />           
                                    </Form.Group> 
                                </div>
                            </Form>
                        </div>
                        
                            <div class="fs36 col14 pt-4 fw600 w-100 bg-white text-center">Professional</div> 
                            <div className="fs15 col14 fw400 mt-3 text-center mx-w70 mb-4">   
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </div>  
                            <div className="search-listing">  
                                <div className="listing2"> 
                                    <Row>
                                        <Col lg={4} md={6}>      
                                            <div className="subscribes"> 
                                                <div className="text-center position-relative">
                                                    <Image src={Ritikaimg} alt="" />
                                                    <div className="eat_category"> 
                                                        <span className="eatcat">Eat</span>
                                                        <span className="luvcat">Luv</span>
                                                        <span className="praycat">Pray</span>       
                                                    </div> 
                                                </div> 
                                                <div className="col3 fs18 fw600 mt-3 mb-2">Ritika Aggarwal</div>
                                                <div className="fs14 col14 fw400">Lorem Ipsum is simply dummy text of the printing and typesetting industry... </div>
                                                <div className="read2">
                                                    <a>read more</a>
                                                </div>
                                                <Button variant="primary" onClick={this.bookSessionOpen}  className="btnTyp9 report mt-4 mb-4">Book A Session</Button>
                                        </div>  
                                        </Col> 
                                        <Col lg={4} md={6}>      
                                            <div className="subscribes"> 
                                                <div className="text-center position-relative">
                                                    <Image src={Samyukthaimg} alt="" />
                                                    <div className="eat_category"> 
                                                        <span className="eatcat">Eat</span>
                                                        <span className="luvcat">Luv</span>
                                                        <span className="praycat">Pray</span>       
                                                    </div>
                                                </div>
                                                <div className="col3 fs18 fw600 mt-3 mb-2">Samyuktha A.</div>
                                                <div className="fs14 col14 fw400">Lorem Ipsum is simply dummy text of the printing and typesetting industry... </div>
                                                <div className="read2">
                                                    <a>read more</a>
                                                </div>
                                                <Button variant="primary" onClick={this.bookSessionOpen}  className="btnTyp9 report mt-4 mb-4">Book A Session</Button>
                                        </div> 
                                        </Col> 
                                        <Col lg={4} md={6}>      
                                            <div className="subscribes"> 
                                                <div className="text-center position-relative"> 
                                                    <Image src={Shrishtiimg} alt="" />
                                                    <div className="eat_category"> 
                                                        <span className="eatcat">Eat</span>
                                                        <span className="luvcat">Luv</span>
                                                        <span className="praycat">Pray</span>       
                                                    </div>
                                                </div>
                                                <div className="col3 fs18 fw600 mt-3 mb-2">Srishti Banerjee</div> 
                                                <div className="fs14 col14 fw400">Lorem Ipsum is simply dummy text of the printing and typesetting industry... </div>
                                                <div className="read2">
                                                    <a>read more</a>
                                                </div>
                                                <Button variant="primary" onClick={this.bookSessionOpen}  className="btnTyp9 report mt-4 mb-4">Book A Session</Button>
                                        </div> 
                                        </Col>
                                        <div className="text-center w-100 m-auto pt-4">     
                                            <Button className="btnTyp12"> show more </Button>    
                                        </div> 
                                    </Row>
                                </div> 

                            </div>
                        </div>
                    </Container>
                </div>
                <Footer />                     

                <Modal show={this.state.show3} className="CreateAccount bookSession"> 
                    <Modal.Header>
                        <Button onClick={this.bookSessionClose}>
                        <Image src={Crossbtn} alt="" />
                        </Button>
                    </Modal.Header>

                    <Modal.Body>      
                        <Container> 
                            <div className="layout_box mt-3 mb-4">
                                <div class="col10 fs30 fw600 mb-4 pb-1">Book a Session</div> 
                                <Form> 
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="fs20 fw600 col14">Professional Email:</Form.Label>
                                        <Form.Control type="text" className="inputTyp2" /> 
                                        <div className="error alignLeft d-none">Enter Professional Email</div>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="fs20 fw600 col14">Appointment Subject</Form.Label> 
                                        <Form.Control type="text" className="inputTyp2" />
                                        <div className="error alignLeft d-none">Enter Appointment Subject</div> 
                                    </Form.Group>

                                    <Form.Group>
                                    {/* <Form.Label className="fs20 fw600 col14 d-block">
                                        Date:
                                    </Form.Label> */} 
                                       {/* <DatePicker
                                        selected={date}
                                        onSelect={handleDateSelect} //when day is clicked
                                        onChange={handleDateChange} //only when value has changed
                                        /> */}
                                        {/* <DatePicker selected={selectedDate} onChange="date => setSelectedDate(date)" />       */}

                                        {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
                                         
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className="fs20 fw600 col14">Description</Form.Label> 
                                        <Form.Control as="textarea" rows={3} className="inputTyp2 cate2" />
                                        <div className="error alignLeft d-none">Enter Description</div> 
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="fs20 fw600 col14">Appointment Date</Form.Label>

                                        {/* <DatePicker selected={selectedDate} onChange="date => setSelectedDate(date)" /> */}
                                        {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}

                                        <Form.Control type="text" className="inputTyp2" />

                                        <div className="error alignLeft d-none">Enter Appointment Date</div>  
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="fs20 fw600 col14">Appointment Time </Form.Label>
                                        <Form.Control as="select" className="selectTyp1">             
                                            <option>1 Hour</option>
                                            <option>2 Hour</option>
                                            <option>3 Hour</option>
                                            <option>4 Hour</option>
                                            <option>5 Hour</option>
                                        </Form.Control>
                                        <div className="error alignLeft d-none">Enter Appointment Time</div>
                                    </Form.Group>
                                                                              
                                    <Button variant="primary" type="submit" className="btnTyp5 mt-4">  
                                        Submit
                                    </Button> 
                                </Form>
                            </div> 
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default ProfessionalLsting;  

