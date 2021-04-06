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
import Videocall from "../components/videoaudio/videocall";
import Audiocall from "../components/videoaudio/audiocall";
import Menubar from "../components/core/menu";
import Ngo from "../components/core/ngo";
import Ngodetail from "../components/core/ngodetail";
import ListenerProfile from "../components/listener/listenerprofile";
import Compaign from "../components/user/campaign";

import getUserProfile from "../common/utility/getUserProfile";
// import { getLocalStorage} from "../common/helpers/Utils";
import socketClass from "../common/utility/socketClass";
import VideoCalling from "../components/VideoComponents/VideoCalling/VideoCalling";
import CallingTo from "../components/videoaudio/CallingTo/CallingTo";
import Admincategory from "../components/jsx/superadmin/category";
import Addquestionanswer from "../components/jsx/superadmin/addquestionanswer";
import Adminselectcategory from "../components/jsx/superadmin/adminselectcategory";
import CalendarDemo from "../components/professional/calendar";
import ProfessionalChatSearch from "../components/chat/professionalSearch";
// import Reviewrequest from "../components/admin/reviewrequest";
// import Ratingrequest from "../components/admin/ratingrequest";
import Reviewcomments from "../components/user/reviewcomments";
import Donatedata from "../components/user/donatedata";
import CocoLearnMore from "../components/user/cocoLearnMore";
import Foundation from "../components/user/foundation";
// import Paymentdetail from "../components/admin/paymentdetail";
import MySetting from "../components/admin/mysetting";
import ComingSoon from "../components/comingSoon";
import Media from "../components/admin/blogs";
import Mediadetails from "../components/core/mediadetails";
import Helpcenter from "../components/core/helpcenter";
// import Createblogs from "../components/admin/createblog";
import BlogDetail from "../components/core/blogDetail";
import VlogDetail from "../components/core/vlogDetail";
import BlogVideoDetails from "../components/core/blogVideoDetails";
import PressBlogDetail from "../components/core/PressBlogDetail";
import Categoryadmin from "../components/admin/admincategory";
import Helprequest from "../components/core/helprequest";
import Faq from "../components/core/faq";
import Termcondition from "../components/core/termcondition";
import Privacypolicy from "../components/core/privacypolicy";
import ShareProfile from "../components/core/ShareProfile";
import About from "../components/core/about";
import ProfessionalLsting from "../components/professional/professionalListing";
import ProfessionalDetails from "../components/professional/professionalDetails";
import ProfessionalSignup from "../components/professional/professionalSignup";
import ProfessionalModify from "../components/professional/professionalModify.js";

import MyAssessmentTestSA from "../components/admin/myAssessmentTestSA";
import listenerBrowse from "../components/professional/listenerBrowse";
// import CorporateMember from "../components/admin/corporateMember";
import AddDomain from "../components/admin/addDomain";
import DomainDetail from "../components/admin/domainDetail";
// import DomainListing from "../components/admin/domenListing";
// import SessionRequest from "../components/admin/sessionRequest";
import CorporateLogin from "../components/professional/corporateLogin";
import CorporateDashboard from "../components/professional/corporateDashboard";
import ListenerBrowse from "../components/professional/listenerBrowse";
import BlogUser from "../components/professional/blogUser";
// ProfessionalBlog
import ProfessinalBlogCreate from "../components/admin/professinalBlogCreate";
import ProfessinalBlogPress from "../components/admin/professionalBlogPress";
// import AdminBlogListing from "../components/admin/adminBlogListing";
// import AdminPressListing from "../components/admin/adminPressListing";
import ProfessinalBlog from "../components/professional/professinalBlog";
import ProfessionalBlog from "../components/professional/professinalBlog";
import ProfessionalBlogList from "../components/professional/professionalBlogList";
import ProfessionalVlogs from "../components/professional/professionalVlogs";
import addSubscriptions from "../components/admin/addSubscription";
import SubscriptionDocument from "../components/admin/subscriptionDocument";
// import SubscriptionPlan from "../components/admin/subscriptionPlan";
import AddKits from "../components/admin/addKits";
// import KitsListing from "../components/admin/kitsListing";
import CreateVlog from "../components/admin/createVlog";
import VlogList from "../components/admin/vlogList";
import AssessmentTestList from "../components/admin/assessmentTestList";
import ViewQA from "../components/admin/viewQA";
import CreateAssessmentTest from "../components/admin/createAssessmentTest";
import EditQa from "../components/admin/editQa";
import ViewAssessmentTest from "../components/assessmentTest/viewAssessmentTest";
import PlanDetails from "../components/plan/planDetails";
import PlanDetailsEat from "../components/plan/planDetailsEat";
import MyAssessmentTest from "../components/assessmentTest/myAssessmentTest";
import ListenerAssessmentTest from "../components/ListenerAssessment/listenerAssessmentTest";
import QaViewDetails from "../components/admin/QaViewDetails";
import AssessmentTestLists from "../components/admin/assessmentTestList";
import AssessmentTestListTwo from "../components/assessmentTest/assessmentTestList";
import MentalQa from "../components/assessmentTest/mentalQa";
import MentalhealthQa from "../components/assessmentTest/mentalHealthQa";
import CorporateDocument from "../components/admin/corporateDocument";
import KitListings from "../components/kits/kitListings"; 
import KitDetails from "../components/kits/kitDetails";
import Checkouts from "../components/kits/checkout";
import DownloadPdf from "../components/admin/superAdmin/downloadPdf"; 
import UserPurchasingHistory from "../components/admin/superAdmin/userPurchasingHistory"; 

// const user =
//   getLocalStorage("userInfo") ||
//   getLocalStorage("userInfoProff") ||
//   getLocalStorage("customerInfo") ||
//   getLocalStorage("userInfoAdmin");
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

          <PublicRoute path="/logout" component={Chat} />
          <PublicRoute path="/reset" component={Resetpassword} />
          <PublicRoute path="/forgotpassword" component={Forgotpassword} />
          <PublicRoute path="/userotp" component={Userotp} />
          <PublicRoute path="/menu" component={Menubar} />
          <PublicRoute path="/admin" component={Adminlistener} />
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
          <PublicRoute path="/createVlog/:id" component={CreateVlog} />
          <Route
            path="/viewAssessmentTest/:id/:type"
            component={ViewAssessmentTest}
          />
          <Route 
            path="/planlist/:name"
            component={PlanDetailsEat}
          />
          {/* <PublicRoute path="/planlist/:name" component={PlanDetailsEat} /> */}
          <Route path="/myAssessmentTest" component={MyAssessmentTest} />

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
          <PublicRoute path="/reviewcomments" component={Reviewcomments} />
          <PublicRoute path="/donatedata" component={Donatedata} />
          <PublicRoute path="/foundation" component={Foundation} />
          <PublicRoute path="/downloadPdf" component={DownloadPdf} />
          {/* <PublicRoute path="/paymentdetail" component={Paymentdetail} /> */}
          {/* <PublicRoute path="/corporateMember" component={CorporateMember} /> */}
          <PublicRoute path="/addDomain/:id" component={AddDomain} />
          <PublicRoute
            path="/domainDetails/:name/:id"
            component={DomainDetail}
          />
          {/* <PublicRoute path="/domainListing" component={DomainListing} /> */}
          <Route path="/assessmentTestList" component={MyAssessmentTestSA} />
          <PublicRoute path="/corporateLogin" component={CorporateLogin} />
          <PublicRoute
            path="/corporateDashboard"
            component={CorporateDashboard}
          />
          <PublicRoute path="/listenerBrowse" component={ListenerBrowse} />
          <PublicRoute path="/blogUser" component={BlogUser} />
          <PublicRoute path="/professinalBlog" component={ProfessinalBlog} />
          <PublicRoute
            path="/professionalVlogs"
            component={ProfessionalVlogs}
          />
          <PublicRoute path="/blogVideoDetails" component={BlogVideoDetails} />
          <PublicRoute path="/addKits/:id" component={AddKits} />
          <PublicRoute path="/vlogList" component={VlogList} />
          <PublicRoute
            path="/assessmentTestList"
            component={AssessmentTestList}
          />
          <PublicRoute path="/viewQA/:id" component={ViewQA} />
          <PublicRoute
            path="/createAssessmentTest/:id"
            component={CreateAssessmentTest}
          />
          <PublicRoute path="/editQa/:id/:type" component={EditQa} />
          <Route path="/planlistholistic" component={PlanDetails} /> 
          <PublicRoute path="/corporateDocument" component={CorporateDocument} /> 
          <Route path="/kitListings" component={KitListings} /> 
          <Route path="/kitDetails" component={KitDetails} /> 
          <Route path="/checkouts" component={Checkouts} />    
          
          <PublicRoute
            path="/listenerAssessmentTest"
            component={ListenerAssessmentTest}
          />
          <PublicRoute path="/QaViewDetails/:id" component={QaViewDetails} />
          <PublicRoute
            path="/assessmentTestLists"
            component={AssessmentTestLists}
          />
          <Route 
            path="/assessmentTests/:name"
            component={AssessmentTestListTwo}
          />     
          <PublicRoute path="/mentalQa" component={MentalQa} />
          <PublicRoute path="/userPurchasingHistory" component={UserPurchasingHistory} />  

          <PublicRoute   
            path="/professionalBlogList"
            component={ProfessionalBlogList} 
          />
          <PublicRoute path="/blogUser" component={BlogUser} />
          {/* <PublicRoute path="/adminBlogListing" component={AdminBlogListing} />
          <PublicRoute path="/adminPressListing" component={AdminPressListing} />     */}
          <PublicRoute
            path="/addSubscription/:id"
            component={addSubscriptions}
          />
          <PublicRoute
            path="/subscriptionDocument"
            component={SubscriptionDocument}
          />
          <Route 
            path="/starttest/:id"
            component={MentalhealthQa} 
          />
          {/* <PublicRoute
            path="/subscriptionPlan/:id"
            component={SubscriptionPlan}
          /> */}

          <PublicRoute path="/helpcenter" component={Helpcenter} />
          <PublicRoute
            path="/professinalBlogCreate/:id"
            component={ProfessinalBlogCreate}
          />
          <PublicRoute
            path="/professinalBlogPress/:id"
            component={ProfessinalBlogPress}
          />
          <Route path="/coming-soon" component={ComingSoon} />

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
          <Route
            path="/professional/:id/detail"
            render={(props) => <ProfessionalDetails {...props} />}
          />
          <Route
            path="/blogsDetail/:id"
            render={(props) => <BlogDetail {...props} />}
          />
           <Route
            path="/vlogsDetail/:id"
            render={(props) => <VlogDetail {...props} />}
          />
          <Route
            path="/press/blogsDetail/:id"
            render={(props) => <PressBlogDetail {...props} />}
          />
          {/* <Route path='/blogs' render={(props) => <Media {...props} />} /> */}

          {/* <PrivateRouteList path="/termcondition" component={Termcondition} /> */}
          {/* <PrivateRouteList path="/" component={} /> */}
          {/* Proff */}
          <Route
            path="/press"
            render={(props) => <ProfessionalBlog {...props} />}
          />
          <Route
            path="/blogs/:name"
            render={(props) =>{console.log("TO RENDER " ,props); return (<ProfessionalBlogList {...props} />)}}
          />
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
          <PrivateRoutes path="/listener-browse" component={listenerBrowse} />

          <Route
            path="/chatuser/:id"
            render={(props) => <ChatUser {...props} />}
          />

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
          <PublicRoute path="/admin" component={Adminlistener} />
          {/* <PublicRoute path="/adminlisting" component={Reviewrequest} /> */}
          <PublicRoute path="/blogs" component={Media} />

          {/* <PublicRoute path="/createblog" component={Createblogs} />
          <PublicRoute path="/blogsDetail" component={BlogDetail} /> */}
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
