import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../components/core/landing";
import Login from "../components/login/Login";
// import Login from '../components/login/Login';
import ProfessionalLogin from "../components/login/professionalLogin";
import Becomelistener from "../components/signup/becomeListener";
import Listenersignup from "../components/signup/listenerSignup";
import Usersignup from "../components/signup/userSignup";
import Userdashboard from "../components/listener/userdashboard";
import Chat from "../components/listener/chat";
import PrivateRouteList from "./PrivateRouteList";
import PrivateRouteProff from "./PrivateRouteProff";
import PublicRoute from "./PublicRoute";
import UserdashboardProff from "../components/professional/userdashboardProff";
import ChatProff from "../components/professional/chatproff";
import UserdashboardCust from "../components/user/userdashboard";

import PrivateRouteUser from "./PrivateRouteUser";
import PrivateRoutes from "./PrivateRoutes";
import MyProfile from "../components/editprofile/myprofile";
import EditProfile from "../components/editprofile/editprofile";
import ChatUser from "../components/user/chatUser";
import Resetpassword from "../components/login/resetpassword";
import Forgotpassword from "../components/login/forgotpassword";
import Userotp from "../components/login/userotp";
import Userprofiledetail from "../components/jsx/superadmin/userprofiledetail";

import AdminLogin from "../components/admin/adminlogin";
import Adminlistener from "../components/admin/listener";
import ListenerSearch from "../components/chat/listenerSearch";
import Videocall from "../components/videoaudio/videocall";
import Audiocall from "../components/videoaudio/audiocall";
import Menubar from "../components/core/menu";
import Ngo from "../components/core/ngo";
import Ngodetail from "../components/core/ngodetail";
import ListenerProfile from "../components/listener/listenerprofile";
import Compaign from "../components/user/campaign";

import getUserProfile from "../common/utility/getUserProfile";
import { getLocalStorage, showErrorMessage } from "../common/helpers/Utils";
import socketClass from "../common/utility/socketClass";
import VideoCalling from "../components/VideoComponents/VideoCalling/VideoCalling";
import CallingTo from "../components/videoaudio/CallingTo/CallingTo";
import Admincategory from "../components/jsx/superadmin/category";
import Addquestionanswer from "../components/jsx/superadmin/addquestionanswer";
import Adminselectcategory from "../components/jsx/superadmin/adminselectcategory";
import CalendarDemo from "../components/professional/calendar";
import ProfessionalChatSearch from "../components/chat/professionalSearch";
import Reviewrequest from "../components/admin/reviewrequest";
import Ratingrequest from "../components/admin/ratingrequest";
import Reviewcomments from "../components/user/reviewcomments";
import Donatedata from "../components/user/donatedata";
import CocoLearnMore from "../components/user/cocoLearnMore";
import Foundation from "../components/user/foundation";
import Paymentdetail from "../components/admin/paymentdetail";
import MySetting from "../components/admin/mysetting";
import ComingSoon from "../components/comingSoon";
import Media from "../components/admin/blogs";
import Mediadetails from "../components/core/mediadetails";
import Helpcenter from "../components/core/helpcenter";
import Createblogs from "../components/admin/createblog";
import BlogDetail from "../components/admin/blogDetail";
import Categoryadmin from "../components/admin/admincategory";
import Helprequest from "../components/core/helprequest";
import Faq from "../components/core/faq";
import Termcondition from "../components/core/termcondition";
import Privacypolicy from "../components/core/privacypolicy";
import ShareProfile from "../components/core/ShareProfile";
import About from "../components/core/about";
import Blockuser from "../components/user/blockuser";
import ProfessionalLsting from "../components/professional/professionalListing";
import ProfessionalDetails from "../components/professional/professionalDetails";
import ProfessionalSignup from "../components/professional/professionalSignup";
import ProfessionalModify from "../components/professional/professionalModify.js";

import ProfessionalList from "../components/admin/professionalList";
import listenerBrowse from "../components/professional/listenerBrowse"
import CorporateMember from "../components/admin/corporateMember";
import AddDomain from "../components/admin/addDomain";
import DomainDetail from "../components/admin/domainDetail";
// import DomainListing from "../components/admin/domenListing";
import SessionRequest from "../components/admin/sessionRequest";
import CorporateLogin from "../components/professional/corporateLogin";
import CorporateDashboard from "../components/professional/corporateDashboard";
import ListenerBrowse from "../components/professional/listenerBrowse";
import BlogUser from "../components/professional/blogUser";
// ProfessionalBlog
import ProfessinalBlogCreate from "../components/admin/professinalBlogCreate";
import ProfessinalBlogPress from "../components/admin/professionalBlogPress";   
import AdminBlogListing from "../components/admin/adminBlogListing";  
import AdminPressListing from "../components/admin/adminPressListing";                                           
import ProfessinalBlog from "../components/professional/professinalBlog";
import ProfessionalBlog from "../components/professional/professinalBlog";
import ProfessionalBlogList from "../components/professional/professionalBlogList";

const user =
  getLocalStorage("userInfo") ||
  getLocalStorage("userInfoProff") ||
  getLocalStorage("customerInfo") ||
  getLocalStorage("userInfoAdmin");
class ELPRoute extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener("beforeunload", socketClass.disconnect);
    if (getUserProfile()) {
      // console.log("socketClass", socketClass.connect);
      socketClass.connect(getUserProfile());
    }
    this.setState({ socket: socketClass.getSocket() });
    // console.log("socket===", socket)
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", socketClass.disconnect);
  }
  render() {
    return (
      <>
        {this.state.socket && <VideoCalling />}
        <Switch>
          <PublicRoute exact path="/" component={Landing} />
          <Route path="/login" component={Login} />

          <PublicRoute path="/adminLogin" component={AdminLogin} />
          <PublicRoute path="/becomeListener" component={Becomelistener} />
          <PublicRoute path="/listenersignup" component={Listenersignup} />
          <PublicRoute
            path="/professionalLogin"
            component={ProfessionalLogin}
          />
          {/* <PublicRoute
            path="/professionalSignup"
            component={professionalSignup}
          /> */}
          <PublicRoute path="/logout" component={Chat} />
          <PublicRoute path="/reset" component={Resetpassword} />
          <PublicRoute path="/forgotpassword" component={Forgotpassword} />
          <PublicRoute path="/userotp" component={Userotp} />
          <PublicRoute path="/menu" component={Menubar} />
          {/* <PublicRoute path="/adminlogin" component={Adminlogin} />  */}
          {/* <PublicRoute path="/adminlistener" component={Adminlistener} />  */}
          <PublicRoute path="/adminlistener" component={Adminlistener} />
          <PrivateRoutes path="/userprofile" component={Userprofiledetail} />
          {/* LIst */}
          <PrivateRouteList path="/userDashboard" component={Userdashboard} />
          <PrivateRouteList path="/chat/:id" component={Chat} />

          {/* Proff */}
          <PublicRoute path="/usersignup" component={Usersignup} />
          <PublicRoute path="/ngo" component={Ngo} />
          <PublicRoute path="/ngodetail" component={Ngodetail} />
          <PublicRoute path="/listenerprofile" component={ListenerProfile} />
          <PublicRoute path="/listenerprofile" component={ListenerProfile} />
          <PublicRoute path="/reviewrequest" component={Reviewrequest} />
          {/* LIst */}
          {/* <PublicRoute path="/reviewrequest" component={Reviewrequest} />   */}
          <PublicRoute path="/ratingrequest" component={Ratingrequest} />

          <PublicRoute
            path="/professionalDetails/:type/:id"
            component={ProfessionalDetails}
          />
          <PublicRoute 
            path="/professionalSignup"
            component={ProfessionalSignup}
          />
          <PublicRoute 
            path="/professionalModify/:id"
            component={ProfessionalModify}
          />
          <PublicRoute path="/professionalList" component={ProfessionalList} />
          <PublicRoute path="/reviewcomments" component={Reviewcomments} />
          <PublicRoute path="/donatedata" component={Donatedata} />
          <PublicRoute path="/foundation" component={Foundation} />
          <PublicRoute path="/paymentdetail" component={Paymentdetail} />
          <PublicRoute path="/corporateMember" component={CorporateMember} />
          <PublicRoute path="/addDomain/:id" component={AddDomain} />
          <PublicRoute path="/domainDetails/:name/:id" component={DomainDetail} />
          {/* <PublicRoute path="/domainListing" component={DomainListing} /> */}
          <PublicRoute path="/sessionRequest" component={SessionRequest} />
          <PublicRoute path="/corporateLogin" component={CorporateLogin} />
          <PublicRoute
            path="/corporateDashboard"
            component={CorporateDashboard}
          />
          <PublicRoute path="/listenerBrowse" component={ListenerBrowse} />
          <PublicRoute path="/blogUser" component={BlogUser} />
          <PublicRoute path="/professinalBlog" component={ProfessinalBlog} />
          <PublicRoute path="/professionalBlogList" component={ProfessionalBlogList} />
          <PublicRoute path="/blogUser" component={BlogUser} />
          <PublicRoute path="/adminBlogListing" component={AdminBlogListing} />
          <PublicRoute path="/adminPressListing" component={AdminPressListing} />    

          <PublicRoute path="/helpcenter" component={Helpcenter} />
          <PublicRoute path="/professinalBlogCreate" component={ProfessinalBlogCreate} />
          <PublicRoute path="/professinalBlogPress" component={ProfessinalBlogPress} />               

          {/* <PublicRoute path="/termcondition" component={Termcondition} /> 
          <PublicRoute path="/privacypolicy" component={Privacypolicy} />     */}

          {/* List */}
          <PrivateRouteList path="/userDashboard" component={Userdashboard} /> 
          <PrivateRouteList path="/chat/:id" component={Chat} />  

          {/* <PrivateRouteList path="/calendarListener" component={CalendarDemo} /> */}
          <Route
            path="/termcondition"
            render={(props) => <Termcondition {...props} />}
          />
          <Route
            path="/privacypolicy"
            render={(props) => <Privacypolicy {...props} />}
          />
          <Route
             path="/professionalListing"
            render={(props) => <ProfessionalLsting {...props} />}
          />
          <Route
            path="/share-profile"
            render={(props) => <ShareProfile {...props} />}
          />

          <Route path="/faq" render={(props) => <Faq {...props} />} />
          <Route path="/campaign" render={(props) => <Compaign {...props} />} />
          <Route path="/about" render={(props) => <About {...props} />} />
          <Route path='/professional/:id/detail' render={(props) => <ProfessionalDetails {...props} />} />
          {/* <PrivateRouteList path="/termcondition" component={Termcondition} /> */}
          {/* <PrivateRouteList path="/" component={} /> */}
          {/* Proff */}
          <Route path='/press' render={(props) => <ProfessionalBlog {...props} />} />
          <Route path='/blogs' render={(props) => <ProfessionalBlogList {...props} />} />
          <PrivateRouteProff
            path="/userDashboardproff"
            component={UserdashboardProff}
          />

          {/*User*/}
          <PrivateRouteUser
            path="/userDashboardcust"
            component={UserdashboardCust}
          />
          <PrivateRoutes path="/coco/learn-more" component={CocoLearnMore} />
          <PrivateRoutes path="/coming-soon" component={ComingSoon} />
          <PrivateRoutes path="/listener-browse" component={listenerBrowse} />
          <PrivateRouteUser path="/chatuser/:id" component={ChatUser} />
          <PrivateRouteProff path="/chatproff/:id" component={ChatProff} />
          <PrivateRoutes path="/mysetting" component={MySetting} />
          <PrivateRoutes path="/mediadetails/:id" component={Mediadetails} />
          <PrivateRoutes path="/calendar" component={CalendarDemo} />

          <PrivateRoutes path="/myprofile" component={MyProfile} />
          <PrivateRoutes path="/editprofile" component={EditProfile} />
          <PrivateRoutes path="/videocall/:id" component={Videocall} />
          <PrivateRoutes path="/audiocall/:id" component={Audiocall} />
          <PrivateRoutes path="/calling" component={CallingTo} />
          <PublicRoute path="/admincategory" component={Admincategory} />
          <PublicRoute
            path="/addquestionanswer"
            component={Addquestionanswer}
          />
          <PublicRoute
            path="/adminselectcategory"
            component={Adminselectcategory}
          />
          <PublicRoute path="/adminlistener" component={Adminlistener} />
          <PublicRoute path="/adminlisting" component={Reviewrequest} />
          <PublicRoute path="/blogs" component={Media} />
          <PublicRoute path="/createblog" component={Createblogs} />
          <PublicRoute path="/blogsDetail" component={BlogDetail} />
          <PublicRoute path="/categoryadmin" component={Categoryadmin} />
          <PublicRoute path="/helprequest" component={Helprequest} />

          <PrivateRoutes
            path="/professionalSearch"
            component={ProfessionalChatSearch}
          />
        </Switch>
      </>
    );
  }
}
export default ELPRoute;
