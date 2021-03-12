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
import { showErrorToast } from "../../common/helpers/Utils";
import constant from "../../constant";
class SubscriptionDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: "",
      paymentList: [],
      pageno: 1,
      records: 10,
      totalCount: "",
      isUploading: true,
      planObj: {
        pu_title: "",
        pu_doc_url: "",
      },

      count: 10,
      offset: 1,
      errors: { pu_title: "", pu_doc_url: "" },
    };
  }

  handleSubmit = () => {
    let planObj = this.state.planObj;

    if (planObj.pu_doc_url.length > 0) {
      this.setState({
        showLoader: true,
      });

      let data = this.state.planObj;
      console.log(data);

      ELPViewApiService("superadminadd_doc", data)
        .then((result) => {
          if (result && result.data && result.data.status === "success") {
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

      const url = constant.SERVER_URL + "elp/superadmin_uploaddocument";
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await post(url, formData, config);
      console.log(name, "resultresultresult", response);
      let planObj = this.state.planObj;

      if (response.data.status == "error") {
        const message = response.data.message;
        showErrorToast(message);
      } else {
        planObj.pu_doc_url = response.data.data.filepath;
        this.setState({
          isUploading: false,
          planObj,
          filename: fileObject.name,
        });
      }
    }
  };

  _updateBlogHandler = async () => {
    try {
      let response = await ELPRxApiService("updateBlog", {
        bl_title: this.state.bl_title,
        bl_image: this.state.filepath,
        bl_desc: this.state.bl_desc,
        bl_id: this.state.bl_id,
      });
      this.props.history.push("/blogs");
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    let planObj = this.state.planObj;
    planObj[name] =
      name == "pu_doc_url" || name == "pu_save"
        ? value.replace(/[^0-9]/g, "")
        : // : name == "pu_audio_status" || name == "pu_video_status"
          // ? value == "Active"
          //   ? "1"
          //   : "0"
          value;
    this.setState(
      {
        planObj,
      },
      () => {
        console.log(this.state.planObj);
      }
    );
  };
  isValid() {
    const { errors, isValid } = validateInput(this.state.planObj);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }
    return isValid;
  }

  render() {
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
                  <div className="fs28 col10 mb-4">Upload ELNP Document</div>
                  <Form>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Upload document
                      </Form.Label>

                      <Form.Group>
                        <Form.File
                          id="exampleFormControlFile1"
                          label="Example file input"
                          className="inputTyp2"
                          // accept=".pdf"
                          onChange={(e) =>
                            this.handleUploadPicture(e, "backgroud_img") 
                          }
                        />
                        {/* <div className="fs12 fw300 col27 mt-1">
                          You can upload multiple files{" "}
                        </div> */}
                      </Form.Group>
                      <div className="col27 fs14 fw400 mt-2 error">
                        {/* {errors.cd_domain_name} */}
                      </div>
                    </Form.Group>

                    <Button
                      disabled={this.state.isUploading}
                      variant="primary btnTyp5 mt-4"
                      type="button"
                      onClick={this.handleSubmit}
                    >
                      UPLOAD
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

export default SubscriptionDocument; 



