import React, { Component } from "react";
import { connect } from "react-redux";

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
import { Link } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import validateInput from "../../common/validations/validationAddDomain";
import { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";
import EditNew from "../../assets/images/editViews.png";
import moment from "moment";

import constant from "../../constant";
import VideoIcon from "../../assets/images/videoIcon.png";
import YouTube from "react-youtube";
class VlogDetail extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      play: false,
      vlogsAll: [],
      hideFlag: false,
      blogDetail: {},
    };
  }

  componentDidMount = () => {
    console.log(this.props.match.params.id);
    console.log(this.props);
    this._getBlogDetailHandler();
  };

  _getBlogDetailHandler = async () => {
    console.log(this.props.history.location.state.type);

    let data = {
      vl_id: this.props.match.params.id,
    };
    try {
      let response = await ELPRxApiService("getvlogs_details", data);
      let url = "";
      let blogDetail = {};
      if (response.data.status == "error") {
        this.props.history.push({
          pathname: "/blogs/ALL/",
        });
      } else {
        console.log(" detail response", response);
        blogDetail = response.data.data[0];

        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = response.data.data[0].vl_video_url.match(regExp);
        if (match && match[2].length == 11) {
          console.log("match[2]", match[2]);
          url = match[2];
          console.log(url);
        } else {
          //error
        }
      }

      this.setState({
        url,
        blogDetail,
        play: false,
      });
    } catch (err) {
      console.log("err");
      console.log(err);
    }
  };

  setplay = (flag) => {
    this.setState({
      play: flag,
    });
  };

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: this.state.play ? 1 : "",
      },
    };

    const { blogDetail, play } = this.state;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="ngo_services media_details">
          <Container>
            <div className="ngo_listing mt-4 mb-4">
              <div className="col1 fw600 fs22 text-center w-100">
                {this.props.history.location.state.type == "blog"
                  ? blogDetail.bl_title
                  : blogDetail.vl_title}
              </div>
              <hr className="ngohr" />
              <Row className="mt-4">
                <Col lg={12}>
                  <div className="ngo_details mt-2">
                    <>
                      <div className="elpVideoblog">
                        {!play ? (
                          <>
                            <Image
                              src={blogDetail && blogDetail.vl_thumbnail_url}
                              alt=""
                              className="w-100 iconVideomain"
                            />
                            <Image
                              src={VideoIcon}
                              className="iconVideo"
                              onClick={() => this.setplay(true)}
                            />
                          </>
                        ) : (
                          <YouTube videoId={this.state.url} opts={opts} />
                        )}
                      </div>
                    </>

                    <div className="pt-3 pb-3">
                      <div className="col14 fs14 fw400 pt-1">
                        {moment(blogDetail.vl_datetime).format(
                          "dddd MMM Do YYYY"
                        )}
                      </div>
                      <div
                        className="fs14 col28 fw300 pt-3 line_txt"
                        dangerouslySetInnerHTML={{
                          __html: blogDetail.vl_desc,
                        }}
                      ></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default VlogDetail;
