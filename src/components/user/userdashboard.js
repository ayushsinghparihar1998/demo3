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

import SocketIOClient from "socket.io-client";
import {
getLocalStorage,
removeLocalStorage,
} from "../../common/helpers/Utils";
import {
actionGetRecentJoin,
actionGetUserDashBoard,
} from "../../common/redux/actions";
import socketClass from "../../common/utility/socketClass";
import RecentChat from "../ChatShared/RecentChat/RecentChat";
import ActiveUsers from "../ChatShared/ActiveUsers/ActiveUsers";
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
user_id: getLocalStorage("customerInfo").u_id
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
// if (!socket.connected) {
//   socket.connect();
// }
window.addEventListener("beforeunload", this.unmount)
this.getRecentJoinUsers();
this.getUserDashBoard();
// abhi start
// let result = getLocalStorage("result");
// console.log("getLocalStorage", getLocalStorage("result"));
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
let res = result.data.data && result.data.data.u_mem_list?result.data.data.u_mem_list:[];
this.setState({ recentJoin: res })
}
})
}
getUserDashBoard = () => {
this.props.actionGetUserDashBoard({}).then((result) => {
if (result && result.status === 200) {
let res = result.data.data && result.data.data.dashboard_list?result.data.data.dashboard_list:[];
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
                     <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                        <span>Currently Active Listeners </span>
                     </div>
                     <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Listener">
                           <div className="chat-border"></div>
                           {this.state.activeChatUsers &&
                           this.state.activeChatUsers.map((item, ind) => {
                           return ind < this.state.showVal ? (
                           <div className="d-flex m-3 border-bottom pointer"
                              onClick={() =>
                              this.changepath("/chatuser/" + item.id)
                              }
                              >
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
                      

                  <div className="inner_side">
                      <div className="upgrade">   
                          <Button onClick={()=>this.props.history.push('/coming-soon')} className="btnType17">Upgrade to Premium Account</Button> 
                      </div> 
                  </div>
                  <div className="inner_side">
                      <div className="benefits">
                          <div className="pb-2 col14 fw500 fs15">Benefits of becoming a CoCo</div>
                          <Button onClick={()=>this.props.history.push('/coco/learn-more')} className="btnType18">Learn More</Button>
                      </div>
                  </div>
                  <div className="inner_side">
                      <div className="share_user">  
                          <span className="col1 fs18 fw500 mr-3">Share us on:</span> 
                          <span className="mr-2"><Image src={Facebooknew} alt="Facebook" /></span>
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
                           <Col lg={5} md={4}> 
                                 <div className="col1 fw500 fs14 mt-2">Need to talk to someone?</div>  
                           </Col>
                           <Col lg={5} md={5}>   
                              <Form.Group controlId="exampleForm.ControlSelect1">
                                 <Form.Control as="select"
                                       className="selectTyp1 select3"
                                       name="date">
                                       <option>Select Category</option>
                                       <option>Category One</option>
                                       <option>Select Two</option>
                                       <option>Select Three</option> 

                                 </Form.Control>
                              </Form.Group> 
                           </Col>
                           <Col lg={2} md={3} className="text-right"> 
                                 <Button className="btnTyp5 smallbtn">chat</Button> 
                           </Col>
                       </Row> 
                     </div>
                  </div>
                  <div className="inner_body mb-3">
                       <div className="test_eat fs18 col18">Test your Eat Luv Pray Quotient</div> 
                  </div> 

                  <div className="inner_body userbg-white mb-3">
                  <div className="text-center p-4"> 
                     <div className="col14 fw600 fs22 border-gray pb-3 mb-3">
                        Fun Facts
                     </div>
                     <div class="funfact blue">
                        <Row>
                           <Col md={9} lg={10}>
                           <div className="fs15 fw500 col70 mb-1 mt-2">Did you know?</div>
                           <div className="col11 fw400 fs13">If you were to spell out numbers from one; you whould not find the letter ‘A’ until you reach ‘One Thousand’.</div>
                           </Col>
                           <Col md={3} lg={2}>
                           <div className="position-relative">  
                              <Button className="btnType16">EAT</Button> 
                           </div>
                           </Col>
                        </Row>
                     </div>
                     <div class="funfact lightpink">
                        <Row>
                           <Col md={9} lg={10}>
                           <div className="fs15 fw500 col70 mb-1 mt-2">Did you know?</div>
                           <div className="col11 fw400 fs13">If you were to spell out numbers from one; you whould not find the letter ‘A’ until you reach ‘One Thousand’.</div>
                           </Col>
                           <Col md={3} lg={2}>
                           <div className="position-relative">  
                              <Button className="btnType16 funbtn2">LOVE</Button> 
                           </div>
                           </Col>
                        </Row>
                     </div>
                     <div class="funfact lightgreen">
                        <Row>
                           <Col md={9} lg={10}>
                           <div className="fs15 fw500 col70 mb-1 mt-2">Did you know?</div>
                           <div className="col11 fw400 fs13">If you were to spell out numbers from one; you whould not find the letter ‘A’ until you reach ‘One Thousand’.</div>
                           </Col>
                           <Col md={3} lg={2}>
                           <div className="position-relative">  
                              <Button className="btnType16 funbtn3">PRAY</Button> 
                           </div>
                           </Col>
                        </Row>
                     </div>
 
                     {/* 
                     <div className="inner_body userbg-white mb-3">
                     </div>
                     */}
                     {/* 
                     <Row className="justify-content-center">
                        <Col md={4}>
                        <Image src={Skill} alt="" />
                        <div className="fs14 col29 fw500 pt-4 pb-4">
                           Supportive Conversations
                        </div>
                        </Col>
                        <Col md={4}>
                        <Image src={Skill2} alt="" />
                        <div className="fs14 col29 fw500 fw500 pt-4 pb-4">
                           General Request Response Rate
                        </div>
                        </Col>
                        <Col md={4}>
                        <Image src={Skill3} alt="" />
                        <div className="fs14 col29 fw500 fw500 pt-4 pb-4">
                           Your Personal Request Response Rate
                        </div>
                        </Col>
                        <Col md={4}>
                        <Image src={Skill3} alt="" />
                        <div className="fs14 col29 fw500 fw500 pt-4 pb-4">
                           People Referred to Eat Luv N Pray
                        </div>
                        </Col>
                        <Col md={4}>
                        <Image src={Skill3} alt="" />
                        <div className="fs14 col29 fw500 fw500 pt-4 pb-4">
                           Your Personal Request Response Rate
                        </div>
                        </Col>
                     </Row>
                     */}
                  </div>
               </div>
               
               <div className="inner_body"> 
                  <Carousel className="test_carousel">  

                     <Carousel.Item> 
                           <Row>
                              <Col md={8} lg={9}>
                                  <Image src={Quotefour} alt="" className="pb-3" />    
                                  <div className="fs14 fw400 col11">Lorem Ipsum is simply dummy text of the printing and
typesetting industry  dummy text of the printing.</div>
                                  <div className="fw600 fs16 fw500 mt-2">Melinda Jems</div> 
                              </Col>
                              <Col md={4} lg={3}> 
                                  <Image src={Quotetwo} />
                              </Col>
                           </Row> 
                     </Carousel.Item>
                    
                     <Carousel.Item> 
                           <Row>
                              <Col md={8} lg={9}>
                                  <Image src={Quotefour} alt="" className="pb-3" />
                                  <div className="fs14 fw400 col11">Lorem Ipsum is simply dummy text of the printing and
typesetting industry  dummy text of the printing.</div>
                                  <div className="fw600 fs16 fw500 mt-2">Melinda Jems</div> 
                              </Col>
                              <Col md={4} lg={3}> 
                                  <Image src={Quotetwo} />
                              </Col>
                           </Row> 
                     </Carousel.Item>

                     <Carousel.Item> 
                           <Row>
                              <Col md={8} lg={9}>
                                  <Image src={Quotefour} alt="" className="pb-3" />
                                  <div className="fs14 fw400 col11">Lorem Ipsum is simply dummy text of the printing and
typesetting industry  dummy text of the printing.</div>
                                  <div className="fw600 fs16 fw500 mt-2">Melinda Jems</div> 
                              </Col>
                              <Col md={4} lg={3}> 
                                  <Image src={Quotetwo} />
                              </Col>
                           </Row> 
                     </Carousel.Item>

                     <Carousel.Item> 
                           <Row>
                              <Col md={8} lg={9}>
                                  <Image src={Quotefour} alt="" className="pb-3" />  
                                  <div className="fs14 fw400 col11">Lorem Ipsum is simply dummy text of the printing and
typesetting industry  dummy text of the printing.</div>
                                  <div className="fw600 fs16 fw500 mt-2">Melinda Jems</div> 
                              </Col>
                              <Col md={4} lg={3}> 
                                  <Image src={Quotetwo} />
                              </Col>
                           </Row> 
                     </Carousel.Item> 

                  </Carousel>
               </div>
                  
               </div>
               </Col>

                   
            <div className="blogs">  
                 <div className="fs22 col14 fw600 text-center">Blogs</div>  
                 <hr className="blog_hr" /> 
                 <div className="pl-3">      
                     <Row>
                           <Col md={3}>
                              <div className="blog_detail">  
                                 <Image src={Blogs} alt="" />  
                                 <div className="fs15 pt-2">Lorem Ipsum is simply</div>
                              </div>
                           </Col>
                           <Col md={3}>
                              <div className="blog_detail">   
                                 <Image src={Blogstwo} alt="" />  
                                 <div className="fs15 pt-2">Lorem Ipsum is simply</div>
                              </div>
                           </Col>
                           <Col md={3}>
                              <div className="blog_detail">  
                                 <Image src={Blogsthree} alt="" />  
                                 <div className="fs15 pt-2">Lorem Ipsum is simply</div>
                              </div>
                           </Col>
                           <Col md={3}>
                              <div className="blog_detail">  
                                 <Image src={Blogs} alt="" />  
                                 <div className="fs15 pt-2">Lorem Ipsum is simply</div> 
                              </div>
                           </Col>
                     </Row>
                 </div>
            </div>
            
            </Row>
            </Col>

            <Col md={3}>
            <div className="right_sidebar">
               <div className="right_inner_side">
                  <div className="chat-bg chatn fs600 fs17 col18 pl-3 pointer">
                     Hi Nancy D’souza
                     <Button className="btnType18 d-block twos">My Account</Button> 
                  </div>
                  
                  <div className="m-3 pb-3 bg-grays"> 
                     <div className="d-flex mb-2">
                        <Image src={Creditcard} alt="" className="pointer" />
                        <span className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                        {/* <strong className="fs18">{dashboardData.u_cheers ? dashboardData.u_cheers : '0'} </strong> */}
                        Video Call Credit Lefts
                        </span>
                     </div>
                  </div>
                  <div className="m-3 pb-3 bg-grays">
                     <div className="d-flex mb-2">
                        <Image src={Subscriptions} alt="" className="pointer" />
                        <span className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                        {/* <strong className="fs18">{dashboardData.u_compassion_count ? dashboardData.u_compassion_count : '0'} </strong> */}
                        Subscriptions
                        </span>
                     </div>
                  </div>
                  <div className="m-3 pb-3 bg-grays">
                     <div className="d-flex mb-2">
                        <Image src={Paymentmethod} alt="" className="pointer" />
                        <span className="pl-3 mt-auto mb-auto col14 fs16 fw400">
                        {/* <strong className="fs18">{dashboardData.u_badge_count ? dashboardData.u_badge_count : '0'} </strong> */}
                        Payments
                        </span>
                     </div>
                  </div>
               </div>
               <div className="right_inner_side">
                  <div className="chat-pink fs600 fs17 col18 pl-3 pointer">
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