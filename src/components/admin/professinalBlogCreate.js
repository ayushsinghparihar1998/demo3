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
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import UploadDetail from "../../assets/images/upload_detail.svg";
import { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";
import ELPViewApiService from "../../common/services/apiService";

import constant from "../../constant";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class ProfessinalBlogCreate extends Component {
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
    this.getProffCat();
    console.log(this.props.match.params.id);
    console.log(this.props);
    if (this.props.match.params.id > 0) {
      this.getblogDetails();
    }
  }
  getblogDetails = () => {
    let data = {
      pbl_id: this.props.match.params.id,
    };

    ELPViewApiService("superadmingetcorporateblogdetailsbyid", data).then(
      (result) => {
        console.log("result", result);
        let blogObj = {};
        if (result && result.status === 200) {
          blogObj =
            result && result.data && result.data.data
              ? result.data.data.blog_details_list[0]
              : [];
        }
        blogObj.pbl_audio_min = "" + blogObj.pbl_audio_min / 60;
        blogObj.pbl_video_min = "" + blogObj.pbl_video_min / 60;
        this.setState(
          {
            blogObj,
          },
          () => {
            console.log("blogObj", this.state.blogObj);
          }
        );
      }
    );
  };
  getProffCat = () => {
    const { url } = this.props.match;

    let proffCat = this.state.proffCat;

    ELPViewApiService("getblogcategory", {}).then((result) => {
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
        item.pbc_cat_id = item.bc_id;
        item.pbc_cat_name = item.bc_name;
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
        blog_cat_name: catar,
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
    var index = proffCat.findIndex((el) => el.bc_id == id);
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
                  <div className="fs28 col10 fw600">Create Blog</div>
                  <div className="col14 fs16 fw300 mt-1 mb-4">
                    Lorem Ipsum is simply dummy and typesetting industry.
                  </div>
                  <Form>
                    <Form.Group>
                      <Form.Label className="col14 fw600 fs18">
                        Upload blog imager
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
                        Select Category
                      </Form.Label>
                      <Row>
                        {proffCat &&
                          proffCat.map((cat) => {
                            return (
                              // "buc_cat_id" "1",
                              // "bc_name":"Eat",
                              // "bc_status" "1",
                              // "bc_datetime":"2020-12-21 11:32:33"
                              //  pbc_datetime: "2020-12-21 11:32:33"
                              // pbc_id: "3"
                              // pbc_name: "Press Release"
                              // pbc_status: "1"
                              <Col md={4}>
                                <Form.Group controlId="formBasicCheckbox">
                                  <Form.Check
                                    type="checkbox"
                                    label={cat.bc_name}
                                    className="checkboxTyp1"
                                    name={cat.bc_name}
                                    id={cat.bc_id}
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

                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Blog written by
                      </Form.Label>
                      <Form.Control type="text" className="inputTyp2" />
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

export default ProfessinalBlogCreate;
