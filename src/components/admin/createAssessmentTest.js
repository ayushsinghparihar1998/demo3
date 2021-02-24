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
import validateInput from "../../common/validations/validationAddQA1";
import { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";
import constant from "../../constant";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import Deleteicon from "../../assets/images/delete_icon.svg";

class CreateAssessmentTest extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 0,
      asstObj: {
        as_title: "",
        as_type: "",
        as_total_marks: "",
        as_test_price: "",
        as_cat_name: [],
        as_suggestion: [],
      },

      as_suggestion: [],
      erroras_suggestion: [],
      errors: {
        as_title: "",
        as_type: "",
        as_total_marks: "",
        as_test_price: "",
        // as_cat_name: [],
        // as_suggestion: [],
      },
      suggShow: false,
      catArray: [
        { as_test_cat_name: "Eat", as_cat_id: 5, flag: false },
        { as_test_cat_name: "Luv", as_cat_id: 2, flag: false },
        { as_test_cat_name: "Pray", as_cat_id: 3, flag: false },
        { as_test_cat_name: "ELNP(Holistic)", as_cat_id: 4, flag: false },
      ],
      category: "'Pray','luv','eat'",
    };
    this.checkServiceError = this.checkServiceError.bind(this);
  }

  componentDidMount = () => {
    console.log(this.props.match.params.id);
    console.log(this.props);
    if (this.props.match.params.id > 0) {
      this.getasstDetails();
    } else {
      let as_suggestion = [
        {
          as_min_range: 0,
          as_max_range: 0,
          as_suggestion_txt: "",
        },
      ];
      let erroras_suggestion = [
        {
          as_max_range: "",
          as_suggestion_txt: "",
        },
      ];
      this.setState({
        as_suggestion,
        erroras_suggestion,
      });
    }
  };

  handleCheckSearch = (e) => {
    let { name, value, checked } = e.target;
    console.log(name, value, checked);

    let catArray = this.state.catArray;
    var index = catArray.findIndex((el) => el.as_cat_id == value);
    catArray[index].flag = checked;

    this.setState(
      {
        catArray,
      },
      () => {
        console.log(this.state.catArray);
      }
    );
  };
  getasstDetails = () => {
    let data = {
      as_id: this.props.match.params.id,
    };
    ELPViewApiService("superadminassessmenttest_listdetail", data).then(
      (result) => {
        console.log("result", result);
        let asstObj = {};

        if (result && result.status === 200) {
          asstObj =
            result && result.data && result.data.data
              ? result.data.data[0]
              : [];
        }

        let cats = [];
        let catArray = this.state.catArray;
        let as_suggestion = this.state.as_suggestion;
        let erroras_suggestion = this.state.erroras_suggestion;

        asstObj.assessment_category.map((item) => {
          cats.push(item.as_test_cat_name);
        });
        console.log("cats", cats);
        catArray.map((item) => {
          if (cats.includes(item.as_test_cat_name)) {
            item.flag = true;
          } else {
            item.flag = false;
          }
          return item;
        });

        let sugg = [];

        asstObj.assessment_suggestion.map((item) => {
          item.as_min_range = +item.as_min_range;
          item.as_max_range = +item.as_max_range;
          item.as_suggestion_txt = item.as_suggestion;
          as_suggestion.push(item);
        });

        asstObj.assessment_suggestion.map((item) => {
          console.log(item);
          let objer = {
            as_min_range: "",
            as_max_range: "",
            as_suggestion_txt: "",
          };
          erroras_suggestion.push(objer);
        });
        setTimeout(() => {
          this.setState(
            {
              asstObj,
              catArray,
              // as_suggestion: as_suggestion.reverse(),
              as_suggestion,
              erroras_suggestion,
            },
            () => {
              console.log(
                "as_suggestionas_suggestion",
                this.state.as_suggestion
              );
              console.log("asstObj", this.state.asstObj);
              this.checkServiceError();
            }
          );
        }, 200);
      }
    );
  };
  handleChangeLoop = (name, value, ind) => {
    let asstObj = this.state.asstObj;
    let as_suggestion = this.state.as_suggestion;
    let erroras_suggestion = this.state.erroras_suggestion;

    let validName =
      name == "as_suggestion_txt" ? "suggestion text" : "max range";

    as_suggestion.map((item, index) => {
      if (ind == index) {
        // if (name == "as_suggestion_txt") {
        console.log(name);
        console.log(value);

        // ALL CHANGES REFLECTS
        // if (name == "as_suggestion_txt") {
        item[name] = value;
        // } else {
        // if (index == as_suggestion.length - 1) {
        // item[name] = value;
        // } else {
        // item[name] = value;
        // as_suggestion.map((val, indx) => {
        //   if (indx > ind) {
        //     val.as_min_range = as_suggestion[indx - 1].as_max_range + 1;
        //     if (as_suggestion[indx - 1].as_max_range > val.as_max_range) {
        //       val.as_max_range = as_suggestion[indx - 1].as_max_range + 1;
        //     }
        //   }
        // });
        // }
        // }

        // DELETE ALL CHANGES

        if (index < as_suggestion.length - 1) {
          console.log("YESYEYSYEYSSY");
          as_suggestion.splice(index + 1, as_suggestion.length - (index + 1));
        }
        console.log(
          "as_suggestionas_suggestionas_suggestionas_suggestion",
          as_suggestion
        );

        erroras_suggestion[ind][name] =
          item[name].length == 0 ? "Please enter " + validName : "";
      }
    });
    // if (name == "as_max_range") {
    //   erroras_suggestion[ind].as_max_range =
    //     +item.as_max_range == 0 || +item.as_min_range == +item.as_max_range
    //       ? "Please enter a valid range"
    //       : "";
    // }
    this.setState(
      {
        as_suggestion,
        erroras_suggestion,
      },
      () => {
        console.log(this.state.erroras_suggestion);
        console.log("this.state.as_suggestion", this.state.as_suggestion);
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
    let as_suggestion = this.state.as_suggestion;
    let val = as_suggestion[as_suggestion.length - 1].as_max_range + 1;
    let obj = {
      as_min_range: val,
      as_max_range: val,
      as_suggestion_txt: "",
    };
    let erroras_suggestion = this.state.erroras_suggestion;

    as_suggestion.push(obj);
    erroras_suggestion.push({
      as_max_range: "",
      as_suggestion_txt: "",
    });
    this.setState(
      {
        as_suggestion,
        erroras_suggestion,
      },
      () => {
        this.checkServiceError();
      }
    );
  }
  removeCategorySetup(index) {
    let as_suggestion = this.state.as_suggestion;
    as_suggestion.splice(index, 1);
    this.setState(
      {
        as_suggestion,
      },
      () => {
        this.checkServiceError();
      }
    );
  }
  checkServiceError = () => {
    let as_suggestion = this.state.as_suggestion;
    let erroras_suggestion = this.state.erroras_suggestion;

    let arr = [];
    let err = [];
    console.log("this.state.as_suggestion", this.state.as_suggestion);
    as_suggestion.map((item) => {
      console.log("item", item);
      arr.push(!Object.values(item).some((o) => o === ""));
    });
    console.log("arr", arr);
    let val = arr.every((o) => o === true);
    if (val == true) {
      erroras_suggestion.map((item) => {
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
    let as_suggestion = this.state.as_suggestion;
    let erroras_suggestion = this.state.erroras_suggestion;

    asstObj[name] =
      name == "as_test_price"
        ? !value || !value.length || value[value.length - 1] === "."
          ? value || 0
          : parseFloat(value) || 0
        : name == "as_total_marks"
        ? value.replace(/[^0-9]/g, "")
        : value;

    if (name == "as_type" && value == 2) {
      asstObj.as_test_price = 0;
    }
    if (name == "as_total_marks") {
      as_suggestion = [
        {
          as_min_range: 0,
          as_max_range: 0,
          as_suggestion_txt: "",
        },
      ];
      erroras_suggestion = [
        {
          as_max_range: "",
          as_suggestion_txt: "",
        },
      ];
    }

    // let catArray = this.state.catArray;
    // if (name == "as_type" && +value == 2)
    //   catArray.map((item) => {
    //     item.flag = false;
    //     return item;
    //   });
    this.setState(
      {
        asstObj,
        erroras_suggestion,
        as_suggestion,
      },
      () => {
        console.log(this.state.asstObj);
      }
    );
  };

  handleSubmit = () => {
    let asstObj = this.state.asstObj;
    let as_suggestion = this.state.as_suggestion;
    let erroras_suggestion = this.state.erroras_suggestion;
    console.log("submit");
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
    asstObj.as_suggestion = as_suggestion;

    asstObj.as_suggestion.map((item, ind) => {
      erroras_suggestion[ind].as_suggestion_txt =
        item.as_suggestion_txt.length == 0 ||
        item.as_suggestion_txt.length == ""
          ? "Please enter suggestion text"
          : "";
      erroras_suggestion[ind].as_max_range =
        +item.as_max_range == 0 || +item.as_max_range == +item.as_min_range
          ? "Please enter a valid range"
          : "";
    });
    this.setState(
      {
        erroras_suggestion,
      },
      () => {
        console.log(
          "this.state.erroras_suggestion",
          this.state.erroras_suggestion
        );
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
            let val =
              this.props.match.params.id > 0 ? this.props.match.params.id : "0";

            setTimeout(() => {
              this.props.history.push(
                "/editQa/" + result.data.data.assessment_id + "/" + val
              );
            }, 1000);
            if (this.props.match.params.id == 0) {
              setTimeout(() => {
                this.props.history.push(
                  "/editQa/" + result.data.data.assessment_id + "/" + val
                );
              }, 1000);
            } else {
              setTimeout(() => {
                this.props.history.push("/admin");
              }, 1000);
            }
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

  handleChangeVal = (value) => {
    console.log(value);

    this.setState(
      {
        value: value,
      },
      () => {
        console.log(this.state.value);
      }
    );
  };
  handleChangeStart = () => {
    console.log("Change event started");
  };
  handleChangeComplete = () => {
    console.log("Change event completed");
  };
  render() {
    const {
      asstObj,
      value,
      as_suggestion,
      erroras_suggestion,
      errors,
    } = this.state;
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
                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14">
                        Title of the Test
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        onChange={(e) =>
                          // this.setState({ title: e.target.value })
                          this.setState({
                            asstObj: {
                              ...this.state.asstObj,
                              as_title: e.target.value.replace(
                                /[^a-zA-Z0-9 ]/g,
                                ""
                              ),
                            },
                          })
                        }
                        type="text"
                        value={asstObj.as_title}
                        className="inputTyp2"
                        maxLength={50}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.as_title}
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Question Type 
                      </Form.Label>
                      <Row>
                        <Col md={4}>
                          <Form.Group controlId="formBasicCheckbox" className="formRadioCustom">
                            <Form.Check
                              type="radio"
                              id="as_type1"
                              value={2}
                              name="as_type"
                              label=""
                              className="radioboxTyp1"
                              onChange={(e) => this.handleChange(e)}
                              checked={+asstObj.as_type == 2}
                            />
                            <div className="custom_label">Free</div>  
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group controlId="formBasicCheckbox" className="formRadioCustom"> 
                            <Form.Check
                              type="radio"
                              id="plan_type2"
                              value={1}
                              name="as_type"
                              label=""
                              className="radioboxTyp1"
                              checked={+asstObj.as_type == 1}
                              onChange={(e) => this.handleChange(e)}
                            />
                            <div className="custom_label">Paid</div>
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.as_type}
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14">
                        Test Price (If Paid)
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        id="outlined-email"
                        variant="outlined"
                        name="as_test_price"
                        value={asstObj.as_test_price}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={10}
                        className="inputTyp2"
                        disabled={asstObj.as_type == 2}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.as_test_price}
                      </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Label className="fs20 fw600 col14">
                        Question Type
                      </Form.Label>
                      <Row>
                        {this.state.catArray &&
                          this.state.catArray.map((item) => {
                            return (
                              <Col md={3}>
                                <Form.Group controlId="formBasicCheckbox">
                                  <Form.Check
                                    type="checkbox"
                                    label="Eat"
                                    label={item.as_test_cat_name}
                                    id={item.as_cat_id}
                                    className="checkboxTyp1"
                                    name={item.as_test_cat_name}
                                    onChange={(e) => this.handleCheckSearch(e)}
                                    value={item.as_cat_id}
                                    checked={item.flag == true}
                                  />
                                </Form.Group>
                              </Col>
                            );
                          })}
                      </Row>
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.as_cat_name}
                      </div>
                    </Form.Group>

                    {/* <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Question Type
                      </Form.Label>
                      <Row>
                        <Col md={4}>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                              type="radio"
                              id="as_type1"
                              value={1}
                              name="as_type"
                              onChange={(e) => this.handleChange(e)}
                              label="Free"
                              className="radioboxTyp1"
                              checked={+asstObj.as_type == 1}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                              type="radio"
                              id="as_type2"
                              value={2}
                              name="as_type"
                              onChange={(e) => this.handleChange(e)}
                              label="Paid"
                              className="radioboxTyp1"
                              checked={+asstObj.as_type == 1}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      
                    </Form.Group>
                  */}
                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14">
                        Total Marks
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        maxLength={3}
                        name="as_total_marks"
                        value={asstObj.as_total_marks}
                        onChange={(e) =>
                          // this.setState({ title: e.target.value })
                          this.handleChange(e)
                        }
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.as_total_marks}
                      </div>
                    </Form.Group>
                    {this.state.as_suggestion.map((val, index) => {
                      return (
                        <>
                          <Form.Group className="mb-4">
                            <Form.Label className="fs20 fw600 col14">
                              Select range
                            </Form.Label>
                            {/* <Form.Control type="range" className="inputTyp2" />  */}
                            <div className="slider">
                              <div className="value">
                                {val.as_min_range}
                                {val.as_min_range < val.as_max_range
                                  ? " to " + val.as_max_range
                                  : ""}
                              </div>
                              <Slider
                                // disabled={
                                //   asstObj.as_total_marks == "" || +asstObj.as_total_marks == 0
                                // }
                                min={val.as_min_range}
                                max={asstObj.as_total_marks || 100}
                                value={val.as_max_range}
                                tooltip={false}
                                onChangeStart={this.handleChangeStart}
                                onChange={(e) =>
                                  this.handleChangeLoop(
                                    "as_max_range",
                                    e,
                                    index
                                  )
                                }
                                onChangeComplete={this.handleChangeComplete}
                              />
                            </div>
                            <div className="col27 fs14 fw400 mt-2 error">
                              {erroras_suggestion &&
                                erroras_suggestion[index].as_max_range}
                            </div>
                          </Form.Group>

                          <Form.Group className="mb-4">
                            <Form.Label className="fs20 fw600 col14">
                              Suggestions
                            </Form.Label>
                            <CKEditor
                              config={{
                                height: 500,
                                toolbar: [
                                  "bold",
                                  "italic",
                                  "bulletedList",
                                  "numberedList",
                                  "blockQuote",
                                  "Link",
                                ],
                              }}
                              editor={ClassicEditor}
                              onReady={(editor) => {
                                console.log("Editor is ready to use!", editor);
                              }}
                              className="inputTyp2"
                              data={val.as_suggestion_txt}
                              onChange={(event, editor) => {
                                const data = editor.getData();
                                this.handleChangeLoop(
                                  "as_suggestion_txt",
                                  data,
                                  index
                                );
                              }}
                            />

                            <div className="col27 fs14 fw400 mt-2 error">
                              {erroras_suggestion &&
                                erroras_suggestion[index].as_suggestion_txt}
                            </div>
                          </Form.Group>
                        </>
                      );
                    })}
                    <div className="position-relative mb-2">
                      <Button
                        variant="btnTypAdd"
                        type="button"
                        disabled={!this.state.suggShow}
                        onClick={() => this.addCategorySetup()}
                      >
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>{" "}
                        Add More Suggestions
                      </Button>
                    </div>

                    <Button
                      className="primary btnTyp5 mt-4"
                      type="button"
                      onClick={() => this.handleSubmit()}
                    >
                      SAVE
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

export default CreateAssessmentTest;
