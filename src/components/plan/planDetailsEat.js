import React, { Component } from "react";
import {
  Button,
  Container,
  Image,
  Modal
} from "react-bootstrap";
import CrossTwo from "../../assets/images/crosstwo.png";
import logosmain from "../../assets/images/logos.png";
import logopink from "../../assets/images/elplogopink.png";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Slider from "react-slick";
import { Redirect } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import { getLocalStorage } from "../../common/helpers/Utils";

class PlanDetailsEat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyData: "",
      email: "",
      show: false,
      redirectLogin: false,
    };
  }
  componentDidMount = () => {
    console.log(" this.props.match", this.props.match.params.name);
    this.getplanlist_bycategory(1, this.props.match.params.name);
    setTimeout(() => {
      this.getplanlist_bycategory(2, this.props.match.params.name);
    }, 1000);
    console.log(" this.props.match", this.props.match.params.name);
  };

  handleShow = () => {
    const checkLoginStatus = (getLocalStorage("customerInfo") || getLocalStorage("userInfo"))
    if(checkLoginStatus)
    this.handlePath()
    else
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
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
    this.props.history.push("/coming-soon");
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
                LIFESTYLE SUBSCRIPTION PLANS
              </div>

              <div className="PlanListOne">
                <div className="fs28 fw600 col8 mt-5 mb-4 text-center">
                  DAILY SUBSCRIPTION PLANS
                </div>
                <Slider {...settingstwo}>
                  {this.state.dailyData &&
                    this.state.dailyData.map((item) => {
                      return item.plan_category.length < 3 ? (
                        <div className="items">
                          <div className="planList">
                            <div className="planone">
                              <div className="offer_bg">
                                {/* <Image src={Saves} className="planeImg" /> */}
                                <div className="fs14 fw500 col64 savedata">
                                  Save {item.pl_save}%
                                </div>
                              </div>
                              <div className="fs24 fw600 col29 text-center text-capitalize"> 
                                {
                                  item.pl_type == 1
                                  ? 
                                    item.plan_category.length == 3 ? null
                                    : item.plan_category.map((val, index) => 
                                        <span
                                          className={
                                            val.puc_cat_name == "Eat"
                                              ? "eatcat"
                                              : val.puc_cat_name == "Luv"
                                                ? "luvcat"
                                                : "praycat"
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
                                      )
                                  : "By Condition"
                                }
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
                              <Button onClick={this.handleShow} className="btnType1 d-block w-100 mt-4">
                                {/* <Link to={{ pathname: "/coming-soon" }}> */}
                                  Buy Now
                                {/* </Link> */}
                              </Button>
                              {/* <div className="fs14 col29 fw400 text-center mt-2">
                            COMING SOON
                          </div> */}
                            </div>
                          </div>
                        </div>
                      ) : null;
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

                              <div className="fs24 fw600 col29 text-center text-capitalize"> 
                                   By Condition
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
                              <Button onClick={this.handleShow} className="btnType1 d-block w-100 mt-4">
                                {/* <Link to={{ pathname: "/coming-soon" }}> */}
                                  Buy Now
                                {/* </Link> */}
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

          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            className="CreateAccount planUidetails"
          >
            <Modal.Header>
              <Button type="button" onClick={this.handleClose} class="close">
                <Image src={CrossTwo} alt="alert" className="alertCross" />
              </Button>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-4 mt-3 d-flex justify-content-center">
                {/* <Image src={Alerts} alt="alert" className="" /> */}
                <Image src={logosmain} alt="" className="logofirst" />
                <Image src={logopink} alt="" className="elplogopink" />
              </div>
              {/* <div className="fw600 fs28 mb-3">Alert!</div> */}
              <div className="col14 fs20 fw500 mb-4">
                Please login first to buy our <br />
              subscription plans
              </div>
              <div className="planmodalBtn mt-5 mb-4">
                <Button 
                  type="button"
                  className="btnTyp5 mr-5 transbtn"
                  onClick={this.handleClose}
                >
                  CANCEL
                </Button>
                <Button
                  type="button"
                  className="btnTyp5"
                  onClick={() => { this.setState({ redirectLogin: true }) }}
                >
                  LOGIN
                  </Button>
              </div>
            </Modal.Body>
          </Modal>

        </div>
        <Footer />
      </div>
    );
  }
}
export default PlanDetailsEat;
