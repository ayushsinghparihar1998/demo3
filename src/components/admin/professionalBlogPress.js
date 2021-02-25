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
import { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";
import ELPViewApiService from "../../common/services/apiService";

import constant from "../../constant";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
import validateInput from "../../common/validations/validationSAblog";

import UploadDetail from "../../assets/images/upload_detail.svg";

let prevCkEditorText = ''


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
    pblobj: {
      pbl_desc: "",
      // pbl_id: "",
      pbl_image: "",
      pbc_status: "",
      pbl_title: "",
      pbl_written_by: "",
      press_blog_category: [],
    },
    errors: {
      pbl_desc: "",
      // pbl_id: "",
      pbl_image: "",
      pbc_status: "",
      pbl_title: "",
      pbl_written_by: "",
      press_blog_category: "",
    },
    textLength:0
  };
  componentDidMount() {
    console.log(" this.props.match", this.props.match);

    this.getProffCat();
    console.log(this.props.match.params.id);
    console.log(this.props);
  }
  getpressBlogDetails = () => {
    let data = {
      pbl_id: this.props.match.params.id,
    };
    // getBlogdetailsgetpressblogdetails

    ELPViewApiService("getpressblogdetails", data).then((result) => {
      console.log("result", result);
      let pblobj = {};
      if (result && result.status === 200) {
        pblobj =
          result && result.data && result.data.data ? result.data.data[0] : [];
      }
      // pblobj.pbl_audio_min = "" + pblobj.pbl_audio_min / 60;
      // pblobj.pbl_video_min = "" + pblobj.pbl_video_min / 60;
      let cats = [];
      let proffCat = this.state.proffCat;
      pblobj.press_blog_category.map((item) => {
        cats.push(item.pbc_cat_id);
      });
      console.log("cats", cats);
      proffCat.map((item) => {
        if (cats.includes(item.pbc_id)) {
          item.pbc_status = "1";
        } else {
          item.pbc_status = "0";
        }
        return item;
      });
      this.setState(
        {
          pblobj,
          proffCat,
        },
        () => {
          console.log("pblobj", this.state.pblobj);
        }
      );
    });
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
          if (this.props.match.params.id > 0) {
            this.getpressBlogDetails();
          }
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
      let pblobj = this.state.pblobj;
      pblobj.pbl_image = response.data.data.filepath;
      this.setState({
        isUploading: false,
        filepath: response.data.data.filepath,
        filename: fileObject.name,
        pblobj,
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
    let pblobj = this.state.pblobj;
    this.state.proffCat.map((item) => {
      if (item.pbc_status == "1") {
        console.log(item);
        item.pbc_cat_id = item.pbc_id;
        item.pbc_cat_name = item.pbc_name;
        // delete item.flag;
        // delete item.bc_name;
        // delete item.bc_id;
        catar.push(item);
      }
    });

    if (
      this.isValid({
        title: pblobj.pbl_title,
        image: pblobj.pbl_image,
        desc: pblobj.pbl_desc,
        writtenby: pblobj.pbl_written_by,
        cat: catar,
      })
    ) {
      catar.map((item) => {
        delete item.pbc_status;
        delete item.pbc_name;
        delete item.pbc_id;
        delete item.pbc_datetime;

        return item;
      });
      let data = {
        pbl_title: pblobj.pbl_title,
        pbl_image: pblobj.pbl_image,
        pbl_desc: pblobj.pbl_desc,
        pbl_written_by: pblobj.pbl_written_by,
        press_blog_cat_name: catar,
      };
      console.log(data);
      if (this.props.match.params.id > 0) {
        data.pbl_id = this.props.match.params.id;
      }
      console.log(data);
      try {
        let response = await ELPRxApiService(
          this.props.match.params.id > 0
            ? "updatePressBlog"
            : "createPressBlog",

          data
        );
        setTimeout(() => {
          this.props.history.push("/admin");
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    }
  };
  isValid(data) {
    console.log(data);
    const { errors, isValid } = validateInput(data);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }
    return isValid;
  }
  handleCheck = (event, status) => {
    const { name, checked, value, id } = event.target;

    console.log("value , checked", value, checked);
    let proffCat = this.state.proffCat;
    // var index = proffCat.findIndex((el) => el.pbc_id == id);
    // proffCat[index].flag = checked;

    var index = proffCat.findIndex((el) => el.pbc_id == value);
    proffCat[index].pbc_status = status;

    this.setState(
      {
        proffCat,
      },
      () => {
        console.log(this.state.proffCat);
      }
    );
  };

  validateCKEditorData(data) {
    function stripHtml(html) {
      let tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    }
    let stringData = stripHtml(data);
 
    if (stringData.length <= constant.CK_EDITOR_CONFIG.MAX_CHARACTER) {
     
      prevCkEditorText = data
      this.setState({
        textLength:stringData.length,
        pblobj: {
          ...this.state.blobj,
          bl_desc: data
        },
      });

    } else {
       
      this.setState({
        isReloadEditor: true
      }, () => {
        this.setState({
          isReloadEditor: false
        })
      })

    }

  }

  render() {
    const { proffCat, pblobj, errors } = this.state;
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
              <Col md={9} className="pl-1">
                <div className="corporateMember layout_box">
                  <div className="fs28 col10 fw600 mb-3">
                    {this.props.match.params.id > 0
                      ? "Modify Press Blog"
                      : "Create Press Blog"}
                  </div>
                  {/* <div className="col14 fs16 fw300 mt-1 mb-4">
                    Lorem Ipsum is simply dummy and typesetting industry.
                  </div> */}
                  <Form>
                    <Form.Group>
                      <Form.Label className="col14 fw600 fs18">
                        {this.props.match.params.id > 0
                          ? "Change Picture"
                          : "Upload blog image"}
                      </Form.Label>
                      <div className="mt-1 mb-3 imgSetProfile">
                        <Image src={pblobj.pbl_image} className="" />
                      </div>
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
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.image}
                      </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="col14 fw600 fs18">
                        Title of the blog
                      </Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          // this.setState({ title: e.target.value })
                          this.setState({
                            pblobj: {
                              ...this.state.pblobj,
                              pbl_title: e.target.value.replace(
                                /[^a-zA-Z0-9 ]/g,
                                ""
                              ),
                            },
                          })
                        }
                        type="text"
                        value={pblobj.pbl_title}
                        className="inputTyp2"
                        maxLength={100}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.title}
                      </div>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label className="col14 fw600 fs18">
                        Description
                      </Form.Label>

                      {!this.state.isReloadEditor ?
                        <CKEditor
                          config={{
                            height: 500,
                            toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'Link']
                          }}
                          id={this.state.refreshText}
                          editor={ClassicEditor}
                          data={pblobj.bl_desc}
                          onChange={(event, editor) => {
                            let data = editor.getData();
                            this.validateCKEditorData(data)
                          }}
                        /> : null
                      }
                      <p style={{textAlign:'right', marginTop:'10px'}}>{this.state.textLength}/{constant.CK_EDITOR_CONFIG.MAX_CHARACTER}</p>


                      
                      {/* <Form.Control onChange={(e) => this.setState({ description: e.target.value })} as="textarea" className="inputTyp2 cate2" rows="3" /> */}
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.desc}
                      </div>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Written by
                      </Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          this.setState({
                            pblobj: {
                              ...this.state.pblobj,
                              pbl_written_by: e.target.value.replace(
                                /[^a-zA-Z ]/g,
                                ""
                              ),
                            },
                          })
                        }
                        type="text"
                        value={pblobj.pbl_written_by}
                        className="inputTyp2"
                        maxLength={100}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.writtenby}
                      </div>
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
                                    value={cat.pbc_id}
                                    checked={cat.pbc_status == "1"}
                                    onChange={(e) =>
                                      this.handleCheck(
                                        e,
                                        cat.pbc_status == "1" ? "0" : "1"
                                      )
                                    }
                                  />
                                </Form.Group>
                              </Col>
                            );
                          })}
                      </Row>
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.cat}
                      </div>
                    </Form.Group>

                    <Button
                      variant="primary btnTyp5 mt-4"
                      type="button"
                      onClick={() => this._saveBlogHandler()}
                    >
                      {this.props.match.params.id > 0 ? "Update" : "create"}
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
