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
import constant from "../../constant";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// import React, { useState } from 'react';
// import RangeSlider from 'react-bootstrap-range-slider';

class EditQa extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 0,
      asstObj: {
        assessment_id: "",
        as_que_ans: [],
      },

      as_que_ans: [
        {
          as_que_name: "",
          as_que_type: "",
          // weightage: "",
          as_ans: [],
        },
      ],
      erroras_que_ans: [
        {
          as_que_name: "",
          as_que_type: "",
          // weightage: "",
          as_ans: "",
        },
      ],
      suggShow: false,
    };
    this.checkServiceError = this.checkServiceError.bind(this);
  }
  componentDidMount = () => {
    console.log(this.props.match.params.id);
    console.log(this.props);
    if (this.props.match.params.id > 0) {
      // this.getasstDetails();
    }
  };

  // getasstDetails = () => {
  //   let data = {
  //     as_id: this.props.match.params.id,
  //   };

  //   ELPViewApiService("superadminassessmenttest_listdetail", data).then(
  //     (result) => {
  //       console.log("result", result.data.data.kits_details_listing[0]);
  //       let asstObj = {};
  //       let as_que_ans = {};
  //       let erroras_que_ans = [];

  //       if (result && result.status === 200) {
  //         asstObj =
  //           result && result.data && result.data.data
  //             ? result.data.data.kits_details_listing[0]
  //             : [];

  //         as_que_ans =
  //           result && result.data && result.data.data
  //             ? result.data.data.kits_details_listing[0].kits_services
  //             : [];

  //         result.data.data.kits_details_listing[0].kits_services.map((item) => {
  //           erroras_que_ans.push({
  //             as_max_range: 0,
  //             as_que_name: "",
  //           });
  //         });
  //         asstObj.as_que_ans = as_que_ans;
  //         // delete asstObj.kits_services;
  //       }

  //       this.setState(
  //         {
  //           asstObj,
  //           as_que_ans,
  //           erroras_que_ans,
  //         },
  //         () => {
  //           console.log("asstObj", this.state.asstObj);
  //           console.log("as_que_ans", this.state.as_que_ans);
  //           this.checkServiceError();
  //         }
  //       );
  //     }
  //   );
  // };
  handleChangeLoop = (name, value, ind) => {
    let asstObj = this.state.asstObj;
    let as_que_ans = this.state.as_que_ans;
    let erroras_que_ans = this.state.erroras_que_ans;

    //  as_que_name: "",
    // as_que_type: "",
    // weightage: "",
    // as_ans: [],
    let validName =
      name == "as_que_name"
        ? " a valid question"
        : name == "weightage"
        ? " a type"
        
        : "max range";

    as_que_ans.map((item, index) => {
      if (ind == index) {
        // if (name == "as_que_name") {
        console.log(name);
        console.log(value);

        // ALL CHANGES REFLECTS
        // if (name == "as_que_name") {
        item[name] = value;
        // } else {
        // if (index == as_que_ans.length - 1) {
        // item[name] = value;
        // } else {
        // item[name] = value;
        // as_que_ans.map((val, indx) => {
        //   if (indx > ind) {
        //     val.as_min_range = as_que_ans[indx - 1].as_max_range + 1;
        //     if (as_que_ans[indx - 1].as_max_range > val.as_max_range) {
        //       val.as_max_range = as_que_ans[indx - 1].as_max_range + 1;
        //     }
        //   }
        // });
        // }
        // }

        // DELETE ALL CHANGES

        if (index < as_que_ans.length - 1) {
          console.log("YESYEYSYEYSSY");
          as_que_ans.splice(index + 1, as_que_ans.length - (index + 1));
        }
        console.log(
          "as_suggestionas_suggestionas_suggestionas_suggestion",
          as_que_ans
        );

        erroras_que_ans[ind][name] =
          item[name].length == 0 ? "Please enter " + validName : "";
      }
    });
    // if (name == "as_max_range") {
    //   erroras_que_ans[ind].as_max_range =
    //     +item.as_max_range == 0 || +item.as_min_range == +item.as_max_range
    //       ? "Please enter a valid range"
    //       : "";
    // }
    this.setState(
      {
        as_que_ans,
        erroras_que_ans,
      },
      () => {
        console.log(this.state.erroras_que_ans);
        console.log("this.state.as_que_ans", this.state.as_que_ans);
        this.checkServiceError();
      }
    );
  };

  isValid(data) {
    const { errors, isValid } = validateInput(data);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }

    return isValid;
  }

  addCategorySetup() {
    let as_que_ans = this.state.as_que_ans;
    let val = as_que_ans[as_que_ans.length - 1].as_max_range + 1;
    let obj = {
      as_min_range: val,
      as_max_range: val,
      as_que_name: "",
    };
    let erroras_que_ans = this.state.erroras_que_ans;

    as_que_ans.push(obj);
    erroras_que_ans.push({
      as_max_range: "",
      as_que_name: "",
    });
    this.setState(
      {
        as_que_ans,
        erroras_que_ans,
      },
      () => {
        this.checkServiceError();
      }
    );
  }
  removeCategorySetup(index) {
    let as_que_ans = this.state.as_que_ans;
    as_que_ans.splice(index, 1);
    this.setState(
      {
        as_que_ans,
      },
      () => {
        this.checkServiceError();
      }
    );
  }
  checkServiceError = () => {
    let as_que_ans = this.state.as_que_ans;
    let erroras_que_ans = this.state.erroras_que_ans;

    let arr = [];
    let err = [];
    console.log("this.state.as_que_ans", this.state.as_que_ans);
    as_que_ans.map((item) => {
      console.log("item", item);
      arr.push(!Object.values(item).some((o) => o === ""));
    });
    console.log("arr", arr);
    let val = arr.every((o) => o === true);
    if (val == true) {
      erroras_que_ans.map((item) => {
        err.push(!Object.values(item).some((o) => o !== ""));
      });
      this.setState({
        suggShow: err.every((o) => o === true),
      });
    } else {
      this.setState({
        suggShow: val,
      });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    let asstObj = this.state.asstObj;
    let as_que_ans = this.state.as_que_ans;
    let erroras_que_ans = this.state.erroras_que_ans;

    asstObj[name] =
      name == "as_test_price"
        ? !value || !value.length || value[value.length - 1] === "."
          ? value || 0
          : parseFloat(value) || 0
        : name == "as_total_marks"
        ? value.replace(/[^0-9]/g, "")
        : value;

    if (name == "as_type" && value == 1) {
      asstObj.as_test_price = 0;
    }
    if (name == "as_total_marks") {
      as_que_ans = [
        {
          as_min_range: 0,
          as_max_range: 0,
          as_que_name: "",
        },
      ];
      erroras_que_ans = [
        {
          as_max_range: "",
          as_que_name: "",
        },
      ];
    }

    // let proffCat = this.state.proffCat;
    // if (name == "as_type" && +value == 2)
    //   proffCat.map((item) => {
    //     item.flag = false;
    //     return item;
    //   });
    this.setState(
      {
        asstObj,
        erroras_que_ans,
        as_que_ans,
      },
      () => {
        console.log(this.state.asstObj);
      }
    );
  };

  handleSubmit = () => {
    let asstObj = this.state.asstObj;
    let as_que_ans = this.state.as_que_ans;
    let erroras_que_ans = this.state.erroras_que_ans;

    let catval = [];
    this.state.catArray.map((cat) => {
      console.log(cat, cat.flag == true);
      let a = {};
      if (cat.flag == true) {
        a.as_cat_id = cat.as_cat_id;
        a.as_test_cat_name = cat.as_test_cat_name;
        catval.push(a);
      }
    });
    asstObj.as_cat_name = catval;
    asstObj.as_que_ans = as_que_ans;

    asstObj.as_que_ans.map((item, ind) => {
      erroras_que_ans[ind].as_que_name =
        item.as_que_name.length == 0 || item.as_que_name.length == ""
          ? "Please enter  a valid question"
          : "";
      erroras_que_ans[ind].as_max_range =
        +item.as_max_range == 0 || +item.as_max_range == +item.as_min_range
          ? "Please enter a valid range"
          : "";
    });
    this.setState(
      {
        erroras_que_ans,
      },
      () => {
        console.log("this.state.erroras_que_ans", this.state.erroras_que_ans);
      }
    );
    let data = this.state.asstObj;
    console.log("datadatadatadata", data);

    console.log(this.isValid(data), this.state.suggShow);
    if (this.isValid(data) && this.state.suggShow) {
      this.setState({
        showLoader: true,
        asstObj,
      });
      // }
      if (this.props.match.params.id > 0) {
        data.as_id = this.props.match.params.id;
      }
      ELPViewApiService(
        this.props.match.params.id == 0
          ? "superadminadd_assessmenttest"
          : "superadminedit_assessmenttest",
        data
      )
        .then((result) => {
          if (result && result.data && result.data.status === "success") {
            // this.props.history.push("/admin");
            setTimeout(() => {
              this.props.history.push(
                "/editQa/" + result.data.data.assessment_id
              );
            }, 1000);
            // this.clear();
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

  render() {
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
                <div className="corporateMember CreateAssessment">
                  <div className="fs28 col10 mb-4">Assessment Test</div>
                  <Form method="post">
                    <div className="QuestionListings">
                      <Form.Group className="mb-4">
                        <Form.Label className="fs20 fw600 col14">
                          Question.1
                        </Form.Label>
                        {/* <Form.Control as="textarea" rows={3} className="inputTyp2" />    */}
                        <CKEditor
                        config={{
                          height: 500,
                          toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ,'Link']
                        }}
                          editor={ClassicEditor}
                          onReady={(editor) => {
                            console.log("Editor is ready to use!", editor);
                          }}
                          className="inputTyp2"
                        />
                        <div className="col27 fs14 fw400 mt-2 error">
                          {/* {errors.kt_name} */}
                        </div>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="fs20 fw600 col14">
                          Question Type
                        </Form.Label>
                        <Row>
                          <Col md={4}>
                            <Form.Group controlId="formBasicCheckbox">
                              <Form.Check
                                type="radio"
                                id="plan_type1"
                                value={1}
                                name="plan_type"
                                label="Relevant"
                                className="radioboxTyp1"
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
                                label="Irrelevant"
                                className="radioboxTyp1"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <div className="col27 fs14 fw400 mt-2 error">
                          {/* {errors.plan_type} */}
                        </div>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="fs20 fw600 col14">
                          Answer
                        </Form.Label>
                        {/* <Form.Control as="textarea" rows={3} className="inputTyp2" />    */}
                        <CKEditor
                        config={{
                          height: 500,
                          toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ,'Link']
                        }}
                          editor={ClassicEditor}
                          onReady={(editor) => {
                            console.log("Editor is ready to use!", editor);
                          }}
                          className="inputTyp2"
                        />
                        <div className="col27 fs14 fw400 mt-2 error">
                          {/* {errors.kt_name} */}
                        </div>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="fs20 fw600 col14">
                          Weightage
                        </Form.Label>
                        <Form.Control type="text" className="inputTyp2" />
                        <div className="col27 fs14 fw400 mt-2 error">
                          {/* {errors.kt_name} */}
                        </div>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <div className="position-relative">
                          <Button variant="btnTypAdd" type="button">
                            <span>
                              <i className="fa fa-plus"></i>
                            </span>{" "}
                            Add Answer
                          </Button>
                        </div>
                      </Form.Group>
                    </div>

                    <div className="position-relative mb-2">
                      <Button
                        variant="btnTypAdd"
                        type="button"
                        className="inputTyp2 form-control"
                      >
                        <span className="col40">
                          <i className="fa fa-plus"></i>
                        </span>
                        <b className="col40 fw500">Add Services</b>
                      </Button>
                    </div>

                    <Button variant="primary btnTyp5 mt-4" type="button">
                      create
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

export default EditQa;
