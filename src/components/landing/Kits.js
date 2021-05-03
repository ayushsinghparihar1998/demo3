import React, { Component } from "react";
import {
  Button,
  Image,
  Container
} from "react-bootstrap";
import Slider from "react-slick";
import ELPViewApiService from "../../common/services/apiService";
import { Link } from "react-router-dom";
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
                          className={`planList  ${Math.round(index % 3) === 0
                            ? "red-bg "
                            : Math.round(index % 3) === 1
                              ? "blue-bg "
                              : ""
                            }`}
                        >
                          <div className="planBorder">
                            <div className="profile_set">
                              <Image 
                                src={
                                  item?.kits_image_array?.length ? item?.kits_image_array[0]?.ki_image_upload : item.kt_image_url
                                } alt="" 
                              />
                            </div>
                            <div className="planpricing">
                              <div className="text-center fw500 fs16 col64 text-uppercase borderSs">
                                {item.kt_name}
                                {
                                  item.month_array.map((itemMonth) =>
                                    <div className="col64 fs24 fw300">
                                      <strong className="fw600">
                                        <span className="mr-3 fs20 fw400 col14">
                                          <del><i className="fa fa-inr"></i> {itemMonth.kp_price}</del>
                                        </span>
                                        <i className="fa fa-inr"></i> {itemMonth.kp_discount}
                                      </strong>
                                      <span className="fs20"> / {itemMonth.kp_max_range_month} month</span>
                                    </div>
                                  )
                                }

                              </div>

                              <div className="emotion_ul">
                                <div className="fs13 col11 fw400" dangerouslySetInnerHTML={{__html:item.kt_desc}}/>

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
