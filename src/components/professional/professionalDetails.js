import React, { Component } from "react";
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
import Profileban from "../../assets/images/profile_ban.svg";
import Profileimg from "../../assets/images/profile_img.svg";
import Usaflag from "../../assets/images/india_flag.svg";
import warningS from "../../assets/images/w_signal.svg";
import { connect } from "react-redux";
import { actionGetProfile } from "../../common/redux/actions";
import * as moment from "moment";
import { getLocalStorage } from "../../common/helpers/Utils";
import CONSTANTS from "../../common/helpers/Constants";
import NavBarAdmin from "../core/navAdmin";
import Ritikaimg from "../../assets/images/Ritika.png";
import ELPViewApiService from "../../common/services/apiService";

class Myprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proffDetail: {},
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.id);
    console.log(this.props.match.params.type);
    this.getProffDetails(
      this.props.match.params.type == "admin"
        ? "superadminprofessionaluserdetail"
        : "corporateprofessionaluserdetail"
    );
  }
  getProffDetails = (type) => {
    let data = {
      userid: this.props.match.params.id,
    };

    ELPViewApiService(type, data).then((result) => {
      console.log("result", result);
      let proffDetail = [];
      if (result && result.status === 200) {
        proffDetail =
          result && result.data && result.data.data ? result.data.data[0] : [];
      }
      this.setState(
        {
          proffDetail,
        },
        () => {
          console.log("ProffDetail", this.state.proffDetail);
        }
      );
    });
  };
  render() {
    let proffDetail = this.state.proffDetail;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout pt-4 pb-5">
          <Container>
            <Row>
              <div className="myprofile profiledetails">
                <div className="detailone">
                  <Row>
                    <Col md={4}>
                      <div className="leftprofile">
                        <Image src={proffDetail.u_image} alt="" />
                      </div>
                    </Col>                    
                    <Col md={8}>
                      <div className="rightprofile">
                        <div className="fs24 col3 fw600 mb-1">
                          {proffDetail.u_name}
                        </div>

                        <div className="col3 fw500 mt-1 mb-2">
                          Work Experience:
                          <span className="col14 fw400 ml-2">
                            {proffDetail.u_work_experience}
                          </span>
                        </div>

                        <div className="col3 fw500 mt-1 mb-2">
                          Language:
                          <span className="col14 fw400 ml-2">
                            {proffDetail.u_lang}
                          </span>
                        </div>

                        <div className="col3 fw500 mt-1 mb-2">
                          DOB:
                          <span className="col14 fw400 ml-2">
                            {proffDetail.u_birthdate}
                          </span>
                        </div>

                         <div className="d-flex mt-4">
                          <Button
                            variant="primary"
                            type="submit"
                            className="btnTyp5 mr-3"
                          >
                            {proffDetail.email}
                          </Button>
                          {this.props.match.params.type == "admin" ? (
                            ""
                          ) : (
                            <>
                              <Button
                                variant="primary"
                                type="submit"
                                className="btnTyp5 mr-3"
                              >
                                Call
                              </Button>

                              <Button
                                variant="primary"
                                type="submit"
                                className="btnTyp5"
                              >
                                BOOK A SESSION
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="detailtwo">
                  <Col md={12}>
                    <div className="fs32 col3 text-center fw500 mb-4">
                      Education
                    </div>
                    <div className="boxexone">{proffDetail.u_education}</div>
                  </Col>
                </div>

                <div className="detailthree">
                  <Col md={12}>
                    <div className="fs32 col3 fw600 text-center mb-4">
                      Biography
                    </div>
                    {/* <div className="fs17 col3 fw500 mb-2">
                      Which bucket would your therapy style fit into primarily?
                    </div> */}
                    <div className="fs15 col14 fw400 mb-3">
                      {proffDetail.u_bio}
                    </div>

                    {/* <div className="fs15 col14 fw400 mb-3">
                      Therapy helps to alter self-defeating narratives into
                      powerful ones filled with acceptance and compassion. For
                      long-lasting alterations, it helps the individual realize
                      where these self-defeating narratives are coming from,
                      which often involves exploring the past and the influence
                      of relationships. Then the work would involve unlearning
                      much of this conditioning and replacing old beliefs with
                      more realistic, compassionate and empowering ones.
                    </div> */}
                  </Col>
                </div>
              </div>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Myprofile;
