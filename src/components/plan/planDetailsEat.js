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
import ReactStars from "react-rating-stars-component";
import { Popover } from "antd";
import {
  actionSearchListner,
  actionAddrating,
} from "../../common/redux/actions";

class PlanDetailsEat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyData: "",
      email: "",
    };
  }
  componentDidMount = () => {
    this.getplanlist_bycategory(1, this.props.match.params.name);
    setTimeout(() => {
      this.getplanlist_bycategory(2, this.props.match.params.name);
    }, 1000);
    console.log(" this.props.match", this.props.match.params.name);
  };
  getplanlist_bycategory = (plan_type, plan_category) => {
    let _this = this;
    console.log(plan_type);
    ELPViewApiService("getplanlist_bycategory", {
      count: 100,
      offset: 1,
      plan_type,
      plan_category: plan_type == 1 ? "'" + plan_category + "'" : "",
    })
      .then((response) => {
        if (response && response.data && response.data.status === "success") {
          let data = response.data.data;
          if (plan_type == 1) {
            this.setState({
              dailyData: data.plan_listing,
            });
          } else {
            this.setState({
              conditionData: data.plan_listing,
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

              <div className="PlanListOne">
                <div className="fs28 fw600 col8 mt-5 mb-4 text-center">
                  DAILY SUBSCRIPTION PLANS
                </div>
                <Slider {...settingstwo}>
                  {this.state.dailyData &&
                    this.state.dailyData.map((item) => {
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
                                    item.plan_category.map((val) => {
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
                                            : "holisticcat"  }
                                        >
                                          {val.puc_cat_name}{" "}
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
                  {this.state.conditionData &&
                    this.state.conditionData.map((item) => {
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
                                BY CONDITION
                              </div>
                            </div>
                            <div className="plantwo text-center">
                              <div className="d-flex justify-content-center mb-2">
                                <Button className="btnSave">
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
                                {/* <div className="col14 fs17 fw400 peryears">
                                  Per year
                                </div> */}
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
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
export default PlanDetailsEat;
