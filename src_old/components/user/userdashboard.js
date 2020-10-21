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
   Modal,
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import UserChat from "../../assets/images/user_chat.svg";
import UserChat2 from "../../assets/images/user_chat2.svg";
import UserChat3 from "../../assets/images/user_chat3.svg";
import UserChat4 from "../../assets/images/user_chat4.svg";
import UserChat5 from "../../assets/images/user_chat5.svg";
import ChatCross from "../../assets/images/chat_cross.svg";
import Heartfive from "../../assets/images/heart5.svg";
import Skill from "../../assets/images/skills.svg";
import Skill2 from "../../assets/images/skills2.svg";
import Skill3 from "../../assets/images/skills3.svg";
import Copys from "../../assets/images/copy_icon.svg";
import Warningtwo from "../../assets/images/w_signal.svg";
import Progresss from "../../assets/images/progress_bar.svg";
import Stars from "../../assets/images/stars.svg";
import Hearttwo from "../../assets/images/heart2.svg";
import Medals from "../../assets/images/medals.svg";
import Rflag from "../../assets/images/r_flag.svg";
import Facebooknew from "../../assets/images/facebook_new.svg";
import Instagramnew from "../../assets/images/instagram_new.svg";
import Creditcard from "../../assets/images/credit-card.svg";
import Subscriptions from "../../assets/images/subscription_plan.svg";
import Paymentmethod from "../../assets/images/payment-method.svg";
import Gmail from '../../assets/images/gmail1.svg';
import Whatsapp from '../../assets/images/whatsapp1.svg';
import Quotetwo from '../../assets/images/quote_two.svg';
import Quotefour from '../../assets/images/quote4.png';
import Blogs from '../../assets/images/blogs.svg';
import Blogstwo from '../../assets/images/blogs2.svg';
import Blogsthree from '../../assets/images/blogs3.svg';
import ELPRxApiService from "../../common/services/apiService";

import {
   FacebookIcon,
   FacebookShareButton,
} from "react-share";

import SocketIOClient from "socket.io-client";
import {
   getLocalStorage,
   removeLocalStorage,
   showErrorMessage,
} from "../../common/helpers/Utils";
import {
   actionGetRecentJoin,
   actionGetUserDashBoard,
} from "../../common/redux/actions";
import socketClass from "../../common/utility/socketClass";
import RecentChat from "../ChatShared/RecentChat/RecentChat";
import ActiveUsers from "../ChatShared/ActiveUsers/ActiveUsers";
import Quotes from "../quotes";
import BlogList from "../blogList";
import FunFact from "../funfacts";
// const SOCKET_IO_URL = "http://103.76.253.131:8282";
const socket = socketClass.getSocket();
// SocketIOClient(SOCKET_IO_URL);
// socket.connect();
class Userdashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         dashboardData: [],
         showVal: 4,
         activeChatUsers: [],
         categories_list: [],
         selectedCategory: null,
         user_id: getLocalStorage("customerInfo").u_id
      };
   }
   componentWillUnmount() {
      window.removeEventListener("beforeunload", this.unmount);
      this.unmount();
   }
   unmount = () => {

   }
   componentDidMount() {

      window.addEventListener("beforeunload", this.unmount)
      this.getRecentJoinUsers();
      this.getUserDashBoard();
      this._getCategoriesListHandler();

      console.log('getLocalStorage ==',getLocalStorage("customerInfo"))

      if (getLocalStorage("onScreenIdUser")) {
         socket.emit(
            "onScreen",
            JSON.stringify({
               user_id: getLocalStorage("customerInfo").u_id,
               user_type: getLocalStorage("customerInfo").u_role_id,
               status: 0,
            }),
            function (d) {
               console.log("onScreen", d);
               removeLocalStorage("onScreenIdUser");
            }
         );
      }
      socket.on("connect", function () {
      });
      // socket.emit(
      //   "chat-login",
      //   JSON.stringify({
      //     user_id: getLocalStorage("customerInfo").u_id,
      //     user_type: getLocalStorage("customerInfo").u_role_id,
      //   }),
      //   function (data) {
      //     console.log(data, "authenticateSocket");
      //   }
      // );
      socket.on("newUserForActivityList", (data) => {
         console.log('data====', data)
         if (this.state.activeChatUsers.findIndex(u => u.id === data.id) === -1) {
            this.setState(prev => ({
               activeChatUsers: [...prev.activeChatUsers, data]
            }))
         }
      });
      socket.emit(
         "getRecentsChatedUsers",
         JSON.stringify({
            user_id: getLocalStorage("customerInfo").u_id,
         }),
         function (d) {
            console.log("getRecentsChatedUsers", d);
            this.setState(
               {
                  recentChatUsers: d.data,
               },
               () => {
                  console.log(this.state.recentChatUsers);
               }
            );
         }.bind(this)
      );
      socket.emit(
         "getActiveListnersOrCustomers",
         JSON.stringify({
            user_id: getLocalStorage("customerInfo").u_id,
            user_type: getLocalStorage("customerInfo").u_role_id,
            pagination: "10",
            page: "1",
         }),
         function (d) {
            console.log("getActiveListnersOrCustomers", d);
            this.setState(
               {
                  activeChatUsers: d.data,
               },
               () => {
                  console.log(this.state.activeChatUsers);
               }
            );
         }.bind(this)
      );
   }
   handleOk = (e) => {
      console.log(e);
      this.setState({
         sucess: false,
      });
   };
   handleCancel = (e) => {
      console.log(e);
      // if (this.state.result) {
      this.setState({
         sucess: false,
      });
      // }
   };
   getRecentJoinUsers = () => {
      this.props.actionGetRecentJoin({}).then((result) => {
         if (result && result.status === 200) {
            let res = result.data.data && result.data.data.u_mem_list ? result.data.data.u_mem_list : [];
            this.setState({ recentJoin: res })
         }
      })
   }
   getUserDashBoard = () => {
      this.props.actionGetUserDashBoard({}).then((result) => {
         if (result && result.status === 200) {
            let res = result.data.data && result.data.data.dashboard_list ? result.data.data.dashboard_list : [];
            this.setState({ dashboardData: res })
         }
      })
   }
   copyReferUrl = () => {
      var copyText = document.getElementById("referURL");
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");
      // alert("Copied the text: " + copyText.value);
   }
   changepath = (path) => {
      this.props.history.push(path);
   };
   handleRedirectRecentChat = (data) => () => {
      const { user_id } = this.state;
      const id = data.from_user_id == user_id ? data.to_user_id : data.from_user_id;
      this.props.history.push('/chatuser/' + id);
   }
   handleRedirectActiveUsers = (data) => () => {
      this.props.history.push('/chatuser/' + data.id);
   }
   _getCategoriesListHandler = async () => {
      try {
         let response = await ELPRxApiService("getCategoryList")
         console.log('===>RESO==>.', response)
         this.setState({
            categories_list: response.data.data.categories_list
         })
      } catch (err) {
         console.log(err)
      }
   }
   _getRandomChatHandler = () => {
      try {
         if(this.state.selectedCategory){
            console.log({
               user_id: this.state.user_id,
               cat_id: this.state.selectedCategory
            })
            socket.emit(
               "connect-randomly",
               {
                  user_id: this.state.user_id,
                  cat_id: this.state.selectedCategory
               },
               (d) => {
                  console.log("_getRandomChatHandler", d);
                  if (d.data) {
                     this.props.history.push('chatuser/' + d.data.id)
                  }
   
                  if (!d.success) {
   
                     showErrorMessage(d.msg)
                  }
   
               }
            );
         }else{
            showErrorMessage('Please select the category first')
         }
       
      } catch (err) {
         console.log(err)
      }
   }
   render() {
      let recentJoin = this.state.recentJoin;
      let dashboardData = this.state.dashboardData;
      return (
         <div className="page__wrapper innerpage">
            <div className="main_baner">
               <NavBar {...this.props} />
            </div>
            <div className="userdashboards pt-4 pb-5">
               <Container>
                  <Row>
                     <Col md={9}>
                        <Row>
                           <Col md={4} className="pl-0">
                              <div className="left_sidebar">
                                 <RecentChat onRedirect={this.handleRedirectRecentChat} />
                                 {/* <ActiveUsers onRedirect={this.handleRedirectActiveUsers} /> */}

                                 {/* 
                  <div className="inner_side">
                     <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                        Chat
                     </div>
                     {this.state.recentChatUsers &&
                     this.state.recentChatUsers.map((item) => {
                     return (
                     <div className="d-flex m-3 border-bottom pointer" onClick={this.handleRedirectRecentChat(item)}>
                        <div className="position-relative">
                           <Image
                              src={item.from_image ? item.from_image : UserChat}
                              alt=""
                              className="r50 pt-1"
                              />
                           <span className={(item.from_user_id ==
                           getLocalStorage("customerInfo").u_id
                           ? item.to_user_online
                           : item.from_user_online) == "1" ? 'online' : ''}></span>
                        </div>
                        <div className="position-relative pl-3">
                           <div className="fs15 col23 fw500 pr-2">
                              {item.from_user_id ==
                              getLocalStorage("customerInfo").u_id
                              ? item.to_user_name
                              : item.from_user_name}
                           </div>
                           <div className="col27 fs13 fw500">
                              {item.message}
                           </div>
                           <Image
                              src={ChatCross}
                              alt=""
                              className="pointer cross_btn"
                              />
                        </div>
                     </div>
                     );
                     })}
                  </div>
                  */}



                                 <div className="inner_side">
                                    <div className="upgrade">
                                       <Button onClick={() => this.props.history.push('/coming-soon')} className="btnType17">Upgrade to Premium Account</Button>
                                    </div>
                                 </div>
                                 <div className="inner_side">
                                    <div className="benefits">
                                       <div className="pb-2 col14 fw500 fs15">Benefits of becoming a CoCo</div>
                                       <Button onClick={() => this.props.history.push('/coming-soon')} className="btnType18">Learn More</Button>
                                    </div>
                                 </div>
                                 <div className="inner_side">
                                    <div className="share_user">
                                       <span className="col1 fs18 fw500 mr-3">Share us on:</span>
                                       <span className="mr-2"><FacebookShareButton url={'https://www.google.co.in/'}><FacebookIcon size={22} round={true} /></FacebookShareButton></span>
                                       <span><Image src={Instagramnew} alt="Facebook" /></span>
                                    </div>
                                 </div>
                              </div>
                           </Col>

                           <Col md={8} className="pl-0">
                              <div className="user_body">
                                 <div className="inner_body mb-3">
                                    <div className="d-flex justify-content-between border_yellow">
                                       <Row className="w-100">
                                          <Col lg={5} md={4} className="pr-0">
                                             <div className="col1 fw500 fs15 mt-2">Need to talk to someone?</div>
                                          </Col>
                                          <Col lg={6} md={5} className="pl-0">  
                                             <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Control as="select"
                                                   className="selectTyp1 select3"
                                                   name="date"
                                                   onChange={(e) => this.setState({ selectedCategory: e.target.value })}
                                                >
                                                   <option>Select Category</option>

                                                   {
                                                      this.state.categories_list.map(data => {
                                                         return <option value={data.cat_id}>
                                                            {data.cat_name}
                                                         </option>
                                                      })
                                                   }

                                                </Form.Control>
                                             </Form.Group>
                                          </Col>
                                          <Col lg={1} md={3} className="text-right">
                                             <Button onClick={this._getRandomChatHandler} className="btnTyp5 smallbtn">chat</Button>
                                          </Col>
                                       </Row>
                                    </div>
                                 </div>
                                 <div onClick={()=>this.props.history.push('/coming-soon')} className="inner_body mb-3">
                                    <div className="test_eat fs18 col18">Test your Eat Luv Pray Quotient</div>
                                 </div>

                                 <FunFact />

                                 <Quotes />

                              </div>
                           </Col>


                           <BlogList />

                        </Row>
                     </Col>

                     <Col md={3}>
                        <div className="right_sidebar">
                           <div className="right_inner_side">
                              <div className="chat-bg chatn fs600 fs17 col18 pl-3 pointer">
                                 Hi {getLocalStorage("customerInfo").u_username}
                                 <Button onClick={()=>this.props.history.push('/myprofile')} className="btnType18 d-block twos">My Account</Button>
                              </div>

                              <div onClick={()=>this.props.history.push('/coming-soon')}  className="m-3 pb-3 bg-grays">
                                 <div className="d-flex mb-2">
                                    <Image src={Creditcard} alt="" className="pointer" />
                                    <span   className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                                       {/* <strong className="fs18">{dashboardData.u_cheers ? dashboardData.u_cheers : '0'} </strong> */}
                                      Video Call Credit Lefts
                                   </span>
                                 </div>
                              </div>
                              <div onClick={()=>this.props.history.push('/coming-soon')}  className="m-3 pb-3 bg-grays">
                                 <div className="d-flex mb-2">
                                    <Image src={Subscriptions} alt="" className="pointer" />
                                    <span  className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                                       {/* <strong className="fs18">{dashboardData.u_compassion_count ? dashboardData.u_compassion_count : '0'} </strong> */}
                                       Subscriptions
                                    </span>
                                 </div>
                              </div>
                              <div onClick={()=>this.props.history.push('/coming-soon')}  className="m-3 pb-3 bg-grays">
                                 <div className="d-flex mb-2">
                                    <Image src={Paymentmethod} alt="" className="pointer" />
                                    <span  className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                                       {/* <strong className="fs18">{dashboardData.u_badge_count ? dashboardData.u_badge_count : '0'} </strong> */}
                                       Payments
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div onClick={()=>this.props.history.push('/coming-soon')} className="right_inner_side">
                              <div  className="chat-pink fs600 fs17 col18 pl-3 pointer">
                                 <Image src={Rflag} alt="" className="mr-2" />
                                    Discover
                                    Subcomunities
                              </div>
                           </div>
                           <div className="right_inner_side">
                              <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                                 My Personal Link
                  </div>
                              <div className="p-3">
                                 <div className="fs14 col14 fw400">
                                    Share your link to earn rewards & help us to support
                                    more people
                     </div>
                                 <Form.Group className="d-flex mt-4">
                                    {/* <label>{dashboardData.refer_url ? dashboardData.refer_url : ''}</label> */}
                                    <Form.Control
                                       id="referURL"
                                       type="text"
                                       readOnly
                                       className="inputTyp4"
                                       value={dashboardData.refer_url ? dashboardData.refer_url : ''}
                                    />
                                    <Button className="btnTyp8" onClick={this.copyReferUrl}>
                                       <Image src={Copys} alt="" className="" />
                                    </Button>
                                 </Form.Group>
                                 <div className="text-center sharethis">
                                    <span className="col1 fs12 fw500 mr-1">Share this code on Social Media:</span>
                                    <Image src={Gmail} alt="" className="mr-1" />
                                    <Image src={Whatsapp} alt="" className="" />
                                 </div>
                              </div>
                           </div>
                           <div className="right_inner_side">
                              <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                                 Recent join
                  </div>
                              {recentJoin &&
                                 recentJoin.map(
                                    (data, index) => {
                                       return (
                                          <div className="d-flex m-3 border-bottom">
                                             <div className="position-relative">
                                                <Image src={data.u_image ? data.u_image : ''} alt="" className="r50 pt-1" />
                                             </div>
                                             <div className="mt-auto mb-auto pl-3">
                                                <div className="fs15 col14 fw500">{data.u_username ? data.u_username : ''}</div>
                                                <div className="col27 fs13 fw500">{data.u_role_txt ? data.u_role_txt : ''}</div>
                                             </div>
                                          </div>
                                       )
                                    })
                              }
                              {/* 
                  <div className="d-flex m-3 border-bottom">
                     <div className="position-relative">
                        <Image src={UserChat2} alt="" className="r50 pt-1" />
                     </div>
                     <div className="mt-auto mb-auto pl-3">
                        <div className="fs15 col14 fw500">Scott Smith</div>
                        <div className="col27 fs13 fw500">Listeners</div>
                     </div>
                  </div>
                  */}
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
            <Footer />
         </div>
      );
   }
}
export default connect(null, {
   actionGetRecentJoin,
   actionGetUserDashBoard,
})(Userdashboard);