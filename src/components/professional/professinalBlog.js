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
          this.getPressCoverage()
          this.getPressReleases()
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
                    this.setState({ featured: res.data.data.press_blog_list })

                    console.log('press featured data===>', res.data.data.press_blog_list)
               })
               .catch((err) => {
                    console.log(err);
               })
     }

     getPressCoverage = () => {
          ELPRxApiService("getpressblog", { offset: 1, count: 10, category: "'Coverage'" })
               .then((res) => {
                    this.setState({ coverage: res.data.data.press_blog_list })
                    console.log('press coverage data===>', res)
               })
               .catch((err) => {
                    console.log(err);
               })
     }

     getPressReleases = () => {
          ELPRxApiService("getpressblog", { offset: 1, count: 10, category: "'Press Release'" })
               .then((res) => {
                    this.setState({ pressReleases: res.data.data.press_blog_list })

                    console.log('press releases data===>', res)
               })
               .catch((err) => {
                    console.log(err);
               })
     }

     render() {
          return (
               <div className="page__wrapper innerpage">
                    <div className="main_baner">
                         <NavBar {...this.props} />
                    </div>
                    <div className="profile_layout pt-4 pb-5">
                         <Container>
                              <div className="processBlog w-100">
                                   <div className="text-center fs28 fw500 col64 mb-2">Press</div>
                                   <div className="mxw-50 text-center col14 fs16 fw300 m-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>

                                   <div className="blogMain">
                                        <Tabs defaultActiveKey="Featured" id="uncontrolled-tab-example" onSelect={(k) => k === 'Featured' ? this.getPressFeatured() : k === 'Coverage' ? this.getPressCoverage() : k === 'PressReleases' ? this.getPressReleases() : null}>

                                             <Tab eventKey="Featured" title="Featured" >
                                                  <div className="featuredTab">
                                                       <Row>
                                                            {this.state.featured && this.state.featured.map(data =>
                                                                 <>
                                                                      <Col md={7} className="mb-4">
                                                                           <Image src={data.pbl_image} className="w-100" />
                                                                           <div className="fs18 col64 fw600 mt-3 mb-2" onClick={() => this.setState({ showDetails: true })}>{data.pbl_title}</div>
                                                                           {this.state.showDetails ? <div className="col14 fs16 fw300" dangerouslySetInnerHTML={{ __html: data.pbl_desc }} ></div> : null}
                                                                      </Col>

                                                                 </>
                                                            )}

                                                       </Row>
                                                       <div className="mt-4 mb-4 border_blog"></div>

                                                  </div>
                                             </Tab>

                                             <Tab eventKey="Coverage" title="Coverage">
                                                  <div className="coverageTab">
                                                       <div className="coverageList">
                                                            <Row>
                                                                 {this.state.coverage && this.state.coverage.map((data, i) =>
                                                                      this.state.offset > i ? (
                                                                           <>
                                                                                <Col md={6}>
                                                                                     {this.state.showDetails ?
                                                                                          <div className="fw600 fs16 col64" dangerouslySetInnerHTML={{ __html: data.pbl_desc }}></div>
                                                                                          : null}
                                                                                </Col>
                                                                                <Col md={3}>
                                                                                     <div className="fw400 fs15 col14">{data.pbl_time}</div>
                                                                                </Col>
                                                                                <Col md={3}>
                                                                                     <div className="fw400 fs15 col14" onClick={() => this.setState({ showDetails: true })}>{data.pbl_title}</div>
                                                                                </Col>
                                                                           </>
                                                                      ) : null
                                                                 )}

                                                            </Row>
                                                       </div>

                                                  </div>

                                                  {this.state.coverage && this.state.offset < this.state.coverage.length ?
                                                       <div className="text-center mt-5 mb-5">
                                                            <Button className="btnTyp12" onClick={() => { this.setState({ offset: this.state.offset + 6 }) }}> show more </Button>
                                                       </div> : null
                                                  }
                                             </Tab>

                                             <Tab eventKey="PressReleases" title="Press Releases">
                                                  <div className="coverageTab">
                                                       <div className="coverageList">
                                                            <Row>
                                                                 {this.state.pressReleases && this.state.pressReleases.map((data, i) => {
                                                                      return this.state.offset > i ?
                                                                           <>
                                                                                <Col md={8}>
                                                                                     <div className="fw600 fs16 col64" dangerouslySetInnerHTML={{ __html: data.pbl_desc }}>

                                                                                     </div>
                                                                                </Col>
                                                                                <Col md={4}>
                                                                                     <div className="fw400 fs15 col14">{data.pbl_time}</div>
                                                                                </Col>
                                                                           </>
                                                                           :
                                                                           null
                                                                 }

                                                                 )}

                                                            </Row>
                                                       </div>

                                                  </div>
                                                  {this.state.pressReleases && this.state.offset < this.state.pressReleases.length

                                                       ?
                                                       <div className="text-center mt-5 mb-5">
                                                            <Button className="btnTyp12" onClick={() => { this.setState({ offset: this.state.offset + 6 }) }}> show more </Button>
                                                       </div> :
                                                       null

                                                  }

                                             </Tab>
                                        </Tabs>

                                        <div className="ml-auto w-100 pt-5 pb-5 mt-5 mb-5 d-flex justify-content-end">
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
