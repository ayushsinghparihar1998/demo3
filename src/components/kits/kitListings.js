import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Image
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
// import KitOne from "../../assets/images/kits.png";
// import KitTwo from "../../assets/images/kits2.png";
// import KitThree from "../../assets/images/kits3.png";
import ELPViewApiService from "../../common/services/apiService";
import { useHistory } from "react-router";


const KitListings = (props) => {
    const [kitsListing, setKitListing] = useState();
    const [, setRecordCount] = useState();
    const history = useHistory();
    const openKitDetail = (id)=> history.push(`kitDetails/${id}`) ;
    useEffect(() => {
        ELPViewApiService("getkits_list", { "count": 10, "offset": 1 })
            .then((response) => {
                if (response && response.data && response.data.status === "success") {
                    let data = response.data.data;
                    console.log("RESPONSE ", data);
                    setKitListing(data.kits_listing);
                    setRecordCount(data.totalRecordCount);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    return (
        <div className="page__wrapper innerpage">
            <div className="main_baner">
                <NavBar {...props} />
            </div>
            <div className="kitListings">
                <Container>
                    <div className="kitplans mt-4 mb-4">
                        <div className="fs28 col8 text-center fw500 mt-3 mb-5">KITS PLAN</div>
                        <Row>
                            {
                                kitsListing &&
                                kitsListing.map((kitList) =>
                                    <Col md={4} sm={6}>
                                        <div className="mb-4" onClick={()=>{openKitDetail(kitList.kt_id)}}>
                                            <Image src={kitList.kt_image_url} className="emotions" />
                                            <div className="col64 fw500 fs22 mb-1 mt-3">{kitList.kt_name}</div>
                                            <div className="fs16 col14 fw400 mb-1" dangerouslySetInnerHTML={{__html : kitList.kt_desc}}/>
                                            <div className="d-flex mb-2">
                                                <span className="italics col14 fs16 fw400 mr-2">From</span>
                                                <span className=""><i class="fa fa-inr" aria-hidden="true"></i>{kitList.month_array.length && kitList.month_array[0].kp_price}</span>
                                                <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i>{kitList.month_array.length && kitList.month_array[0].kp_discount}</span>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            }
                            {/* <Col md={4} sm={6}>
                                <div className="mb-4">
                                    <Image src={KitOne} className="emotions" />
                                    <div className="col64 fw500 fs22 mb-1 mt-3">Emotional Welness Kit</div>
                                    <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                    <div className="d-flex mb-2">
                                        <span className="italics col14 fs16 fw400 mr-2">From</span>
                                        <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="mb-4">
                                    <Image src={KitTwo} className="emotions" />
                                    <div className="col64 fw500 fs22 mb-1 mt-3">I’M Sexy</div>
                                    <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                    <div className="d-flex mb-2">
                                        <span className="italics col14 fs16 fw400 mr-2">From</span>
                                        <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="mb-4">
                                    <Image src={KitThree} className="emotions" />
                                    <div className="col64 fw500 fs22 mb-1 mt-3">Feeling Fab</div>
                                    <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                    <div className="d-flex mb-2">
                                        <span className="italics col14 fs16 fw400 mr-2">From</span>
                                        <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="mb-4">
                                    <Image src={KitOne} className="emotions" />
                                    <div className="col64 fw500 fs22 mb-1 mt-3">Feeling Fab</div>
                                    <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                    <div className="d-flex mb-2">
                                        <span className="italics col14 fs16 fw400 mr-2">From</span>
                                        <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="mb-4">
                                    <Image src={KitTwo} className="emotions" />
                                    <div className="col64 fw500 fs22 mb-1 mt-3">I’M Sexy</div>
                                    <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                    <div className="d-flex mb-2">
                                        <span className="italics col14 fs16 fw400 mr-2">From</span>
                                        <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="mb-4">
                                    <Image src={KitThree} className="emotions" />
                                    <div className="col64 fw500 fs22 mb-1 mt-3">Emotional Welness Kit</div>
                                    <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                    <div className="d-flex mb-2">
                                        <span className="italics col14 fs16 fw400 mr-2">From</span>
                                        <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="mb-4">
                                    <Image src={KitOne} className="emotions" />
                                    <div className="col64 fw500 fs22 mb-1 mt-3">I’M Sexy</div>
                                    <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                    <div className="d-flex mb-2">
                                        <span className="italics col14 fs16 fw400 mr-2">From</span>
                                        <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="mb-4">
                                    <Image src={KitTwo} className="emotions" />
                                    <div className="col64 fw500 fs22 mb-1 mt-3">Feeling Fab</div>
                                    <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                    <div className="d-flex mb-2">
                                        <span className="italics col14 fs16 fw400 mr-2">From</span>
                                        <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="mb-4">
                                    <Image src={KitThree} className="emotions" />
                                    <div className="col64 fw500 fs22 mb-1 mt-3">Emotional Welness Kit</div>
                                    <div className="fs16 col14 fw400 mb-1">Lorem Ipsum is simply dummy text of the printing</div>
                                    <div className="d-flex mb-2">
                                        <span className="italics col14 fs16 fw400 mr-2">From</span>
                                        <span className="prices col26"><i class="fa fa-inr" aria-hidden="true"></i> 1630</span>
                                    </div>
                                </div>
                            </Col> */}
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}
export default KitListings; 
