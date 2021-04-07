import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Image, Modal
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
// import Kits1 from "../../assets/images/kitd1.png";
import XCircle from "../../assets/images/XCircle.png";
import { useHistory, useLocation, useParams } from "react-router";
import ELPViewApiService from "../../common/services/apiService";
import CrossTwo from "../../assets/images/crosstwo.png";
import Alerts from "../../assets/images/alerts.png";

const Checkouts = (props) => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const [kitsDetail, setKitsDetail] = useState(null);
  const [monthPlanIndex ] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);
  const [openCode, setOpenCode] = useState(false);
  const goToKitList = () => history.push('/kitListings');
  const goToKitDetail = () => history.push('/kitDetails/'.concat(id));
  const handleShow = () => {
    setShowPopUp(true)
  };

  const handleClose = () => {
    setShowPopUp(false);
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
  console.log("PARAMS ", id, history, location);
  return (
    <div className="page__wrapper innerpage">
      <div className="main_baner">
        <NavBar {...props} />
      </div>
      <div className="kitDetailMain">
        <Container>
          <div className="kitDetailTwo mt-4 mb-4">
            <div className="fs18 text-left fw300 mt-3 mb-5">
              <span className="col14 fw300 mr-1" onClick={goToKitList}>Kits</span> /
              <span className="col14 ml-1" onClick={goToKitDetail}>Kit Details</span> /
              <span className="col29 fw500">Checkout</span>
            </div>

            <Row>
              {
                kitsDetail && (
                  <Col md={6} className="m-auto">
                    <div className="checkoutDetails">
                      <div className="fw500 col64 orderOne">Order Summary</div>
                      <div className="orderCat">
                        <div className="orderImgFirst">
                          <Image src={kitsDetail.kt_image_url} alt="banImg" />
                        </div>
                        <div className="p-4 bg63">
                          <div className="catOne mb-2">
                            <div className="fs22 fw500 col64">{kitsDetail.kt_name}</div>
                            <div className="fs22 fw500 col64">
                              <i className="fa fa-inr"></i>
                              {kitsDetail.month_array[monthPlanIndex].kp_price}
                            </div>
                          </div>
                          <div className="mb-2 fs17 col14 fw500">
                            {kitsDetail.month_array[monthPlanIndex].kp_max_range_month} months kit plan
                          </div>
                          <div className="fs17 col14 fw500">1 Kit</div>
                          <hr className="hrB" />
                          <div className="promocodes">
                            
                            {
                              openCode ? (
                                <div className="promo2">
                                  <span className="position-relative">
                                    <Button className="btnPromo minBtn">FFTW</Button>
                                    <Image src={XCircle} alt="" />
                                  </span>
                                  <span className="fs14 fw700 col26 text-uppercase ml-3">Apply</span>
                                </div>
                              ) : <Button className="btnPromo" onClick={()=>{setOpenCode(true)}}>Have Promo Code?</Button>
                            }
                          </div>
                        </div>
                        <div className="orderTwo mt-3">
                          <div className="catOne">
                            <div className="fs16 fw500 col18">Total Amount</div>
                            <div className="fs22 fw600 col18">
                              <i className="fa fa-inr"></i>
                              {kitsDetail.month_array[monthPlanIndex].kp_discount}
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="mt-5 mb-5 text-center">
                      <Button className="btnTyp5" onClick={handleShow}>proceed</Button>
                    </div>
                  </Col>
                )
              }
            </Row>
          </div>

        </Container>

        <Modal
          show={showPopUp}
          onHide={handleClose}
          className="CreateAccount alertShow"
        >
          <Modal.Header>
            <Button type="button" onClick={handleClose} class="close">
              <Image src={CrossTwo} alt="alert" className="alertCross" />
            </Button>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-4">
              <Image src={Alerts} alt="alert" className="" />
            </div>
            <div className="fw600 fs28 mb-3">Alert!</div>
            <div className="col14 fs20 fw500 mb-4">
              You can not proceed without verifying your email address. Please create your account and profile first.
            </div>
            <Button
              type="button"
              className="btnTyp5"
              onClick={() => { history.push('/login', { roleType: 3 }) }}
            >
              CREATE ACCOUNT
            </Button>
          </Modal.Body>
        </Modal>
      </div>
      <Footer />
    </div>
  );

}
export default Checkouts;










