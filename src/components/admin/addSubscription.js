import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Button,
  NavDropdown,
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Form,
  Tabs,
  Tab,
} from "react-bootstrap";
import NavBar from "../core/navAdmin";
import Footer from "../core/footer";
import { Link } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import validateInput from "../../common/validations/validationPlanAdd";

class addSubscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: "",
      paymentList: [],
      pageno: 1,
      records: 10,
      totalCount: "",

      planObj: {
        pl_title: "",
        pl_price: "",
        pl_desc_details: "",
        pl_save: "",
      },

      count: 10,
      offset: 1,
      errors: { pl_title: "", pl_price: "", pl_desc_details: "", pl_save: "" },
    };
  }
  componentDidMount = () => {
    console.log(this.props.match.params.id);
    console.log(this.props);
    if (this.props.match.params.id > 0) {
      this.getPlanDetails();
    }
  };
  getPlanDetails = () => {
    let data = {
      pl_id: this.props.match.params.id,
    };

    ELPViewApiService("superadmin_getplandetails", data).then((result) => {
      console.log("result", result);
      let planObj = {};
      if (result && result.status === 200) {
        planObj =
          result && result.data && result.data.data ? result.data.data[0] : [];
      }

      this.setState(
        {
          planObj,
        },
        () => {
          console.log("planObj", this.state.planObj);
        }
      );
    });
  };
  handleSubmit = () => {
    if (this.isValid()) {
      this.setState({
        showLoader: true,
      });

      let data = this.state.planObj;
      console.log(data);

      if (this.props.match.params.id > 0) {
        data.pl_id = this.props.match.params.id;
      }
      ELPViewApiService(
        this.props.match.params.id == 0
          ? "superadminadd_plan"
          : "superadminedit_plan",
        data
      )
        .then((result) => {
          if (result && result.data && result.data.status === "success") {
            // this.props.history.push("/admin");
            setTimeout(() => {
              this.props.history.push("/admin");
            }, 1000);
            this.clear();
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
  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    let planObj = this.state.planObj;
    planObj[name] =
      name == "pl_price"
        ? !value || !value.length || value[value.length - 1] === "."
          ? value || 0
          : parseFloat(value)
        : name == "pl_save"
        ? value.replace(/[^0-9]/g, "")
        : value;
    this.setState(
      {
        planObj,
      },
      () => {
        console.log(this.state.planObj);
      }
    );
  };
  isValid() {
    const { errors, isValid } = validateInput(this.state.planObj);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }
    return isValid;
  }

  render() {
    const { planObj, errors } = this.state;
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
                <div className="corporateMember subscriptionplan">
                  <div className="fs28 col10 mb-4">
                    {this.props.match.params.id == 0 ? "Add " : "Update "}
                    Subscription Plan
                  </div>
                  <Form>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Plan Name *
                      </Form.Label>

                      <Form.Control
                        type="text"
                        placeholder=""
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="pl_title"
                        value={planObj.pl_title}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={50}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.pl_title}
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Plan Amount *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        placeholder=""
                        id="outlined-email"
                        variant="outlined"
                        name="pl_price"
                        value={planObj.pl_price}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={10}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.pl_price}
                      </div>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Plan Description *
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        className="inputTyp2 cate2"
                        name="pl_desc_details"
                        value={planObj.pl_desc_details}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={500}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.pl_desc_details}
                      </div>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Plan Offer(%) *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        placeholder=""
                        id="outlined-email"
                        variant="outlined"
                        name="pl_save"
                        value={planObj.pl_save}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={2}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.pl_save}
                      </div>
                    </Form.Group>

                    <Form.Group>  
                        <Form.Label className="fs20 fw600 col14">Plans Select by</Form.Label> 
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckbox"> 
                                <Form.Check
                                    type="radio"
                                    label="first radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    className="radioboxTyp1"
                                  /> 
                                </Form.Group>  
                            </Col> 
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckbox">   
                                  <Form.Check
                                    type="radio"
                                    label="second radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    className="radioboxTyp1"  
                                  />
                                </Form.Group>
                            </Col> 
                        </Row>
                     </Form.Group>

                      <Form.Group controlId="formBasicCheckbox">   
                        <Form.Label className="fs20 fw600 col14 mt-3">Select Category</Form.Label> 
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckbox"> 
                                  <Form.Check
                                    type="checkbox"
                                    label="EAT"
                                    className="checkboxTyp1"
                                    name="eat" 
                                  />
                                </Form.Group>
                            </Col> 
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckboxTwo"> 
                                  <Form.Check
                                    type="checkbox"
                                    label="LUV"
                                    className="checkboxTyp1"
                                    name="eat" 
                                  />
                                </Form.Group>
                            </Col> 
                            <Col md={4}>
                                <Form.Group controlId="formBasicCheckboxThree"> 
                                  <Form.Check
                                    type="checkbox" 
                                    label="PRAY"
                                    className="checkboxTyp1"
                                    name="eat" 
                                  />
                                </Form.Group>
                            </Col>  
                        </Row>
                     </Form.Group> 

                    <Button
                      variant="primary btnTyp5 mt-4"
                      type="button"
                      onClick={() => this.handleSubmit()}
                    >
                      submit
                    </Button>
                  </Form>
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

export default addSubscription;
