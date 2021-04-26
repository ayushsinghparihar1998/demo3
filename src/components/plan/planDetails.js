import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Form
} from "react-bootstrap"; 
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Splan from "../../assets/images/blog5.png";
import Arrowright from "../../assets/images/Arrowright.png";
import { Link, Redirect } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import VideoIcon from "../../assets/images/videoIcon.png";
import DownloadTwo from "../../assets/images/downloadtwo.png";

import CrossTwo from "../../assets/images/crosstwo.png";
import logopink from "../../assets/images/elplogopink.png";

import YouTube from "react-youtube";
import validator from "validator";
import { getLocalStorage } from "../../common/helpers/Utils";
import CustomModal from "../modals/customModal";
import CommonSubScription from "./commonSubscription";

class PlanDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataByCondition: "",
      email: "",
      play: false,
      play1: false,
      url: "",
      show: false,
      redirectLogin: false,
      show3: false,
      show4: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
    this.handleShow2 = this.handleShow2.bind(this);
  }
  handleShow2 = () => {
    const checkLoginStatus = (getLocalStorage("customerInfo") || getLocalStorage("userInfo"))
    if (checkLoginStatus)
      this.handlePath()
    else
      this.setState({ show4: true });
  };

  handleClose2 = () => {
    this.setState({ show4: false });
  };

  
  componentDidMount = () => {
    this.getplanlist_holisticbycondition();
    this.getplanlist_holisticdaily();

    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    var match = "https://www.youtube.com/embed/GXS3c4ANQP8".match(regExp);
    if (match && match[2].length === 11) {
      console.log("match[2]", match[2]);
      this.setState({
        url: match[2],
      });
    } else {
      //error
    }
  };

  handleShow = () => {
    const checkLoginStatus = (getLocalStorage("customerInfo") || getLocalStorage("userInfo"))
    if (checkLoginStatus)
      this.handlePath()
    else
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  getplanlist_holisticbycondition = () => {
    // usersubscriber,

    ELPViewApiService("getplanlist_holisticbycondition", {
      count: 100,
      offset: "",
    })
      .then((response) => {
        if (response && response.data && response.data.status === "success") {
          let data = response.data.data;
          this.setState({
            dataByCondition: data.plan_listing,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getplanlist_holisticdaily = () => {
    // usersubscriber,

    ELPViewApiService("getplanlist_holisticdaily", { count: 100, offset: "" })
      .then((response) => {
        if (response && response.data && response.data.status === "success") {
          let data = response.data.data;
          this.setState({
            dataDaily: data.plan_listing,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmit = () => {
    let errors = this.state.errors;
    let email = this.state.email;
    errors =
      email.length === 0
        ? "Please enter email id"
        : !validator.isEmail(email)
          ? "Please enter a valid email id"
          : "";
    console.log("errors", errors.length);
    console.log("errors", errors);
    this.setState(
      {
        errors,
      },
      () => {
        if (this.state.errors.length === 0) {
          this.handleLogin(3);
        } else {
        }
      }
    );
  };
  handleLogin(roleType) {     
    this.props.history.push({
      pathname: "login",
      state: { roleType: roleType, emailmember: this.state.email },
    });
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    // let email = this.state.email;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state.email);
      }
    );
  };
  handlePath() {
    this.props.history.push("/coming-soon");
  }
  setplay = (flag) => {
    this.setState({
      play: flag,
    });
  };
  setplay1 = (flag) => {
    this.setState({
      play1: flag,
    });
  };

  render() { 
    const settingstwo = { 
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const opts = { 
      height: "390",
      width: "640",
      playerVars: {
        autoplay: this.state.play ? 1 : "",
      },
    };
    const opts1 = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: this.state.play1 ? 1 : "",
      },
    };
    if (this.state.redirectLogin) {
      return <Redirect to={{
        pathname: '/login',
        state: { roleType: 3 }
      }} />;
    }
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="ngo_services plans">
          <Container>
            <div className="ngo_listing mt-4 mb-4">
              <div className="fs28 fw600 col8 w-100 mb-5 text-center mt-4">
                  Lifestyle Smart Plans
              </div>
              <Row>
                <Col md={5}>
                  <div className="subscriptionDetails pr-3">
                    <div className="fs28 fw600 col8">DISCOVER A HEALTHIER YOU</div> 
                    <div className="fs15 fw400 col14 mt-3 mb-4 pb-1">
                      Your journey towards holistic wellness starts here. Get on one of our personalized programs. Check out our offerings and features for each subscription plan.{" "}
                    </div>

                    <Form>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Control
                          className="inputTyp2"
                          placeholder="Enter Email Address"
                          type="email"
                          name="email"
                          onChange={(e) => this.handleChange(e)}
                          value={this.state.email}
                          maxLength={100}
                        />
                        <div className="col27 fs14 fw400 mt-2 error">
                          {this.state.errors}
                        </div>
                      </Form.Group>
                      <Button
                        variant="primary"
                        className="btnTyp5 mt-3"
                        type="button"
                        onClick={() => this.handleSubmit()}
                      >
                        CONTINUE
                      </Button>
                    </Form>
                  </div>
                </Col>
                <Col md={7}>
                  <div class="elpVideoblog">
                    {/* <Image src={BlogProcess} className="iconVideomain" src="" />  */}
                    {!this.state.play ? (
                      <>
                        <Image
                          src={Splan}
                          alt="Plan"
                          className="w-100 iconVideomain"
                        />
                        <Image
                          src={VideoIcon}
                          className="iconVideo"
                          onClick={() => this.setplay(true)}
                        />
                      </>
                    ) : (
                        <div class="">
                          <YouTube videoId={this.state.url} opts={opts} />
                        </div>
                      )}
                  </div>
                </Col>
              </Row>

              <CommonSubScription 
                planHolistic
                settingstwo={settingstwo}
                dataDaily={this.state.dataDaily}
                dataByCondition={this.state.dataByCondition}
                handleShow={this.handleShow}
              />
              
              <div className="elpnBusiness mt-5 pt-3">
                <Row>
                  <Col md={5}>
                    <div className="subscriptionDetails p-3">
                      <div className="fs36 fw600 col8">ELNP FOR BUSINESS</div>
                      <div className="fs15 fw400 col14 mt-3 mb-2 pb-1">
                        A Holistic approach to enhance employee wellbeing and productivity. {" "}
                      </div>

                      <Form>
                        <Button
                          variant="primary"
                          className="btnTyp5 mt-3"
                          type="button"
                          onClick={() => this.handleShow2()}
                        >
                          Get A Quote   
                        </Button>
                        <span className="ml-3 mt-1"> 
                          <Link className="btnType30" to={{ pathname: `/coming-soon` }}>
                            LEARN MORE
                            <Image src={Arrowright} className="ml-1" />  
                          </Link> 
                          
                        </span>
                        <div className="mt-4">
                            <Button type="button" className="btnTyp12 downActive">   
                              <Image src={DownloadTwo} alt="Download" className="dl2 mr-2" />Download Corporate brochure
                            </Button>                             
                        </div>
                      </Form>
                    </div>
                  </Col>
                  <Col md={7}> 
                    <div className="pr-3">
                      <div class="elpVideoblog">
                        {!this.state.play1 ? (
                          <>
                            <Image
                              src={Splan}
                              alt="Plan"
                              className="w-100 iconVideomain"
                            />

                            <Image
                              src={VideoIcon}
                              className="iconVideo"
                              onClick={() => this.setplay1(true)}
                            />
                          </>
                        ) : (
                            <div class="">
                              <YouTube videoId={this.state.url} opts={opts1} />
                            </div>
                          )}
                      </div>{" "}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>      
          
          {/* Custom Modal BY PROPS  */}
          <CustomModal 
            modalShow={this.state.show}
            modalHide={this.handleClose}
            modalClasName="CreateAccount planUidetails"
            headerImage={CrossTwo}
            bodyProps={[{
              divClassName:'mb-4 mt-3 d-flex justify-content-center',
              bodyImage:logopink,
              className:'elplogopink'
            }]}
            bodyInfo={{
              className : 'col14 fs20 fw500 mb-4',
              html:"Please login to buy our Lifestyle <br /> subscription plans"
            }}
            bodyButtonDiv="planmodalBtn mt-5 mb-4"
            buttonProps = {[
              {
                type:"button",
                className:"btnTyp5 mr-5 transbtn" ,
                handleClick: this.handleClose,
                info:'CANCEL'
              },
              {
                type:"button",
                className:"btnTyp5" ,
                handleClick: ()=>{this.setState({ redirectLogin: true })},
                info:'LOGIN'
              }
            ]}
          /> 

          <CustomModal 
            modalShow={this.state.show4}
            modalHide={this.handleClose2}
            modalClasName="CreateAccount planUidetails"
            headerImage={CrossTwo}
            bodyProps={[{
              divClassName:'mb-4 mt-3 d-flex justify-content-center',
              bodyImage:logopink,
              className:'elplogopink'
            }]}
            bodyInfo={{
              className : 'col14 fs20 fw500 mb-4',
              html:"Please contact us at <br /> contact@eatluvnpray.com to get a quote <br /> for your organisation"
            }}
          />

          {/* END OF MODAL  */}  

        </div>
        <Footer />
      </div>
    );
  }
}
export default PlanDetails; 
