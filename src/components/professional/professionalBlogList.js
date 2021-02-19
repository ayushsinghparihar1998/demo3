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
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Requestuserthree from "../../assets/images/pro_img3.svg";
import Aflag from "../../assets/images/australia_flag.svg";
import Iflag from "../../assets/images/india_flag.svg";
import Messagefour from "../../assets/images/msg4.svg";
import Melida from "../../assets/images/melida.svg";
import Searches from "../../assets/images/searches.svg";
import Starblank from "../../assets/images/starempty.svg";
import Starfill from "../../assets/images/starfill.svg";
import Subscribes from "../../assets/images/subscribes.svg";
import BlogProcessOne from "../../assets/images/p_blogs.svg";
import BlogProcessTwo from "../../assets/images/p_blogs2.svg";
import BlogProcessThree from "../../assets/images/p_blogs3.svg";
import BlogProcessFour from "../../assets/images/p_blogs4.svg";
import BlogProcessFive from "../../assets/images/blog4.png";
import BlogProcessSix from "../../assets/images/blog5.svg";
import BlogProcessSeven from "../../assets/images/blog6.png";
import BlogProcessNine from "../../assets/images/blogs9.png";
import VideoIcon from "../../assets/images/videoIcon.png";

import blogclock from "../../assets/images/blogclock.png";
import { connect } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { Popover } from "antd";
import ELPRxApiService from "../../common/services/apiService";
import moment from "moment";

import YouTube from "react-youtube";

class ProfessionalBlogList extends Component {
  constructor() {
    super();
    this.state = {
      blogEat: null,
      blogLuv: null,
      blogPray: null,
      blogAll: {},
      blogDetailed: null,
      latestBlogs: null,
      showDetails: false,
      offset: 6,
      subscribeMail: null,
      email: "",
      errors: "",
      tabVal: "ALL",
      url: "",
      play: false,
      vlogsAll: [],
      hideFlag: false,
    };
  }

  componentDidMount() {
    this.setState({
      tabVal: this.props.match.params.name,
    });
    console.log(this.props.match.params.name);
    if (this.props.match.params.name == "ALL") {
      console.log("ALLLLLLLLLLLLLLLL");
      this.getBlogAll();
    } else if (this.props.match.params.name == "EAT") {
      this.getBlogEat();
    } else if (this.props.match.params.name == "LUV") {
      this.getBlogLuv();
    } else if (this.props.match.params.name == "PRAY") {
      this.getBlogPray();
    } else if (this.props.match.params.name == "VLOGS") {
      this.getvlogs_list();
    } else {
      this.getBlogAll();
    }
    this.getLatestBlogs();
  }

  getLatestBlogs = () => {
    ELPRxApiService("getlatestblog", {})
      .then((res) => {
        this.setState({ latestBlogs: res.data.data.blog_list });
        console.log("latest blogs data===>", res.data.data.blog_list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getBlogEat = () => {
    this.setState({
      tabVal: "EAT",
    });
    ELPRxApiService("getblog", { offset: 1, count: 10, category: "'Eat'" })
      .then((res) => {
        this.setState({ blogEat: res.data.data.blog_list, showDetails: false });
        console.log("blog data===>", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getBlogLuv = () => {
    this.setState({
      tabVal: "LUV",
    });
    ELPRxApiService("getblog", { offset: 1, count: 10, category: "'Luv'" })
      .then((res) => {
        this.setState({ blogLuv: res.data.data.blog_list, showDetails: false });
        console.log("blog data===>", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getBlogPray = () => {
    this.setState({
      tabVal: "PRAY",
    });
    ELPRxApiService("getblog", { offset: 1, count: 10, category: "'Pray'" })
      .then((res) => {
        this.setState({
          blogPray: res.data.data.blog_list,
          showDetails: false,
        });
        console.log("blog data===>", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getfeaturedvlogs_list = () => {
    this.setState({
      tabVal: "VLOGS",
    });
    ELPRxApiService("getfeaturedvlogs_list", {})
      .then((res) => {
        console.log("blog getfeaturedvlogs_list===>", res.data.data);
        let url: "";
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = res.data.data.vlogs_featured_listing[0].vl_video_url.match(
          regExp
        );
        if (match && match[2].length == 11) {
          console.log("match[2]", match[2]);
          url = match[2];
        } else {
          //error
        }
        this.setState(
          {
            blogFeatured: res.data.data.vlogs_featured_listing[0],
            showDetails: false,
            url,
          },
          () => {}
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getlatest_vlogslist = () => {
    this.setState({
      tabVal: "VLOGS",
    });
    ELPRxApiService("getlatest_vlogslist", {})
      .then((res) => {
        this.setState({
          blogLatest: res.data.data,
          showDetails: false,
        });
        console.log("blog getlatest_vlogslist===>", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getvlogs_list = (offset) => {
    this.setState({
      tabVal: "VLOGS",
    });
    ELPRxApiService("getvlogs_list", { offset, count: 10 })
      .then((res) => {
        if (res.data && res.data.data) {
          let vlogsAll = this.state.vlogsAll.concat(
            res.data.data.vlogs_listing
          );
          this.setState(
            {
              vlogsAll,
              showDetails: false,
              offset,
              hideFlag: false,
            },
            () => {
              console.log(
                "vlogsAllvlogsAllvlogsAllvlogsAll",
                this.state.vlogsAll
              );
              console.log(
                "vlogsAll + res.data.data.vlogs_listing",
                this.state.vlogsAll.concat(res.data.data.vlogs_listing)
              );
            }
          );
          console.log(
            "blog blog getvlogs_list===>",
            res.data.data.vlogs_listing
          );
        } else {
          if (res.data.status == "error") {
            this.setState({
              hideFlag: true,
            });
          }
        }
        this.getlatest_vlogslist();
        this.getfeaturedvlogs_list();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getBlogAll = () => {
    this.setState({
      tabVal: "ALL",
    });
    ELPRxApiService("getblog", {
      offset: 1,
      count: 10,
      category: "'Eat','Luv','Pray'",
    })
      .then((res) => {
        this.setState({
          blogAll: res.data.data.blog_list[0],
          showDetails: false,
        });
        console.log("blog data===>", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getBlogdetails = (name, blog_id) => {
    // this.props.history.push("/blogsDetail/" + blog_id);
    this.props.history.push({
      pathname: "/blogsDetail/" + blog_id,
      state: { type: name },
    });
  };

  subscribeNewsLatterHandler = async () => {
    ELPRxApiService("subscribe", { email: this.state.subscribeMail })
      .then((res) => {
        this.setState({ subscribeMail: "" });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ subscribeMail: "" });
      });
  };

  setPlay = (flag, vl_video_url) => {
    this.setState({
      // url: flag ? vl_video_url + "?autoplay=1" : vl_video_url,
      play: flag,
    });
  };
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: this.state.play ? 1 : "",
      },
    };
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout pt-4">
          <Container>
            <div className="processBlog pb-5 w-100">
              <div className="text-center fs28 fw500 col64 mb-2">Blog</div>
              <div className="mxw-50 text-center col14 fs16 fw300 m-auto pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </div>

              <div className="blogMain ListsUI">
                <Tabs
                  onSelect={(k) =>
                    k === "EAT"
                      ? this.getBlogEat()
                      : k === "LUV"
                      ? this.getBlogLuv()
                      : k === "PRAY"
                      ? this.getBlogPray()
                      : k === "VLOGS"
                      ? this.getvlogs_list(1)
                      : this.getBlogAll()
                  }
                  // defaultActiveKey=''
                  activeKey={this.state.tabVal}
                  id="uncontrolled-tab-example"
                >
                  <Tab value="ALL" eventKey="ALL" title="All">
                    <div className="featuredTab">
                      <Row>
                        <Col md={7}>
                          <Row>
                            <Col md={12}>
                              <div className="professionalBlogs">
                                <div
                                  onClick={() =>
                                    this.getBlogdetails(
                                      "blog",
                                      this.state.blogAll.bl_id
                                    )
                                  }
                                  className="fw600 fs20 col64 mb-4"
                                >
                                  {this.state.blogAll.bl_title}
                                </div>
                                <Image
                                  onClick={() =>
                                    this.getBlogdetails(
                                      "blog",
                                      this.state.blogAll.bl_id
                                    )
                                  }
                                  src={this.state.blogAll.bl_image}
                                  className="w-100"
                                />
                                <div className="blogClocks mb-3 mt-3">
                                  {/* <Image src={BlogProcessSix} className="wSet-50 mr-3" /> */}
                                  <div>
                                    <span className="fs18 fw400 col14">
                                      Written by{" "}
                                      <span className="col8">
                                        {this.state.blogAll.bl_written_by}
                                      </span>{" "}
                                    </span>
                                    {/* <span className="ml-3">
                                                                            <Image src={blogclock} className="wSet-20 mr-2" />{moment(this.state.blogAll.bl_time).calendar()}</span> */}
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>

                          {/* {this.state.blogAll && this.state.offset < this.state.blogAll.length ?
                                                        <div className="text-center mt-5 mb-5">
                                                            <Button className="btnTyp12" onClick={() => { this.setState({ offset: this.state.offset + 6 }) }}> show more </Button>
                                                        </div> : null
                                                    } */}
                        </Col>

                        <Col md={5}>
                          <div className="fs20 fw600 col64 mb-4 pb-3">
                            LATEST
                          </div>
                          <div className="mb-4 pb-2">
                            {this.state.latestBlogs &&
                              this.state.latestBlogs.map((data, i) =>
                                i !== 0 ? (
                                  <div className="blogrightSide">
                                    <Row>
                                      <Col md={9}>
                                        <div
                                          className=""
                                          onClick={() =>
                                            this.getBlogdetails(
                                              "blog",
                                              data.bl_id
                                            )
                                          }
                                        >
                                          <div className="col64 fs17 fw500">
                                            {data.bl_title}
                                          </div>
                                          <div className="col14 fs16 fw300 mt-3">
                                            {moment(data.bl_time).calendar()}
                                          </div>
                                        </div>
                                      </Col>
                                      <Col md={3}>
                                        <Image
                                          src={data.bl_image}
                                          className="w-100"
                                        />
                                      </Col>
                                    </Row>
                                  </div>
                                ) : null
                              )}
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Tab>

                  <Tab eventKey="EAT" title="EAT">
                    <div className="featuredTab">
                      <Row>
                        {/* <Col md={7}> */}
                        <Row>
                          {this.state.blogEat &&
                            this.state.blogEat.map((data, i) =>
                              this.state.offset > i ? (
                                <Col md={6} className="mb-4">
                                  <div
                                    onClick={() =>
                                      this.getBlogdetails("blog", data.bl_id)
                                    }
                                    className="fw600 fs20 col64 mb-3"
                                  >
                                    {data.bl_title}
                                  </div>
                                  <Image
                                    src={data.bl_image}
                                    className="w-100"
                                    onClick={() =>
                                      this.getBlogdetails("blog", data.bl_id)
                                    }
                                  />
                                  <div className="blogClocks mb-3 mt-3">
                                    {/* <Image src={BlogProcessSix} className="wSet-50 mr-3" /> */}
                                    <div>
                                      <span className="fs14 fw400 col14">
                                        Written by{" "}
                                        <span className="col8">
                                          {data.bl_written_by}
                                        </span>{" "}
                                      </span>{" "}
                                      <br />
                                      {/* <span>
                                                                        <Image src={blogclock} className="wSet-20 mr-2" />{moment(data.bl_time).calendar()}</span> */}
                                    </div>
                                  </div>
                                </Col>
                              ) : null
                            )}
                        </Row>
                        {this.state.blogEat &&
                        this.state.offset < this.state.blogEat.length ? (
                          <div className="text-center mt-5 mb-5">
                            <Button
                              className="btnTyp12"
                              onClick={() => {
                                this.setState({
                                  offset: this.state.offset + 6,
                                });
                              }}
                            >
                              {" "}
                              show more{" "}
                            </Button>
                          </div>
                        ) : null}
                        {/* </Col> */}
                      </Row>
                      {/* <div className="mt-4 mb-4 border_blog"></div> */}
                    </div>
                  </Tab>
                  <Tab eventKey="LUV" title="LUV">
                    <div className="coverageTab">
                      <Row>
                        {/* <Col md={7}> */}
                        <Row>
                          {this.state.blogLuv &&
                            this.state.blogLuv.map((data, i) =>
                              this.state.offset > i ? (
                                <Col md={6} className="mb-4">
                                  <div
                                    onClick={() =>
                                      this.getBlogdetails("blog", data.bl_id)
                                    }
                                    className="fw600 fs20 col64 mb-3"
                                  >
                                    {data.bl_title}
                                  </div>
                                  <Image
                                    src={data.bl_image}
                                    className="w-100"
                                    onClick={() =>
                                      this.getBlogdetails("blog", data.bl_id)
                                    }
                                  />
                                  <div className="blogClocks mb-3 mt-3">
                                    {/* <Image src={BlogProcessSix} className="wSet-50 mr-3" /> */}
                                    <div>
                                      <span className="fs14 fw400 col14">
                                        Written by{" "}
                                        <span className="col8">
                                          {data.bl_written_by}
                                        </span>{" "}
                                      </span>{" "}
                                      <br />
                                      {/* <span> */}
                                      {/* <Image src={blogclock} className="wSet-20 mr-2" /> {moment(data.bl_time).calendar()}</span> */}
                                    </div>
                                  </div>
                                </Col>
                              ) : null
                            )}
                        </Row>
                        {this.state.blogLuv &&
                        this.state.offset < this.state.blogLuv.length ? (
                          <div className="text-center mt-5 mb-5">
                            <Button
                              className="btnTyp12"
                              onClick={() => {
                                this.setState({
                                  offset: this.state.offset + 6,
                                });
                              }}
                            >
                              {" "}
                              show more{" "}
                            </Button>
                          </div>
                        ) : null}
                        {/* </Col> */}
                      </Row>
                    </div>
                  </Tab>
                  <Tab eventKey="PRAY" title="PRAY">
                    <div className="coverageTab">
                      <Row>
                        {/* <Col md={7}> */}
                        <Row>
                          {this.state.blogPray &&
                            this.state.blogPray.map((data, i) =>
                              this.state.offset > i ? (
                                <Col md={6} className="mb-4">
                                  <div
                                    onClick={() =>
                                      this.getBlogdetails("blog", data.bl_id)
                                    }
                                    className="fw600 fs20 col64 mb-3"
                                  >
                                    {data.bl_title}
                                  </div>
                                  <Image
                                    src={data.bl_image}
                                    className="w-100"
                                    onClick={() =>
                                      this.getBlogdetails("blog", data.bl_id)
                                    }
                                  />
                                  <div className="blogClocks mb-3 mt-3">
                                    {/* <Image src={BlogProcessSix} className="wSet-50 mr-3" /> */}
                                    <div>
                                      <span className="fs14 fw400 col14">
                                        Written by{" "}
                                        <span className="col8">
                                          {data.bl_written_by}
                                        </span>{" "}
                                      </span>{" "}
                                      <br />
                                      {/* <span>
                                                                                    <Image src={blogclock} className="wSet-20 mr-2" />
                                                                                    {moment(data.bl_time).calendar()}
                                                                                </span> */}
                                    </div>
                                  </div>
                                </Col>
                              ) : null
                            )}
                        </Row>
                        {this.state.blogPray &&
                        this.state.offset < this.state.blogPray.length ? (
                          <div className="text-center mt-5 mb-5">
                            <Button
                              className="btnTyp12"
                              onClick={() => {
                                this.setState({
                                  offset: this.state.offset + 6,
                                });
                              }}
                            >
                              {" "}
                              show more{" "}
                            </Button>
                          </div>
                        ) : null}
                        {/* </Col> */}
                      </Row>
                    </div>
                  </Tab>

                  <Tab eventKey="VLOGS" title="VLOGS">
                    <div className="featuredTab vlogTabs">  
                      <Row>
                        <Col md={7}>
                          <Row>
                            <Col md={12}>
                              <div className="professionalBlogs">
                                <div className="fw600 fs20 col8 mb-4">
                                  FEATURED
                                </div>

                                <div className="elpVideoblog">
                                  {this.state.play ? (
                                    ""
                                  ) : (
                                    <Image
                                      src={
                                        this.state.blogFeatured &&
                                        this.state.blogFeatured.vl_thumbnail_url
                                      }
                                      className="iconVideomain"
                                    />
                                  )}
                                  <div>
                                    {this.state.play ? (
                                      ""
                                    ) : (
                                      <Image
                                        src={VideoIcon}
                                        className="iconVideo"
                                        onClick={() =>
                                          this.setPlay(
                                            true,
                                            this.state.blogFeatured &&
                                              this.state.blogFeatured
                                                .vl_video_url
                                          )
                                        }
                                      />
                                    )}
                                    <YouTube
                                      videoId={this.state.url}
                                      opts={opts}
                                      // onReady={(e) => this._onReady(e)}
                                    />
                                    {/* <iframe
                                      width="100%"
                                      height="400"
                                      src={
                                        this.state.blogFeatured &&
                                        this.state.blogFeatured.vl_video_url
                                      }
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowfullscreen
                                    ></iframe> */}
                                  </div>
                                </div>

                                <div className="blogClocks mb-3 mt-3">
                                  <div>
                                    <div className="position-relative">
                                      <div className="col64 fs18 fw500">
                                        {this.state.blogFeatured &&
                                          this.state.blogFeatured.vl_title}
                                      </div>
                                      <div
                                        className="col14 fs15 fw400 mt-1"
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            this.state.blogFeatured &&
                                            this.state.blogFeatured.vl_desc,
                                        }}
                                      ></div>
                                      <div className="col14 fs16 fw400 mt-2">
                                        {moment(
                                          this.state.blogFeatured &&
                                            this.state.blogFeatured.vl_datetime
                                        ).format("dddd MMM Do YYYY")}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>

                        <Col md={5}>
                          <div className="fs20 fw600 col8 mb-4">
                            LATEST
                          </div>
                          <div className="mb-4 pb-2">
                            {this.state.blogLatest &&
                              this.state.blogLatest.map(
                                (item, i) => (
                                  // i !== 0 ? (
                                  <div className="blogrightSide">
                                    <Row>
                                      <Col md={9}>
                                        <div
                                          className=""
                                          onClick={() =>
                                            this.getBlogdetails(
                                              "vlog",
                                              item.vl_id
                                            )
                                          }
                                        >
                                          {/* vl_created_by: "59"
vl_datetime: "2021-02-17 18:32:41"
vl_desc: "<p>hii info about elnp</p>"
vl_id: "7"
vl_is_featured: "2"
vl_status: "1"
vl_thumbnail_url: "https://staging.eatluvnpray.org/elp/vlogimage/59/c23810ace0bdd8ec7bdad99f7c4bcb6a7048d6f3.jpg"
vl_title: "about elnp"
vl_video_url:  */}
                                          <div className="col64 fs17 fw500">
                                            {item.vl_title}
                                          </div>
                                          <div
                                            className="col14 fs15 fw400 mt-1"
                                            dangerouslySetInnerHTML={{
                                              __html: item.vl_desc,
                                            }}
                                          >
                                            {/* {item.vl_desc} */}
                                          </div>
                                          <div className="col14 fs16 fw400 mt-2">
                                            {/* {item.vl_datetime} */}
                                            {moment(item.vl_datetime).format(
                                              "dddd MMM Do YYYY"
                                            )}
                                          </div>
                                        </div>
                                      </Col>
                                      <Col md={3}>
                                        <div className="blogVideoIcon"> 
                                              <Image
                                              src={VideoIcon}
                                              className="iconVideo"  
                                            />
                                            <Image
                                              src={item.vl_thumbnail_url}
                                              className="w-100"
                                              onClick={() =>
                                                this.getBlogdetails(
                                                  "vlog",
                                                  item.vl_id
                                                )
                                              }
                                            />
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                )
                                //   ) : null
                              )}
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="fs20 fw600 col8 mb-4 pb-3">
                            All
                          </div>
                        </Col>

                        {this.state.vlogsAll &&
                          this.state.vlogsAll.map((item) => {
                            return (
                              <Col md={6} className="mb-4">
                                <Row className="innerVlog"> 
                                  <Col md={7}>
                                    <div className="">
                                      <div
                                        className="col64 fs17 fw500"
                                        onClick={() =>
                                          this.getBlogdetails(
                                            "vlog",
                                            item.vl_id
                                          )
                                        }
                                      >
                                        {item.vl_title}
                                      </div>
                                      <div
                                        className="col14 fs15 fw400 mt-1"
                                        dangerouslySetInnerHTML={{
                                          __html: item.vl_desc,
                                        }}
                                      ></div> 
                                      <div className="col14 fs16 fw400 mt-2">
                                        {moment(item.vl_datetime).format(
                                          "dddd MMM Do YYYY"
                                        )}
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md={5}>
                                      <div className="blogVideoIcon"> 
                                          <Image
                                          src={VideoIcon}
                                          className="iconVideo"  
                                        />
                                        <Image
                                          src={item.vl_thumbnail_url}
                                          className="w-100"
                                          onClick={() =>
                                            this.getBlogdetails("vlog", item.vl_id)
                                          }
                                        />
                                        </div>
                                  </Col>
                                </Row>
                              </Col>
                            );
                          })}
                      </Row>
                      <div className="text-center mt-5 mb-3"> 
                        <Button
                          type="button"
                          className="btnType22 fw500"
                          onClick={() =>
                            this.getvlogs_list(this.state.offset + 1)
                          }
                          disabled={this.state.hideFlag}
                        >
                          SHOW MORE
                        </Button>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
                <div className="subscribe_here2 eatBlog mt-5 mb-5">
                  <Container>
                    <Row>
                      <Col md={5} lg={5}>
                        <div className="subscribe_left">
                          <div>
                            <div className="fs36 col64 fw600 w-100">
                              Subscribe Here
                            </div>
                            <div className="col14 fs20 fw300 w-100">
                              Get updates about Eat Luv N Pray
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={5} lg={5}>
                        <div className="subscribe_form">
                          <Form>
                            <Form.Group
                              className="fgroups"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                onChange={(e) => {
                                  this.setState({
                                    subscribeMail: e.target.value,
                                  });
                                }}
                                value={this.state.subscribeMail}
                                type="email"
                                placeholder="Email address"
                                className="inputTyp1 fs20"
                                name="email"
                              />
                            </Form.Group>
                          </Form>
                        </div>
                      </Col>
                      <Col md={2} lg={2}>
                        <div className="mt-2">
                          <Button
                            variant="primary"
                            onClick={this.subscribeNewsLatterHandler}
                            type="submit"
                            className="btnTyp2"
                          >
                            SUBSCRIBE
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
export default ProfessionalBlogList;
