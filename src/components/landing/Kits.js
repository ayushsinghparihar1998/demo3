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
import Emotionals from "../../assets/images/emotionals.png";
import loveFill from "../../assets/images/loveFill.png";
import feelHappy from "../../assets/images/feelHappy.png";
import Squares from '../../assets/images/squares.png';

class Kits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workData: "",
      email: "",
    };
  }
  componentDidMount = () => {
    this.getkits_list();
  };
  getkits_list = () => {
    let _this = this;
    // usersubscriber,

    ELPViewApiService("getkits_list", { count: 100, offset: "" })
      .then((response) => {
        if (response && response.data && response.data.status === "success") {
          let data = response.data.data;
          this.setState({
            workData: data.kits_listing,
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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
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
    const totalPrice = () => {

    }
    return (
      <div className="plans kits mt-4 mb-4">
        <Container>
          <div className="fs40 col8 fw600 w-100 mb-5 text-center">
            ELNP Kits
          </div>
          <div>
            <Slider {...settings}>
              {this.state.workData &&
                this.state.workData.map((item, index) => {
                  return (
                    <div>
                      <div className="items-Kits">
                        <div
                          className={`planList  ${Math.round(index % 3) == 0
                            ? "red-bg "
                            : Math.round(index % 3) === 1
                              ? "blue-bg "
                              : ""
                            }`}
                        >
                          <div className="planBorder">
                            <div className="profile_set">
                              <Image src={item.kt_image_url} alt="" />
                            </div>
                            <div className="planpricing">
                              <div className="text-center fw500 fs16 col64 text-uppercase borderSs">
                                {item.kt_name}
                                <div className="fw600 fs28 col11 mt-1">
                                  <svg style={{margin:'5px'}} width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.8749 4.98428C14.7812 4.89054 14.6614 4.84375 14.5157 4.84375H11.844C11.6668 3.97945 11.3334 3.2292 10.8439 2.59382H14.4843C14.6304 2.59382 14.7499 2.54698 14.8439 2.45345C14.9371 2.35976 14.984 2.23985 14.984 2.09406V0.499983C14.984 0.354081 14.9372 0.234394 14.8439 0.140593C14.7498 0.0470102 14.6303 0 14.4842 0H1.48443C1.33852 0 1.21884 0.0470102 1.12504 0.140538C1.03151 0.23434 0.984497 0.354027 0.984497 0.499928V2.57801C0.984497 2.7134 1.03397 2.83057 1.13292 2.92952C1.23186 3.02846 1.34903 3.07794 1.48443 3.07794H3.75005C5.94782 3.07794 7.34368 3.6663 7.93735 4.84347H1.48443C1.33852 4.84347 1.21867 4.89026 1.12504 4.98401C1.03151 5.07787 0.984497 5.1975 0.984497 5.3434V6.93726C0.984497 7.08305 1.03129 7.2029 1.12504 7.29643C1.21884 7.39029 1.33874 7.43697 1.48443 7.43697H8.15642C7.92723 8.29136 7.39332 8.94228 6.55468 9.39022C5.716 9.83821 4.60948 10.0622 3.23442 10.0622H1.48443C1.34903 10.0622 1.23186 10.1117 1.13292 10.2106C1.03392 10.3096 0.984497 10.4268 0.984497 10.5621V12.5467C0.984497 12.6823 1.03129 12.7968 1.12504 12.8905C3.12491 15.0154 5.71874 17.9891 8.90618 21.8123C9.00004 21.9374 9.13018 21.9998 9.29687 21.9998H12.3436C12.5626 21.9998 12.7137 21.9063 12.7968 21.7184C12.901 21.5309 12.8805 21.3538 12.7343 21.1871C9.69298 17.4579 7.3022 14.6663 5.5626 12.8122C7.33345 12.6039 8.77095 12.0309 9.87517 11.0936C10.9792 10.1562 11.651 8.93719 11.8908 7.43724H14.5157C14.6614 7.43724 14.7813 7.39051 14.8749 7.2967C14.9687 7.20318 15.0157 7.08332 15.0157 6.93753V5.34384C15.0157 5.19777 14.9687 5.07809 14.8749 4.98428Z" fill="#383838" />
                                  </svg>
                                  {
                                    item.kits_services &&
                                    item.kits_services.reduce(function (tot, val) {
                                      return tot + parseInt(val.ks_discounted_price);
                                    }, 0)
                                  }
                                </div>
                              </div>

                              <div className="emotion_ul">
                                <div className="fs13 col11 fw400">
                                  {item.kt_desc}
                                </div>
                                <ul>
                                  {item.kits_services &&
                                    item.kits_services.map((val) => {
                                      return (
                                        <li>
                                          <span className="sleft col11 fw400">
                                            <Image src={Squares} alt="sqaress" />
                                            {val.ks_services}
                                          </span>
                                          <span className="sright col11 fs16 fw500">
                                            <del className="fs14 fw400 mr-2">
                                              Rs. {val.ks_actual_price}
                                            </del>{" "}
                                            Rs. {val.ks_discounted_price}
                                          </span>
                                        </li>
                                      );
                                    })}
                                </ul>
                                <Button className="btnType1 d-block w-100 mt-4">
                                  <Link to={{ pathname: "/coming-soon" }}>
                                    Buy Now
                                  </Link>{" "}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </Container>
      </div>
    );
  }
}
export default Kits;
