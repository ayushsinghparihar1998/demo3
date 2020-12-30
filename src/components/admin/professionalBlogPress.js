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
import NavBar from "../core/nav";
import Footer from "../core/footer";
import { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";
import ELPViewApiService from "../../common/services/apiService";

import constant from "../../constant";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import UploadDetail from "../../assets/images/upload_detail.svg";

class ProfessinalBlogPress extends Component {
  state = {
    cat_name: [],
    isUploading: false,
    filepath: null,
    title: null,
    description: null,
    filename: null,
    errors: {},
    proffCat: [],
  };
  componentDidMount() {
    console.log(" this.props.match", this.props.match);

    this.getProffCat();
    console.log(this.props.match.params.id);
    console.log(this.props);
    if (this.props.match.params.id > 0) {
      this.getpressBlogDetails();
    }
  }
  getpressBlogDetails = () => {
    let data = {
      pbl_id: this.props.match.params.id,
    };

    ELPViewApiService("superadmingetcorporatepressBlogdetailsbyid", data).then(
      (result) => {
        console.log("result", result);
        let pressBlogObj = {};
        if (result && result.status === 200) {
          pressBlogObj =
            result && result.data && result.data.data
              ? result.data.data.pressBlog_details_list[0]
              : [];
        }
        pressBlogObj.pbl_audio_min = "" + pressBlogObj.pbl_audio_min / 60;
        pressBlogObj.pbl_video_min = "" + pressBlogObj.pbl_video_min / 60;
        this.setState(
          {
            pressBlogObj,
          },
          () => {
            console.log("pressBlogObj", this.state.pressBlogObj);
          }
        );
      }
    );
  };
  getProffCat = () => {
    let proffCat = this.state.proffCat;

    ELPViewApiService("getpressblogcategory", {}).then((result) => {
      console.log(result.data.data);
      if (result && result.status === 200) {
        proffCat =
          result && result.data && result.data.data ? result.data.data : [];
      }
      this.setState(
        {
          proffCat,
        },
        () => {
          console.log("ProffCat", this.state.proffCat);
        }
      );
    });
  };
  handleUploadPicture = async (event, name) => {
    const fileObject = event.target.files[0];
    console.log();
    if (fileObject) {
      this.setState({
        isUploading: true,
      });
      const formData = new FormData();
      formData.set("u_image", fileObject);
      console.log("formDataformData", formData);

      // const url = "https://staging.eatluvnpray.org/elp/uploadblogimage";
      // "https://eatluvnpray.org/elp/uploadblogimage";
      const url = constant.SERVER_URL + "elp/uploadblogimage";
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await post(url, formData, config);
      console.log(name, "resultresultresult", response);

      this.setState({
        isUploading: false,
        filepath: response.data.data.filepath,
        filename: fileObject.name,
      });
    }
  };

  _saveBlogHandler = async () => {
    console.log(
      "bl_title:",
      this.state.title,
      "bl_image:",
      this.state.filepath,
      "bl_desc",
      this.state.description
    );
    let catar = [];
    this.state.proffCat.map((item) => {
      if (item.flag == true) {
        item.pbc_cat_id = item.pbc_id;
        item.pbc_cat_name = item.pbc_name;
        delete item.flag;
        delete item.bc_name;
        delete item.bc_id;
        catar.push(item);
      }
    });
    try {
      let response = await ELPRxApiService("createBlog", {
        pbl_title: this.state.title,
        pbl_image: this.state.filepath,
        pbl_desc: this.state.description,
        press_blog_cat_name: this.state.cat_name,
      });
      this.props.history.push("/blogs");
    } catch (err) {
      console.log(err);
    }
  };
  handleCheck = (event) => {
    const { name, checked, value, id } = event.target;

    console.log("value , checked", value, checked);
    let proffCat = this.state.proffCat;
    var index = proffCat.findIndex((el) => el.pbc_id == id);
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

  // handleCheck = (event) => {
  //   const { name, value, id } = event.target;

  //   let cat_name = this.state.cat_name;
  //   let obj = {
  //     pbc_cat_name: name,
  //     pbc_cat_id: id,
  //   };
  //   var isInArray =
  //     cat_name.find(function (el) {
  //       return el.pbc_cat_id == id;
  //     }) !== undefined;
  //   var index = cat_name.findIndex((el) => el.pbc_cat_id == id);

  //   console.log(isInArray, index);
  //   if (index > -1) {
  //     cat_name.splice(index, 1);
  //   } else {
  //     cat_name.push(obj);
  //   }
  //   this.setState(
  //     {
  //       cat_name,
  //     },
  //     () => {
  //       console.log(this.state);
  //     }
  //   );
  // };

  render() {
    const { proffCat } = this.state;
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
                      Links
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="">
                        <div className="fs14 col28 fw500"> USER LISTING</div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="">
                        <div className="fs14 col28 fw500">
                          {" "}
                          PROFESSIONAL LISTING
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="">
                        <div className="fs14 col23 fw500">
                          {" "}
                          LISTENER LISTING
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="position-relative">
                        <div className="fs14 col28 fw500"> LISTENER Q&A</div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="position-relative">
                        <div className="fs14 col28 fw500"> CATEGORY</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={9} className="pl-1">
                <div className="corporateMember layout_box">
                  <div className="fs28 col10 fw600">Create Press</div>
                  <div className="col14 fs16 fw300 mt-1 mb-4">
                    Lorem Ipsum is simply dummy and typesetting industry.
                  </div>
                  <Form>
                    <Form.Group>
                      <Form.Label className="col14 fw600 fs18">
                        Upload blog image
                      </Form.Label>
                      <Form.File
                        onChange={(e) =>
                          this.handleUploadPicture(e, "backgroud_img")
                        }
                        id="exampleFormControlFile1"
                        className="fileType2"
                      />
                      <div className="fs16 fw400 col14 tesxtfills">
                        {this.state.filename ? (
                          <strong className="col23">
                            {this.state.filename}
                          </strong>
                        ) : (
                          ""
                        )}
                      </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="col14 fw600 fs18">
                        Title of the blog
                      </Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          this.setState({ title: e.target.value })
                        }
                        type="text"
                        className="inputTyp2"
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label className="col14 fw600 fs18">
                        Description
                      </Form.Label>
                      <CKEditor
                        config={{
                          height: 500,
                        }}
                        editor={ClassicEditor}
                        // data="<p>Hello from CKEditor 5!</p>"

                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          this.setState({ description: data }, () =>
                            console.log(this.state.description, event)
                          );
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                      {/* <Form.Control onChange={(e) => this.setState({ description: e.target.value })} as="textarea" className="inputTyp2 cate2" rows="3" /> */}
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Written by
                      </Form.Label>
                      <Form.Control
                        // onChange={(e) =>
                        //     this.setState({ title: e.target.value })
                        //   }
                        type="text"
                        className="inputTyp2"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Post in
                      </Form.Label>
                      <Row>
                        {proffCat &&
                          proffCat.map((cat) => {
                            return (
                              //  pbc_datetime: "2020-12-21 11:32:33"
                              // pbc_id: "3"
                              // pbc_name: "Press Release"
                              // pbc_status: "1"
                              <Col md={4}>
                                <Form.Group controlId="formBasicCheckbox">
                                  <Form.Check
                                    type="checkbox"
                                    label={cat.pbc_name}
                                    className="checkboxTyp1"
                                    name={cat.pbc_name}
                                    id={cat.pbc_id}
                                    // handleCheck={this.state.eat}
                                    // checked = {}
                                    onChange={(e) => this.handleCheck(e)}
                                  />
                                </Form.Group>
                              </Col>
                            );
                          })}
                      </Row>
                    </Form.Group>

                    <Button variant="primary btnTyp5 mt-4" type="submit">
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

export default ProfessinalBlogPress;
