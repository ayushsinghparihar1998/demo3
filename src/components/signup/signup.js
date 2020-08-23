import React, { Component } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  actionListnerSignup,
  actionGetQuestion,
} from '../../common/redux/actions';
import CONSTANTS from '../../common/helpers/Constants';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import validateInput from '../../common/validations/validationSignup';
import { Link } from 'react-router-dom';
import moment from 'moment';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roleType: CONSTANTS.ROLES.ORGANIZER,
      email: '',
      password: '',
      errors: {},
      organisationName: '',
      showLoader: false,
      fristSignUp: true,
      listOfCategory: [],
      question: [
        {
          question: 'Question 11',
          list: [
            { active: false, name: 'Answer 11' },
            { active: false, name: 'Answer 11' },
            { active: false, name: 'Answer 11' },
          ],
        },
        {
          question: 'Question 22',
          list: [
            { active: false, name: 'Answer 22' },
            { active: false, name: 'Answer 22' },
            { active: false, name: 'Answer 22' },
          ],
        },
      ],
    };
  }

  componentDidMount() {
    // const { url } = this.props.match;
    // if (url.indexOf("/organizer/") >= 0) {
    //     this.setState({
    //         roleType: CONSTANTS.ROLES.ORGANIZER,
    //     });
    // } else if (url.indexOf("/vendor/") >= 0) {
    //     this.setState({
    //         roleType: CONSTANTS.ROLES.VENDOR,
    //     });
    // }

    this.props.actionGetQuestion({}).then((result) => {
      console.log('result321321312', result);
      if (result && result.status === 200) {
      }
    });
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
        dob = month + '-' + day + '-' + year;
        dob = moment(dob).valueOf();
      }
      let data = {
        email: this.state.email ? this.state.email.toLowerCase().trim() : '',
        password: this.state.password ? this.state.password.trim() : '',
        u_school_code: this.state.u_school_code,
        u_birthdate: dob,
        device_type: '',
        device_token: '',
        uc_cat_name: this.state.listOfCategory,
        screen_name: this.state.screen_name,
        question: this.state.question,
      };

      this.props
        .actionListnerSignup(data)
        .then((result) => {
          console.log('result321321312', result);
          if (result && result.status === 200) {
            setTimeout(this.props.history.push('/login'), 3000);
            this.setState({
              email: '',
              password: '',
              showLoader: false,
              errors: {},
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

  handleEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleSubmit();
    }
  };
  handleTab = () => {
    if (this.isValid()) {
      this.setState({
        secondSignUp: true,
        fristSignUp: false,
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
  render() {
    const { errors } = this.state;
    return (
      <div>
        <Form>
          {this.state.fristSignUp ? (
            <Row>
              <Col md={12}>
                <Form.Group>
                  <Form.Label className="fs20 fw600 col14">
                    Email address
                  </Form.Label>
                  <div className="fs13 fw300 col27 pb-2">
                    An email will be sent to verify your account. We won’t share
                    your email address with anyone.
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
                    onKeyPress={this.handleEnter}
                    autoComplete="off"
                    inputProps={{
                      maxLength: 50,
                    }}
                  />
                  <div className="error alignLeft">{errors.email}</div>

                  <div className="fs13 fw300 col27 pt-2 pb-2">
                    If you already have a member account, you can use the same
                    email and password for easy switching.
                  </div>
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group>
                  <Form.Label className="fs20 fw600 col14">
                    Create a Password
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
                    onKeyPress={this.handleEnter}
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
                  <Form.Label className="fs20 fw600 col14">
                    Add Categor
                  </Form.Label>
                  <Form.Control
                    type="category"
                    placeholder="category"
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
                  />

                  <div className="error alignLeft">{errors.category}</div>

                  <div className="fs13 fw300 col27 pb-2">
                    Password must contain at least 8 characters.
                  </div>
                </Form.Group>
                <div className="btnTyp5 mt-3" onClick={this.addCategory}>
                  Add Category
                </div>
                {this.state.listOfCategory &&
                  this.state.listOfCategory.map((item, index) => {
                    return <p>{item.uc_cat_name}</p>;
                  })}
              </Col>
              <Col md={12}>
                <Form.Label className="fs20 fw600 col14">Birthday</Form.Label>
                <div className="fs13 fw300 col27 pb-2">
                  Applicants must be at least 18 years old or 15 years old with
                  parental consent.
                </div>
              </Col>

              <Col md={4}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <DayPicker
                    defaultValue="Day"
                    id="day"
                    name="day"
                    classes="form-control"
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
                    classes="form-control"
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
                    classes="form-control"
                    defaultValue="Year"
                    end={moment().year()}
                    reverse
                    value={this.state.year}
                    onChange={(year) => {
                      this.setState({ year });
                      console.log(year);
                    }}
                  />
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
                <Form.Group controlId="formBasicCheckbox" className="d-flex">
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
                  I am not in crisis, homicidal, sucidal or abusing anyone, and
                  i agree to the Eat Luv N Pray{' '}
                  <span className="fw500 pointer">
                    Terms of service & Privacy Policy
                  </span>
                </div>
                <Button
                  onSubmit={this.handleTab}
                  onClick={this.handleTab}
                  className="btnTyp5 mt-3"
                >
                  continue
                </Button>
              </Col>
            </Row>
          ) : this.state.secondSignUp ? (
            <Row>
              <div className="layout_box mt-3 mb-4">
                <div className="col10 fs30 fw600 mb-2">Create Your Account</div>
                <div className="fs300 fs20 col14 mb-4 pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>

                {this.state.question &&
                  this.state.question.map((item, index) => {
                    return (
                      <div>
                        <div className="col11 fs20 fw500">
                          <span className="fw600 col29">{item.name}</span> Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit?
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
                                  checked={elem.active ? elem.active : false}
                                  className="fw300 fs17 col28 mt-1 checkboxTyp1"
                                  label={elem.name}
                                />
                                {index} === {subIndex}
                              </Form.Group>
                            );
                          })}
                      </div>
                    );
                  })}
              </div>

              <Button
                onSubmit={this.handleSubmit}
                onClick={this.handleSubmit}
                className="btnTyp5 mt-3"
              >
                Create Listener Account
              </Button>
            </Row>
          ) : (
            ''
          )}
        </Form>
      </div>
    );
  }
}
export default connect(null, { actionListnerSignup, actionGetQuestion })(
  Signup
);
