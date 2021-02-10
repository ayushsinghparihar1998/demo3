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
import validateInput from "../../common/validations/validationAddDomain";
import { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";
import Deleteicon from "../../assets/images/delete_icon.svg";
import Womanvideo from "../../assets/images/womanvideo.jpg"; 

import constant from "../../constant";  
class AddKits extends Component {   
  constructor(props) {
    super(props);
    this.state = {
      pageType: "",
      paymentList: [],
      pageno: 1,
      records: 10,
      totalCount: "",

      kitObj: {
        kt_name: "",
        kt_desc: "",
        kt_image_url: "",
        kt_price: "",
        kits_services: "",
      },
      serviceData: [
        {
          ks_services: "",
          ks_actual_price: "",
          ks_discounted_price: "",
        },
      ],
      errorServiceData: [],

      count: 10,
      offset: 1,
      errors: {
        kt_name: "",
        kits_services: "",
        kt_desc: "",
        kt_image_url: "",
        kt_price: "",
      },
      serviceShow: false,
    };
    this.checkServiceError = this.checkServiceError.bind(this);
  }

  componentDidMount = () => {
    console.log(this.props.match.params.id);
    console.log(this.props);
    if (this.props.match.params.id > 0) {
      this.getKitDetails();
    }
  };

  getKitDetails = () => {
    let data = {
      kt_id: this.props.match.params.id,
    };

    ELPViewApiService("superadminget_kitsdetails", data).then((result) => {
      console.log("result", result.data.data.kits_details_listing[0]);
      let kitObj = {};
      let serviceData = {};
      let errorServiceData = this.state.errorServiceData;

      if (result && result.status === 200) {
        kitObj =
          result && result.data && result.data.data
            ? result.data.data.kits_details_listing[0]
            : [];
        serviceData =
          result && result.data && result.data.data
            ? result.data.data.kits_details_listing[0].kits_services
            : [];
        result.data.data.kits_details_listing[0].kits_services.map((item) => {
          errorServiceData.push({
            ks_actual_price: "",
            ks_discounted_price: "",
            ks_services: "",
          });
        });
      }

      this.setState(
        {
          kitObj,
          serviceData,
        },
        () => {
          console.log("kitObj", this.state.kitObj);
          console.log("serviceData", this.state.serviceData);
          this.checkServiceError();
        }
      );
    });
  };

  handleSubmit = () => {
    if (this.isValid()) {
      this.setState({
        showLoader: true,
      });

      let data = this.state.kitObj;
      console.log(data);

      if (this.props.match.params.id > 0) {
        data.kt_id = this.props.match.params.id;
      }
      ELPViewApiService(
        this.props.match.params.id == 0
          ? "superadminadd_kits"
          : "superadminedit_kits",
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
    let kitObj = this.state.kitObj;
    kitObj[name] =
      name == "kt_price"
        ? !value || !value.length || value[value.length - 1] === "."
          ? value || 0
          : parseFloat(value).toFixed(4)
        : value;
    this.setState(
      {
        kitObj,
      },
      () => {
        console.log(this.state.kitObj);
      }
    );
  };
  handleChangeLoop = (event, ind) => {
    let kitObj = this.state.kitObj;
    let errorServiceData = this.state.errorServiceData;
    let validName =
      event.currentTarget.name == "ks_services"
        ? "service name"
        : event.currentTarget.name == "ks_discounted_price"
        ? "discounted price"
        : "actual price";

    kitObj.kits_services.map((item, index) => {
      if (ind == index) {
        // item.item_category_id = foodId;
        item[event.currentTarget.name] =
          event.currentTarget.name == "ks_services"
            ? event.currentTarget.value
            : !event.currentTarget.value ||
              !event.currentTarget.value.length ||
              event.currentTarget.value[
                event.currentTarget.value.length - 1
              ] === "."
            ? event.currentTarget.value || 0
            : parseFloat(event.currentTarget.value);
        // event.currentTarget.value.replace(/[^0-9]/g, "");
        errorServiceData[ind][event.currentTarget.name] =
          item[event.currentTarget.name].length == 0
            ? "Please add " + validName
            : "";
      }
    });
    this.setState(
      {
        kitObj,
        errorServiceData,
      },
      () => {
        console.log(this.state.errorServiceData);
        this.checkServiceError();
      }
    );
    // kitObj.kits_services.map((item, ind) => {
    //   if (ind == index) {
    //     // item.item_category_id = foodId;
    //     // item.item_category_title = event.currentTarget.value;
    //     console.log("item.item_category_title", item.item_category_title);

    //     errorcategorySetupData[ind].item_category =
    //       item.item_category_title.length == 0
    //         ? "Please add item category"
    //         : "";
    //   }
    // });
  };

  isValid() {
    const { errors, isValid } = validateInput(this.state.kitObj);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }
    return isValid;
  }

  isValidSetup() {
    let count = 0;
    let errorServiceData = this.state.errorServiceData;
    errorServiceData.map((item) => {
      if (
        item.ks_services.length > 0 ||
        item.ks_actual_price.length > 0 ||
        item.ks_discounted_price.length > 0
      ) {
        count++;
      }
    });
    console.log(count);
    if (count == 0) {
      return true;
    } else {
      return false;
    }
  }
  addCategorySetup() {
    let obj = {
      ks_services: "",
      ks_actual_price: "",
      ks_discounted_price: "",
    };
    let serviceData = this.state.serviceData;
    let errorServiceData = this.state.errorServiceData;

    serviceData.map((item, ind) => {
      console.log(item);

      errorServiceData[ind].ks_services =
        item.ks_services.length == 0 ? "Please service name" : "";
      errorServiceData[ind].ks_actual_price =
        item.ks_actual_price.length == 0 ? "Please enter actual price" : "";
      errorServiceData[ind].ks_discounted_price =
        item.ks_discounted_price.length == 0
          ? "Please enter discounted price"
          : "";
    });
    serviceData.push(obj);
    errorServiceData.push({
      ks_actual_price: "",
      ks_discounted_price: "",
      ks_services: "",
    });
    this.setState(
      {
        serviceData,
        errorServiceData,
      },
      () => {
        this.checkServiceError();
      }
    );
  }
  removeCategorySetup(index) {
    let serviceData = this.state.serviceData;
    serviceData.splice(index, 1);
    this.setState(
      {
        serviceData,
      },
      () => {
        this.checkServiceError();
      }
    );
  }
  checkServiceError = () => {
    let serviceData = this.state.serviceData;
    let arr = [];
    serviceData.map((item) => {
      arr.push(Object.values(item).every((o) => o.length > 0));
    });
    let val = arr.every((o) => o === true);
    this.setState({
      serviceShow: val,
    });
    console.log(val);
  };

  render() {
    const { kitObj, errors, errorServiceData } = this.state;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout adminProfessinal addKits pt-4 pb-5">
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
                  <div className="fs28 col10 mb-4">Kits</div>
                  <Form>
                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14"> 
                          Add Picture*  
                      </Form.Label>
                      <div className="mt-1 mb-3 imgSetProfile">
                          <Image src={Womanvideo} className="" />   
                      </div>
                      {/* <Form.Label className="fs20 fw600 col14">
                          Upload  
                      </Form.Label>                       */} 

                      <Form.Group>
                        <Form.File
                          id="exampleFormControlFile1"
                          className="inputTyp2"
                        />
                      </Form.Group>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14">
                        Kit Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        name="kt_name"
                        value={kitObj.kt_name}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={50}
                      />

                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.kt_name}
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14">
                        Kit Description
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        className="inputTyp2"
                        name="kt_desc"
                        value={kitObj.kt_desc}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={50}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.kt_desc}
                      </div>
                    </Form.Group>
                    {this.state.serviceData.map((cat, index) => {
                      return (
                        <Row>
                          <Col md={5}>
                            <Form.Group className="mt-1 mb-4">
                              <Form.Label className="fs20 fw600 col14">
                                Service Name
                              </Form.Label>
                              {/* ks_services: "",
          ks_actual_price: "",
          ks_discounted_price: "", */}
                              <Form.Control
                                className="inputTyp2"
                                type="text"
                                name="ks_services"
                                value={cat.ks_services}
                                onChange={(e) =>
                                  this.handleChangeLoop(e, index)
                                }
                                maxLength={50}
                              />
                              <div className="col27 fs14 fw400 mt-2 error">
                                {errorServiceData.ks_services}
                              </div>
                            </Form.Group>
                          </Col>
                          <Col md={3}>
                            <Form.Group className="mt-1 mb-4">
                              <Form.Label className="fs20 fw600 col14">
                                Price
                              </Form.Label>
                              <Form.Control
                                className="inputTyp2"
                                type="text"
                                name="ks_actual_price"
                                value={cat.ks_actual_price}
                                onChange={(e) =>
                                  this.handleChangeLoop(e, index)
                                }
                                maxLength={50}
                              />
                              <div className="col27 fs14 fw400 mt-2 error">
                                {errorServiceData.ks_actual_price}
                              </div>
                            </Form.Group>
                          </Col>
                          <Col md={3}>
                            <Form.Group className="mt-1 mb-4">
                              <Form.Label className="fs20 fw600 col14">
                                Discounted Price
                              </Form.Label>
                              <Form.Control
                                type="text"
                                className="inputTyp2"
                                name="ks_discounted_price"
                                value={cat.ks_discounted_price}
                                onChange={(e) =>
                                  this.handleChangeLoop(e, index)
                                }
                                maxLength={50}
                              />
                              <div className="col27 fs14 fw400 mt-2 error">
                                {errorServiceData.ks_discounted_price}
                              </div>
                            </Form.Group>
                          </Col>
                          {this.state.serviceData.length > 1 ? (
                            <Col md={1}>
                              <Image
                                src={Deleteicon}
                                alt=""
                                onClick={() => this.removeCategorySetup(index)}
                              />
                            </Col>
                          ) : (
                            ""
                          )}
                        </Row>
                      );
                    })}
                    <div className="position-relative mb-2">
                      <Button
                        variant="btnTypAdd"
                        type="button"
                        disabled={!this.state.serviceShow}
                        onClick={() => this.addCategorySetup()}
                      >
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>{" "}
                        Add Services
                      </Button>
                    </div>

                    <Button
                      variant="primary btnTyp5 mt-4"
                      type="button"
                      onClick={() => this.checkServiceError()}
                    >
                      SUBMIT
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

export default AddKits;
