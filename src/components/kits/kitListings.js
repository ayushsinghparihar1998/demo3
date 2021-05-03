import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Image
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import ELPViewApiService from "../../common/services/apiService";
import { useHistory } from "react-router";


const KitListings = (props) => {
    const [kitsListing, setKitListing] = useState();
    const [, setRecordCount] = useState();
    const history = useHistory();
    const openKitDetail = (id) => history.push(`kitDetails/${id}`);
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
                                        <div className="mb-4" onClick={() => { openKitDetail(kitList.kt_id) }}>
                                            <Image
                                                src={
                                                    kitList?.kits_image_array?.length ? kitList?.kits_image_array[0]?.ki_image_upload : kitList.kt_image_url
                                                } 
                                                alt=""
                                                className="emotions"
                                            />
                                            <div className="col64 fw500 fs22 mb-1 mt-3 pointer">{kitList.kt_name}</div>
                                            <div className="fs16 col14 fw400 mb-1" dangerouslySetInnerHTML={{ __html: kitList.kt_desc }} />
                                            <div className="d-flex mb-2">
                                                <span className="italics col14 fs16 fw400 mr-2">From</span>
                                                <span className="mr-1"> <i class="fa fa-inr" aria-hidden="true"></i>  {kitList.month_array.length && kitList.month_array[0].kp_price}</span>
                                                <span className="prices col26 ml-1"> <i class="fa fa-inr" aria-hidden="true"></i>{kitList.month_array.length && kitList.month_array[0].kp_discount}</span>
                                            </div>
                                        </div>
                                    </Col>
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
export default KitListings;



