import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import moment from 'moment';
import { actionUserSignup } from '../../common/redux/actions';
import CONSTANTS from '../../common/helpers/Constants';
import validateInput from '../../common/validations/validationSignup';
import { setLocalStorage } from '../../common/helpers/Utils';
import { Link } from 'react-router-dom';
class ProfessionalSignup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      action: 'user_signup',
      roleType: CONSTANTS.ROLES.USER,
      email: '',
      password: '',
      day: '',
      year: '',
      month: '',
      username: '',
      errors: {},
      organisationName: '',
      showLoader: false,
      fristSignUp: true,
      listOfCategory: [],
      question: [],
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
        //dob = month + '-' + day + '-' + year;
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
        u_username: this.state.username,
        // question: this.state.question,
      };

      this.props
        .actionUserSignup(data)
        .then((result) => {
          
          if (result && result.data && result.data.status === 'success') {
            this.props.handleSet()
            this.props.history.push({
              pathname: '/login',
              state: { roleType: this.state.roleType },
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
    }
   };

    handleClose = () => {
        this.setState({
            secondSignUp: true,
        })
    }

    handleEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            this.addCategory();
        }
    };

    goToLoginPage = () => {
        this.props.history.push({
            pathname: 'login',
            state: { roleType: this.state.roleType }
        });
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="layout_box mt-3 mb-4">
                    <div className="col10 fs30 fw600 mb-4">Create Your Account</div>

                    <Row>
                        <Col md={6}>
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

                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fs20 fw600 col14">
                                    Password </Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password" className="inputTyp2"
                                    error={errors.password ? true : false}
                                    id="outlined-pwd"
                                    label="Password"
                                    variant="outlined"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    minLength="8"    
                                    maxLength="15"                                
                                    inputProps={{
                                        maxLength: 15,
                                    }}
                                />
                                <div className="error alignLeft">{errors.password}</div>
                            </Form.Group> 
                        </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fs20 fw600 col14">User name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter User name"
                  className="inputTyp2"
                  error={errors.username ? true : false}
                  id="outlined-email"
                  variant="outlined"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  autoComplete="off"
                  inputProps={{
                    maxLength: 50,
                  }}
                />
                <div className="error alignLeft">{errors.username}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Label className="fs20 fw600 col14">
                Date of birth*
              </Form.Label>
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
                      onChange={(day) => {
                        this.setState({ day });
                        console.log(day);
                      }}
                    />
                    <div className="error alignLeft">{errors.day}</div>
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
                      onChange={(month) => {
                        this.setState({ month });
                        console.log(month);
                      }}
                    />
                    <div className="error alignLeft">{errors.month}</div>
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
                      onChange={(year) => {
                        this.setState({ year });
                        console.log(year);
                      }}
                    />
                    <div className="error alignLeft">{errors.year}</div>
                  </Form.Group>
                </Col>
              </Row>
            </Col>

{/*                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fs20 fw600 col14 mt-2">
                                    Password </Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password" className="inputTyp2"
                                    error={errors.password ? true : false}
                                    id="outlined-pwd"
                                    label="Password"
                                    variant="outlined"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    minLength="8"    
                                    maxLength="15"                                
                                    inputProps={{
                                        maxLength: 15,
                                    }}
                                />
                                <div className="error alignLeft">{errors.password}</div>
                            </Form.Group> 
                        </Col>*/}

            <Col md={6}>
              <div className="fs13 fw300 mt-2 col27">
                Please make sure you enter the correct date. You will be unable
                to change this later.
              </div>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formBasicCheckbox" className="d-flex">
                <Form.Check
                  type="checkbox"
                  name="u_school_code"
                  value={this.state.u_school_code ? true : false}
                  onChange={this.handleChange}
                  className="fw300 fs15 col14 mt-3 checkboxTyp1"
                  label="I have a School/Organization code."
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <div className="fs18 col14 mt-3 mb-3 fw300">
                I am not in crisis, homicidal, sucidal or abusing anyone, and i
                agree to the Eat Luv N Pray{' '}
                <span className="fw500 pointer">
                  Terms of service & Privacy Policy
                </span>
              </div>
            </Col>

            <Col md={6}>
              <Button onClick={this.handleSubmit} className="btnTyp5 mt-3">
                continue
              </Button>
            </Col>
          </Row>

          <div className="fs18 fw300 pt-5 col14">
            Already have an account?
            <span className="fw500 pointer pl-1">
              <Link to={`/login`}>Login here</Link>
            </span>
          </div>
        </div>{' '}
      </div>
    );
  }
}
export default connect(null, { actionUserSignup })(ProfessionalSignup);
