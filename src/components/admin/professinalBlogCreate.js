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

// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import UploadDetail from "../../assets/images/upload_detail.svg";
import { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";
import ELPViewApiService from "../../common/services/apiService";

import constant from "../../constant";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"; 
import validateInput from "../../common/validations/validationSAblog"; 

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
    blobj: {
      bl_desc: "",
      // bl_id: "",
      bl_image: "",
      bl_status: "",
      bl_title: "",
      bl_written_by: "",
      press_blog_category: [],
    },
  };
  componentDidMount() {
    this.getProffCat();
    console.log(this.props.match.params.id);
    console.log(this.props);
  }
  getblogDetails = () => {
    let data = {
      bl_id: this.props.match.params.id,
    };
    ELPViewApiService("getBlogDetail", data).then((result) => {
      console.log("result", result);
      let blobj = {};
      if (result && result.status === 200) {
        blobj =
          result && result.data && result.data.data
            ? result.data.data.blog_list[0]
            : [];
      }
      let cats = [];
      let proffCat = this.state.proffCat;
      blobj.blog_category.map((item) => {
        cats.push(item.buc_cat_id);
      });
      console.log("cats", cats);
      proffCat.map((item) => {
        if (cats.includes(item.bc_id)) {
          item.bc_status = "1";
        } else {
          item.bc_status = "0";
        }
        return item;
      });
      this.setState(
        {
          blobj,
          proffCat,
        },
        () => {
          console.log("blobj", this.state.proffCat);
        }
      );
    });
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
          if (this.props.match.params.id > 0) {
            this.getblogDetails();
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

      let blobj = this.state.blobj;
      blobj.bl_image = response.data.data.filepath;
      this.setState({
        isUploading: false,
        filepath: response.data.data.filepath,
        filename: fileObject.name,
        blobj,
      });
    }
  };

  _saveBlogHandler = async () => {
    let blobj = this.state.blobj;
    let catar = [];
    this.state.proffCat.map((item) => {
      if (item.bc_status == "1") {
        console.log("itemcat", item);
        item.buc_cat_id = item.bc_id;
        item.buc_cat_name = item.bc_name;
        catar.push(item);
      }
    });
    console.log("catar", catar);
    if (
      this.isValid({
        title: blobj.bl_title,
        image: blobj.bl_image,
        desc: blobj.bl_desc,
        writtenby: blobj.bl_written_by,
        cat: catar,
      })
    ) {
      catar.map((item) => {
        delete item.bc_status;
        delete item.bc_name;
        delete item.bc_id;
        delete item.bc_datetime;
        return item;
      });
      let data = {
        bl_title: blobj.bl_title,
        bl_image: blobj.bl_image,
        bl_desc: blobj.bl_desc,
        bl_written_by: blobj.bl_written_by,
        blog_cat_name: catar,
      };
      if (this.props.match.params.id > 0) {
        data.bl_id = this.props.match.params.id;
      }
      console.log(data);
      // try {
      ELPViewApiService(
        this.props.match.params.id > 0 ? "updateBlog" : "createBlog",
        data
      );
      // this.props.history.push("/admin");
      setTimeout(() => {
        this.props.history.push("/admin");
      }, 1000);
      // } catch (err) {
      //   console.log(err);
      // }
    }
  };

  handleCheck = (event, status) => {
    const { name, checked, value, id } = event.target;

    console.log("value , checked", value, checked);
    let proffCat = this.state.proffCat;
    // var index = proffCat.findIndex((el) => el.bc_id == id);
    // proffCat[index].flag = checked;

    var index = proffCat.findIndex((el) => el.bc_id == value);
    proffCat[index].bc_status = status;

    this.setState(
      {
        proffCat,
      },
      () => {
        console.log(this.state.proffCat);
      }
    );
  };

  // _saveBlogHandler = async () => {
  //   console.log(
  //     "bl_title:",
  //     this.state.title,
  //     "bl_image:",
  //     this.state.filepath,
  //     "bl_desc",
  //     this.state.description
  //   );
  //   let catar = [];
  //   let blobj = this.state.blobj;
  //   this.state.proffCat.map((item) => {
  //     if (item.flag == true) {
  //       item.bc_cat_id = item.bc_id;
  //       item.bc_cat_name = item.bc_name;
  //       delete item.flag;
  //       delete item.bc_name;
  //       delete item.bc_id;
  //       catar.push(item);
  //     }
  //   });

  //   let data = {
  //     title: blobj.bl_title,
  //     image: blobj.bl_image,
  //     desc: blobj.bl_desc,
  //     writtenby: blobj.bl_written_by,
  //     cat: catar,
  //   };
  //   console.log(data);
  //   console.log(this.isValid(data));
  //   // try {
  //   //   let response = await ELPRxApiService("createBlog", {
  //   //     bl_title: blobj.bl_title,
  //   //     bl_image: blobj.bl_image,
  //   //     bl_desc: blobj.bl_desc,
  //   //     bl_written_by: blobj.bl_written_by,
  //   //     press_blog_cat_name: this.state.cat_name,
  //   //   });
  //   //   this.props.history.push("/admin");
  //   // } catch (err) {
  //   //   console.log(err);
  //   // }
  // };
  isValid(data) {
    console.log(data);
    const { errors, isValid } = validateInput(data);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }
    return isValid;
  }

  render() {
    const { proffCat, blobj, errors } = this.state;
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
                  <div className="fs28 col10 fw600">
                    {this.props.match.params.id > 0
                      ? "Modify Blog"
                      : "Create Blog"}
                  </div>
                  
                  {/* <div className="col14 fs16 fw300 mt-1 mb-4">
                   </div> */}
                  <Form>
                    <Form.Group>
                      <Form.Label className="col14 fw600 fs18">
                        {this.props.match.params.id > 0
                          ? "Change Picture"
                          : "Upload blog image"}
                      </Form.Label>
                      <div className="mt-1 mb-3 imgSetProfile">
                        <Image src={blobj.bl_image} className="" />
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
                            blobj: {
                              ...this.state.blobj,
                              bl_title: e.target.value.replace(
                                /[^a-zA-Z0-9 ]/g,
                                ""
                              ),
                            },
                          })
                        }
                        type="text"
                        value={blobj.bl_title}
                        className="inputTyp2"
                        maxLength={50}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.title}
                      </div> 
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label className="col14 fw600 fs18">
                        Description
                      </Form.Label>
                      <CKEditor
                        config={{
                          height: 500,
                          toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ,'Link']
                        }}
                        editor={ClassicEditor}
                        data={blobj.bl_desc}
                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          this.setState({
                            blobj: {
                              ...this.state.blobj,
                              bl_desc: data,
                            },
                          });
                          // this.setState({ description: data }, () =>
                          //   console.log(this.state.description, event)
                          // );
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
                            blobj: {
                              ...this.state.blobj,
                              bl_written_by: e.target.value.replace(
                                /[^a-zA-Z ]/g,
                                ""
                              ),
                            },
                          })
                        }
                        type="text"
                        value={blobj.bl_written_by}
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
                              //  bc_datetime: "2020-12-21 11:32:33"
                              // bc_id: "3"
                              // bc_name: "Press Release"
                              // bc_status: "1"
                              <Col md={4}>
                                <Form.Group controlId="formBasicCheckbox">
                                  <Form.Check
                                    type="checkbox"
                                    label={cat.bc_name}
                                    className="checkboxTyp1"
                                    name={cat.bc_name}
                                    id={cat.bc_id}
                                    // handleCheck={this.state.eat}
                                    value={cat.bc_id}
                                    checked={cat.bc_status == "1"}
                                    onChange={(e) =>
                                      this.handleCheck(
                                        e,
                                        cat.bc_status == "1" ? "0" : "1"
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

export default ProfessinalBlogCreate; 
