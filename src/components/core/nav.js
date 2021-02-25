import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Image,
  Modal,
  Row,
  Dropdown,
  Col,
} from "react-bootstrap";
import { Link, NavLink, Router } from "react-router-dom";
import logosmain from "../../assets/images/logos.png";
import logo from "../../assets/images/elplogos.png";
import logopink from "../../assets/images/elplogopink.png";
import insta from "../../assets/images/insta.svg";
import { ToastContainer, toast } from "react-toastify";
import { actionLogout, actionLogoutSuccess } from "../../common/redux/actions";
import fb from "../../assets/images/fb.svg";
import twit from "../../assets/images/twit.svg";
import linkedin from "../../assets/images/linkedin.svg";
import Crossbtn from "../../assets/images/blue_cross.svg";
import Mailicon from "../../assets/images/mail_icon.svg";
import Bellicon from "../../assets/images/bell_icons.svg";
import Msgbox from "../../assets/images/msg_box.svg";
import Masklayer from "../../assets/images/mask_layer.png";
import Signup from "../jsx/listenersignup/signup";
import ProfessionalSignup from "../signup/professionalSignup";
import UserSignup from "../signup/userSignup";
import { getLocalStorage, setLocalStorage } from "../../common/helpers/Utils";

import socketClass from "../../common/utility/socketClass";
import Polygonimg from "../../assets/images/Polygon.png";

import Userprofiles from "../../assets/images/user_profiles.svg";
import Usersettings from "../../assets/images/user_settings.svg";
import Userenables from "../../assets/images/user_enables.svg";
import Userlogouts from "../../assets/images/user_logouts.svg";
import ELPRxApiService from "../../common/services/apiService";
import CONSTANTS from "../../common/helpers/Constants";
import constant from "../../constant";
import CallDisconnectConfirmation from "../modals/CallDisconnectConfirmation";

const socket = socketClass.getSocket();

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isCorporate: false,
      isNotification: false,
      show: false,
      show2: false,
      show3: false,
      email_varified: false,
      profileImage: null,
      notificationData: [],
      notificationCount: null,
      mediaLinks: [
        {
          href:
            "https://www.onlymyhealth.com/feeling-too-depressed-to-do-anything-here-are-some-simple-ways-to-get-your-life-back-on-track-1601550995",
          label: "Only my Help",
        },
        {
          href:
            "http://bwwellbeingworld.businessworld.in/article/Lend-me-thy-ears-Let-s-talk-about-listening-this-Mental-Health-Day/10-10-2020-329866/",
          label: "Lend me thy ears",
        },
        {
          href:
            "http://bwwellbeingworld.businessworld.in/article/Speak-your-heart-out-with-India-s-largest-virtual-listening-platform-Eat-Luv-N-Pray-/21-10-2020-333999/",
          label: "Speak with your heart ",
        },
        {
          href:
            "https://www.santabanta.com/bollywood/148145/speak-your-heart-out-with-indias-largest-virtual-listening-platform-eat-luv-n-pray",
          label: "Santabanta",
        },
        {
          href:
            "https://m.dailyhunt.in/news/india/english/santabanta+english-epaper-santaen/speak+your+heart+out+with+india+s+largest+virtual+listening+platform+eat+luv+n+pray-newsid-n223741478",
          label: "Dailyhunt",
        },
        {
          href:
            "https://healthvision.in/speak-your-heart-out-with-eat-luv-n-pray/",
          label: "Health vision",
        },
        {
          href:
            "https://www.cityairnews.com/content/speak-your-heart-out-with-indias-largest-virtual-listening-platform-eat-luv-n-pray/",
          label: "City Air News",
        },
        {
          href:
            "http://mediabulletins.com/business-world/speak-your-heart-out-with-indias-largest-virtual-listening-platform-eat-luv-n-pray/",
          label: "Media Bulletins",
        },
        {
          href: "https://ajmernama.com/national/349538/",
          label: "Ajmernama",
        },
        {
          href:
            "http://businessnewsthisweek.com/business/speak-your-heart-out-with-indias-largest-virtual-listening-platform-eat-luv-n-pray/",
          label: "Business news this week",
        },
      ],
    };
  }

  componentDidMount() {
    console.log("ASASDASD ROLE", getLocalStorage("customerInfo"));
    if (getLocalStorage("customerInfo")) {
      console.log("EMITE +>>>>>", getLocalStorage("customerInfo").u_id);
      socket.emit(
        "getBadgeCount",
        { user_id: getLocalStorage("customerInfo").u_id },
        (data) => {
          console.log("EMITE +>>>>>", data);
        }
      );
    }

    if (getLocalStorage("userInfo")) {
      socket.on("changeUserOnlineStatus", (data) => {
        // console.log('----------------------- >> changeUserOnlineStatus << -----------------', data)
      });
    }

    getLocalStorage("customerInfo") &&
      ELPRxApiService("getnotificationlisting", {
        user_id: getLocalStorage("customerInfo").u_id,
      })
        .then((res) => {
          console.log("notification data===>", res.data.data);
          this.setState({ notificationData: res.data.data });
        })
        .catch((err) => {
          console.log(err);
        });

    console.log(getLocalStorage("customerInfo"));
    // listner_dashboard
    // customer_dashboard
    // professional_dashboard
    this.callDisconnectConfirmation = React.createRef();
    let type;
    let profileImage;
    if (getLocalStorage("userInfo")) {
      type = "listner";
    } else if (getLocalStorage("customerInfo")) {
      type = "customer";
      console.log(
        "getLocalStorage('customerInfo')",
        getLocalStorage("customerInfo")
      );
    } else if (getLocalStorage("userInfoProff")) {
      type = "professional";
    }
    if (type) {
      ELPRxApiService(type + "DashboardDetail")
        .then((res) => {
          console.log("res ============>", res);
          this.setState({
            email_varified:
              res.data.data.dashboard_list.u_verified === "1" ? false : true,
            notification_count: res.data.data.dashboard_list.u_badge_count,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    let elem = document.getElementsByClassName("profile_icon")[0];
    if (elem) {
      elem.children[0].style["background-image"] = "none";
      ELPRxApiService("getprofile")
        .then((res) => {
          console.log("res === .. image", res);
          console.log(document.getElementsByClassName("profile_icon"));
          elem.children[0].style[
            "background-image"
          ] = `url(${res.data.data.profile_list.u_image})`;
          setTimeout(() => {
            elem = document.getElementsByClassName("profile_icon")[0];
            if (elem) {
              elem.children[0].style[
                "background-image"
              ] = `url(${res.data.data.profile_list.u_image})`;
            }
          }, 1000);
          console.log(elem);
          this.setState({
            profileImage: res.data.data.profile_list.u_image,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // let data = getLocalStorage("userInfo")
    //   ? getLocalStorage("userInfo")
    //   : getLocalStorage("customerInfo")
    //     ? getLocalStorage("customerInfo")
    //     : getLocalStorage("userInfoProff");
    // console.log("data", data);

    // if (data) {
    //   this.setState(
    //     {
    //       email_varified: data.u_verified === 1 ? false : true,
    //     },
    //     () => {
    //       console.log("email_varified", this.state.email_varified);
    //     }
    //   );
    // }
  }

  _SwitchToCorporate = async () => {
    try {
      let response = await ELPRxApiService("switchtocorporatemember");

      if (response.data.status !== "error") {
        let customerInfo = getLocalStorage("customerInfo");
        customerInfo.u_role_id = constant.roles.CORPORATE_CUSTOMER;
        setLocalStorage("customerInfo", customerInfo);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleModal = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: !this.state.show });
  };
  handleModal2 = () => {
    this.setState({ show2: true });
  };

  handleClose2 = () => {
    this.setState({ show2: false });
  };

  handleModal3 = () => {
    this.setState({ show3: true });
  };

  handleClose3 = () => {
    this.setState({ show3: false });
  };

  handleLogoutAdmin = () => {
    let data = {};
    this.props
      .actionLogout(data)
      .then((result) => {
        if (result && result.status === 200) {
          this.props
            .actionLogoutSuccess(data)
            .then((result) => {
              this.props.history.push({
                pathname: "adminlogin",
                state: { roleType: 4 },
              });

              localStorage.clear();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleLogout = () => {
    // let roleType = getLocalStorage('customerInfo') ? 3 : getLocalStorage('userInfo') ? 1
    // : getLocalStorage('userInfoProff') ? 2 : CONSTANTS.ROLES.LISTNER;

    let roleType = "";
    if (getLocalStorage("customerInfo")) {
      roleType = CONSTANTS.ROLES.USER;
    } else if (getLocalStorage("userInfo")) {
      roleType = CONSTANTS.ROLES.LISTNER;
    } else if (getLocalStorage("userInfoProff")) {
      roleType = CONSTANTS.ROLES.PROFESSIONAL;
    }

    let data = {};
    this.props
      .actionLogout(data)
      .then((result) => {
        if (result && result.status === 200) {
          this.props
            .actionLogoutSuccess(data)
            .then((result) => {
              socketClass.disconnect();
              this.props.history.push({
                pathname: "/",
                // state: { roleType: roleType },
              });

              localStorage.clear();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  goToLoginPage = () => {
    this.props.history.push({
      pathname: "login",
      state: { roleType: this.state.roleType },
    });
    //  this.props.history.push({ pathname: '/login', state: { roleType: this.state.roleType } });
  };

  handleLogin(roleType) {
    this.props.history.replace({
      pathname: `/login`,
      state: { roleType: roleType },
    });
  }

  handleGet = () => {
    this.setState({
      show: false,
      show3: false,
    });
  };

  goToLoginPage = () => {
    this.props.history.push({
      pathname: "login",
      state: { roleType: this.state.roleType },
    });
    //  this.props.history.push({ pathname: '/login', state: { roleType: this.state.roleType } });
  };

  handleGet = () => {
    this.setState({
      show: false,
      show3: false,
    });
  };

  _resendVerificationMail = async () => {
    try {
      const response = await ELPRxApiService("resendVerificationMail");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  verifyInCallNavigation = (path) => {
    switch (this.props.match.path) {
      case "/audiocall/:id":
        this.callDisconnectConfirmation.current.openModal(path);
        break;
      case "/callin":
        this.callDisconnectConfirmation.current.openModal(path);
        break;
      case "/videocall/:id":
        this.callDisconnectConfirmation.current.openModal(path);
        break;
      default:
        this.props.history.push(path);
        break;
    }
  };
  _readAllNotificationHandler = async () => {
    try {
      const response = await ELPRxApiService("readAllNotifications");
      this.setState({
        notification_count: 0,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleModal = () => {
    this.setState({ show: true });
    console.log("hello");
  };
  handleClose = () => {
    this.setState({ show: !this.state.show });
  };
  handleGet = () => {
    this.setState({
      show: false,
      show3: false,
    });
  };
  changepath = (path, backValue) => {
    console.log(path);
    if (backValue) {
      setLocalStorage("blog_category", backValue);
    }
    this.props.history.push(path);
  };
  render() {
    return (
      <div className="mj_nav">
        {this.state.email_varified ? (
          <div className="verifystwo">
            <span className="fs18 fw500 col26">
              Please verify your email to start using our services.
              <span
                className="email_link pl-1"
                onClick={() => {
                  this._resendVerificationMail();
                }}
                style={{ cursor: "pointer" }}
              >
                <a>Resend verification email.</a>
              </span>
            </span>
          </div>
        ) : (
          ""
        )}
        <CallDisconnectConfirmation
          ref={this.callDisconnectConfirmation}
          history={this.props.history}
          disconnectPayload={this.props.disconnectPayload}
        />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
        />
        {/* Same as */}
        <ToastContainer />
        <Navbar bg="" expand="lg">
          <a
            onClick={() => {
              this.verifyInCallNavigation("/");
            }}
            className="nav-link navbar-brand"
          >
            {/* <Image src={logo} alt="" /> Eat Luv N Pray */}
            <Image src={logosmain} alt="" />
            <Image src={logopink} alt="" className="elplogopink" />
            <Image src={logo} alt="" className="elplogo" />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {getLocalStorage("userInfoAdmin") ? (
              <Nav className="ml-auto">
                <Form inline>
                  <span>
                    <div onClick={this.handleLogoutAdmin} className="btnType1">
                      Logout
                    </div>
                  </span>
                </Form>
              </Nav>
            ) : (
              <Nav className="ml-auto">
                {getLocalStorage("userInfo") ||
                getLocalStorage("userInfoProff") ||
                getLocalStorage("customerInfo")
                  ? [
                      getLocalStorage("customerInfo")
                        ? [
                            getLocalStorage("customerInfo") &&
                            getLocalStorage("customerInfo").u_role_id ===
                              constant.roles.CORPORATE_CUSTOMER ? (
                              <a
                                onClick={() =>
                                  this.verifyInCallNavigation(
                                    "/listener-browse"
                                  )
                                }
                                className="nav-link"
                              >
                                Browse Listener
                              </a>
                            ) : null,

                            getLocalStorage("customerInfo") &&
                            getLocalStorage("customerInfo").u_role_id ===
                              constant.roles.CORPORATE_CUSTOMER ? (
                              <a
                                onClick={() =>
                                  this.verifyInCallNavigation(
                                    "/professionalListing"
                                  )
                                }
                                className="nav-link"
                              >
                                Professional Help
                              </a>
                            ) : null,

                            // <NavLink to="/listenerSearch" className="nav-link">
                            //   Listener Search
                            //   </NavLink>,
                          ]
                        : "",

                      <a
                        onClick={() => this.verifyInCallNavigation("/")}
                        className="nav-link"
                      >
                        Dashboard
                      </a>,
                      <a
                        onClick={() => this.verifyInCallNavigation("/campaign")}
                        className="nav-link donatebtns"
                      >
                        Donate
                      </a>,
                      <a
                        onClick={() =>
                          this.verifyInCallNavigation("/assessmentTests/EAT")
                        }
                        className="nav-link donatebtns"
                      >
                        Assessment Tests
                      </a>,

                      <NavDropdown
                        title="Learn more"
                        id="basic-nav-dropdown-lm"
                      >
                        <NavDropdown.Item href={"/blogs/ALL"}>
                          BLOGS
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/press"}>
                          PRESS
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/about"}>
                          About Us
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/faq"}>FAQ</NavDropdown.Item>
                      </NavDropdown>,
                      ,
                      getLocalStorage("userInfoProff") ||
                      getLocalStorage("userInfo")
                        ? [
                            <a
                              onClick={() =>
                                this.verifyInCallNavigation("/calendar")
                              }
                              className="nav-link"
                            >
                              My Schedule
                            </a>,
                          ]
                        : "",
                    ]
                  : [
                      <NavDropdown
                        title="EAT"
                        id="basic-nav-dropdown"
                        className="eatDrop"
                      >
                        <NavDropdown.Item onClick={this.handleModal}>
                          TALK NOW
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/planlist/Eat"}>
                          SUBSCRIPTION PLANS
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          onClick={() => this.changepath("/blogs/EAT", "EAT")}
                        >
                          BLOGS
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/assessmentTests/EAT"}>
                          ASSESSMENT TESTS
                        </NavDropdown.Item>
                      </NavDropdown>,
                      <NavDropdown
                        title="LUV"
                        id="basic-nav-dropdown2"
                        className="eatDrop"
                      >
                        <NavDropdown.Item onClick={this.handleModal}>
                          TALK NOW
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/planlist/Luv"}>
                          SUBSCRIPTION PLANS
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.changepath("/blogs/LUV", "LUV")}>
                          BLOGS
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/assessmentTests/HOLISTIC"}>
                          ASSESSMENT TESTS
                        </NavDropdown.Item>{" "}
                      </NavDropdown>,
                      <NavDropdown
                        title="PRAY"
                        id="basic-nav-dropdown3"
                        className="eatDrop"
                      >
                        <NavDropdown.Item onClick={this.handleModal}>
                          TALK NOW
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/planlist/Pray"}>
                          SUBSCRIPTION PLANS
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.changepath("/blogs/PRAY", "PRAY")}>
                          BLOGS
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/assessmentTests/PRAY"}>
                          ASSESSMENT TESTS
                        </NavDropdown.Item>
                      </NavDropdown>,
                      <NavDropdown
                        title="ELNP(Holistic)"
                        id="basic-nav-dropdown4"
                        className="Holistics"
                      >
                        <NavDropdown.Item onClick={this.handleModal}>
                          TALK NOW
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/planlistholistic"}>
                          SUBSCRIPTION PLANS
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.changepath("/blogs/ALL", "ALL")}>
                          BLOGS
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/assessmentTests/HOLISTIC"}>
                          ASSESSMENT TESTS
                        </NavDropdown.Item>
                      </NavDropdown>,
                      <NavDropdown
                        title="HELP SOMEONE"
                        id="basic-nav-dropdown5"
                      >
                        <NavDropdown.Item href={"/becomeListener"}>
                          DONATE TIME
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/campaign"}>
                          DONATE MONEY
                        </NavDropdown.Item>
                      </NavDropdown>,

                      <NavDropdown
                        title="Learn more"
                        id="basic-nav-dropdown-lm"
                      >
                        <NavDropdown.Item href={"/blogs/ALL"}>
                          BLOGS
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/press"}>
                          PRESS
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/about"}>
                          About Us
                        </NavDropdown.Item>
                        <NavDropdown.Item href={"/faq"}>FAQ</NavDropdown.Item>
                      </NavDropdown>,
                      //   <Nav.Link>Donate</Nav.Link>,
                    ]}
                {getLocalStorage("userInfo") ||
                getLocalStorage("userInfoProff") ||
                getLocalStorage("customerInfo") ? (
                  <span className="userprofiles menus">
                    <Nav.Link
                      onClick={() => this._readAllNotificationHandler()}
                    >
                      <Dropdown className="droptwo notifications">
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="profilesbtn"
                        >
                          <Image src={Bellicon} alt="" className="pointer" />
                          {parseInt(this.state.notification_count) > 0 ? (
                            <span className="counttwo">
                              {this.state.notification_count}
                            </span>
                          ) : null}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <span className="polyicons">
                              <Image
                                src={Polygonimg}
                                alt=""
                                className="pointer"
                              />
                            </span>
                            <div className="dropdownnotifications">
                              {this.state.notificationData.length === 0 && (
                                <>
                                  <ul className="notes">
                                    <li>
                                      <Col md={9}>
                                        {/* {console.log(data)} */}
                                        <div className="col10 fs17 fw400"></div>
                                        <div className="fs15 col94 fw400">
                                          No new notification
                                        </div>
                                      </Col>
                                      <Col md={3}>
                                        <div className="fs15 col94 fw400"></div>
                                      </Col>
                                    </li>
                                  </ul>
                                </>
                              )}
                              {this.state.notificationData.map((data) => (
                                <ul
                                  className="notes"
                                  style={{
                                    backgroundColor:
                                      data.no_status == "2"
                                        ? "#dbfefc"
                                        : "white",
                                  }}
                                >
                                  <li>
                                    <Col md={12}>
                                      {/* {console.log(data)} */}
                                      <div className="col10 fs17 fw400">
                                        {data.u_name}
                                      </div>
                                      <div className="fs15 col94 fw400">
                                        {data.no_text}
                                      </div>
                                    </Col>
                                  </li>
                                </ul>
                              ))}
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Nav.Link>

                    <NavDropdown
                      title=""
                      id="basic-nav-dropdown"
                      className="profile_icon profiletwo ml-3 mr-5"
                    >
                      <NavDropdown.Item
                        href="#"
                        onClick={() =>
                          this.verifyInCallNavigation("/myprofile")
                        }
                      >
                        <Image src={Userprofiles} alt="" />
                        <span>MY PROFILE</span>
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        href="#"
                        onClick={() =>
                          this.verifyInCallNavigation("/mysetting")
                        }
                      >
                        <Image src={Usersettings} alt="" />{" "}
                        <span>MY SETTINGS</span>
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        href="#"
                        onClick={() =>
                          this.verifyInCallNavigation("/editprofile")
                        }
                      >
                        <Image src={Userenables} alt="" />
                        <span>Edit Profile</span>
                      </NavDropdown.Item>

                      {getLocalStorage("customerInfo") &&
                      getLocalStorage("customerInfo").u_role_id ===
                        constant.roles.CUSTOMERS ? (
                        <NavDropdown.Item
                          href="#"
                          onClick={() => {
                            this._SwitchToCorporate();
                          }}
                        >
                          <Image src={Userenables} alt="" />
                          <span>SWITCH TO CORPORATE</span>
                        </NavDropdown.Item>
                      ) : null}
                      {getLocalStorage("customerInfo") ? (
                        <NavDropdown.Item
                          href="#"
                          onClick={() =>
                            this.verifyInCallNavigation("/myAssessmentTest")
                          }
                        >
                          <Image src={Userenables} alt="" />
                          <span>My Tests</span>
                        </NavDropdown.Item>
                      ) : null}
                      <NavDropdown.Item href="#" onClick={this.handleLogout}>
                        <Image src={Userlogouts} alt="" /> <span>LOGOUT</span>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </span>
                ) : (
                  // <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                  <NavDropdown
                    title="Login"
                    id="login-nav-dropdown"
                    className="btnTypeone loginnav"
                    style={{ height: "38px" }}
                  >
                    <NavDropdown.Item
                      onClick={(e) => {
                        this.handleLogin(1);
                      }}
                    >
                      Listener Login
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      disabled
                      onClick={(e) => {
                        this.handleLogin(2);
                      }}
                    >
                      Professional Login <br />
                      <span className="comings">coming soon</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={(e) => {
                        this.handleLogin(3);
                      }}
                    >
                      Member Login
                    </NavDropdown.Item>
                  </NavDropdown>
                )}

                <Form inline>
                  <span className="d-none">
                    {getLocalStorage("loggedIn") ? (
                      <div onClick={this.handleLogout} className="btnType1">
                        Logout
                      </div>
                    ) : (
                      <NavLink to="/login" className="btnType1">
                        Login
                      </NavLink>
                    )}
                  </span>
                </Form>
                <span className="userprofiles d-flex">
                  <Nav.Link>
                    <Image src={Mailicon} alt="" className="pointer" />
                  </Nav.Link>
                  <Nav.Link>
                    <Image src={Bellicon} alt="" className="pointer" />
                  </Nav.Link>
                  <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                  </NavDropdown>
                </span>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>

        {/* user registration start */}

        <Modal show={this.state.show} className="CreateAccount">
          <Modal.Header>
            <Button onClick={this.handleClose}>
              <Image src={Crossbtn} alt="" />
            </Button>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <UserSignup handleSet={this.handleGet} {...this.props} />
            </Container>
          </Modal.Body>
        </Modal>

        {/* user registration end */}

        {/* Create a member account start */}

        <Modal show={this.state.show3} className="CreateAccount">
          <Modal.Header>
            <Button onClick={this.handleClose3}>
              <Image src={Crossbtn} alt="" />
            </Button>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <div className="layout_box mt-3 mb-4">
                <ProfessionalSignup
                  handleSet={this.handleGet}
                  {...this.props}
                />
              </div>
            </Container>
          </Modal.Body>
        </Modal>

        {/* Create a member account end */}

        <Modal show={this.state.show} className="CreateAccount">
          <Modal.Header>
            <Button onClick={this.handleClose}>
              <Image src={Crossbtn} alt="" />
            </Button>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <UserSignup handleSet={this.handleGet} {...this.props} />
            </Container>
          </Modal.Body>
        </Modal>

        {/* Question answer start */}

        <Modal show={this.state.show2} className="CreateAccount question">
          <Modal.Header>
            <Button onClick={this.handleClose2}>
              <Image src={Crossbtn} alt="" />
            </Button>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <div className="layout_box mt-3 mb-4">
                <div className="col10 fs30 fw600 mb-2">Create Your Account</div>
                <div className="fs300 fs20 col14 mb-4 pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="col11 fs20 fw500">
                  <span className="fw600 col29">Question 1.</span> Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit?
                </div>
                <div className="col30 fw600 fs20 mt-4 pb-3">Answer:</div>

                <Form.Group controlId="formBasicCheckbox4" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    checked="checked"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="iste natus error sit voluptatem accusantium."
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox5" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="Excepteur sint occaecat cupidatat non proident."
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox6" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="Duis aute irure dolor in reprehenderit."
                  />
                </Form.Group>

                <div className="col11 fs20 fw500 mt-4">
                  <span className="fw600 col29">Question 2.</span> Section
                  1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero
                  in 45 BC
                </div>
                <div className="col30 fw600 fs20 mt-4 pb-3">Answer:</div>

                <Form.Group controlId="formBasicCheckbox7" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="iste natus error sit voluptatem accusantium."
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox8" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="Excepteur sint occaecat cupidatat non proident."
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox9" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    checked="checked"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="Duis aute irure dolor in reprehenderit."
                  />
                </Form.Group>

                <div className="col11 fs20 fw500 mt-4">
                  <span className="fw600 col29">Question 3.</span> At vero eos
                  et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium.
                </div>
                <div className="col30 fw600 fs20 mt-4 pb-3">Answer:</div>

                <Form.Group controlId="formBasicCheckbox10" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="iste natus error sit voluptatem accusantium."
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox11" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    checked="checked"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="Excepteur sint occaecat cupidatat non proident."
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox12" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="Duis aute irure dolor in reprehenderit."
                  />
                </Form.Group>
              </div>
            </Container>
          </Modal.Body>
        </Modal>

        {/* question answer end */}
      </div>
    );
  }
}

export default connect(null, { actionLogout, actionLogoutSuccess })(NavBar);
