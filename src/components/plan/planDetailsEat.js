import React, { Component } from "react";
import {
  Container
} from "react-bootstrap";
import CrossTwo from "../../assets/images/crosstwo.png";
import logopink from "../../assets/images/elplogopink.png";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import { Redirect } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import { getLocalStorage } from "../../common/helpers/Utils";
import CustomModal from "../modals/customModal";
import CommonSubScription from "./commonSubscription";  

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
    if (checkLoginStatus)
      this.handlePath()
    else
      this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  getplanlist_bycategory = (plan_type, plan_category) => {
    console.log(plan_type);
    ELPViewApiService("getplanlist_bycategory", {
      count: 100,
      offset: 1,
      plan_type,
      plan_category: plan_type === 1 ? "'" + plan_category + "'" : "",
    })
      .then((response) => {
        if (response && response.data && response.data.status === "success") {
          let data = response.data.data;
          if (plan_type === 1) {
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
                Lifestyle Smart Plans
              </div>

              <CommonSubScription 
                planEat
                settingstwo={settingstwo}
                dataDaily={this.state.dailyData}
                handleShow={this.handleShow}
                dataByCondition={this.state.conditionData}
              />
              
            </div>
          </Container>

          {/* Custom Modal BY PROPS  */}       
          <CustomModal
            modalShow={this.state.show}  
            modalHide={this.handleClose}
            modalClasName="CreateAccount planUidetails"
            headerImage={CrossTwo}
            bodyProps={[{
              divClassName: 'mb-4 mt-3 d-flex justify-content-center',
              bodyImage: logopink,
              className: 'elplogopink'
            }]}
            bodyInfo={{
              className: 'col14 fs20 fw500 mb-4',
              html: "Please login to buy our Lifestyle <br /> subscription plans"
            }}
            bodyButtonDiv="planmodalBtn mt-5 mb-4"
            buttonProps={[
              {
                type: "button",
                className: "btnTyp5 mr-5 transbtn",
                handleClick: this.handleClose,
                info: 'CANCEL'
              },
              {
                type: "button",
                className: "btnTyp5",
                handleClick: () => { this.setState({ redirectLogin: true }) },
                info: 'LOGIN'
              }
            ]}
          />
          {/* END OF MODAL */}
        </div>
        <Footer />
      </div>
    );
  }
}
export default PlanDetailsEat;
