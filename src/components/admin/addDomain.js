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
import { Link } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import validateInput from "../../common/validations/validationAddDomain";

class CorporateMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: "",
      paymentList: [],
      pageno: 1,
      records: 10,
      totalCount: "",

      domainObj: {
        cd_domain_name: "",
        cd_audio_min: "",
        cd_video_min: "",
        cd_audio_status: "",
        cd_video_status: "",
      },

      count: 10,
      offset: 1,
      errors: {},
    };
  }
  componentDidMount = () => {
    console.log(this.props.match.params.id);
    console.log(this.props);
    if (this.props.match.params.id > 0) {
      this.getDomainDetails();
    }
  };
  getDomainDetails = () => {
    let data = {
      cd_id: this.props.match.params.id,
    };

    ELPViewApiService("superadmingetcorporatedomaindetailsbyid", data).then(
      (result) => {
        console.log("result", result);
        let domainObj = {};
        if (result && result.status === 200) {
          domainObj =
            result && result.data && result.data.data
              ? result.data.data.domain_details_list[0]
              : [];
        }
        domainObj.cd_audio_min = "" + domainObj.cd_audio_min / 60;
        domainObj.cd_video_min = "" + domainObj.cd_video_min / 60;
        this.setState(
          {
            domainObj,
          },
          () => {
            console.log("domainObj", this.state.domainObj);
          }
        );
      }
    );
  };
  handleSubmit = () => {
    if (this.isValid()) {
      this.setState({
        showLoader: true,
      });

      let domainObj = this.state.domainObj;
      let data = {
        cd_domain_name: domainObj.cd_domain_name,
        cd_audio_min: domainObj.cd_audio_min * 60,
        cd_video_min: domainObj.cd_video_min * 60,
        cd_audio_status:
          domainObj.cd_audio_status == "Active" ||
          domainObj.cd_audio_status == "1"
            ? '1'
            : "",
        cd_video_status:
          domainObj.cd_video_status == "Active" ||
          domainObj.cd_video_status == "1"
            ? '1'
            : "",
      };
      console.log(data);

      if (this.props.match.params.id > 0) {
        data.cd_id = this.props.match.params.id;
        data.cd_domain_name = "";
      }
      ELPViewApiService(
        this.props.match.params.id == 0
          ? "superadminaddcorporatedomain"
          : "superadmineditcorporatedomain",
        data
      )
        .then((result) => {
          if (result && result.data && result.data.status === "success") {
            this.props.history.push("/adminlistener");
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
  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    let domainObj = this.state.domainObj;
    domainObj[name] =
      name == "cd_audio_min" || name == "cd_video_min"
        ? value.replace(/[^0-9]/g, "")
        : value.trim();
    this.setState(
      {
        domainObj,
      },
      () => {
        console.log(this.state.domainObj);
      }
    );
  };
  isValid() {
    const { errors, isValid } = validateInput(this.state.domainObj);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }
    return isValid;
  }
  render() {
    const { errors, domainObj } = this.state;
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
                          <Link to={{ pathname: `/adminlistener` }}>Back</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={9} className="pl-1">
                <div className="corporateMember">
                  <div className="fs28 col10 mb-4">
                    {this.props.match.params.id > 0
                      ? "Modify Domain"
                      : "Add Domain"}
                  </div>
                  <Form>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Domain address
                      </Form.Label>

                      <Form.Control
                        type="email"
                        placeholder="Domain Name"
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="cd_domain_name"
                        disabled={this.props.match.params.id > 0}
                        value={domainObj.cd_domain_name}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={100}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.cd_domain_name}
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Total Audio (minutes)
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        placeholder="Audio"
                        id="outlined-email"
                        variant="outlined"
                        name="cd_audio_min"
                        value={domainObj.cd_audio_min}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={5}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.cd_audio_min}
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Total Video (minutes)
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        placeholder="Video"
                        id="outlined-email"
                        variant="outlined"
                        name="cd_video_min"
                        value={domainObj.cd_video_min}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={5}
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.cd_video_min}
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Audio Status
                      </Form.Label>
                      <Form.Control
                        as="select"
                        className="selectTyp1"
                        name="cd_audio_status"
                        onChange={(e) => this.handleChange(e)}
                        value={domainObj.cd_audio_status}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>{" "}
                      </Form.Control>
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.cd_audio_status}
                      </div>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Video Status
                      </Form.Label>
                      <Form.Control
                        as="select"
                        className="selectTyp1"
                        name="cd_video_status"
                        onChange={(e) => this.handleChange(e)}
                        value={domainObj.cd_video_status}
                        // defaultValue={domainObj.cd_video_status}
                      >
                        <option disabled value="">
                          Select
                        </option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>{" "}
                      </Form.Control>
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.cd_video_status}
                      </div>
                    </Form.Group>

                    <Button
                      variant="primary btnTyp5 mt-4"
                      type="button"
                      onClick={() => this.handleSubmit()}
                    >
                      {this.props.match.params.id > 0 ? "UPDATE" : "ADD"}
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

export default CorporateMember;
