import React, {Component, useState} from "react";

import {Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab, Modal} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Ritikaimg from "../../assets/images/Ritika.png";
import Samyukthaimg from "../../assets/images/Samyuktha.png";
import Shrishtiimg from "../../assets/images/Shrishti.png";
import Crossbtn from "../../assets/images/blue_cross.svg";
import {connect} from 'react-redux';
import ReactStars from "react-rating-stars-component";
import {Popover} from 'antd';
import moment from "moment";
import ELPRxApiService from "../../common/services/apiService";
import {getLocalStorage} from "../../common/helpers/Utils";


class ProfessionalLsting extends Component {
    constructor() {
        super();
        this.state = {
            // Default State
            professional_list: [],
            show3: false,
            eat: false,
            luv: false,
            pray: false,
            offset: 9,

            // Search Professional
            searchName: null,
            searchKeyword: null,
            searchProfessional: null,

            // For Book a Session
            professionalId: null,
            professionalName: null,
            professionalEmail: null,
            appointmentSubject: null,
            description: null,
            appointmentDate: null,
            appointmentTime: "1 Hour",

            // validation Error
            validationError: false,

        }
    }

    componentDidMount() {
        this._getProfessionalListHandler()
    }


    validate = () => {
        if (!this.state.professionalEmail) {
            this.setState({validationError: 'This field is required...'})
            return false
        } else {
            this.setState({validationError: null})
        }
        if (!this.state.appointmentSubject) {
            this.setState({validationError: 'This field is required...'})
            return false
        } else {
            this.setState({validationError: null})
        }
        if (!this.state.description) {
            this.setState({validationError: 'This field is required...'})
            return false
        } else {
            this.setState({validationError: null})
        }
        if (!this.state.appointmentDate) {
            this.setState({validationError: 'This field is required...'})
            return false
        } else {
            this.setState({validationError: null})
        }
        this.setState({validationError: null})
        return true
    }

    _getProfessionalListHandler = async () => {
        try {
            let response = await ELPRxApiService("corporategetprofessionallist")
            this.setState({
                professional_list: response.data.data.listing
            })
        } catch (err) {
            console.log(err)
        }
    }


    _getFilterProfessionalListHandler = async () => {
        try {
            let categoryData = ""
            if (this.state.eat) {
                categoryData = "'Eat'"
            }
            if (this.state.luv) {
                if (categoryData === "") {

                    categoryData = "'Luv'"
                } else {
                    categoryData = categoryData + ",'Luv'"
                }
            }
            if (this.state.pray) {
                if (categoryData === "") {

                    categoryData = "'Pray'"
                } else {
                    categoryData = categoryData + ",'Pray'"
                }
            }
            let response = await ELPRxApiService("corporategetprofessionallistfilter", {
                    "count": 10,
                    "offset": 1,
                    "name": this.state.searchName,
                    "status": "1",
                    "keyword": this.state.searchKeyword,
                    "category": categoryData
                }
            )
            console.log('===>Response Filtered Professional ==>.', response)
            this.setState({
                professional_list: response.data.data.listing
            })
        } catch (err) {
            console.log(err)
        }
    }

    bookSessionOpen = (obj) => {
        console.log(obj)
        this.setState({
            professionalEmail: obj.email,
            professionalId: obj.id,
            professionalName: obj.u_name,
            show3: true
        });
    };

    bookSessionClose = () => {
        this.setState({show3: false});
    };

    postBookingData = () => {
        let isValid = this.validate()
        if (isValid) {
            ELPRxApiService("corporateappointmentschedule", {
                cs_pro_u_id: this.state.professionalId,
                cs_pro_name: this.state.professionalName,
                cs_pro_email_id: this.state.professionalEmail,
                cs_subject: this.state.appointmentSubject,
                cs_description: this.state.description,
                cs_date: this.state.appointmentDate,
                cs_time: [
                    {cs_time_slot: this.state.appointmentTime}
                ]
            })
                .then((res) => {
                    console.log('booking data===>', res)
                    this.setState({show3: false});
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }


    render() {

        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout professinal_list proListTwo adminProfessinal pt-4 pb-5">
                    <Container>

                        <div className="chatsearch w-100">
                            <div className="professor_search">
                                <div className="fs20 col1 fw500 mb-4">Search Professional</div>
                                <Form className="p_form">
                                    <Row>
                                        <Col md="3">
                                            <Form.Group controlId="formBasicTexts">
                                                <Form.Control type="text" placeholder="Search name"
                                                              className="inputTyp2 inputpProcess"
                                                              onChange={(e) => {
                                                                  this.setState({searchName: e.target.value})
                                                              }}/>
                                            </Form.Group>
                                        </Col>
                                        <Col md="3">
                                            <Form.Group controlId="formBasickeyword">
                                                <Form.Control type="text" placeholder="Search keyword"
                                                              className="inputTyp2 inputpProcess"
                                                              onChange={(e) => {
                                                                  this.setState({searchKeyword: e.target.value})
                                                              }}
                                                />
                                            </Form.Group>
                                        </Col>
                                        {/*<Col md="3">*/}
                                        {/*    <Form.Group controlId="formBasickeyword">*/}
                                        {/*        <Form.Control as="select" className="selectTyp1 selectsetone"*/}
                                        {/*                      onChange={(e) => {*/}
                                        {/*                          this.setState({searchProfessional: e.target.value})*/}
                                        {/*                      }}>*/}
                                        {/*            <option>Search by professional</option>*/}
                                        {/*            <option>professional</option>*/}
                                        {/*        </Form.Control>*/}
                                        {/*    </Form.Group>*/}
                                        {/*</Col>*/}
                                        <Col md="3" className="text-center">
                                            <Button variant="primary process_btn"
                                                    onClick={this._getFilterProfessionalListHandler}>
                                                search
                                            </Button>
                                        </Col>
                                    </Row>

                                    <div className="checkCategory">
                                        <Form.Group controlId="formBasicCheckbox1" className="row">
                                            <Form.Check type="checkbox"
                                                        className={this.state.eat ? "checkone checkfirst active" : "checkone checkfirst"}
                                                        onChange={(e) => {
                                                            this.setState({eat: e.target.checked})
                                                        }}

                                                        label="Eat"/>
                                            <Form.Check type="checkbox"
                                                        className={this.state.luv ? "checktwo active" : "checktwo"}
                                                        onChange={(e) => {
                                                            this.setState({luv: e.target.checked})
                                                        }}
                                                        label="Luv"/>
                                            <Form.Check type="checkbox"
                                                        className={this.state.pray ? "checkthree active" : "checkthree"}
                                                        onChange={(e) => {
                                                            this.setState({pray: e.target.checked})
                                                        }} label="Pray"/>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>

                            <div class="fs36 col14 pt-4 fw600 w-100 bg-white text-center">Professional</div>
                            <div className="fs15 col14 fw400 mt-3 text-center mx-w70 mb-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s
                            </div>
                            <div className="search-listing">
                                <div className="listing2">


                                    <Row>

                                        {this.state.professional_list.map((obj, index) => {

                                            return this.state.offset > index ? <Col lg={4} md={6}>
                                                <div className="subscribes">
                                                    <div className="text-center position-relative">
                                                        <Image src={obj.u_image} alt=""/>
                                                        <div className="eat_category">
                                                            {obj.cat_child_array.map((c_obj, j) => {

                                                                return c_obj === "Eat" ?
                                                                    <span className="eatcat">Eat</span> :
                                                                    c_obj === "Luv" ?
                                                                        <span className="luvcat">Luv</span> :
                                                                        c_obj === "Pray" ?
                                                                            <span className="praycat">Pray</span> : null
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="col3 fs18 fw600 mt-3 mb-2">{obj.u_name}</div>
                                                    <div className="fs14 col14 fw400"
                                                         dangerouslySetInnerHTML={{__html: obj.u_bio}}>
                                                    </div>
                                                    <div className="read2">
                                                        <a onClick={() => this.props.history.push({
                                                            pathname: '/professional/' + obj.id + '/detail',
                                                            state: {isReadMore: true}
                                                        })}>read more</a>
                                                    </div>

                                                    {getLocalStorage('customerInfo').u_verified === "0" ?
                                                        <Button variant="primary" disabled
                                                                onClick={() => this.bookSessionOpen(obj)}
                                                                className="btnTyp9 report mt-4 mb-4">Book A
                                                            Session</Button>

                                                        :
                                                        <Button variant="primary"
                                                                onClick={() => this.bookSessionOpen(obj)}
                                                                className="btnTyp9 report mt-4 mb-4">Book A
                                                            Session</Button>


                                                    }
                                                </div>
                                            </Col> : null

                                        })}
                                        {this.state.offset <= this.state.professional_list.length ?
                                            <div className="text-center w-100 m-auto pt-4">
                                                <Button className="btnTyp12"
                                                        onClick={() => this.setState({offset: this.state.offset + 9})}> show
                                                    more </Button>
                                            </div> : null
                                        }

                                    </Row>
                                    {/*<Row>*/}
                                    {/*    <Col lg={4} md={6}>*/}
                                    {/*        <div className="subscribes">*/}
                                    {/*            <div className="text-center position-relative">*/}
                                    {/*                <Image src={Ritikaimg} alt=""/>*/}
                                    {/*                <div className="eat_category">*/}
                                    {/*                    <span className="eatcat">Eat</span>*/}
                                    {/*                    <span className="luvcat">Luv</span>*/}
                                    {/*                    <span className="praycat">Pray</span>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="col3 fs18 fw600 mt-3 mb-2">Ritika Aggarwal</div>*/}
                                    {/*            <div className="fs14 col14 fw400">Lorem Ipsum is simply dummy text of*/}
                                    {/*                the printing and typesetting industry...*/}
                                    {/*            </div>*/}
                                    {/*            <div className="read2">*/}
                                    {/*                <a>read more</a>*/}
                                    {/*            </div>*/}
                                    {/*            <Button variant="primary" onClick={this.bookSessionOpen}*/}
                                    {/*                    className="btnTyp9 report mt-4 mb-4">Book A Session</Button>*/}
                                    {/*        </div>*/}
                                    {/*    </Col>*/}
                                    {/*    <Col lg={4} md={6}>*/}
                                    {/*        <div className="subscribes">*/}
                                    {/*            <div className="text-center position-relative">*/}
                                    {/*                <Image src={Samyukthaimg} alt=""/>*/}
                                    {/*                <div className="eat_category">*/}
                                    {/*                    <span className="eatcat">Eat</span>*/}
                                    {/*                    <span className="luvcat">Luv</span>*/}
                                    {/*                    <span className="praycat">Pray</span>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="col3 fs18 fw600 mt-3 mb-2">Samyuktha A.</div>*/}
                                    {/*            <div className="fs14 col14 fw400">Lorem Ipsum is simply dummy text of*/}
                                    {/*                the printing and typesetting industry...*/}
                                    {/*            </div>*/}
                                    {/*            <div className="read2">*/}
                                    {/*                <a>read more</a>*/}
                                    {/*            </div>*/}
                                    {/*            <Button variant="primary" onClick={this.bookSessionOpen}*/}
                                    {/*                    className="btnTyp9 report mt-4 mb-4">Book A Session</Button>*/}
                                    {/*        </div>*/}
                                    {/*    </Col>*/}
                                    {/*    <Col lg={4} md={6}>*/}
                                    {/*        <div className="subscribes">*/}
                                    {/*            <div className="text-center position-relative">*/}
                                    {/*                <Image src={Shrishtiimg} alt=""/>*/}
                                    {/*                <div className="eat_category">*/}
                                    {/*                    <span className="eatcat">Eat</span>*/}
                                    {/*                    <span className="luvcat">Luv</span>*/}
                                    {/*                    <span className="praycat">Pray</span>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="col3 fs18 fw600 mt-3 mb-2">Srishti Banerjee</div>*/}
                                    {/*            <div className="fs14 col14 fw400">Lorem Ipsum is simply dummy text of*/}
                                    {/*                the printing and typesetting industry...*/}
                                    {/*            </div>*/}
                                    {/*            <div className="read2">*/}
                                    {/*                <a>read more</a>*/}
                                    {/*            </div>*/}
                                    {/*            <Button variant="primary" onClick={this.bookSessionOpen}*/}
                                    {/*                    className="btnTyp9 report mt-4 mb-4">Book A Session</Button>*/}
                                    {/*        </div>*/}
                                    {/*    </Col>*/}
                                    {/*    <div className="text-center w-100 m-auto pt-4">*/}
                                    {/*        <Button className="btnTyp12"> show more </Button>*/}
                                    {/*    </div>*/}
                                    {/*</Row>*/}
                                </div>

                            </div>
                        </div>
                    </Container>
                </div>
                <Footer/>

                <Modal show={this.state.show3} className="CreateAccount bookSession">
                    <Modal.Header>
                        <Button onClick={this.bookSessionClose}>
                            <Image src={Crossbtn} alt=""/>
                        </Button>
                    </Modal.Header>

                    <Modal.Body>
                        <Container>
                            <div className="layout_box mt-3 mb-4">
                                <div class="col10 fs30 fw600 mb-4 pb-1">Book a Session</div>
                                <Form>
                                    {/* <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="fs20 fw600 col14">Professional Email:</Form.Label>
                                        <Form.Control type="text" className="inputTyp2"
                                                      value={this.state.professionalEmail} onChange={(e) => {
                                            this.setState({professionalEmail: e.target.value})
                                        }}/>
                                        <div className="error alignLeft d-none">Enter Professional Email</div>
                                    </Form.Group>
                                    {this.state.validationError ? <div>{this.state.validationError}</div> : null}  */}
                                    
                                    <Form.Group controlId="formBasicEmail">  
                                        <Form.Label className="fs20 fw600 col14">Appointment Subject</Form.Label>
                                        <Form.Control type="text" className="inputTyp2" onChange={(e) => {
                                            this.setState({appointmentSubject: e.target.value})
                                        }}/>
                                        <div className="error alignLeft d-none">Enter Appointment Subject</div>
                                    </Form.Group>
                                    {this.state.validationError ? <div>{this.state.validationError}</div> : null}


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
                                        <Form.Control as="textarea" rows={3} className="inputTyp2 cate2"
                                                      onChange={(e) => {
                                                          this.setState({description: e.target.value})
                                                      }}/>
                                        <div className="error alignLeft d-none">Enter Description</div>
                                    </Form.Group>
                                    {this.state.validationError ? <div>{this.state.validationError}</div> : null}

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="fs20 fw600 col14">Appointment Date</Form.Label>

                                        {/* <DatePicker selected={selectedDate} onChange="date => setSelectedDate(date)" /> */}
                                        {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}

                                        <Form.Control type="text" className="inputTyp2" onChange={(e) => {
                                            this.setState({appointmentDate: e.target.value})
                                        }}/>

                                        <div className="error alignLeft d-none">Enter Appointment Date</div>
                                    </Form.Group>
                                    {this.state.validationError ? <div>{this.state.validationError}</div> : null}


                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="fs20 fw600 col14">Appointment Time </Form.Label>
                                        <Form.Control as="select" className="selectTyp1" onChange={(e) => {
                                            (this.setState({appointmentTime: e.target.value}))
                                        }}>
                                            <option>1 Hour</option>
                                            <option>2 Hour</option>
                                            <option>3 Hour</option>
                                            <option>4 Hour</option>
                                            <option>5 Hour</option>
                                        </Form.Control>
                                        <div className="error alignLeft d-none">Enter Appointment Time</div>
                                    </Form.Group>
                                    {this.state.validationError ? <div>{this.state.validationError}</div> : null}


                                    <Button onClick={() => this.postBookingData()} variant="primary"
                                            className="btnTyp5 mt-4">
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

