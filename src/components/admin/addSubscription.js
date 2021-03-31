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
        plan_type: "",
        // plan_cat_name: "",
      },

      count: 10,
      offset: 1,

      errors: {
        pl_title: "",
        pl_price: "",
        pl_desc_details: "",
        pl_save: "",
        plan_type: "",
        plan_cat_name: "",
      },
    };
  }
  componentDidMount = () => {
    console.log(window.location.hash);
    // window.onload = function () {
      if (!window.location.hash) {
        window.location = window.location + "#loaded";
        window.location.reload();
      }
    // };
    console.log(this.props.match.params.id);
    console.log(this.props);
    this.getProffCat();
  };
  getPlanDetails = () => {
    let data = {
      pl_id: this.props.match.params.id,
    };
    let proffCat = this.state.proffCat;
    let cats = [];

    ELPViewApiService("superadmin_getplandetails", data).then((result) => {
      console.log("result", result);
      let planObj = {};
      if (result && result.status === 200) {
        planObj =
          result && result.data && result.data.data ? result.data.data[0] : [];
        planObj.plan_cat_name &&
          planObj.plan_cat_name.map((item) => {
            cats.push(item.puc_cat_id);
          });
      }
      proffCat.map((item) => {
        if (cats.includes(item.pc_id)) {
          item.flag = true;
        } else {
          item.flag = false;
        }
        return item;
      });

      delete planObj.plan_cat_name;
      this.setState(
        {
          planObj,
          proffCat,
        },
        () => {
          console.log("planObj", this.state.planObj);
          console.log("proffCat", this.state.proffCat);
        }
      );
    });
  };
  handleSubmit = () => {
    let planObj = this.state.planObj;
    delete planObj.plan_cat_name;
    let data = {};

    let catar = [];
    this.state.proffCat.map((item) => {
      if (item.flag == true) {
        let a = {};
        console.log("item".item);
        a.puc_cat_id = item.pc_id;
        a.puc_cat_name = item.pc_name;
        catar.push(a);
      }
    });

    console.log(catar);
    if (this.props.match.params.id > 0) {
      data.pl_id = this.props.match.params.id;
    }
    delete planObj.pl_datetime;
    this.setState(
      {
        planObj,
        proffCat: this.state.proffCat,
      },
      () => {
        data = {
          pl_desc_details: this.state.planObj.pl_desc_details,
          pl_discount_price: this.state.planObj.pl_discount_price,
          pl_id: this.state.planObj.pl_id,
          pl_price: this.state.planObj.pl_price,
          pl_save: this.state.planObj.pl_save,
          pl_status: this.state.planObj.pl_status,
          pl_title: this.state.planObj.pl_title,
          // plan_cat_name: "",
          plan_type: this.state.planObj.plan_type,
        };
        if (
          +data.plan_type == 1 ||
          data.plan_type == "1" ||
          data.plan_type == 1
        ) {
          data.plan_cat_name = catar;
        }
      }
    );

    setTimeout(() => {
      if (this.isValid(data)) {
        console.log("FINAL planObj", data);

        ELPViewApiService(
          this.props.match.params.id == 0
            ? "superadminadd_plan"
            : +data.plan_type == 1 ||
              data.plan_type == "1" ||
              data.plan_type == 1
            ? "superadminedit_plan1"
            : "superadminedit_plan1",
          data
        )
          .then((result) => {
            if (result && result.data && result.data.status === "success") {
              // this.props.history.push("/admin");
              setTimeout(() => {
                this.props.history.push("/admin");
              }, 100);
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
    }, 200);
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    let planObj = this.state.planObj;
    planObj[name] =
      name == "pl_price"
        ? !value || !value.length || value[value.length - 1] === "."
          ? value || 0
          : parseFloat(value) || 0
        : name == "pl_save"
        ? value.replace(/[^0-9]/g, "")
        : value;
    let proffCat = this.state.proffCat;
    if (name == "plan_type" && +value == 2) {
      proffCat.map((item) => {
        item.flag = false;
        return item;
      });
      delete planObj.plan_cat_name;
    }
    this.setState(
      {
        planObj,
        proffCat,
      },
      () => {
        console.log(this.state.planObj);
      }
    );
  };
  getProffCat = () => {
    let proffCat = this.state.proffCat;
    ELPViewApiService("superadmingetprofessioanalcategory", {}).then(
      (result) => {
        if (result && result.status === 200) {
          console.log("PROFFCAT", result.data.data.domain_list);
          proffCat =
            result && result.data && result.data.data
              ? result.data.data.domain_list
              : [];
        }
        this.setState(
          {
            proffCat,
          },
          () => {
            if (this.props.match.params.id > 0) {
              this.getPlanDetails();
            }
          }
        );
      }
    );
  };
  handleCheck = (event) => {
    const { name, checked, value, id } = event.target;

    console.log("value , checked", value, checked);
    let proffCat = this.state.proffCat;
    var index = proffCat.findIndex((el) => el.pc_id == id);
    proffCat[index].flag = checked;

    this.setState(
      {
        proffCat,
      },
      () => {
        console.log(this.state.proffCat);
      }
    );
  };

  // handleRadio = (e) => {
  //   console.log(e);
  //   console.log(e.target.value);
  // };
  isValid(data) {
    const { errors, isValid } = validateInput(data);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }
    return isValid;
  }

  render() {
    const { planObj, errors, proffCat } = this.state;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout adminProfessinal pt-4 pb-5">
          <Container>
            <Row>
              <Col md={4} lg={3} className="pr-1">
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
              <Col md={8} lg={9} className="pl-1"> 
                <div className="corporateMember subscriptionplan">
                  <div className="fs28 col10 mb-4">
                    {this.props.match.params.id == 0 ? "Add " : "Update "}
                    Subscription Plan
                  </div>
                  <Form>
                  <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14"> 
                          Upload  PDF
                      </Form.Label>
                      {/* <div className="mt-1 mb-3 imgSetProfile"> */}
                        {/* <Image src={kitObj.kt_image_url} className="" />{" "} */}
                      {/* </div> */}
                      <Form.Group>
                        <Form.File
                          id="exampleFormControlFile1"
                          className="inputTyp2"
                          onChange={(e) =>console.log("CHANGE D ",e)
                            // this.handleUploadPicture(e, "backgroud_img")
                          }
                        />
                        <div className="col27 fs14 fw400 mt-2 error">
                          {/* {errors.kt_image_url} */}
                        </div>
                      </Form.Group>
                    </Form.Group>
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
                      <Form.Label className="fs20 fw600 col14">
                        Plans Select by
                      </Form.Label>
                      <Row>
                        <Col md={4}>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                              type="radio"
                              id="plan_type1"
                              value={1}
                              name="plan_type"
                              label="Daily"
                              className="radioboxTyp1"
                              onChange={(e) => this.handleChange(e)}
                              checked={+planObj.plan_type == 1}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                              type="radio"
                              id="plan_type2"
                              value={2}
                              name="plan_type"
                              onChange={(e) => this.handleChange(e)}
                              label="By condition"
                              className="radioboxTyp1"
                              checked={+planObj.plan_type == 2}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.plan_type}
                      </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Label className="fs20 fw600 col14 mt-3">
                        Select Category
                      </Form.Label>
                      <Row>
                        {proffCat &&
                          proffCat.map((cat) => {
                            return (
                              <Col md={4}>
                                <Form.Group controlId="formBasicCheckbox">
                                  <Form.Check
                                    type="checkbox"
                                    label={cat.pc_name}
                                    className="checkboxTyp1"
                                    name={cat.pc_name}
                                    id={cat.pc_id}
                                    value={cat.flag}
                                    onChange={(e) => this.handleCheck(e)}
                                    checked={cat.flag == true}
                                    handleCheck={cat.flag}
                                    disabled={planObj.plan_type == 2}
                                  />
                                </Form.Group>
                              </Col>
                            );
                          })}{" "}
                      </Row>
                      {planObj.plan_type == 1 ? (
                        <div className="col27 fs14 fw400 mt-2 error">
                          {errors.plan_cat_name}
                        </div>
                      ) : (
                        ""
                      )}
                    </Form.Group>

                    <Button
                      variant="primary btnTyp5 mt-4"
                      type="button"
                      onClick={() => this.handleSubmit()}
                    >
                      {this.props.match.params.id > 0 ? "UPDATE" : "CREATE"}
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
