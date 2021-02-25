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
import { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import validator from "validator";
// E:\workspace\ELP\newElp\ELNP\src\common\validations\validationAddVlogs.js
import constant from "../../constant";
import validateInput from "../../common/validations/validationAddVlogs";
// import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

class CreateVlog extends Component {
  state = {
    cat_name: [],
    isUploading: false,
    filepath: null,
    title: null,
    description: null,
    filename: null,
    errors: {
      vl_title: "",
      vl_video_url: "",
      vl_thumbnail_url: "",
      vl_is_featured: "",
      vl_desc: "",
    },
    vlobj: {
      vl_title: "",
      vl_video_url: "",
      vl_thumbnail_url: "",
      vl_is_featured: "",
      vl_desc: "",
    },
  };
  componentDidMount() {
    console.log(this.props.match.params.id);
    if (this.props.match.params.id > 0) {
      this.superadminget_vlogsdetails();
    }
    console.log(this.props);
  }

  superadminget_vlogsdetails = () => {
    let data = {
      vl_id: this.props.match.params.id,
    };
    ELPViewApiService("superadminget_vlogsdetails", data).then((result) => {
      console.log("result", result);
      let vlobj = {};
      if (result && result.status === 200) {
        vlobj =
          result && result.data && result.data.data ? result.data.data[0] : [];
      }
      this.setState(
        {
          vlobj,
        },
        () => {
          console.log("vlobj", this.state.vlobj);
        }
      );
    });
  };
  handleUploadPicture = async (event, name) => {
    const fileObject = event.target.files[0];
    if (fileObject) {
      this.setState({
        isUploading: true,
      });
      const formData = new FormData();
      formData.set("u_image", fileObject);

      const url = constant.SERVER_URL + "elp/uploadvlogs_thumbimage";
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await post(url, formData, config);
      console.log(name, "resultresultresult", response);

      let vlobj = this.state.vlobj;
      vlobj.vl_thumbnail_url = response.data.data.filepath;
      this.setState({
        isUploading: false,
        filepath: response.data.data.filepath,
        filename: fileObject.name,
        vlobj,
      });
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
  _savevlogHandler = () => {
    let vlobj = this.state.vlobj;

    console.log(vlobj);
    if (this.isValid(vlobj)) {
      let data = {
        vl_title: vlobj.vl_title,
        vl_desc: vlobj.vl_desc,
        vl_video_url: vlobj.vl_video_url,
        vl_thumbnail_url: vlobj.vl_thumbnail_url,
        vl_is_featured: vlobj.vl_is_featured,
      };
      if (this.props.match.params.id > 0) {
        data.vl_id = this.props.match.params.id;
      }
      console.log(data);
      ELPViewApiService(
        this.props.match.params.id > 0
          ? "superadminedit_vlogs"
          : "superadminadd_vlogs",
        data
      );
      setTimeout(() => {
        this.props.history.push("/admin");
      }, 1000);
    }
  };

  render() {
    const { vlobj, errors } = this.state;
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
                  <div className="fs28 col10 mb-4">
                    {this.props.match.params.id > 0 ? "UPDATE" : "CREATE"} Vlog
                  </div>
                  <Form>
                    <Form.Group className="mb-4">
                      <Form.Group>
                        <Form.Label className="col14 fw600 fs18">
                          {this.props.match.params.id > 0
                            ? "Change Thumbnail image"
                            : "Upload Thumbnail image"}
                        </Form.Label>
                        <div className="mt-1 mb-3 imgSetProfile">
                          <Image src={vlobj.vl_thumbnail_url} className="" />
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
                          {errors.vl_thumbnail_url}
                        </div>
                      </Form.Group>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14">
                        Title of the Blog
                      </Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          // this.setState({ title: e.target.value })
                          this.setState({
                            vlobj: {
                              ...this.state.vlobj,
                              vl_title: e.target.value.replace(
                                /[^a-zA-Z0-9 ]/g,
                                ""
                              ),
                            },
                          })
                        }
                        type="text"
                        value={vlobj.vl_title}
                        className="inputTyp2"
                        maxLength={50}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.vl_title}
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="col14 fw600 fs18">
                        Description
                      </Form.Label>
                      <CKEditor
                        config={{
                          maxCharCount: 25,
                          showCharCount: true,
                          // plugins : [WordCount],
                          // extraPlugins: ['WordCount'],
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
                        data={vlobj.vl_desc}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          console.log(editor.isReadOnly);
                          console.log(editor.getData().length);
                          // editor.execCommand("undo");
                          // if (editor.getData().length < 50) {
                          this.setState({
                            vlobj: {
                              ...this.state.vlobj,
                              vl_desc: data,
                            },
                          });
                          // }
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                      {/* <Form.Control onChange={(e) => this.setState({ description: e.target.value })} as="textarea" className="inputTyp2 cate2" rows="3" /> */}
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.vl_desc}
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14">
                        Youtube Link
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        type="text"
                        name="vl_video_url"
                        value={vlobj.vl_video_url}
                        onChange={(event) => {
                          this.setState({
                            vlobj: {
                              ...this.state.vlobj,
                              vl_video_url: event.target.value,
                            },
                          });
                        }}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.vl_video_url}
                      </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Label className="fs20 fw600 col14">
                        Select Category
                      </Form.Label>
                      <Form.Check
                        label="Featured"
                        className="checkboxTyp1"
                        name="Featured"
                        type="checkbox"
                        id={1}
                        value={vlobj.vl_is_featured}
                        onChange={(e) =>
                          this.setState({
                            vlobj: {
                              ...this.state.vlobj,
                              vl_is_featured: e.target.checked ? 2 : 1,
                            },
                          })
                        }
                        checked={vlobj.vl_is_featured == 2}
                        handleCheck={vlobj.vl_is_featured}
                      />
                      {/* <div className="col27 fs14 fw400 mt-2 error">
                        {errors.vl_is_featured}
                      </div> */}
                    </Form.Group>

                    <Button
                      onClick={() => this._savevlogHandler()}
                      variant="primary btnTyp5 mt-4"
                      type="button"
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

export default CreateVlog;
