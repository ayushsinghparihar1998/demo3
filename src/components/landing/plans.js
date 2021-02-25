import React, { Component } from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Button,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { getLocalStorage } from "../../common/helpers/Utils";
import { connect } from "react-redux";
import validationSubscribe from "../../common/validations/validationSubscribe";
import { actionSubscribe } from "../../common/redux/actions";
import Slider from "react-slick";
import ELPViewApiService from "../../common/services/apiService";
import { Link } from "react-router-dom";
import Saves from "../../assets/images/saves.png";
import Squares from "../../assets/images/squares.png";

class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workData: "",
      email: "",
    };
  }
  componentDidMount = () => {
    this.get_planlist();
  };
  get_planlist = () => {
    let _this = this;
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
    return (
      <div className="plans mt-4 mb-4">
        <Container>
          <div className="fs40 col8 fw600 w-100 mb-5 text-center">
            Subscription Plans
          </div>
          {/* <div className="text-center fw300 fs22 col14 mb-4 pb-4">
            What people say about us. Here are comments from individuals who
            have visited Counselor.
          </div> */}
          {/* start end */}

          <div>
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

                          <div className="fs22 fw600 col29 text-center text-uppercase">
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
                              {/* Save {item.pl_save}% */} {item.pl_title}
                            </Button>
                          </div>
                          <div className="pt-1">
                            <div className="col14 fs16 fw400 pb-1">
                              <del>Rs. {item.pl_price}</del>
                            </div>
                            <div className="col14 fs30 fw600 pb-1">
                              Rs.{" "}
                              {parseFloat(item.pl_discount_price).toFixed(2)}
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
                          <ul className="PlanAbouts">
                            <li>
                              <span className="sleft col11 fw400">
                                <Image src={Squares} alt="sqaress" />
                                It is a long established fact
                              </span>
                            </li>
                            <li>
                              <span className="sleft col11 fw400">
                                <Image src={Squares} alt="sqaress" />
                                It is a long established fact
                              </span>
                            </li>
                            <li>
                              <span className="sleft col11 fw400">
                                <Image src={Squares} alt="sqaress" />
                                It is a long established fact
                              </span>
                            </li>
                            <li>
                              <span className="sleft col11 fw400">
                                <Image src={Squares} alt="sqaress" />
                                It is a long established fact
                              </span>
                            </li>
                          </ul>
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
              {/* <div className="items">
                            <div className="planList">
                                <div className="planone">
                                    <div className="fs24 fw600 col29 text-center">STANDARD</div>  
                                </div>
                                <div className="plantwo text-center"> 
                                    <div className="d-flex justify-content-center mb-3">
                                        <Button className="btnSave">Save 4%</Button>  
                                    </div> 
                                    <div className="mt-4 pt-2">     
                                        <div className="col14 fs17 fw400"><del>Rs. 6,299</del></div>    
                                        <div className="col29 fs32 fw600">Rs. 5,999</div> 
                                        <div className="col14 fs17 fw400">Per year</div> 
                                    </div>
                                </div>
                                <div className="planpricing"> 
                                    <div className="w-100 justify-content-between"> 
                                         <div className="fs14 fw500 col29 mt-2 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</div> 
                                         <ul>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                             <li>It is a long established fact </li>
                                         </ul>
                                    </div>
                                    <Button className="btnType1 d-block w-100 mt-4">Buy Now</Button> 
                                    {/* <div className="fs14 col29 fw400 text-center mt-2">COMING SOON</div>  */}
              {/* </div>
                            </div>
                        </div> */}
            </Slider>
          </div>
        </Container>
      </div>
    );
  }
}
export default Plans;
