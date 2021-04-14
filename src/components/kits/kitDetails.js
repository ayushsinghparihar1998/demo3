import React, { useEffect, useState } from "react";
import {
    Button,
    Container,
    Row,
    Col,
    Image,
    Form
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import KitOne from "../../assets/images/kits.png";
import KitTwo from "../../assets/images/kits2.png";
import KitThree from "../../assets/images/kits3.png";
import RightArrow2 from "../../assets/images/rightarrow2.png";
import GiftBox from "../../assets/images/giftbox.png";
import Kits1 from "../../assets/images/kitd1.png";
import Slider from "react-slick";
import { useHistory, useLocation, useParams } from "react-router";
import ELPViewApiService from "../../common/services/apiService";
import { setLocalStorage } from "../../common/helpers/Utils";

const KitDetails = (props) => {
    const history = useHistory();
    const location = useLocation();
    const { id } = useParams();
    const goToKitList = () => history.push('/kitListings');
    const [kitsDetail, setKitsDetail] = useState(null);
    const [monthPlanIndex, setMonthPlanIndex] = useState(0);
    const buyNow = () => {
        history.push('/kit-checkout/'.concat(id));
        setLocalStorage("kit_buy",monthPlanIndex);
    };
    console.log("PARAMS ", id, history, location);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    useEffect(() => {
        ELPViewApiService("getkits_listdetails", { kt_id: id })
            .then((response) => {
                console.log("RESPONSE ", response);
                if (response.status === 200) {
                    const data = response.data.data;
                    console.log("DATA ", data)
                    const kitDetailList = data.kits_details_listing[0];
                    setKitsDetail(kitDetailList);
                }
            })
            .catch(err => console.log("ERROR CAUSED ", err));
    }, [id]);

    return (
        <div className="page__wrapper innerpage"> 
            <div className="main_baner">
                <NavBar {...props} />
            </div>
            <div className="kitDetailMain">   
                <Container>
                    <div className="kitDetailTwo mt-4 mb-4">
                        <div className="fs18 text-left fw500 mt-3 mb-5" onClick={goToKitList}><span className="col14 fw300 mr-1">Kits</span> /
                      <span className="col29 fs18 ml-1">Kit Details</span></div>

                        <Row>
                            {
                                kitsDetail && (
                                    <>

                                        <Col md={6}>
                                            <div className="detailsLeft">
                                                <div className="socialUser">
                                                    <div className="fs24 fw500 col64">{kitsDetail.kt_name}</div>
                                                    <ul>
                                                        <li><a className="faceBook"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a className="twiTter"><i className="fa fa-twitter"></i></a></li>
                                                        <li><a className="enveLope"><i className="fa fa-envelope"></i></a></li>
                                                        <li><a className="linkeDin"><i className="fa fa-linkedin"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="fw400 fs15 col14 mt-2">
                                                    {kitsDetail.kt_subheading}
                                                    {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard */}
                                                </div>

                                                <div className="thumbDetails">
                                                    <div>
                                                        <Slider {...settings}>
                                                            <div>
                                                                <Image src={kitsDetail.kt_image_url} alt="Kit" />
                                                            </div>
                                                            <div>
                                                                <Image src={kitsDetail.kt_image_url} alt="Kit" />
                                                            </div>
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

                                                <div className="overViews">
                                                    <div className="fs17 fw500 col14 mb-1">Description</div>
                                                    <div className="fw400 fs15 col14 mt-1" dangerouslySetInnerHTML={{ __html: kitsDetail.kt_desc }} />
                                                </div>

                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="detailMonth">
                                                <div className="fw500 fs16 col64">Months</div>
                                                <div className="monthPlan">
                                                    <ul>
                                                        {
                                                            kitsDetail.month_array.map((kitMonth, index) =>
                                                                <li>
                                                                    <div className="detailBtn">
                                                                        <Form.Check
                                                                            type="radio"
                                                                            label={`${kitMonth.kp_max_range_month} Months`}
                                                                            name={`${kitMonth.kp_max_range_month} Months`}
                                                                            id={`${kitMonth.kp_max_range_month} Months`}
                                                                            className={index === monthPlanIndex && "active"}
                                                                            onClick={() => { setMonthPlanIndex(index) }}
                                                                        />
                                                                    </div>
                                                                </li>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                                {
                                                    kitsDetail.month_array.filter((kitsMonth, index) => index === monthPlanIndex)
                                                        .map((kitMonth) =>
                                                            <div className="col64 fs24 fw300"><strong className="fw600">
                                                                <span className="mr-3 fs20 fw400 col14">
                                                                    <del><i className="fa fa-inr"></i> {kitMonth.kp_price}</del>
                                                                </span>
                                                                <i className="fa fa-inr"></i> {kitMonth.kp_discount}</strong> <span className="fs20">/ month</span>
                                                            </div>
                                                        )

                                                }
                                                <div className="byBtnmain">
                                                    <Button type="button" className="btnTyp5 byBtns" >Buy Now <span><Image src={RightArrow2} /></span></Button>

                                                    <Button type="button" className="btnTyp5 gifts" onClick={buyNow}>Give as a gift <span><Image src={GiftBox} /></span></Button>
                                                </div>

                                                <div className="overViews">
                                                    <div className="fs17 fw500 col14 mb-1">Overview</div>
                                                    {kitsDetail.kt_overview}
                                                </div>

                                            </div>
                                        </Col> 
                                    </>
                                )
                            }
                        </Row>
                    </div>

                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default KitDetails;



