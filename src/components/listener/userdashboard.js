import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
   Button,
   Container,
   Row,
   Col,
   Image,
   Form,
   Modal,
} from 'react-bootstrap';
import NavBar from '../core/nav';
import Footer from '../core/footer';
import {
   actionGetRecentJoin,
   actionGetListnerDashBoard,
} from '../../common/redux/actions';
import Educations from '../../assets/images/educations.svg';
import Educationtwo from '../../assets/images/ice_fail.svg';
import Crossbluetwo from '../../assets/images/blue_cross.svg';
import Copys from '../../assets/images/copy_icon.svg';
import Warningtwo from '../../assets/images/w_signal.svg';
import Progresss from '../../assets/images/progress_bar.svg';
import Rflag from '../../assets/images/r_flag.svg';
import Speakers from '../../assets/images/speakers.svg';
import Gmail from '../../assets/images/gmail1.svg';
import Whatsapp from '../../assets/images/whatsapp1.svg';

import Emojione from '../../assets/images/emoji.svg';
import Emojitwo from '../../assets/images/emoji2.svg';
import Emojithree from '../../assets/images/emoji4.svg';
import Emojifour from '../../assets/images/emoji6.svg';
import Emojifive from '../../assets/images/emoji7.svg';

import Calenderone from '../../assets/images/calender_icon.svg';
import Calendertwo from '../../assets/images/calender_icon2.svg';
import Calenderthree from '../../assets/images/calender_icon3.svg';
import Topgreen from '../../assets/images/top_green.svg';
import Bottomred from '../../assets/images/bottom_red.svg';
import Ricon from '../../assets/images/r_icons.svg';
import constant from '../../constant'

import {
   getLocalStorage,
   setLocalStorage,
   removeLocalStorage,
} from '../../common/helpers/Utils';
import socketClass from '../../common/utility/socketClass';
import RecentChat from '../ChatShared/RecentChat/RecentChat';
import ActiveUsers from '../ChatShared/ActiveUsers/ActiveUsers';
import Quotes from '../quotes';
import FunFact from '../funfacts';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { NavLink } from "react-router-dom"
import ELPViewApiService from '../../common/services/apiService';
// const SOCKET_IO_URL = 'http://103.76.253.131:8282';
// const socket = SocketIOClient(SOCKET_IO_URL);
const socket = socketClass.getSocket();
function dateMaker(t, s) {
   let a = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }];
   function format(m) {
      let f = new Intl.DateTimeFormat('en', m);
      return f.format(t);
   }
   return a.map(format).join(s);
}
class Userdashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         recentJoin: [],
         dashboardData: [],
         showVal: 4,
         activeChatUsers: [],
         plan_details: [],
         kits_details: [],
         couponList: [],
         user_id: getLocalStorage("userInfo").u_id
      };
   }
   componentWillUnmount() {
      window.removeEventListener("beforeunload", this.unmount);
      this.unmount();
   }
   unmount = () => {
      // if (socket) {
      //   socket.disconnect();
      // }
   }
   componentDidMount() {
      console.log(getLocalStorage("userInfo"));
      if (!socket.connected) {
         // socket.connect();
      }
      window.addEventListener("beforeunload", this.unmount);
      this.getRecentJoinUsers();
      this.getCouponList();
      this.getListnerDashBoard();
      let result = getLocalStorage('result');
      // if (getLocalStorage("result") >= 60) {
      //   this.setState({
      //     sucess: true,
      //     result: true,
      //     message: "your score is " + result,
      //   });
      // } else {
      //   this.setState({
      //     sucess: true,
      //     result: false,
      //     message: "your score is" + result,
      //   });
      // }
      socket.on("connect", function () {
      });
      // socket.emit(
      //   "chat-login",
      //   JSON.stringify({
      //     user_id: getLocalStorage("userInfo").u_id,
      //     user_type: getLocalStorage("userInfo").u_role_id,
      //   }),
      //   function (data) {
      //     console.log(data, "authenticateSocket");
      //   }
      // );
      socket.on("newUserForActivityList", (data) => {
         if (this.state.activeChatUsers.findIndex(u => u.id === data.id) === -1) {
            this.setState(prev => ({
               activeChatUsers: [...prev.activeChatUsers, data]
            }))
         }
      });
      socket.emit(
         'getRecentsChatedUsers',
         JSON.stringify({
            user_id: getLocalStorage('userInfo').u_id,
         }),
         function (d) {
            console.log('getRecentsChatedUsers', d);
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
         'getActiveListnersOrCustomers',
         JSON.stringify({
            user_id: getLocalStorage('userInfo').u_id,
            user_type: getLocalStorage('userInfo').u_role_id,
            pagination: '10',
            page: '1',
         }),
         function (d) {
            console.log('getActiveListnersOrCustomers', d);
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
      if (getLocalStorage('signup')) {
         if (getLocalStorage('result') >= 60) {
            this.setState({
               sucess: true,
               result: true,
               message: 'your score is ' + (result || 0) + '%',
            });
         } else {
            this.setState({
               sucess: true,
               result: false,
               message: 'your score is ' + (result || 0) + '%',
            });
         }
      }
      if (getLocalStorage('onScreenIdList')) {
         socket.emit(
            'onScreen',
            JSON.stringify({
               user_id: getLocalStorage('userInfo').u_id,
               user_type: getLocalStorage('userInfo').u_role_id,
               status: 0,
            }),
            function (d) {
               console.log('onScreen', d);
               removeLocalStorage('onScreenIdList');
            }
         );
      }
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
   changepath = (path) => {
      this.props.history.push(path);
   };
   getCouponList = () => {
      ELPViewApiService('getuser_kitscouponlist', { count: 10, offset: 1 })
         .then((response) => {
            if (response && response.data && response.data.status === "success") {
               const data = response.data.data;
               this.setState({ couponList: data.kits_listing });
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }
   getRecentJoinUsers() {
      let userInfo = getLocalStorage('userInfo');
      this.props.actionGetRecentJoin({}).then((result) => {
         if (result && result.status === 200) {
            let res = result.data.data && result.data.data.u_mem_list ? result.data.data.u_mem_list : [];
            this.setState({ recentJoin: res });
         }
      });
   }
   getListnerDashBoard() {
      let userInfo = getLocalStorage('userInfo');
      this.props.actionGetListnerDashBoard({}).then((result) => {
         if (result && result.status === 200) {
            let res = result.data.data && result.data.data.dashboard_list ? result.data.data.dashboard_list : [];
            this.setState({ dashboardData: res });
            if (res?.length) {
               this.setState({ plan_details: res.plan_details, kits_details: res.kits_details })
            }
         }
      });
   }
   copyReferUrl = () => {
      var copyText = document.getElementById('referURL');
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand('copy');
      // alert("Copied the text: " + copyText.value);
   };
   handleCancel = (e) => {
      console.log(e);
      setLocalStorage('signup', false);
      this.setState({
         sucess: false,
      });
   };
   handleRedirectRecentChat = (data) => () => {
      const { user_id } = this.state;
      const id = data.from_user_id == user_id ? data.to_user_id : data.from_user_id;
      this.props.history.push('/chat/' + id);
   }
   handleRedirectActiveUsers = (data) => () => {
      this.props.history.push('/chat/' + data.id);
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
                     {' '}
                     <Col md={9}>
                        <Row>
                           <Col md={4} className="pl-0">
                              <div className="left_sidebar">
                                 {/* <div className="inner_side">
                                    <div className="chat-bg fs600 fs17 col18 pl-3 ">Hall of fame</div>
                                    <div className="col1 fs16 fw500 mt-2 ml-3 pb-2">CoCo of the month</div>
                                    <div className="d-flex m-3 border-bottom bottom2">
                                       <div>
                                          <Image src={Listimg} alt="" />
                                       </div>
                                       <div className="mt-auto mb-auto pl-3">
                                          <div className="fs15 fw500 col14">Melinda Jems</div>
                                       </div>
                                    </div>
                                    <div className="d-flex justify-content-center w-100">
                                       <div className="mr-3">
                                          <Image src={Starsone} alt="" />
                                       </div>
                                       <div className="">
                                          <div className="col23 fs14 fw600 pb-2">Monthly Rating</div>
                                          <div className="text-center col14 fs14 fw500 pb-2">4.5/<small>5</small></div>
                                       </div>
                                    </div>
                                 </div> */}
                                 <div className="left_sidebar">
                                    <RecentChat onRedirect={this.handleRedirectRecentChat} />
                                    {/* 
                  <div className="inner_side">
                     <div className="chat-bg fs600 fs17 col18 pl-3 ">
                        Chat
                     </div>
                     {this.state.recentChatUsers &&
                     this.state.recentChatUsers.map((item) => {
                     return (
                     <div className="d-flex m-3 border-bottom pointer" onClick={this.handleRedirectRecentChat(item)}>
                        <div className="position-relative">
                           <Image
                              src={
                              item.from_image ? item.from_image : UserChat
                              }
                              alt=""
                              className="r50 pt-1"
                              />
                           <span className={(item.from_user_id ==
                           getLocalStorage("userInfo").u_id
                           ? item.to_user_online
                           : item.from_user_online) == "1" ? 'online' : ''}></span>
                        </div>
                        <div className="position-relative pl-3">
                           <div className="fs15 col23 fw500 pr-2">
                              {item.from_user_id ==
                              getLocalStorage("userInfo").u_id
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
                                    {/* 
                  <div className="inner_side">
                     <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                        <span>Currently Active Listeners</span>
                     </div>
                     <Tabs
                        defaultActiveKey="home"
                        id="uncontrolled-tab-example"
                        >
                        <Tab eventKey="home" title="Listener">
                           <div className="chat-border"></div>
                           {this.state.activeChatUsers &&
                           this.state.activeChatUsers.map((item, ind) => {
                           return ind < this.state.showVal ? (
                           <div className="d-flex m-3 border-bottom">
                              <div className="position-relative">
                                 <Image
                                    src={
                                    item.u_image ? item.u_image : UserChat
                                    }
                                    alt=""
                                    className="r50 pt-1"
                                    />
                              </div>
                              <div className="position-relative pl-3 mt-auto mb-auto">
                                 <div
                                    className="fs14 col14 fw500"
                                    onClick={() =>
                                    this.changepath("/chat/" + item.id)
                                    }
                                    >
                                    {item.u_name}
                                 </div>
                              </div>
                           </div>
                           ) : (
                           ""
                           );
                           })}
                        </Tab>
                     </Tabs>
                     {this.state.showVal == 4 ? (
                     <div
                        className="fs15 fw600 col23 p-3 pointer show-more"
                        onClick={() => {
                        this.setState({
                        showVal: this.state.activeChatUsers.length,
                        });
                        }}
                        >
                        Show More
                     </div>
                     ) : (
                     <div
                        className="fs15 fw600 col23 p-3 pointer show-more"
                        onClick={() => {
                        this.setState({
                        showVal: 4,
                        });
                        }}
                        >
                        Show Less
                     </div>
                     )}
                  </div>
                  */}
                                 </div>
                                 <ActiveUsers onRedirect={this.handleRedirectActiveUsers} />
                                 {/* 
               <div className="inner_side">
                  <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                     <span>Currently Active Listeners asdf </span>
                  </div>
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                     <Tab eventKey="home" title="Listener">
                        <div className="chat-border"></div>
                        {this.state.activeChatUsers &&
                        this.state.activeChatUsers.map((item, ind) => {
                        return ind < this.state.showVal ? (
                        <div className="d-flex m-3 border-bottom pointer"
                           onClick={() =>
                           this.changepath("/chat/" + item.id)
                           }>
                           <div className="position-relative">
                              <Image
                                 src={item.u_image ? item.u_image : UserChat}
                                 alt=""
                                 className="r50 pt-1"
                                 />
                           </div>
                           <div className="position-relative pl-3 mt-auto mb-auto">
                              <div
                                 className="fs14 col14 fw500"
                                 >
                                 {item.u_name}
                              </div>
                           </div>
                        </div>
                        ) : (
                        ''
                        );
                        })}
                     </Tab>
                  </Tabs>
                  {this.state.showVal == 4 ? (
                  <div
                     className="fs15 fw600 col23 p-3 pointer show-more"
                     onClick={() => {
                     this.setState({
                     showVal: this.state.activeChatUsers.length,
                     });
                     }}
                     >
                     Show More
                  </div>
                  ) : (
                  <div
                     className="fs15 fw600 col23 p-3 pointer show-more"
                     onClick={() => {
                     this.setState({
                     showVal: 4,
                     });
                     }}
                     >
                     Show Less
                  </div>
                  )}
               </div>
               */}
                                 <div className="chat-bgyellow fs600 fs17 col18 pl-2 d-flex">
                                    <div className="mr-2">
                                       <Image src={Speakers} alt="" />
                                    </div>
                                    <div>
                                       <div className="fs12 fw500 col18">Need a Listener?(Online Listeners)</div>
                                       <div className="fs13 fw500 col18">Listener to Listener</div>
                                       <div className="fs12 fw500 col18">Coming soon for now</div>
                                    </div>
                                 </div>
                              </div>

                              <div className="mt-4"></div>
                              {/* {"kt_id":"45","u_name":"Super Admin","kt_month":"3","kt_gift_code":"rxzswqmlbakf"
                              ,"kt_expiry_date":"2021-07-05 00:00:00","kt_name":"todays Kit"} */}
                              {
                                 !!this.state.couponList?.length &&
                                 this.state.couponList.map((coupon, index) =>
                                    <>
                                       <div className="mt-4"></div>
                                       <div key={coupon.kt_id} className={index % 2 === 0 ? "dashboardBannerFour fiveBans" : "dashboardBannerFour"}>
                                          <Col md={5}>
                                             <div className="jakao col18 fw600 text-center">
                                                <div>{coupon.kt_gift_code}
                                                   <span className="fw300 fs11 d-block">
                                                      {Date.parse(coupon.kt_expiry_date) < Date.now() ? 'Expired Coupon' : 'Active Coupon'}
                                                   </span>
                                                </div>
                                             </div>
                                          </Col>
                                          <Col md={7}>
                                             <div className="col18 fs14 fw500 mt-1">{coupon.kt_name}</div>
                                             <div className="col18 fs14 fw300 mt-1">Valid till {dateMaker(Date.parse(coupon.kt_expiry_date), '-')}</div>
                                             <div className="col18 fs14 fw300 mt-1">
                                                Issued on {new Date(coupon.kt_expiry_date).setMonth(new Date(coupon.kt_expiry_date).getMonth() - 3).toLocaleDateString()}
                                             </div>
                                          </Col>
                                       </div>
                                    </>
                                 )
                              }

                              {/* <div className="mt-4"></div> */}
                              {/* 
                              <div className="dashboardBannerFour fiveBans">
                                 <Col md={5}>
                                    <div className="jakao col18 fw600 text-center"><div>TFOE
                                      <span className="fw300 fs11 d-block">Active Coupon</span></div></div>
                                 </Col>
                                 <Col md={7}>
                                    <div className="col18 fs14 fw500 mt-1">FEELING FAB KIT</div>
                                    <div className="col18 fs14 fw300 mt-1">Valid till 25 March</div>
                                    <div className="col18 fs14 fw300 mt-1">Issued on 10 Fab 2021</div>
                                 </Col>
                              </div> */}

                              <div className="mt-4"></div>

                              <div className="dashboardBannerOne">
                                 <div>
                                    <div className="fs14 fw500 col18">Subscribe to our Lifestyle Plan for FREE Audio & Video Calls</div>
                                    <Button type="button" className="btnTyp6">Subscribe Now</Button>
                                 </div>
                              </div>

                              <div className="mt-4"></div>

                              {/* "plan_id":"65","plan_name":"new plan for daily","month":"3","expirydate":"21-08-04" */}
                              {
                                 !!this.state.plan_details?.length &&
                                 this.state.plan_details.map((plan) =>

                                    <div key={plan.plan_id} className="dashboardBannerTwo">
                                       <Col md={9} className="ml-auto">
                                          <div className="fs15 fw400 col1">
                                             <span className="col150 fw500">LUV</span> <span className="col14 fw500">&</span> <span className="col134 fw500">PRAY</span> ({plan.month} Months)
                                          </div>
                                          <div className="col18 fs14 fw500 mt-1">
                                             {plan.plan_name}
                                          </div>
                                          <div className="col18 fs14 fw300 mt-1">{dateMaker(Date.parse(plan?.expirydate), '-')}</div>
                                       </Col>
                                    </div>
                                 )
                              }


                              <div className="mt-4"></div>
                              {/* "kt_id":"68","kt_name":"HoneyComber Club","month":"5","expirydate":"2021-09-28 00:00:00" */}
                              {
                                 !!this.state.kits_details?.length &&
                                 this.state.kits_details.map((detail) =>
                                    <div className="dashboardBannerSix">
                                       <div className="w-100">
                                          <div className="fs15 fw500 subsc col18">
                                             Purchased KIT
                                    </div>
                                          <ul>
                                             <li>
                                                <div className="pull-left col18 fw600 fs15">{detail.kt_name} <span className="ml-1 col18 fw300 fs13">({detail.month} months)</span></div>
                                                <div className="pull-right col18 fw300 fs13">{dateMaker(Date.parse(detail?.expirydate), '-')}</div>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                 )
                              }

                           </Col>


                           <Col md={8} className="pl-0">
                              <div className="user_body">
                                 <div className="inner_body mb-3">
                                    <div className="text-center border_yellow w-100">
                                       {/* 
                     <div className="border-gray">
                        <label className="fs18 col23 fw600 mb-0">
                        What's your goal?
                        </label>
                        <Form.Control 
                           type="text"
                           className="inputTyp5 fs16 col27 fw400"
                           placeholder="take a general request"
                           />
                     </div>
                     <div className="border-gray">
                        <label className="fs18 col23 fw600 mb-0">
                        What's your motivation?
                        </label>
                        <Form.Control
                           type="text"
                           className="inputTyp5 fs16 col27 fw400"
                           placeholder="help someone new"
                           />
                     </div>
                     */}

                                       <Image src={Ricon} alt="" className="r_icon" />
                                       <div className="fw500 fs18 col23">Welcome {getLocalStorage("userInfo").u_username},</div>
                                       <div className="fs15 fw500 col27">How’s your Headspace today?</div>
                                    </div>
                                    <ul className="emoji_manages">
                                       <li className="active">
                                          <spam>
                                             <Image src={Emojione} alt="" />
                                          </spam>
                                          <div className="fw500 col29 pt-2 pb-2">Awfull</div>
                                       </li>
                                       <li>
                                          <spam>
                                             <Image src={Emojitwo} alt="" />
                                          </spam>
                                          <div className="fw500 col29 pt-2 pb-2">Bad</div>
                                       </li>
                                       <li>
                                          <spam>
                                             <Image src={Emojithree} alt="" />
                                          </spam>
                                          <div className="fw500 col29 pt-2 pb-2">Okay</div>
                                       </li>
                                       <li>
                                          <spam>
                                             <Image src={Emojifour} alt="" />
                                          </spam>
                                          <div className="fw500 col29 pt-2 pb-2">Good</div>
                                       </li>
                                       <li>
                                          <spam>
                                             <Image src={Emojifive} alt="" />
                                          </spam>
                                          <div className="fw500 col29 pt-2 pb-2">Great</div>
                                       </li>
                                    </ul>
                                 </div>
                                 {/* 
               <div className="inner_body userbg-white mb-3">
                  <div className="text-center p-4">
                     <Image src={Heartfive} alt="" className="pt-2" />
                     <div className="fs22 fw600 col14 pt-4 pb-4">
                        Heart 5 commentsin a group support room.
                     </div>
                     <Button className="btnTyp5 mb-3">Start Exerciees</Button>
                  </div>
               </div>
               */}
                                 <FunFact />

                                 <Quotes />
                              </div>
                           </Col>


                           {/*<BlogList />*/}


                        </Row>
                     </Col>

                     <Col md={3} className="pl-0">
                        <div className="right_sidebar">
                           <div className="right_inner_side">
                              <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                                 How helpful were you?
                           </div>
                              <div className="m-3 pb-3 bg-grays">
                                 <div className="d-flex mb-2">
                                    <span className="fs16 fw400 col14 pr-3">Rating Average</span>
                                    <Image src={Warningtwo} alt="" />
                                 </div>
                                 <Image src={Progresss} alt="" />
                                 <div className="col27 fs13 fw400">8 Progress Points to Next Level</div>
                              </div>
                              <div className="m-3 pb-3 bg-grays">
                                 <div className="d-flex mb-2">
                                    <Image src={Calenderone} alt="" className="pointer" />
                                    <span className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                                       <strong className="fs18">
                                          {dashboardData.u_cheers
                                             ? dashboardData.u_cheers
                                             : '0'}{' '}
                                       </strong>
                        Weekly
                        </span>
                                    <Image src={Topgreen} alt="" className="ml-3 pointer" />
                                 </div>
                              </div>
                              <div className="m-3 pb-3 bg-grays">
                                 <div className="d-flex mb-2">
                                    <Image src={Calendertwo} alt="" className="pointer" />
                                    <span className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                                       <strong className="fs18">
                                          {dashboardData.u_compassion_count
                                             ? dashboardData.u_compassion_count
                                             : '0'}{' '}
                                       </strong>
                        Monthly
                        </span>
                                    <Image src={Bottomred} alt="" className="ml-3 pointer" />
                                 </div>
                              </div>
                              <div className="m-3 pb-3 bg-grays">
                                 <div className="d-flex mb-2">
                                    <Image src={Calenderthree} alt="" className="pointer" />
                                    <span className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                                       <strong className="fs18">
                                          {dashboardData.u_badge_count
                                             ? dashboardData.u_badge_count
                                             : '0'}{' '}
                                       </strong>
                        Yearly
                        </span>
                                    <Image src={Topgreen} alt="" className="ml-3 pointer" />
                                 </div>
                              </div>
                           </div>

                           <div className="right_inner_side">
                              <div className="chat-pink fs600 fs17 fs_set col18 pl-3 pointer">
                                 <Image src={Rflag} alt="" className="mr-2" />
                                 <NavLink to="coming-soon"> <span style={{ color: 'white' }} className="d_text">Discover Subcomunities</span></NavLink>
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
                                 <Form.Group className="d-flex mt-4 mb-1">

                                    <Form.Control
                                       id="referURL"
                                       type="text"
                                       readOnly
                                       className="inputTyp4"
                                       value={constant.WEB_BASE_URL + 'share-profile?' + (dashboardData.refer_url ? dashboardData.refer_url.split('?').reverse()[0] : '')}
                                    />
                                    <Button className="btnTyp8" onClick={this.copyReferUrl}>
                                       <Image src={Copys} alt="" className="" />
                                    </Button>
                                 </Form.Group>
                                 <div className="text-center sharethis">
                                    <span className="col1 fs12 fw500 mr-1">Share this code on Social Media:</span>
                                    <Image style={{ cursor: 'pointer' }} onClick={() => {
                                       let msgbody = constant.WEB_BASE_URL + 'share-profile?' + (dashboardData.refer_url ? dashboardData.refer_url.split('?').reverse()[0] : '')
                                       let url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=My+Profile&body=' + msgbody + '&ui=2&tf=1&pli=1';
                                       window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
                                    }} src={Gmail} alt="" className="mr-2" />
                                    <a href={"whatsapp://send?text=" + (constant.WEB_BASE_URL + 'share-profile?' + (dashboardData.refer_url ? dashboardData.refer_url.split('?').reverse()[0] : ''))}> <Image src={Whatsapp} alt="" className="" /></a>


                                 </div>
                              </div>
                           </div>
                           <div className="right_inner_side">
                              <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                                 Recent join
                           </div>
                              {recentJoin &&
                                 recentJoin.map((data, index) => {
                                    return (
                                       <div className="d-flex m-3 border-bottom">
                                          <div className="position-relative">
                                             <Image
                                                src={data.u_image ? data.u_image : ''}
                                                alt=""
                                                className="r50 pt-1"
                                             />
                                          </div>
                                          <div className="mt-auto mb-auto pl-3">
                                             <div className="fs15 col14 fw500">
                                                {data.u_username ? data.u_username : ''}
                                             </div>
                                             <div className="col27 fs13 fw500">
                                                {data.u_role_txt ? data.u_role_txt : ''}
                                             </div>
                                          </div>
                                       </div>
                                    );
                                 })}
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
            <Modal
               show={this.state.sucess}
               onHide={(event) => {
                  this.handleCancel(event);
               }}
               className="custom-popUp confirmation-box"
               bsSize="small"
            >
               <Modal.Header closeButton>
                  <Image
                     src={Crossbluetwo}
                     onClick={(event) => {
                        this.handleCancel(event);
                     }}
                     alt=""
                     className="close pointer"
                  />
               </Modal.Header>
               <Modal.Body>
                  <p className="text-center fs24">{this.state.message}</p>
                  <Container>

                     {/* new loader here */}


                     {getLocalStorage('result') >= 60 ? (
                        <div className="layout_box text-center mt-3 mb-4 p-4">
                           <Image src={Educations} alt="" className="mb-4" />
                           <div className="col9 fs44 fw600 mb-2">Congratulation</div>
                           <div className="fs25 nt-4 fw500 col14 mb-4 pb-2">
                              for being a coach on ELNP
                            </div>
                           {/* 
               <Image src={Educationmarks} alt="" />
               */}
                           <CircularProgressbar minValue={0} maxValue={100} styles={{
                              root: { width: "130px" },
                              path: {
                                 stroke: `#8AD1E7`,
                                 transition: 'stroke-dashoffset 0.5s ease 0s',
                              },
                              trail: {
                                 // Trail color
                                 stroke: '#d6d6d6',
                                 // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                 strokeLinecap: 'butt',
                                 // Rotate the trail
                                 transform: 'rotate(0.25turn)',
                                 transformOrigin: 'center center',
                              },
                              text: {
                                 // Text color
                                 fill: '#595454',
                                 // Text size
                                 fontSize: '25px',
                              },
                           }} value={getLocalStorage('result') || 0} text={`${getLocalStorage('result') || 0}%`} />
                        </div>
                     ) : (
                           <div className="layout_box text-center mt-3 mb-4 p-4">
                              <Image src={Educationtwo} alt="" className="mb-4" />
                              <div className="col9 fs44 fw600 mb-2">Sorry</div>
                              <div className="fs25 nt-4 fw500 col14 mb-4 pb-2">
                                 Please take the survey again or contact Admin
                               </div>

                              <CircularProgressbar minValue={0} maxValue={100} styles={{
                                 root: { width: "130px" },
                                 path: {
                                    stroke: `#8AD1E7`,
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                 },
                                 trail: {
                                    // Trail color
                                    stroke: '#d6d6d6',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Rotate the trail
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                 },
                                 text: {
                                    // Text color
                                    fill: '#595454',
                                    // Text size
                                    fontSize: '25px',
                                 },
                              }} value={getLocalStorage('result') || 0} text={`${getLocalStorage('result') || 0}%`} />
                           </div>
                        )}
                  </Container>
               </Modal.Body>
            </Modal>
            <Footer />
         </div>
      );
   }
}
export default connect(null, {
   actionGetRecentJoin,
   actionGetListnerDashBoard,
})(Userdashboard);