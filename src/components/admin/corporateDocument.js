import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Button,
  Container,
  Row,
  Col,
  Form
} from "react-bootstrap";
import NavBar from "../core/navAdmin";
import Footer from "../core/footer";
import { Link } from "react-router-dom";
import { post } from "axios";
import { showErrorToast } from "../../common/helpers/Utils";
import ELPViewApiService from "../../common/services/apiService";
import validateInput from "../../common/validations/validationAddDomain";
import constant from "../../constant";
class CorporateDocument extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      filename:'',
      isUploading: true,
      planObj: {
        pu_title_corporate: "",
        pu_doc_url_corporate: "",
      },
      errors: { pu_title_corporate: "", pu_doc_url_corporate: "" },
    };
  }
  handleSubmit = () => {
    let planObj = this.state.planObj;

    if (planObj.pu_doc_url_corporate.length > 0) {
      this.setState({
        showLoader: true,
      });

      let data = this.state.planObj;
      console.log(data);

      ELPViewApiService("exportSuperAdminCor_Docs", data)
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

      const url = constant.SERVER_URL + "elp/superadmin_uploaddocument_corporate";
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
        planObj.pu_doc_url_corporate = response.data.data.filepath;
        this.setState({
          isUploading: false,
          planObj,
          filename: fileObject.name,
        });
      }
    }
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
                  <div className="fs28 col10 mb-4">Upload Corporate Document</div> 
                  <Form>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Upload  
                      </Form.Label>

                      <Form.Group>
                        <Form.File
                          id="exampleFormControlFile1" 
                          label="Example file input"
                          className="inputTyp2" 
                          onChange={(e) =>
                            this.handleUploadPicture(e, "backgroud_img") 
                          }
                        />
                       
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

export default CorporateDocument; 








