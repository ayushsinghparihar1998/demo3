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

      // repeat 1
      as_que_ans: [
        {
          as_que_name: "",
          as_que_type: "",
          as_ans: [
            {
              option: "",
              weightage: "",
            },
          ],
        },
      ],
      erroras_que_ans: [
        {
          as_que_name: "",
          as_que_type: "",
          as_ans: [{ option: "", weightage: "" }],
        },
      ],

      queShow: false,
    };
    this.checkServiceError = this.checkServiceError.bind(this);
  }
  componentDidMount = () => {
    console.log(this.props.match.params.id);
    console.log(this.props);
    if (this.props.match.params.type > 0) {
      this.getasstDetails();
    }
  };

  getasstDetails = () => {
    let data = {
      as_que_id: this.props.match.params.type,
    };
    ELPViewApiService("superadminget_assessqueanstdetails", data).then(
      (result) => {
        console.log("result", result);
        let asstObj = {};
        let as_que_ans = [];
        let erroras_que_ans = [
          {
            as_que_name: "",
            as_que_type: "",
            as_ans: [],
          },
        ];

        let obj = { option: "", weightage: "" };

        console.log(
          "result.data.data.assess_queans_listing[0]",
          result.data.data.assess_queans_listing[0]
        );
        if (result && result.status === 200) {
          as_que_ans.push(
            result &&
              result.data &&
              result.data.data &&
              result.data.data.assess_queans_listing[0]
          );

          console.log("as_que_ans", as_que_ans);

          as_que_ans[0].assessment_answer.map((item) => {
            erroras_que_ans[0].as_ans.push(obj);
          });

          console.log("assessment_answer", as_que_ans[0].assessment_answer);
          as_que_ans[0].assessment_answer.map((item) => {
            item.option = item.as_answer;
            item.weightage = item.as_weightage;

            delete item.as_weightage;
            delete item.as_answer;

            return item;
          });

          as_que_ans[0].as_ans = as_que_ans[0].assessment_answer;
          asstObj.as_id = as_que_ans.as_test_id;
          asstObj.as_que_id = as_que_ans.as_que_id;
          asstObj.as_que_ans = as_que_ans;
          // delete as_que_ans[0].assessment_answer;
          this.setState(
            {
              asstObj,
              as_que_ans,
              erroras_que_ans,
            },
            () => {
              console.log("asstObj", this.state.asstObj);
              console.log("as_que_ans", this.state.as_que_ans);
              console.log("erroras_que_ans", this.state.erroras_que_ans);
            }
          );
        }
      }
    );
  };
  handleChangeLoop1 = (name, value, ind, ansInd) => {
    let as_que_ans = this.state.as_que_ans;
    let erroras_que_ans = this.state.erroras_que_ans;

    console.log(ind, ansInd);
    let validName =
      name == "as_que_name"
        ? "enter a valid question"
        : name == "as_que_type"
        ? "select a question type"
        : name == "weightage"
        ? "enter a weightage value for the answer"
        : "enter a valid answer"; // as_que_type
    as_que_ans.map((item, index) => {
      if (ind == index) {
        if (ansInd !== "") {
          console.log(ansInd);
          item.as_ans.map((val, i) => {
            if (i == ansInd) {
              val[name] =
                name == "weightage" ? value.replace(/[^0-9]/g, "") : value;
              erroras_que_ans[ind].as_ans[i][name] =
                val[name].length == 0 ? "Please " + validName : "";
            }
          });
        } else {
          console.log(name, value);
          item[name] = value;
          erroras_que_ans[ind][name] =
            item[name].length == 0 ? "Please " + validName : "";
        }
      }
    });
    this.setState(
      {
        as_que_ans,
        erroras_que_ans,
      },
      () => {
        console.log(
          "this.state.as_que_ans",
          this.state.as_que_ans,
          this.state.erroras_que_ans
        );
        this.checkServiceError();
      }
    );
  };

  // isValid(data) {
  //   const { errors, isValid } = validateInput(data);
  //   if (!isValid) {
  //     this.setState({ errors }, () => console.log(this.state.errors));
  //   }

  //   return isValid;
  // }

  addQuesion() {
    let as_que_ans = this.state.as_que_ans;
    let val = as_que_ans[as_que_ans.length - 1].as_max_range + 1;
    let obj = {
      as_que_name: "",
      as_que_type: "",
      as_ans: [
        {
          option: "",
          weightage: "",
        },
      ],
    };
    let erroras_que_ans = this.state.erroras_que_ans;

    as_que_ans.push(obj);
    erroras_que_ans.push({
      as_que_name: "",
      as_que_type: "",
      as_ans: [{ option: "", weightage: "" }],
    });
    this.setState(
      {
        as_que_ans,
        erroras_que_ans,
        ansShow: false,
        queShow: false,
      },
      () => {
        this.checkServiceError();
      }
    );
  }
  removeQuestion(index) {
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
  addAnswer(i) {
    let as_que_ans = this.state.as_que_ans;
    let obj = {
      option: "",
      weightage: "",
    };
    let erroras_que_ans = this.state.erroras_que_ans;

    as_que_ans[i].as_ans.push(obj);
    erroras_que_ans[i].as_ans.push({ option: "", weightage: "" });
    this.setState(
      {
        as_que_ans,
        erroras_que_ans,
        ansShow: false,
        queShow: false,
      },
      () => {
        console.log("as_que_ans", as_que_ans);
        console.log("erroras_que_ans", erroras_que_ans);
        this.checkServiceError();
      }
    );
  }
  removeAnswer(index, i) {
    let as_que_ans = this.state.as_que_ans;
    let as_ans = as_que_ans[index].as_ans;
    as_ans.splice(i, 1);
    this.setState(
      {
        as_que_ans,
      },
      () => {
        console.log("as_que_ans", this.state.as_que_ans);
        this.checkServiceError();
      }
    );
  }
  checkServiceError = () => {
    let as_que_ans = this.state.as_que_ans;
    let erroras_que_ans = this.state.erroras_que_ans;

    let arr = [];
    let arr1 = [];
    let err = [];
    let val;
    let val1;
    // console.log("this.state.as_que_ans", this.state.as_que_ans);
    // if no question typed
    // 1.no add que
    // 2.no add ans
    as_que_ans.map((item) => {
      console.log("item", item);
      arr.push(!Object.values(item).some((o) => o === ""));
    });
    val = arr.every((o) => o === true);
    console.log("val", val);
    if (val == true) {
      as_que_ans.map((item) => {
        item.as_ans.map((ans, i) => {
          console.log("ans", ans);
          console.log(ans.weightage === "");
          console.log(ans.option.length == 0);
          arr1.push(!Object.values(ans).some((o) => o === ""));
        });
      });
      val1 = arr1.every((o) => o === true);
      console.log("val1", val1);

      this.setState({
        ansShow: val1 == true ? true : false,
        queShow: val && val1 ? true : false,
      });
    } else {
      this.setState({
        queShow: val,
      });
    }
    console.log("arr", arr);
    console.log("arr1", arr1);
  };
  checkError = () => {
    let asstObj = this.state.asstObj;
    let as_que_ans = this.state.as_que_ans;
    let erroras_que_ans = this.state.erroras_que_ans;

    asstObj.as_que_ans = as_que_ans;
    asstObj.as_que_ans.map((item, ind) => {
      erroras_que_ans[ind].as_que_name =
        item.as_que_name === "" ? "Please enter a valid question." : "";
      erroras_que_ans[ind].as_que_type =
        item.as_que_type === "" ? "Please select a question type." : "";

      item.as_ans.map((val, i) => {
        erroras_que_ans[ind].as_ans[i].option =
          val.option.length == 0 || val.option == ""
            ? "Please enter a valid answer."
            : "";
        erroras_que_ans[ind].as_ans[i].weightage =
          val.weightage.length == 0 || val.weightage == ""
            ? "Please enter a weightage value for the answer"
            : "";
      });
    });
    let arr = [];
    let arr1 = [];
    as_que_ans.map((item, ind) => {
      console.log(item);
      arr.push(Object.values(item).some((o) => o === ""));
      item.as_ans.map((val, i) => {
        arr1.push(Object.values(val).some((o) => o === ""));
      });
    });
    console.log("ARRARRA", arr);
    console.log("ARRARRA1", arr1);
    this.setState(
      {
        asstObj,
        erroras_que_ans,
      },
      () => {
        console.log("this.state.erroras_que_ans", this.state.erroras_que_ans);
        if (
          Object.values(arr).every((o) => o === false) &&
          Object.values(arr1).every((o) => o === false)
        ) {
          this.handleSubmit();
        }
      }
    );
  };

  handleSubmit = () => {
    let data = this.state.asstObj;
    console.log("datadatadatadata", data);

    if (this.props.match.params.type > 0) {
      data.as_id = this.props.match.params.id;
      data.as_que_id = this.props.match.params.type;
    } else {
      data.assessment_id = this.props.match.params.id;
    }
    ELPViewApiService(
      this.props.match.params.type == 0
        ? "superadminadd_assessmentqueans"
        : "superadminedit_assessmentqueans",
      data
    )
      .then((result) => {
        if (result && result.data && result.data.status === "success") {
          // this.props.history.push("/admin");
          setTimeout(() => {
            this.props.history.push("/admin");
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
  };

  render() {
    const { erroras_que_ans } = this.state;
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
                    {this.state.as_que_ans &&
                      this.state.as_que_ans.map((item, index) => {
                        return (
                          <div className="QuestionListings">
                            <Form.Group className="mb-4">
                              <Form.Label className="fs20 fw600 col14">
                                Question.{index + 1}
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
                                  console.log(
                                    "Editor is ready to use!",
                                    editor
                                  );
                                }}
                                data={item.as_que_name}
                                onChange={(event, editor) => {
                                  const data = editor.getData();
                                  console.log(editor.getData().length);
                                  // editor.execCommand("undo");
                                  // if (editor.getData().length < 50) {
                                  this.handleChangeLoop1(
                                    "as_que_name",
                                    editor.getData(),
                                    index,
                                    ""
                                  );
                                  // }
                                }}
                                className="inputTyp2"
                              />
                              <div className="col27 fs14 fw400 mt-2 error">
                                {erroras_que_ans[index].as_que_name}
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
                                      id="as_que_type1"
                                      value={1}
                                      name="as_que_type"
                                      label="Relevant" 
                                      className="radioboxTyp1"
                                      onChange={(e) =>
                                        this.handleChangeLoop1(
                                          e.target.name,
                                          e.target.value,
                                          index,
                                          ""
                                        )
                                      }
                                      checked={+item.as_que_type == 1}
                                    />
                                  </Form.Group>
                                </Col>
                                <Col md={4}>
                                  <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check
                                      type="radio"
                                      id="as_que_type2"
                                      value={2}
                                      name="as_que_type"
                                      label="Irrelevant"
                                      className="radioboxTyp1"
                                      onChange={(e) =>
                                        this.handleChangeLoop1(
                                          e.target.name,
                                          e.target.value,
                                          index,
                                          ""
                                        )
                                      }
                                      checked={+item.as_que_type == 2}
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                              <div className="col27 fs14 fw400 mt-2 error">
                                {erroras_que_ans[index].as_que_type}
                              </div>
                            </Form.Group>
                            {item.as_ans &&
                              item.as_ans.map((val, i) => {
                                return (
                                  <>
                                    <Form.Group className="mb-4">
                                      <Form.Label className="fs20 fw600 col14">
                                        Answer.{i + 1}
                                      </Form.Label>
                                      {/* <Form.Control as="textarea" rows={3} className="inputTyp2" />    */}
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
                                        data={val.option}
                                        onReady={(editor) => {
                                          console.log(
                                            "Editor is ready to use!",
                                            editor
                                          );
                                        }}
                                        onChange={(event, editor) => {
                                          const data = editor.getData();
                                          console.log(editor.getData().length);
                                          // editor.execCommand("undo");
                                          // if (editor.getData().length < 50) {
                                          this.handleChangeLoop1(
                                            "option",
                                            editor.getData(),
                                            index,
                                            i
                                          );
                                          // }
                                        }}
                                        className="inputTyp2"
                                      />
                                      <div className="col27 fs14 fw400 mt-2 error">
                                        {
                                          erroras_que_ans[index].as_ans[i]
                                            .option
                                        }
                                      </div>
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                      <Form.Label className="fs20 fw600 col14">
                                        Weightage
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        className="inputTyp2"
                                        name="weightage"
                                        value={val.weightage}
                                        onChange={(e) =>
                                          this.handleChangeLoop1(
                                            e.target.name,
                                            e.target.value,
                                            index,
                                            i
                                          )
                                        }
                                        maxLength={2}
                                        className="inputTyp2"
                                      />
                                      <div className="col27 fs14 fw400 mt-2 error">
                                        {
                                          erroras_que_ans[index].as_ans[i]
                                            .weightage
                                        }{" "}
                                      </div>
                                    </Form.Group>
                                  </>
                                );
                              })}

                            <Form.Group className="mb-4">
                              <div className="position-relative">
                                <Button
                                  variant="btnTypAdd"
                                  type="button"
                                  onClick={() => this.addAnswer(index)}
                                  disabled={!this.state.ansShow}
                                >
                                  <span>
                                    <i className="fa fa-plus"></i>
                                  </span>{" "}
                                  Add Answer
                                </Button>
                              </div>
                            </Form.Group>
                          </div>
                        );
                      })}
                    <div className="position-relative mb-2">
                      {this.props.match.params.type > 0 ? (
                        ""
                      ) : (
                        <Button
                          variant="btnTypAdd"
                          type="button"
                          className="inputTyp2 form-control"
                          onClick={() => this.addQuesion()}
                          disabled={!this.state.queShow}
                        >
                          <span className="col40">
                            <i className="fa fa-plus"></i>
                          </span>
                          <b className="col40 fw500">Add Question</b>
                        </Button>
                      )}
                    </div>

                    <Button
                      variant="primary btnTyp5 mt-4"
                      type="button"
                      onClick={() => this.checkError()}
                    >
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
