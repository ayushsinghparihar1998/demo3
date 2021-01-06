import React, { useEffect, useState } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Mediadetailone from "../../assets/images/mediadetail.svg";
import Sharebtn from "../../assets/images/sharebtn.png";
import ELPRxApiService from "../../common/services/apiService";


const Mediadetails = (props) => {

    const [blogDetail, setBlogDetail] = useState({})

    useEffect(() => {
        _getBlogDetailHandler();
    }, [])

    const _getBlogDetailHandler = async () => {
        try {
            let response = await ELPRxApiService("getBlogDetail", {
                bl_id: props.match.params.id
            })
            console.log(' detail response', response)
            setBlogDetail({ ...response.data.data.blog_list[0] })
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="page__wrapper innerpage">
            <div className="main_baner">
                <NavBar {...props} />
            </div>
            <div className="ngo_services media_details">
                <Container>
                    <div className="ngo_listing mt-4 mb-4">
                        <div className="col1 fw600 fs22 text-center w-100 mt-4 pt-3">
                            {blogDetail.bl_title}
                        </div>
                        <hr className="ngohr" />
                        <Row className="mt-4">
                            <Col lg={12}>
                                <div className="ngo_details mt-2">
                                    <Image src={blogDetail.bl_image} alt="" className="w-100" />
                                    <div className="pt-3 pb-3">
                                        {/* <div className="col1 fs18 fw600 mt-2">{blogDetail.bl_title}
                                        </div> */}
                                        <div className="col14 fs14 fw400 pt-1">
                                            {blogDetail.bl_datetime}
                                        </div>
                                        <div className="fs14 col28 fw300 pt-3 line_txt" dangerouslySetInnerHTML={{ __html: blogDetail.bl_desc }}></div>

                                        {/* <div className="mdetalinput">
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    className="inputTyp2 mdetail"
                                                    id="outlined-pwd"
                                                    label="Password"
                                                    variant="outlined"
                                                    name="password"
                                                />
                                                <Button className=""><Image src={Sharebtn} alt="Sharebtn" /></Button>
                                            </Form.Group>
                                        </div> */}

                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );

}
export default Mediadetails;

