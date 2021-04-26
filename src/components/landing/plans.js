import React, { Component } from "react";
import {
  Button,
  Image,
  Container,
  Modal
} from "react-bootstrap";
import { getLocalStorage } from "../../common/helpers/Utils";
import Slider from "react-slick";
import ELPViewApiService from "../../common/services/apiService";
import { Redirect } from "react-router-dom";
import CrossTwo from "../../assets/images/crosstwo.png";
import logopink from "../../assets/images/elplogopink.png";
import PlanSelection from "../plan/planSelection";

class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workData: "",
      email: "",
      show: false,
      show3: false,
      redirectLogin: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
  handleShow = (data) => {
    let type;
    if (getLocalStorage("userInfo")) {
      type = "listner";
    } else if (getLocalStorage("customerInfo")) {
      type = "customer";
    } else if (getLocalStorage("userInfoProff")) {
      type = "professional";
    }
    if (type) {
      this.handlePath();
    }
    else
      this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  componentDidMount = () => {
    this.get_planlist();
  };
  get_planlist = () => {
    // usersubscriber,

    ELPViewApiService("get_planlist", { count: 100, offset: "" })
      .then((response) => {
        if (response && response.data && response.data.status === "success") {
          let data = response.data.data;
          this.setState({
            workData: data.plan_listing,
          });
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
      nav: true,
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
      <div className="plans mt-4 mb-4">
        <Container>
          <div className="fs40 col8 fw600 w-100 mb-5 text-center">
            Lifestyle Smart Plans
          </div>
          <div>
            {console.log("plans", this.state.workData)}
            <Slider {...settingstwo}>
              {this.state.workData &&
                this.state.workData.map((item) => {
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

                          <div className="fs22 fw600 col29 text-center text-capitalize">
                            {item.pl_type === "1" ? (
                              item.plan_category.length === 3 ? (
                                <span className="holisticcat">Holistic</span>
                              ) : (
                                  item.plan_category.map((val, index) => {
                                    // return
                                    return (
                                      <span
                                        className={
                                          val.puc_cat_name === "Eat"
                                            ? "eatcat"
                                            : val.puc_cat_name === "Luv"
                                              ? "luvcat"
                                              : "praycat"
                                        }
                                      >
                                        {val.puc_cat_name}
                                        <span className="andClass">
                                          {item.plan_category.length === 2 &&
                                            index === 0
                                            ? " & "
                                            : ""}{" "}
                                        </span>
                                      </span>
                                    );
                                  })
                                )
                            ) : (
                                "By Condition"
                              )}
                          </div>
                        </div>
                        {
                          item?.plan_month_price && item.plan_month_price.length > 0 &&
                          <PlanSelection
                            item={item}
                            handleShow={this.handleShow.bind(this)}
                            plan_array={item.plan_month_price}
                          />
                        }
                      </div>
                    </div>
                  );
                })}
            </Slider>
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
              <Image src={logopink} alt="" className="elplogopink" />
            </div>
            <div className="col14 fs20 fw500 mb-4">
              Please login to buy our Lifestyle <br /> subscription plans
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
    );
  }
}
export default Plans;






