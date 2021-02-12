import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
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
import { connect } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import { Popover } from 'antd';
import ELPRxApiService from "../../common/services/apiService";
import { th } from "date-fns/locale"; 
import moment from 'moment'



class ProfessinalBlog extends Component {

     constructor() {
          super()
          this.state = {
               pressTabs: null,
               coverage: null,
               featured: null,
               pressReleases: null,
               offset: 6,
               showDetails: false
          }
     }

     componentDidMount() {
          this.getTabNames()
          this.getPressFeatured()
          // this.getPressCoverage()
          // this.getPressReleases()
     }

     getTabNames = () => {
          ELPRxApiService("getpressblogcategory", {})
               .then((res) => {
                    this.setState({ pressTabs: res.data.data })
                    console.log('tab names ===>', res.data.data)
               })
               .catch((err) => {
                    console.log(err);
               })
     }
     getPressFeatured = () => {
          ELPRxApiService("getpressblog", { offset: 1, count: 10, category: "'Featured'" })
               .then((res) => {
                    this.setState({ featured: res.data.data ? res.data.data.press_blog_list : [] })

                    console.log('press featured data===>', res.data.data.press_blog_list)
               })
               .catch((err) => {
                    console.log(err);
               })
     }

     getPressCoverage = () => {
          ELPRxApiService("getpressblog", { offset: 1, count: 10, category: "'Coverage'" })
               .then((res) => {
                    this.setState({ coverage: res.data.data ? res.data.data.press_blog_list : [] })
                    console.log('press coverage data===>', res)
               })
               .catch((err) => {
                    console.log(err);
               })
     }

     getPressReleases = () => {
          ELPRxApiService("getpressblog", { offset: 1, count: 10, category: "'Press Release'" })
               .then((res) => {
                    this.setState({ pressReleases: res.data.data ? res.data.data.press_blog_list : [] })

                    console.log('press releases data===>', res)
               })
               .catch((err) => {
                    console.log(err);
               })
     }

     getBlogdetails = (blog_id) => {
          // this.props.history.push('/press/blogsDetail/' + blog_id)
          this.openInNewTab('/press/blogsDetail/' + blog_id)

     }
     openInNewTab = (url) => {
          const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
          if (newWindow) newWindow.opener = null
     }

     renderFeatured1 = (data) => {
          return (
               <Col md={7} className="mb-1">
                    <div className="professionalBlogs">
                         <Image onClick={() => this.getBlogdetails(data.pbl_id)} src={data.pbl_image} className="w-100" />
                         <div className="fs18 col64 fw600 mt-3 mb-2" onClick={() => this.getBlogdetails(data.pbl_id)}>{data.pbl_title}</div>
                         <div className="col14 fs16 fw300" dangerouslySetInnerHTML={{ __html: data.pbl_desc }} ></div>
                    </div>
               </Col>
          )
     }

     renderFeatured2 = (data) => {
          return (
               <Col md={5}>
                    <div className="mt-3">
                         <Image onClick={() => this.getBlogdetails(data.pbl_id)} src={data.pbl_image} className="w-100" />
                         <div className="fs18 fw600 col64 mt-3 mb-1" onClick={() => this.getBlogdetails(data.pbl_id)}>
                              {data.pbl_title}
                         </div>
                         <div className="fs16 fw300 col14" dangerouslySetInnerHTML={{ __html: data.pbl_desc }}></div>
                    </div>
               </Col>
          )
     }

     renderFeatured3 = (data) => {
          return (
               <Col md={6}>
                    <Row>
                         <Col md={6}>
                              <Image onClick={() => this.getBlogdetails(data.pbl_id)} src={data.pbl_image} className="w-100" />
                              <div className="fs16 fw300 col14 mt-2 mb-1">
                                   {data.pbl_written_by}
                              </div>
                              <div className="fs16 fw500 col14" onClick={() => this.getBlogdetails(data.pbl_id)}>
                                   {data.pbl_title}
                              </div>
                         </Col>
                         <Col md={6}>
                              <div className="fs18 " dangerouslySetInnerHTML={{ __html: data.pbl_desc }}></div>
                         </Col>
                    </Row>
               </Col>
          )
     }

     renderFeatured4 = (data) => {
          return (
               <Col md={6}>
                    <Row>
                         <Col md={6}>
                              <Image onClick={() => this.getBlogdetails(data.pbl_id)} src={data.pbl_image} className="w-100" />
                              <div className="fs16 fw300 col14 mt-2 mb-1">
                                   {data.pbl_written_by}
                              </div>
                              <div className="fs16 fw500 col14" onClick={() => this.getBlogdetails(data.pbl_id)}>
                                   {data.pbl_title}
                              </div>
                         </Col>
                         <Col md={6}>
                              <div className="fs18 " dangerouslySetInnerHTML={{ __html: data.pbl_desc }}></div>
                         </Col>
                    </Row>
               </Col>
          )
     }

     render() {
          return (
               <div className="page__wrapper innerpage">
                    <div className="main_baner">
                         <NavBar {...this.props} />
                    </div>
                    <div className="profile_layout pt-4 pb-5">
                         <Container>
                              <div className="processBlog vbolgs w-100">
                                   <div className="text-center fs28 fw500 col64 mb-2">ProfessionalVlogs</div>
                                   <div className="mxw-50 text-center col14 fs16 fw300 m-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>

                                   <div className="blogMain"> 
                                        <Tabs defaultActiveKey="All" id="uncontrolled-tab-example"> 
                                             <Tab eventKey="All" title="All" className="pressBlog">   
                                                  <div className="vlogListing">
                                                        <div className="ngo_listing">
                                                            <Row>
                                                            <Col lg={4} md={6} sm={6}> 
                                                            <div className="ngo_social"> 
                                                                <div className="p-3">
                                                                    <div className="media_list mb-3">
                                                                    <div className="elpVideo"> 
                                                                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/XMst5HoOS6c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                                    </div> 
                                                                        <div className="col14 fs14 fw400 pt-1">2 Feb 21 
                                                                            <span className="pl-2">10:00 am</span>
                                                                        </div>
                                                                        <div className="col14 fs14 fw400 pt-1">220 views</div>
                                                                    </div>
                                                                    <div className="col3 fs18 fw600 mb-3">Vblog</div>
                                                                    <hr className="social_hr" />
                                                                    <div className="fs14 col29 fw300"></div>
                                                                
                                                                </div>
                                                            </div>
                                                            </Col>
                                                            <Col lg={4} md={6} sm={6}> 
                                                            <div className="ngo_social"> 
                                                                <div className="p-3">
                                                                    <div className="media_list mb-3">
                                                                    <div className="elpVideo">
                                                                          <iframe width="100%" height="250" src="https://www.youtube.com/embed/B8G846WVA2I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                                    </div> 
                                                                        <div className="col14 fs14 fw400 pt-1">2 Feb 21 
                                                                            <span className="pl-2">10:00 am</span>
                                                                        </div>
                                                                        <div className="col14 fs14 fw400 pt-1">220 views</div>
                                                                    </div>
                                                                    <div className="col3 fs18 fw600 mb-3">Vblog</div>
                                                                    <hr className="social_hr" />
                                                                    <div className="fs14 col29 fw300"></div>
                                                                
                                                                </div>
                                                            </div>
                                                            </Col>
                                                            <Col lg={4} md={6} sm={6}> 
                                                            <div className="ngo_social"> 
                                                                <div className="p-3">
                                                                    <div className="media_list mb-3">
                                                                    <div className="elpVideo">
                                                                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/XMst5HoOS6c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                                    </div> 
                                                                        <div className="col14 fs14 fw400 pt-1">2 Feb 21 
                                                                            <span className="pl-2">10:00 am</span>
                                                                        </div>
                                                                        <div className="col14 fs14 fw400 pt-1">220 views</div>
                                                                    </div>
                                                                    <div className="col3 fs18 fw600 mb-3">Vblog</div>
                                                                    <hr className="social_hr" />
                                                                    <div className="fs14 col29 fw300"></div>
                                                                
                                                                </div>
                                                            </div>
                                                            </Col>
                                                            </Row>
                                                        </div>    
                                                  </div>
                                             </Tab>

                                             <Tab eventKey="Featured" title="Featured">
                                                  <div className="vlogListing">
                                                       Vlog2
                                                  </div>
                                             </Tab>

                                             <Tab eventKey="PressReleases" title="Press Releases">
                                                   <div className="vlogListing">
                                                        Vlog3
                                                   </div>
                                             </Tab>
                                        </Tabs>

                                        <div className="ml-auto w-100 mt-5 mb-5 d-flex justify-content-end">
                                             <div>
                                                  <div className="fs40 fw500">
                                                       Get in touch
                              </div>
                                                  <div className="col14 fs16 fw300 mb-2">
                                                       For all press inquiries, please email
                              </div>
                                                  <div className="col8 fs16 fw300">press@elphealth.com</div>
                                             </div>
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
export default ProfessinalBlog;
