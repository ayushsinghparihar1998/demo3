import React, { Component } from "react";
import { Button, Container, Row, Col, Form, Modal, Image } from "react-bootstrap";
import { connect } from 'react-redux';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import moment from 'moment';
import { actionProfessionalSignup } from '../../common/redux/actions';
import CONSTANTS from "../../common/helpers/Constants";
import validateInput from "../../common/validations/validationProfessionalSignup";
import { setLocalStorage } from "../../common/helpers/Utils";
import { Link } from 'react-router-dom';
import Crossblue from "../../assets/images/cross_blue.svg";
import ELPRxApiService from "../../common/services/apiService";

class ProfessionalSignup extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            roleType: CONSTANTS.ROLES.PROFESSIONAL,
            email: "",
            password: "",
            screenName: "",
            category: [],
            errors: {},
            organisationName: "",
            showLoader: false,
            fristSignUp: true,
            listOfCategory: [],
            question: [],
            u_school_code: false
        };
    }

    componentDidMount() {
        this._getCategoriesHandler()
    }
    _getCategoriesHandler = async () => {
        try {
          let response = await ELPRxApiService("getCategoryList")
          console.log('=== categories ===', response)
          this.setState({
            category: response.data.data.categories_list
          })
    
        } catch (err) {
          console.log(err);
        }
      }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value.trim(),
        });
    };

    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }
    isValidQA() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }
    handleSubmit = () => {
        if (this.isValid()) {
            this.setState({
                showLoader: true,
            });

            let day = this.state.day !== '' ? this.state.day : '';
            let month = this.state.month !== '' ? Number(this.state.month) + 1 : '';
            let year = this.state.year !== '' ? this.state.year : '';
            let dob = '';
            if (day && month && year) {
                dob = day + '/' + month + '/' + year;
                // dob = moment(dob).valueOf();
            }
            let data = {
                email: this.state.email ? this.state.email.toLowerCase().trim() : "",
                password: this.state.password ? this.state.password.trim() : "",
                u_school_code: this.state.u_school_code,
                u_birthdate: dob,
                device_type: '',
                device_token: '',
                uc_cat_name: this.state.listOfCategory,
                screen_name: this.state.screenName,
                // question: this.state.question,
            };

            this.props.actionProfessionalSignup(data).then((result) => {

                if (result && result.data && result.data.status === "success") {
                    //setLocalStorage("userInfoProff", result.data.data);

                    setTimeout(() => {
                        // this.props.handleSet()
                        this.props.history.push({ pathname: "/professionalLogin" });
                    }, 1000);

                } else {
                    this.setState({
                        showLoader: false,
                    });
                }
            })
                .catch((error) => {
                    console.log(error);
                    this.setState({
                        showLoader: false,
                    });
                });
        } else {
            this.setState({
                showLoader: false,
            });
        }
    };
    clear() {
        this.setState({
            email: "",
            password: "",
            showLoader: false,
            errors: {},
        });
    }

    handleTab = () => {
        if (this.isValid()) {
            this.setState({
                secondSignUp: true,
            })
        }
    }
    addCategory = (e) => {
        console.log('---e', JSON.parse(e.target.value))
        let cat = JSON.parse(e.target.value);
        let listOfCategory = this.state.listOfCategory;
        listOfCategory.push({ uc_cat_name: cat.cat_name, uc_admin_cat_id: cat.cat_id });
        console.log(listOfCategory)
        this.setState({ listOfCategory: listOfCategory });
    };
    handleChangeQuestion = (event, index, subIndex) => {
        const { name, checked } = event.target;
        let question = this.state.question;
        question[index].list[subIndex].active = checked
        this.setState({ question: question })
    }
    handleClose = () => {
        this.setState({
            secondSignUp: true,
        })
    }
    handleEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.addCategory(event);
        } else {
            this.addCategory(event);
        }
    };
    goToLoginPage = () => {
        this.props.history.push({
            pathname: 'login',
            state: { roleType: this.state.roleType }
        });
        // this.props.handleSet()
    }
    handleRemoveCategory = (e, idx) => { 
        let listOfCategory = this.state.listOfCategory;
        if (idx > -1) {
            listOfCategory.splice(idx, 1);
        }
        this.setState({ listOfCategory: listOfCategory })
    }
    render() {  
        const { errors } = this.state; 
        return (
            <div>
                <div className="layout_box mt-3 mb-4">
                    <div className="col10 fs30 fw600 mb-2">Start Online Therapy</div>
                    <div className="fs20 fw300 col14 mb-4 pb-2">Create a member account</div>
                    <Form>
                        <Row>
                            <Col md={12}> 
                                <Form.Group>
                                    <Form.Label className="fs20 fw600 col14">Create a screen name:</Form.Label>
                                    <Form.Control type="text"
                                        placeholder="Enter screen name"
                                        className="inputTyp2"
                                        error={errors.screenName ? true : false}
                                        id="outlined-email"
                                        variant="outlined"
                                        name="screenName"
                                        value={this.state.screenName}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                        maxLength="50"
                                        inputProps={{
                                            maxLength: 50,
                                        }}
                                    />
                                    <div className="error alignLeft">{errors.screenName}</div>
                                </Form.Group>
                            </Col>
                            <Col md={12}> 
                                <Form.Group>
                                    <Form.Label className="fs20 fw600 col14">Email address</Form.Label>
                                    <Form.Control type="email"
                                        placeholder="Enter email"
                                        className="inputTyp2"
                                        error={errors.email ? true : false}
                                        id="outlined-email"
                                        variant="outlined"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                        maxLength="50"
                                        inputProps={{
                                            maxLength: 50,
                                        }}
                                    />
                                    <div className="error alignLeft">{errors.email}</div>
                                </Form.Group>
                            </Col>

                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label className="fs20 fw600 col14">
                                        Password <span className="fw300">(8-15 characters):</span></Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password" className="inputTyp2"
                                        error={errors.password ? true : false}
                                        id="outlined-pwd"
                                        label="Password"
                                        variant="outlined"
                                        name="password"
                                        autoComplete="off"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        minLength="8"
                                        maxLength="15"
                                        inputProps={{
                                            maxLength: 30,
                                        }}
                                    />
                                    <div className="error alignLeft">{errors.password}</div>
                                </Form.Group>
                            </Col>

                            <Col md={12}>
                                <Form.Label className="fs20 fw600 col14 mt-2">Date of birth:</Form.Label>
                                <Row>
                                    <Col md={4}>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <DayPicker
                                                defaultValue="Day"
                                                id="day"
                                                name="day"
                                                classes="form-control selectTyp1"
                                                year={this.state.year}
                                                month={this.state.month}
                                                minDate={moment().startOf('year')}
                                                endYearGiven
                                                value={this.state.day}
                                                onChange={day => {
                                                    this.setState({ day });
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <MonthPicker
                                                id="month"
                                                name="month"
                                                classes="form-control selectTyp1"
                                                defaultValue={'Month'}
                                                short
                                                endYearGiven
                                                year={this.state.year}
                                                value={this.state.month}
                                                onChange={month => {
                                                    this.setState({ month });
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <YearPicker
                                                id="year"
                                                name="year"
                                                classes="form-control selectTyp1"
                                                defaultValue="Year"
                                                end={moment().year()}

                                                reverse
                                                value={this.state.year}
                                                onChange={year => {
                                                    this.setState({ year });
                                                }}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={12}>
                                <Form.Group>
                                    <div className="d-flex">
                                        <div className="w-100">
                                            <Form.Label className="fs20 fw600 col14">Add Category</Form.Label>
                                            <Form.Control
                                                as="select"
                                                // className="selectTyp1 select3"                           
                                                placeholder="Category"
                                                className="inputTyp2"
                                                error={errors.category ? true : false}
                                                id="outlined-pwd"
                                                label="category"
                                                variant="outlined"
                                                name="category"
                                                value={this.state.category}
                                                // onChange={this.handleChange}
                                                inputProps={{
                                                    maxLength: 30,
                                                }}
                                                onChange={this.handleEnter}
                                            >
                                                {
                                                    this.state.category.map(obj => {
                                                        return <option value={JSON.stringify(obj)}>{obj.cat_name}</option>
                                                    })
                                                }

                                            </Form.Control>

                                        </div>
                                        {/* <div className="mt-4 pt-2">
                                            <Button disabled={this.state.category ? false : true} onClick={this.handleEnter} className="btnTyp11 bttyp2 ml-3">Add</Button>
                                        </div> */}
                                    </div>
                                    <div className="error alignLeft">{errors.category}</div>
                                </Form.Group>

                                {this.state.listOfCategory &&
                                    this.state.listOfCategory.map((item, index) => {
                                        return (
                                            <p className="c_manages">
                                                {/* {item.uc_cat_name} */}
                                                {item.uc_cat_name}
                                                <span onClick={e => { this.handleRemoveCategory(e, index) }}> <Image src={Crossblue} alt="" className="pl-3 pointer" /></span>
                                            </p>
                                        );
                                    })}
                            </Col>
                            <Col md={12}>
                                <Form.Group controlId="formBasicCheckbox21" className="d-flex">
                                    <Form.Check type="checkbox"
                                        name='u_school_code'
                                        value={this.state.u_school_code ? true : false
                                        }
                                        onChange={this.handleChange}
                                        className="fw300 fs18 col14 mt-3 checkboxTyp1"
                                        label="I have a School/Organization code." />
                                </Form.Group>
                                <div className="error alignLeft">{errors.u_school_code}</div>

                            </Col>

                            <Col md={6}>
                                <Button onSubmit={this.handleSubmit}
                                    onClick={this.handleSubmit} className="btnTyp5 mt-3">create account</Button>
                            </Col>
                        </Row>
                    </Form>

                    <div className="fs18 
                     pt-5 col14">
                        Already have an account?
                        <span className="fw500 pointer pl-1" onClick={this.goToLoginPage}>Login here</span>
                    </div>
                </div>

            </div>)

    }
}
export default connect(
    null,
    { actionProfessionalSignup }
)(ProfessionalSignup);
