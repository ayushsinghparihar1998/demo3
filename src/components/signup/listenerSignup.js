import React, { Component } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Modal,
  Image,
} from 'react-bootstrap';
import NavBar from '../core/nav';
import Footer from '../core/footer';
import { connect } from 'react-redux';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import moment from 'moment';
import {
  actionListnerSignup,
  actionGetQuestion,
} from '../../common/redux/actions';
import CONSTANTS from '../../common/helpers/Constants';
import validateInput from '../../common/validations/validationSignup';
import { Link } from 'react-router-dom';
import Signup from './signup';
import QuestionAndAnswer from './questionAndAnswer';
import { setLocalStorage } from '../../common/helpers/Utils';
import Crossblue from '../../assets/images/cross_blue.svg';
class Listenersignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: 'listener_signup',
      roleType: CONSTANTS.ROLES.LISTNER,
      email: '',
      screenName: '',
      password: '',
      category: '',
      errors: {},
      day: '',
      month: '',
      year: '',
      organisationName: '',
      showLoader: false,
      fristSignUp: true,
      listOfCategory: [],
    };
  }

  componentDidMount() {}

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
        email: this.state.email ? this.state.email.toLowerCase().trim() : '',
        password: this.state.password ? this.state.password.trim() : '',
        u_school_code: this.state.u_school_code,
        u_birthdate: dob,
        device_type: '',
        device_token: '',
        uc_cat_name: this.state.listOfCategory,
        screen_name: this.state.screenName,
        // question: this.state.question,
      };

      this.props
        .actionListnerSignup(data)
        .then((result) => {
          if (result && result.data.status === 'success') {
            setLocalStorage('userInfo', result.data.data);
            this.setState({
              secondSignUp: true,
              userInfo: result.data.data,
            });
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
      email: '',
      password: '',
      showLoader: false,
      errors: {},
    });
  }

  handleTab = () => {
    if (this.isValid()) {
      this.setState({
        secondSignUp: true,
      });
    }
  };
  addCategory = () => {
    let cat = this.state.category;
    let listOfCategory = this.state.listOfCategory;
    listOfCategory.push({ uc_cat_name: cat });
    this.setState({ listOfCategory: listOfCategory, category: '' });
  };
  handleChangeQuestion = (event, index, subIndex) => {
    const { name, checked } = event.target;
    let question = this.state.question;
    console.log('index, subIndex', index, subIndex);
    console.log('checked', checked);
    question[index].list[subIndex].active = checked;
    this.setState({ question: question });
  };
  handleClose = () => {
    this.setState({
      secondSignUp: true,
    });
  };
  handleEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.addCategory();
    }else{
        this.addCategory();
    }
  };
  handleRemoveCategory = (e, idx) => {
    console.log('dsdasdasdas', idx);
    let listOfCategory = this.state.listOfCategory;
    if (idx > -1) {
      listOfCategory.splice(idx, 1);
    }
    this.setState({ listOfCategory: listOfCategory });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="RegistrationLayout">
          <Container>
            <div className="layout_box mt-5 mb-4">
              <div className="col10 fs40 fw600 mb-2">Listener Signup</div>
              <div className="col14 fs20 fw300 mb-4 pb-3">
                Sign up to be a <span className="fw500">EatLoveNPray</span>{' '}
                Listener and offer support to guests and members via online
                chats.
              </div>

              {this.state.fristSignUp ? (
                <Row>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Create a screen name*
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter screen name"
                        className="inputTyp2"
                        error={errors.screenName ? true : false}
                        id="outlined-email"
                        variant="outlined"
                        name="screenName"
                        value={this.state.screenName}
                        onChange={this.handleChange}
                        autoComplete="off"
                        inputProps={{
                          maxLength: 50,
                        }}
                      />
                      <div className="error alignLeft">{errors.screenName}</div>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Email address*
                      </Form.Label>
                      <div className="fs13 fw300 col27 pb-2">
                        An email will be sent to verify your account. We won’t
                        share your email address with anyone.
                      </div>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="inputTyp2"
                        error={errors.email ? true : false}
                        id="outlined-email"
                        variant="outlined"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        autoComplete="off"
                        inputProps={{
                          maxLength: 50,
                        }}
                      />
                      <div className="error alignLeft">{errors.email}</div>

                      <div className="fs13 fw300 col27 pt-2 pb-2">
                        If you already have a member account, you can use the
                        same email and password for easy switching.
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Create a Password*
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        className="inputTyp2"
                        error={errors.password ? true : false}
                        id="outlined-pwd"
                        label="Password"
                        variant="outlined"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        inputProps={{
                          maxLength: 30,
                        }}
                      />
                      <div className="error alignLeft">{errors.password}</div>

                      <div className="fs13 fw300 col27 pb-2">
                        Password must contain at least 8 characters.
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <div className="d-flex"> 
                          <div className="w-100"> 
                          <Form.Label className="fs20 fw600 col14">
                            Add Category
                          </Form.Label>
                          <Form.Control
                            type="category"
                            placeholder="Category"
                            className="inputTyp2"
                            error={errors.category ? true : false}
                            id="outlined-pwd"
                            label="category"
                            variant="outlined"
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}
                            inputProps={{
                              maxLength: 30,
                            }}
                            //onKeyPress={this.handleEnter}
                          />
                          </div>
                          <div className="mt-4 pt-2">
                          <Button  disabled={this.state.category?false:true} onClick={this.handleEnter} className="btnTyp11 bttyp2 ml-3 pointer">Add</Button>
                          </div>
                      </div>
                      <div className="error alignLeft">{errors.category}</div>
                    </Form.Group>

                    {this.state.listOfCategory &&
                      this.state.listOfCategory.map((item, index) => {
                        return (
                          <p className="c_manages">
                            {item.uc_cat_name}
                            <span
                              onClick={(e) => {
                                this.handleRemoveCategory(e, index);
                              }}
                            >
                              {' '}
                              <Image
                                src={Crossblue}
                                alt=""
                                className="pl-3 pointer"
                              />
                            </span>
                          </p>
                        );
                      })}
                  </Col>
                  <Col md={12}>
                    <Form.Label className="fs20 fw600 col14">
                      Birthday *
                    </Form.Label>
                    <div className="fs13 fw300 col27 pb-2">
                      Applicants must be at least 18 years old or 15 years old
                      with parental consent.
                    </div>
                  </Col>

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
                        onChange={(day) => {
                          this.setState({ day });
                          console.log(day);
                        }}
                      />
                      <div className="error alignLeft">{errors.day}</div>
                    </Form.Group>
                    {/* <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select"
                                        className="selectTyp1"
                                        name="date"
                                        onChange={this.handleChange}>
                                        <option>Date</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group> */}
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
                        onChange={(month) => {
                          this.setState({ month });
                          console.log(month);
                        }}
                      />
                      <div className="error alignLeft">{errors.month}</div>
                    </Form.Group>

                    {/* <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select"
                                        name="month"
                                        onChange={this.handleChange}
                                        className="selectTyp1">
                                        <option>Month</option>
                                        <option>Jan</option>
                                        <option>Feb</option>
                                        <option>March</option>
                                        <option>April</option>
                                    </Form.Control>
                                </Form.Group> */}
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
                        onChange={(year) => {
                          this.setState({ year });
                          console.log(year);
                        }}
                      />
                      <div className="error alignLeft">{errors.year}</div>
                    </Form.Group>
                    {/* <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control
                                        name="year"
                                        onChange={this.handleChange}
                                        as="select" className="selectTyp1">
                                        <option>Year</option>
                                        <option>1990</option>
                                        <option>1991</option>
                                        <option>1992</option>
                                        <option>1993</option>

                                    </Form.Control>
                                </Form.Group> */}
                  </Col>

                  <Col md={12}>
                    <Form.Group
                      controlId="formBasicCheckbox"
                      className="d-flex"
                    >
                      <Form.Check
                        type="checkbox"
                        name="u_school_code"
                        value={this.state.u_school_code ? true : false}
                        onChange={this.handleChange}
                        className="fw300 fs18 col14 mt-3 checkboxTyp1"
                        label="I have a School/Organization code."
                      />
                    </Form.Group>
                    <div className="fs18 col14 mt-3 mb-3 fw300">
                      I am not in crisis, homicidal, sucidal or abusing anyone,
                      and i agree to the Eat Luv N Pray{' '}
                      <span className="fw500 pointer">
                        Terms of service & Privacy Policy
                      </span>
                    </div>
                    <Button
                      onClick={this.handleSubmit}
                      className="btnTyp5 mt-3"
                    >
                      Create Listener Account
                    </Button>
                  </Col>
                </Row>
              ) : this.state.secondSignUp ? (
                <Row>
                  <div className="layout_box mt-3 mb-4">
                    <div className="col10 fs30 fw600 mb-2">
                      Create Your Account
                    </div>
                    <div className="fs300 fs20 col14 mb-4 pb-2">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>

                    {this.state.question &&
                      this.state.question.map((item, index) => {
                        return (
                          <div>
                            <div className="col11 fs20 fw500">
                              <span className="fw600 col29">{item.name}</span>{' '}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit?
                            </div>
                            <div className="col30 fw600 fs20 mt-4 pb-3">
                              Answer:
                            </div>
                            {item.list &&
                              item.list.map((elem, subIndex) => {
                                return (
                                  <Form.Group
                                    controlId="formBasicCheckbox4"
                                    className="d-flex"
                                  >
                                    <Form.Check
                                      name={'name' + subIndex}
                                      onChange={(e) => {
                                        this.handleChangeQuestion(
                                          e,
                                          index,
                                          subIndex
                                        );
                                      }}
                                      type="checkbox"
                                      checked={
                                        elem.active ? elem.active : false
                                      }
                                      className="fw300 fs17 col28 mt-1 checkboxTyp1"
                                      label={elem.name}
                                    />
                                  </Form.Group>
                                );
                              })}
                          </div>
                        );
                      })}
                  </div>

                  <Button onClick={this.handleSubmit} className="btnTyp5 mt-3">
                    Create Listener
                  </Button>
                </Row>
              ) : (
                ''
              )}

              <div className="fs18 fw300 pt-5 col14">
                Already have an account?
                <span className="fw500 pointer pl-1">
                  <Link to={`/login`}>Login here</Link>
                </span>
              </div>
            </div>
          </Container>
        </div>
        <Modal
          show={this.state.secondSignUp}
          onHide={this.handleClose}
          className="custom-popUp confirmation-box question-box"
          bsSize="small"
        >
          <Modal.Body>
            <Container>
              <div className="layout_box mt-3 mb-4">
                <div className="col10 fs30 fw600 mb-2">Create Your Account</div>
                <div className="fs300 fs20 col14 mb-4 pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <QuestionAndAnswer
                  userInfo={this.state.userInfo}
                  {...this.props}
                />
              </div>
            </Container>
          </Modal.Body>
        </Modal>

        <Footer />
      </div>
    );
  }
}
export default connect(null, { actionListnerSignup, actionGetQuestion })(
  Listenersignup
);
