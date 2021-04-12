import React, { useEffect, useState } from 'react';
import { Button, NavDropdown, Carousel, Container, Row, Col, Form, Tabs, Tab, Modal, Table } from "react-bootstrap";
import { Image } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from "react-router";
import ELPViewApiService from '../../../common/services/apiService';
import NavBar from "../../core/nav";
import Footer from "../../core/footer";
import Slider from "react-slick";
// import KitOne from "../../assets/images/kits.png";
import KitOne from "../../../assets/images/kits.png";
import KitTwo from "../../../assets/images/kits2.png";
import KitThree from "../../../assets/images/kits3.png";
import { Link } from "react-router-dom";
import Editicon from "../../../assets/images/edit_icon.svg";


const KitsDetailSA = () => {
    const history = useHistory();
    const location = useLocation();
    const { id } = useParams();
    const [kitObj, setKitObj] = useState();
    const editDetail = () => history.push(`/addKits/${id}`, location.state);

    useEffect(() => {
        ELPViewApiService("superadminget_kitsdetails", { kt_id: id }).then((result) => {

            if (result && result.status === 200) {
                console.log("result", result, result.data.data.kits_details_listing[0]);
                setKitObj(result.data.data.kits_details_listing[0]);
            }
        }).catch((error) => console.log(error));
    }, [id])
    if (!kitObj) {
        return 'Loading ...'
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar />
                </div>
                <div className="bg-grayarea">
                    <Container>
                        <Row>
                            <Col md={3} className="pr-1">
                                <div className="adminsidebar mt-4">
                                    <div className="inner_area">
                                        <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                                            Quick Links
                                </div>
                                        <div className="d-flex m-3 pb-3 border-bottom">
                                            <div>
                                                <div className="fs14 col28 fw500">
                                                    <Link to={{ pathname: `/admin` }}>Back</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={9} className="pl-1">
                                <div className="bg_lightBlue kitDetailMain">
                                    <div className="kitDetailTwo">
                                        <div className="kitsflex">
                                            <div className="fs22 fw600 col10">ELNP Kits</div>
                                            <div>
                                                <Button
                                                    type="button"
                                                    className="btnTyp12"
                                                    onClick={editDetail}
                                                >   
                                                    <Image
                                                        src={Editicon}
                                                        alt=""
                                                        className="mr-2"
                                                    />
                                                    Edit Details
                                                </Button>
                                            </div>
                                        </div>
                                        <Row>
                                            <Col md={6}>
                                                <div className="detailsLeft">
                                                    <div className="thumbDetails">
                                                        <div>
                                                            <Slider {...settings}>
                                                                <div>
                                                                    <Image src={kitObj.kt_image_url} alt="Kit" />
                                                                </div>
                                                                {/* <div>
                                                                    <Image src={KitTwo} alt="Kit" />
                                                                </div> */}
                                                            </Slider>
                                                        </div>
                                                        <div className="thumbImg">
                                                            <ul>
                                                                <li><Image src={KitOne} className="thumb1" /></li>
                                                                <li><Image src={KitTwo} className="thumb1" /></li>
                                                                <li><Image src={KitThree} className="thumb1" /></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div class="overViews">
                                                        <div class="fs17 fw500 col14 mb-1">Description</div>
                                                        <div class="fw400 fs15 col14 mt-1">
                                                            {kitObj.kt_desc}
                                                        </div>
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="detailMonthtwo">
                                                    <div className="fw500 col29 fs22 mt-4 mb-2">{kitObj.kt_name}</div>
                                                    <div className="fw400 col14 mb-3">
                                                        {kitObj.kt_subheading}
                                                    </div>

                                                    <div className="mb-4">
                                                        {
                                                            kitObj.month_array.map((kitsMonth) =>
                                                                <>
                                                                    <div className="fw500 fs18 col29 col14 mt-1">
                                                                        {kitsMonth.kp_max_range_month} Months:
                                                                    </div>
                                                                    <div className="fs16 fw400 col14">
                                                                        <span>Price:
                                                                            <strong className="fw500">
                                                                                {kitsMonth.kp_price}/-
                                                                            </strong>
                                                                        </span>
                                                                        <span className="ml-1 mr-1">|</span>
                                                                        <span>Discounted Price:
                                                                        <strong className="fw500">
                                                                                {kitsMonth.kp_discount_price}/-
                                                                        </strong>
                                                                        </span>
                                                                    </div>

                                                                </>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>


        </>
    )
}

export default KitsDetailSA; 