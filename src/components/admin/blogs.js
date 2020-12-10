import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/navAdmin";
import Footer from "../core/footer";
import Sharebtnblue from "../../assets/images/sharebtnblue.svg";
import Ngoone from "../../assets/images/ngo1.svg";
import Ngotwo from "../../assets/images/ngo2.svg";
import Ngothree from "../../assets/images/ngo3.svg";
import ELPRxApiService from "../../common/services/apiService";

class Blogs extends Component {

    state = {
        blogList: [],
    }

    componentDidMount() {
        this._getBlogListHandler()
    }

    _getBlogListHandler = async () => {
        try {
            let response = await ELPRxApiService("blogListing");
            console.log('==>>DD', response);
            this.setState({
                blogList: response.data.data.blog_list
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="ngo_services media_details">
                    <Container>
                        <div>
                            <span >
                                <div style={{ width: '160px', marginTop: '20px', cursor: 'pointer' }} onClick={() => this.props.history.push('/createblog')} className="btnType1">
                                    CREATE BLOG
                                </div>
                            </span>
                        </div>

                        <div className="ngo_listing  mt-4 mb-4">

                            <Row className="mt-4">
                                {
                                    this.state.blogList.map(element => {
                                        return (
                                            <Col onClick={() => { this.props.history.push('/blogsDetail', { ...element }) }} lg={4} md={6} sm={6}> 
                                                <div className="ngo_social">
                                                    <Image src={element.bl_image} alt="" className="w-100" />
                                                    <div className="p-3">
                                                        <div className="media_list mb-3">
                                                            <div className="col14 fs14 fw400 pt-1">{element.bl_datetime}</div>
                                                            <div className="col14 fs14 fw400 pt-1">220 views</div>
                                                        </div>
                                                        <div className="col3 fs18 fw600 mb-3">{element.bl_title}</div>
                                                        <hr className="social_hr" />
                                                        <div className="fs14 col29 fw300" dangerouslySetInnerHTML={{ __html:element.bl_desc }}></div>
                                                      
                                                        {/* <div className="media_list">
                                                            <div className="col10 fs14 fw600 pointer">http:socialwelfare.com</div>
                                                            <div className="position-relative">
                                                                <Image src={Sharebtnblue} alt="Sharebtnblues" className="pointer" />
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }


                                {/* <div className="text-center w-100 mt-3">
                                    <Button className="btnTyp12">show more</Button>
                                </div> */}
                            </Row>
                        </div>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Blogs; 
