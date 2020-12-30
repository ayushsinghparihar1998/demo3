import React, {Component} from "react";
import {Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab} from "react-bootstrap";
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
import blogclock from "../../assets/images/blogclock.png";
import {connect} from 'react-redux';
import ReactStars from "react-rating-stars-component";
import {Popover} from 'antd';
import ELPRxApiService from "../../common/services/apiService";


class ProfessionalBlogList extends Component {


    constructor() {
        super();
        this.state = {
            blogEat: [],
            blogLuv: [],
            blogPray: [],
            blogAll: [],
            blogEatCount: 0,
            blogLuvCount: 0,
            blogPrayCount: 0,
            blogAllCount: 0,
            blogDetailed: [],
            latestBlogs: null,
            showDetails: false,
            // offset: 6,
            offset: 1,
            count: 10,
            email: ""
        }
    }

    componentDidMount() {
        this.getBlogAll(this.state.offset, this.state.count, false)
        this.getLatestBlogs()

    }

    getLatestBlogs = () => {
        ELPRxApiService("getlatestblog", {})
            .then((res) => {
                this.setState({latestBlogs: res.data.data.blog_list})
                console.log('latest blogs data===>', res.data.data.blog_list)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    getBlogEat = (offset, count, isTabSwitched) => {
        ELPRxApiService("getblog", {offset, count, category: "'Eat'"})
            .then((res) => {
                if (isTabSwitched) {
                    this.setState({
                        blogEat: res.data.data.blog_list,
                        blogEatCount: res.data.data.totalRecordCount,
                        showDetails: false
                    })
                } else {
                    this.setState({
                        blogEat: [...this.state.blogEat, ...res.data.data.blog_list],
                        blogEatCount: res.data.data.totalRecordCount,
                        showDetails: false
                    })
                    console.log('blog data===>', res)
                }

            })
            .catch((err) => {
                console.log(err);
            })
    }

    getBlogLuv = (offset, count, isTabSwitched) => {
        ELPRxApiService("getblog", {offset, count, category: "'Luv'"})
            .then((res) => {
                if (isTabSwitched) {
                    this.setState({
                        blogLuv: res.data.data.blog_list,
                        blogLuvCount: res.data.data.totalRecordCount,
                        showDetails: false
                    })
                } else {
                    this.setState({
                        blogLuv: [...this.state.blogLuv, ...res.data.data.blog_list],
                        blogLuvCount: res.data.data.totalRecordCount,
                        showDetails: false
                    })
                    console.log('blog data===>', res)
                }

            })
            .catch((err) => {
                console.log(err);
            })
    }

    getBlogPray = (offset, count, isTabSwitched) => {
        ELPRxApiService("getblog", {offset, count, category: "'Pray'"})
            .then((res) => {
                if (isTabSwitched) {
                    this.setState({
                        blogPray: res.data.data.blog_list,
                        blogPrayCount: res.data.data.totalRecordCount,
                        showDetails: false
                    })

                } else {
                    this.setState({
                        blogPray: [...this.state.blogPray, ...res.data.data.blog_list],
                        blogPrayCount: res.data.data.totalRecordCount,
                        showDetails: false
                    })
                    console.log('blog data===>', res)
                }
            })
            .catch((err) => {
                console.log(err);
            })
        } 
    getBlogAll = () => {
        ELPRxApiService("getblog", { offset: 1, count: 10, category: "'Eat','Luv','Pray'" })
            .then((res) => {
                if (isTabSwitched) {
                    this.setState({
                        blogAll: res.data.data.blog_list,
                        blogAllCount: res.data.data.totalRecordCount,
                        showDetails: false
                    })
                } else {
                    this.setState({
                        blogAll: [...this.state.blogAll, ...res.data.data.blog_list],
                        blogAllCount: res.data.data.totalRecordCount,
                        showDetails: false
                    })
                    console.log('blog data===>', res)
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }     
    getBlogdetails = (blog_id) => {
        ELPRxApiService("getBlogdetails", {bl_id: blog_id})
            .then((res) => {
                this.setState({
                    blogDetailed: res.data.data.blog_list,
                    showDetails: true
                }, () => console.log('showDetails', this.state.showDetails, 'blogDetail', this.state.blogDetailed))
                console.log('blog detailed data===>', res)
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
                <div className="profile_layout pt-4">
                    <Container>
                        <div className="processBlog pb-5 w-100">
                            <div className="text-center fs28 fw500 col64 mb-2">Blog</div>
                            <div className="mxw-50 text-center col14 fs16 fw300 m-auto pb-5">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </div>

                            <div className="blogMain ListsUI">
                                <Tabs
                                    onSelect={(k) => k === 'EAT' ? this.getBlogEat(this.state.offset, this.state.count, true) : k === 'LUV' ? this.getBlogLuv(this.state.offset, this.state.count, true) : k === 'PRAY' ? this.getBlogPray(this.state.offset, this.state.count, true) : this.getBlogAll(this.state.offset, this.state.count, true)}
                                    defaultActiveKey="All" id="uncontrolled-tab-example">
                                    <Tab value="EAT" eventKey="All" title="All">
                                        <div className="featuredTab">
                                            <Row>
                                                {/* Default listing  */}
                                                {!this.state.showDetails ? (
                                                    <>
                                                        <Col md={7}>
                                                            <Row>
                                                                {this.state.blogAll && this.state.blogAll.map((data, i) =>
                                                                    this.state.offset > i ? (
                                                                        <Col md={12} className="mb-4 mdblogs">
                                                                            <div className="fw600 fs20 col64 mb-3">
                                                                                {data.bl_title}
                                                                            </div>
                                                                            <Image src={data.bl_image} className="w-100"
                                                                                   onClick={() => {
                                                                                       this.getBlogdetails(data.bl_id)
                                                                                   }}/>
                                                                            <div className="blogClocks mb-3 mt-3">
                                                                                <Image src={BlogProcessSix}
                                                                                       className="wSet-50 mr-3"/>
                                                                                <div>
                                                                                    <span className="fs14 fw400 col14">Written by <span
                                                                                        className="col8">{data.bl_written_by}</span> </span>
                                                                                    <br/>
                                                                                    <span>
                                                                                    <Image src={blogclock}
                                                                                           className="wSet-20 mr-2"/>
                                                                                        11 Minute read
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col64 fs16 fw400"
                                                                                 dangerouslySetInnerHTML={{__html: data.bl_desc}}>
                                                                            </div>
                                                                        </Col>
                                                                    )}


                                                                </Row>

                                                                {this.state.blogAllCount > this.state.offset * this.state.count ?
                                                                    <div className="text-center mt-5 mb-5">
                                                                        <Button className="btnTyp12" onClick={() => {
                                                                            this.getBlogAll(this.state.offset + 1, this.state.count, false)
                                                                        }}> show more </Button>
                                                                    </div> : null}

                                                            </Col>
                                                        </>

                                                    ) :
                                                    <>
                                                        {/* Detailed Blog */}
                                                        {this.state.blogDetailed && this.state.blogDetailed.map(data =>
                                                            <Col md={7}>
                                                                <div className="fw600 fs20 col64 mb-4">
                                                                    {data.bl_title}
                                                                </div>
                                                                <Image src={data.bl_image} className="w-100"/>
                                                                <div className="blogClocks mb-3 mt-3">
                                                                    <Image src={BlogProcessSix}
                                                                           className="wSet-50 mr-3"/>
                                                                    <div>
                                                                        <span
                                                                            className="fs18 fw400 col14">Written by <span
                                                                            className="col8">{data.bl_written_by}</span> </span>
                                                                        <span className="ml-3">
                                                                            <Image src={blogclock}
                                                                                   className="wSet-20 mr-2"/>11 Minute read</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col14 fs18 fw400">
                                                                    {data.bl_written_by}
                                                                </div>
                                                            </Col>
                                                        )}
                                                    </>
                                                }


                                                <Col md={5}>
                                                    <div className="fs20 fw600 col64 mb-4 pb-3">LATEST</div>
                                                    <div className="mb-4 pb-2">
                                                        {this.state.latestBlogs && this.state.latestBlogs.map(data =>
                                                            <Row>
                                                                <Col md={9}>
                                                                    <div className="">
                                                                        <div className="col64 fs17 fw500" onClick={() => this.getBlogdetails(data.bl_id)}>
                                                                            {data.bl_title}
                                                                        </div>
                                                                        <div
                                                                            className="col14 fs16 fw300 mt-3">{data.bl_time}</div>
                                                                    </div>
                                                                </Col>
                                                                <Col md={3}>
                                                                    <Image src={data.bl_image} className="w-100" onClick={() => this.getBlogdetails(data.bl_id)}/>
                                                                </Col>
                                                            </Row>
                                                        )}

                                                    </div>


                                                </Col>
                                            </Row>
                                            {/* <div className="mt-4 mb-4 border_blog"></div> */}

                                            <div className="subscribe_here2 eatBlog mt-5 mb-5">
                                                <Container>
                                                    <Row>
                                                        <Col md={5} lg={5}>
                                                            <div className="subscribe_left">
                                                                <div>
                                                                    <div className="fs36 col64 fw600 w-100">Subscribe
                                                                        Here
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
                                                                    <Form.Group className="fgroups"
                                                                                controlId="formBasicEmail">
                                                                        <Form.Control
                                                                            type="email"
                                                                            placeholder="Email address"
                                                                            className="inputTyp1 fs20"
                                                                            name="email"
                                                                            value={this.state.email}
                                                                            onChange={(e) => this.setState({email: e.target.value})}
                                                                        />
                                                                    </Form.Group>

                                                                </Form>
                                                            </div>
                                                        </Col>
                                                        <Col md={2} lg={2}>
                                                            <div className="mt-2">
                                                                <Button variant="primary"
                                                                        onClick={() => {
                                                                            this.onSubscribe()
                                                                        }}
                                                                        type="submit" className="btnTyp2">
                                                                    SUBSCRIBE
                                                                </Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>

                                            </div>
                                        </div>
                                    </Tab>


                                    <Tab eventKey="EAT" title="EAT">
                                        <div className="featuredTab">
                                            <Row>
                                                {/* Default listing  */}
                                                {!this.state.showDetails ? (
                                                        <Col md={7}>
                                                            <Row>
                                                                {this.state.blogEat.length === 0 ? 'No Data Found' : this.state.blogEat.map((data, i) =>
                                                                        <Col md={6} className="mb-4">
                                                                            <div className="fw600 fs20 col64 mb-3">
                                                                                {data.bl_title}
                                                                            </div>
                                                                            <Image src={data.bl_image} className="w-100"
                                                                                   onClick={() => this.getBlogdetails(data.bl_id)}/>
                                                                            <div className="blogClocks mb-3 mt-3">
                                                                                <Image src={BlogProcessSix}
                                                                                       className="wSet-50 mr-3"/>
                                                                                <div>
                                                                                    <span className="fs14 fw400 col14">Written by <span
                                                                                        className="col8">{data.bl_written_by}</span> </span>
                                                                                    <br/>
                                                                                    <span>
                                                                                <Image src={blogclock}
                                                                                       className="wSet-20 mr-2"/>
                                                        11 Minute read
                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col64 fs16 fw400"
                                                                                 dangerouslySetInnerHTML={{__html: data.bl_desc}}>

                                                                            </div>
                                                                        </Col>
                                                                )}
                                                            </Row>

                                                            {this.state.blogEatCount > this.state.offset * this.state.count ?
                                                                <div className="text-center mt-5 mb-5">
                                                                    <Button className="btnTyp12" onClick={() => {
                                                                        this.getBlogEat(this.state.offset + 1, this.state.count, false)
                                                                    }}> show more </Button>
                                                                </div> : null}
                                                        </Col>
                                                    ) :
                                                    <>
                                                        {/* Detailed Blog */}
                                                        {this.state.blogDetailed && this.state.blogDetailed.map(data =>
                                                            <Col md={7}>
                                                                <div className="fw600 fs20 col64 mb-4">
                                                                    {data.bl_title}
                                                                </div>
                                                                <Image src={data.bl_image} className="w-100"/>
                                                                <div className="blogClocks mb-3 mt-3">
                                                                    <Image src={BlogProcessSix}
                                                                           className="wSet-50 mr-3"/>
                                                                    <div>
                                                                        <span
                                                                            className="fs18 fw400 col14">Written by <span
                                                                            className="col8">{data.bl_written_by}</span> </span>
                                                                        <span className="ml-3">
                                                                            <Image src={blogclock}
                                                                                   className="wSet-20 mr-2"/>11 Minute read</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col14 fs18 fw400">
                                                                    {data.bl_written_by}
                                                                </div>
                                                            </Col>
                                                        )}
                                                    </>
                                                }

                                                <Col md={5}>
                                                    <div className="fs20 fw600 col64 mb-4 pb-3">LATEST</div>
                                                    <div className="mb-4 pb-2">
                                                        {this.state.latestBlogs && this.state.latestBlogs.map(data =>
                                                            <Row>
                                                                <Col md={9}>
                                                                    <div className="">
                                                                        <div className="col64 fs17 fw500" onClick={() => this.getBlogdetails(data.bl_id)}>
                                                                            {data.bl_title}
                                                                        </div>
                                                                        <div
                                                                            className="col14 fs16 fw300 mt-3">{data.bl_time}</div>
                                                                    </div>
                                                                </Col>
                                                                <Col md={3}>
                                                                    <Image src={data.bl_image} className="w-100" onClick={() => this.getBlogdetails(data.bl_id)}/>
                                                                </Col>
                                                            </Row>
                                                        )}

                                                    </div>


                                                </Col>
                                            </Row>
                                            {/* <div className="mt-4 mb-4 border_blog"></div> */}

                                            <div className="subscribe_here2 eatBlog mt-5 mb-5">
                                                <Container>
                                                    <Row>
                                                        <Col md={5} lg={5}>
                                                            <div className="subscribe_left">
                                                                <div>
                                                                    <div className="fs36 col64 fw600 w-100">Subscribe
                                                                        Here
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
                                                                    <Form.Group className="fgroups"
                                                                                controlId="formBasicEmail">
                                                                        <Form.Control
                                                                            type="email"
                                                                            placeholder="Email address"
                                                                            className="inputTyp1 fs20"
                                                                            name="email"
                                                                            value={this.state.email}
                                                                            onChange={(e) => this.setState({email: e.target.value})}
                                                                        />
                                                                    </Form.Group>

                                                                </Form>
                                                            </div>
                                                        </Col>
                                                        <Col md={2} lg={2}>
                                                            <div className="mt-2">
                                                                <Button variant="primary"
                                                                        onClick={() => {
                                                                            this.onSubscribe()
                                                                        }}
                                                                        type="submit" className="btnTyp2">
                                                                    SUBSCRIBE
                                                                </Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>

                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="LUV" title="LUV">
                                        <div className="coverageTab">
                                            <Row>
                                                {/* Default listing  */}
                                                {!this.state.showDetails ? (
                                                        <Col md={7}>
                                                            <Row>
                                                                {this.state.blogLuv.length == 0 ? 'No Data Found' : this.state.blogLuv.map((data, i) =>

                                                                    <Col md={6} className="mb-4">
                                                                        <div className="fw600 fs20 col64 mb-3">
                                                                            {data.bl_title}
                                                                        </div>
                                                                        <Image src={data.bl_image} className="w-100"
                                                                               onClick={() => this.getBlogdetails(data.bl_id)}/>
                                                                        <div className="blogClocks mb-3 mt-3">
                                                                            <Image src={BlogProcessSix}
                                                                                   className="wSet-50 mr-3"/>
                                                                            <div>
                                                                                <span className="fs14 fw400 col14">Written by <span
                                                                                    className="col8">{data.bl_written_by}</span> </span>
                                                                                <br/>
                                                                                <span>
                                                                                <Image src={blogclock}
                                                                                       className="wSet-20 mr-2"/>
                                                                                    11 Minute read
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col64 fs16 fw400"
                                                                             dangerouslySetInnerHTML={{__html: data.bl_desc}}>

                                                                        </div>
                                                                    </Col>
                                                                )}
                                                            </Row>
                                                            {this.state.blogLuvCount > this.state.offset * this.state.count ?
                                                                <div className="text-center mt-5 mb-5">
                                                                    <Button className="btnTyp12" onClick={() => {
                                                                        this.getBlogLuv(this.state.offset + 1, this.state.count, false)
                                                                    }}> show more </Button>
                                                                </div> : null}
                                                        </Col>
                                                    ) :
                                                    <>
                                                        {/* Detailed Blog */}
                                                        {this.state.blogDetailed && this.state.blogDetailed.map(data =>
                                                            <Col md={7}>
                                                                <div className="fw600 fs20 col64 mb-4">
                                                                    {data.bl_title}
                                                                </div>
                                                                <Image src={data.bl_image} className="w-100"/>
                                                                <div className="blogClocks mb-3 mt-3">
                                                                    <Image src={BlogProcessSix}
                                                                           className="wSet-50 mr-3"/>
                                                                    <div>
                                                                        <span
                                                                            className="fs18 fw400 col14">Written by <span
                                                                            className="col8">{data.bl_written_by}</span> </span>
                                                                        <span className="ml-3">
                                                                            <Image src={blogclock}
                                                                                   className="wSet-20 mr-2"/>11 Minute read</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col14 fs18 fw400">
                                                                    {data.bl_written_by}
                                                                </div>
                                                            </Col>
                                                        )}
                                                    </>
                                                }
                                                <Col md={5}>
                                                    <div className="fs20 fw600 col64 mb-4 pb-3">LATEST</div>
                                                    <div className="mb-4 pb-2">
                                                        {this.state.latestBlogs && this.state.latestBlogs.map(data =>
                                                            <Row>
                                                                <Col md={9}>
                                                                    <div className="">
                                                                        <div className="col64 fs17 fw500" onClick={() => this.getBlogdetails(data.bl_id)}>
                                                                            {data.bl_title}
                                                                        </div>
                                                                        <div
                                                                            className="col14 fs16 fw300 mt-3">{data.bl_time}</div>
                                                                    </div>
                                                                </Col>
                                                                <Col md={3}>
                                                                    <Image src={data.bl_image} className="w-100" onClick={() => this.getBlogdetails(data.bl_id)}/>
                                                                </Col>
                                                            </Row>
                                                        )}

                                                    </div>


                                                </Col>
                                            </Row>
                                            {/* <div className="mt-4 mb-4 border_blog"></div> */}

                                            <div className="subscribe_here2 eatBlog mt-5 mb-5">
                                                <Container>
                                                    <Row>
                                                        <Col md={5} lg={5}>
                                                            <div className="subscribe_left">
                                                                <div>
                                                                    <div className="fs36 col64 fw600 w-100">Subscribe
                                                                        Here
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
                                                                    <Form.Group className="fgroups"
                                                                                controlId="formBasicEmail">
                                                                        <Form.Control
                                                                            type="email"
                                                                            placeholder="Email address"
                                                                            className="inputTyp1 fs20"
                                                                            name="email"
                                                                            value={this.state.email}
                                                                            onChange={(e) => this.setState({email: e.target.value})}
                                                                        />
                                                                    </Form.Group>

                                                                </Form>
                                                            </div>
                                                        </Col>
                                                        <Col md={2} lg={2}>
                                                            <div className="mt-2">
                                                                <Button variant="primary"
                                                                        onClick={() => {
                                                                            this.onSubscribe()
                                                                        }}
                                                                        type="submit" className="btnTyp2">
                                                                    SUBSCRIBE
                                                                </Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>

                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="PRAY" title="PRAY">
                                        <div className="coverageTab">
                                            <Row>
                                                {/* Default listing  */}
                                                {!this.state.showDetails ? (
                                                        <Col md={7}>
                                                            <Row>

                                                                {this.state.blogPray.length !== 0 ? this.state.blogPray.map((data, i) =>

                                                                        <Col md={6} className="mb-4">
                                                                            <div className="fw600 fs20 col64 mb-3">
                                                                                {data.bl_title}
                                                                            </div>
                                                                            <Image src={data.bl_image} className="w-100"
                                                                                   onClick={() => this.getBlogdetails(data.bl_id)}/>
                                                                            <div className="blogClocks mb-3 mt-3">
                                                                                <Image src={BlogProcessSix}
                                                                                       className="wSet-50 mr-3"/>
                                                                                <div>
                                                                                    <span className="fs14 fw400 col14">Written by <span
                                                                                        className="col8">{data.bl_written_by}</span> </span>
                                                                                    <br/>
                                                                                    <span>
                                                                                <Image src={blogclock}
                                                                                       className="wSet-20 mr-2"/>
                                                         11 Minute read
                                                     </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col64 fs16 fw400"
                                                                                 dangerouslySetInnerHTML={{__html: data.bl_desc}}>

                                                                            </div>
                                                                        </Col>
                                                                ) : 'No Data Found'}
                                                            </Row>
                                                            {this.state.blogPrayCount > this.state.offset * this.state.count ?
                                                                <div className="text-center mt-5 mb-5">
                                                                    <Button className="btnTyp12" onClick={() => {
                                                                        this.getBlogPray(this.state.offset + 1, this.state.count, false)
                                                                    }}> show more </Button>
                                                                </div> : null}
                                                        </Col>
                                                    ) :
                                                    (this.state.blogDetailed.length !== 0 && this.state.blogPray.length !== 0 ? <>
                                                                {this.state.blogDetailed.map(data =>
                                                                    <Col md={7}>
                                                                        <div className="fw600 fs20 col64 mb-4">
                                                                            {data.bl_title}
                                                                        </div>
                                                                        <Image src={data.bl_image} className="w-100"/>
                                                                        <div className="blogClocks mb-3 mt-3">
                                                                            <Image src={BlogProcessSix}
                                                                                   className="wSet-50 mr-3"/>
                                                                            <div>
                                                                                <span className="fs18 fw400 col14">Written by <span
                                                                                    className="col8">{data.bl_written_by}</span> </span>
                                                                                <span className="ml-3">
                                                                            <Image src={blogclock}
                                                                                   className="wSet-20 mr-2"/>11 Minute read</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col14 fs18 fw400">
                                                                            {data.bl_written_by}
                                                                        </div>
                                                                    </Col>
                                                                )}
                                                            </> :
                                                            (
                                                                <Col md={7}>
                                                                    <Row>
                                                                        <Col md={6} className="mb-4">
                                                                            <div className="fw600 fs20 col64 mb-3">
                                                                            </div>
                                                                            <div className="blogClocks mb-3 mt-3">
                                                                                <div>
                                                                                <span>
                                                                                    No Data Found
                                                                </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col64 fs16 fw400">
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </Col>

                                                            )
                                                    )
                                                }

                                                <Col md={5}>
                                                    <div className="fs20 fw600 col64 mb-4 pb-3">LATEST</div>
                                                    <div className="mb-4 pb-2">
                                                        {this.state.latestBlogs && this.state.latestBlogs.map(data =>
                                                            <Row>
                                                                <Col md={9}>
                                                                    <div className="">
                                                                        <div className="col64 fs17 fw500" onClick={() => this.getBlogdetails(data.bl_id)}>
                                                                            {data.bl_title}
                                                                        </div>
                                                                        <div
                                                                            className="col14 fs16 fw300 mt-3">{data.bl_time}</div>
                                                                    </div>
                                                                </Col>
                                                                <Col md={3}>
                                                                    <Image src={data.bl_image} className="w-100" onClick={() => this.getBlogdetails(data.bl_id)}/>
                                                                </Col>
                                                            </Row>
                                                        )}

                                                    </div>


                                                </Col>
                                            </Row>
                                            {/* <div className="mt-4 mb-4 border_blog"></div> */}

                                            <div className="subscribe_here2 eatBlog mt-5 mb-5">
                                                <Container>
                                                    <Row>
                                                        <Col md={5} lg={5}>
                                                            <div className="subscribe_left">
                                                                <div>
                                                                    <div className="fs36 col64 fw600 w-100">Subscribe
                                                                        Here
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
                                                                    <Form.Group className="fgroups"
                                                                                controlId="formBasicEmail">
                                                                        <Form.Control
                                                                            type="email"
                                                                            placeholder="Email address"
                                                                            className="inputTyp1 fs20"
                                                                            name="email"
                                                                            value={this.state.email}
                                                                            onChange={(e) => this.setState({email: e.target.value})}
                                                                        />
                                                                    </Form.Group>

                                                                </Form>
                                                            </div>
                                                        </Col>
                                                        <Col md={2} lg={2}>
                                                            <div className="mt-2">
                                                                <Button variant="primary"
                                                                        onClick={() => {
                                                                            this.onSubscribe()
                                                                        }}
                                                                        type="submit" className="btnTyp2">
                                                                    SUBSCRIBE
                                                                </Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>

                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>

                            </div>
                        </div>
                    </Container>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ProfessionalBlogList;

