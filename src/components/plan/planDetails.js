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
import Requestuser from "../../assets/images/pro_img.svg";
import Ngoone from "../../assets/images/ngo1.svg";
import Ngotwo from "../../assets/images/ngo2.svg";
import Ngothree from "../../assets/images/ngo3.svg";
import Splan from "../../assets/images/blog5.png";
import Arrowright from "../../assets/images/Arrowright.png";
import { connect } from "react-redux";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import VideoIcon from "../../assets/images/videoIcon.png";
import BlogProcessFive from "../../assets/images/blog4.png";
import ReactStars from "react-rating-stars-component";
import YouTube from "react-youtube";
import { Popover } from "antd";
import {
  actionSearchListner,
  actionAddrating,
} from "../../common/redux/actions";
import validator from "validator";
import { setLocalStorage } from "../../common/helpers/Utils";

class PlanDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataByCondition: "",
      email: "",
    };
  }
  componentDidMount = () => {
    this.getplanlist_holisticbycondition();
    this.getplanlist_holisticdaily();
  };
  getplanlist_holisticbycondition = () => {
    let _this = this;
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
    let _this = this;
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
      email.length == 0
        ? "Please Enter email id"
        : !validator.isEmail(email)
        ? "Please enter a valid email"
        : "";
    console.log("errors", errors.length);
    console.log("errors", errors);
    this.setState(
      {
        errors,
      },
      () => {
        if (this.state.errors.length == 0) {
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
    this.props.history.push({
      pathname: "coming-soon",
    });
  }
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
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="ngo_services plans">
          <Container>
            <div className="ngo_listing mt-4 mb-4">
              <div className="fs28 fw600 col8 w-100 mb-5 text-center mt-4">
                SUBSCRIPTION PLANS
              </div>
              <Row>
                <Col md={5}>
                  <div className="subscriptionDetails pr-3">
                    <div className="fs36 fw600 col8">TODAY’S THE DAY.</div>
                    <div className="fs15 fw400 col14 mt-3 mb-4 pb-1">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.{" "}
                    </div>

                    <Form>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Control
                          className="inputTyp2"
                          placeholder="Enter Email Address"
                          type="email"
                          placeholder="Email address"
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
                    <Image
                      src={Splan}
                      alt="Plan"
                      className="w-100 iconVideomain"
                    />
                    <div>
                      <Image src={VideoIcon} className="iconVideo" />
                      <div class="">
                        <iframe
                          frameborder="0"
                          allowfullscreen="1"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          title="YouTube video player"
                          width="100%"
                          height="400"
                          src="https://www.youtube.com/embed/?autoplay&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1"
                          id="widget2"
                        ></iframe>
                        {/* <YouTube videoId={url} opts={opts} /> */}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className="PlanListOne">
                <div className="fs28 fw600 col8 mt-5 mb-4 text-center">
                  DAILY SUBSCRIPTION PLANS
                </div>
                <Slider {...settingstwo}>
                  {this.state.dataDaily &&
                    this.state.dataDaily.map((item) => {
                      return (
                        <div className="items">
                          <div className="planList">
                            <div className="planone">
                              <div className="offer_bg">
                                {/* <Image src={Saves} className="planeImg" /> */}
                                <div className="fs14 fw500 col64 savedata">
                                  Save {item.pl_save}%
                                </div>
                              </div>

                              <div className="fs24 fw600 col29 text-center text-uppercase">
                                {item.pl_type == 1 ? (
                                  item.plan_category.length == 3 ? (
                                    <span className="">HOLISTIC </span>
                                  ) : (
                                    item.plan_category.map((val, index) => {
                                      // return
                                      return (
                                        <span
                                          className={
                                            val.puc_cat_name == "Eat"
                                              ? "eatcat"
                                              : val.puc_cat_name == "Luv"
                                              ? "luvcat"
                                              : val.puc_cat_name == "Pray"
                                              ? "luvcat"
                                              : "holisticcat"
                                          }
                                        >
                                          {val.puc_cat_name}
                                          <span className="andClass">
                                            {item.plan_category.length == 2 &&
                                            index == 0
                                              ? " & "
                                              : ""}{" "}
                                          </span>
                                        </span>
                                      );
                                    })
                                  )
                                ) : (
                                  "BY CONDITION"
                                )}
                              </div>
                            </div>
                            <div className="plantwo text-center">
                              <div className="d-flex justify-content-center mb-2">
                                <Button className="btnSave">
                                  {/* Save {item.pl_save}% */}
                                  {item.pl_title}
                                </Button>
                              </div>
                              <div className="pt-1">
                                <div className="col14 fs16 fw400 pb-1">
                                  <del>Rs. {item.pl_price}</del>
                                </div>
                                <div className="col14 fs30 fw600 pb-1">
                                  Rs.{" "}
                                  {parseFloat(item.pl_discount_price).toFixed(
                                    2
                                  )}
                                </div>
                                <div className="col14 fs17 fw400 peryears">
                                  {item.pl_type == 1 ? "Per Day" : ""}
                                </div>
                              </div>
                            </div>
                            <div className="planpricing">
                              <div className="w-100 justify-content-between">
                                <div className="fs14 fw500 col29 mt-2 mb-3">
                                  {item.pl_desc_details}
                                </div>
                              </div>
                              <Button className="btnType1 d-block w-100 mt-4">
                                <Link to={{ pathname: "/coming-soon" }}>
                                  Buy Now
                                </Link>
                              </Button>
                              {/* <div className="fs14 col29 fw400 text-center mt-2">
                            COMING SOON
                          </div> */}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              </div>

              <div className="PlanListOne">
                <div className="fs28 fw600 col8 mt-5 pt-3 mb-4 text-center">
                  BYCONDITIONS SUBSCRIPTION PLANS
                </div>
                <Slider {...settingstwo}>
                  {this.state.dataByCondition &&
                    this.state.dataByCondition.map((item) => {
                      return (
                        <div className="items">
                          <div className="planList">
                            <div className="planone">
                              <div className="offer_bg">
                                {/* <Image src={Saves} className="planeImg" /> */}
                                <div className="fs14 fw500 col64 savedata">
                                  Save {item.pl_save}%
                                </div>
                              </div>

                              <div className="fs24 fw600 col29 text-center text-uppercase">
                                {item.pl_type == 1 ? (
                                  item.plan_category.length == 3 ? (
                                    <span className="">HOLISTIC </span>
                                  ) : (
                                    item.plan_category.map((val, index) => {
                                      // return
                                      return (
                                        <span
                                          className={
                                            val.puc_cat_name == "Eat"
                                              ? "eatcat"
                                              : val.puc_cat_name == "Luv"
                                              ? "luvcat"
                                              : val.puc_cat_name == "Pray"
                                              ? "praycat"
                                              : "holisticcat"
                                          }
                                        >
                                          {val.puc_cat_name}
                                          <span className="andClass">
                                            {item.plan_category.length == 2 &&
                                            index == 0
                                              ? " & "
                                              : ""}{" "}
                                          </span>
                                        </span>
                                      );
                                    })
                                  )
                                ) : (
                                  "BY CONDITION"
                                )}
                              </div>
                            </div>
                            <div className="plantwo text-center">
                              <div className="d-flex justify-content-center mb-2">
                                <Button className="btnSave">
                                  {/* Save {item.pl_save}% */}
                                  {item.pl_title}
                                </Button>
                              </div>
                              <div className="pt-1">
                                <div className="col14 fs16 fw400 pb-1">
                                  <del>Rs. {item.pl_price}</del>
                                </div>
                                <div className="col14 fs30 fw600 pb-1">
                                  Rs.{" "}
                                  {parseFloat(item.pl_discount_price).toFixed(
                                    2
                                  )}
                                </div>
                                <div className="col14 fs17 fw400 peryears">
                                  {item.pl_type == 1 ? "Per Day" : ""}
                                </div>
                              </div>
                            </div>
                            <div className="planpricing">
                              <div className="w-100 justify-content-between">
                                <div className="fs14 fw500 col29 mt-2 mb-3">
                                  {item.pl_desc_details}
                                </div>
                              </div>
                              <Button className="btnType1 d-block w-100 mt-4">
                                <Link to={{ pathname: "/coming-soon" }}>
                                  Buy Now
                                </Link>
                              </Button>
                              {/* <div className="fs14 col29 fw400 text-center mt-2">
                            COMING SOON
                          </div> */}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              </div>
              <div className="elpnBusiness mt-5 pt-3">
                <Row>
                  <Col md={5}>
                    <div className="subscriptionDetails p-3">
                      <div className="fs36 fw600 col8">ELNP FOR BUSINESS</div>
                      <div className="fs15 fw400 col14 mt-3 mb-2 pb-1">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.{" "}
                      </div>

                      <Form>
                        <Button
                          variant="primary"
                          className="btnTyp5 mt-3"
                          type="submit"
                        >
                          Get A Quote
                        </Button>
                        <a className="ml-3">
                          <Link to={{ pathname: `/coming-soon` }}>
                            LEARN MORE
                          </Link>
                          <Image src={Arrowright} />
                        </a>
                      </Form>
                    </div>
                  </Col>
                  <Col md={7}>
                    <div className="pr-3">
                      <div class="elpVideoblog">
                        {/* <Image src={BlogProcess} className="iconVideomain" src="" />  */}
                        <Image
                          src={Splan}
                          alt="Plan"
                          className="w-100 iconVideomain"
                        />
                        <div>
                          <Image src={VideoIcon} className="iconVideo" />
                          <div class="">
                            <iframe
                              frameborder="0"
                              allowfullscreen="1"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              title="YouTube video player"
                              width="100%"
                              height="400"
                              src="https://www.youtube.com/embed/?autoplay&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1"
                              id="widget2"
                            ></iframe>
                            {/* <YouTube videoId={url} opts={opts} /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
export default PlanDetails;
