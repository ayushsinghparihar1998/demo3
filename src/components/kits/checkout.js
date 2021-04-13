import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Image, Modal, Form
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
// import Kits1 from "../../assets/images/kitd1.png";
import { useHistory, useLocation, useParams } from "react-router";
import ELPViewApiService from "../../common/services/apiService";
import CrossTwo from "../../assets/images/crosstwo.png";
import Alerts from "../../assets/images/alerts.png";
import { getLocalStorage, showErrorToast, showSuccessToast } from "../../common/helpers/Utils";
import ELPRxApiService from "../../common/services/apiService";

const Checkouts = (props) => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const [kitsDetail, setKitsDetail] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [openCode, setOpenCode] = useState(false);
  const [editCoupon, setCoupon] = useState();
  const [applyCode, setCouponCode] = useState(0);
  const goToKitList = () => history.push('/kitListings');
  const goToKitDetail = () => history.push('/kitDetails/'.concat(id));
  const priceIndex = getLocalStorage("kit_buy") || 0;
  const handleShow = () => {
    let type;
    if (getLocalStorage("userInfo")) {
      type = "listner";
    } else if (getLocalStorage("customerInfo")) {
      type = "customer";
    } else if (getLocalStorage("userInfoProff")) {
      type = "professional";
    }
    if (type) {
      ELPRxApiService(type + "DashboardDetail")
        .then((res) => {
          console.log("res ============>", res);
          if (res.data.data.dashboard_list.u_verified !== "1") {
            setShowPopUp('Please verify your email to start using our services.');
          }
          else if (kitsDetail.month_array[priceIndex].kp_max_range_month) {
            const data = {
              kt_id: id,
              kt_amount: kitsDetail.month_array[priceIndex].kp_discount,
              kt_month: kitsDetail.month_array[priceIndex].kp_max_range_month
            }
            ELPViewApiService("addKits_paymentdetails", data)
              .then((response) => {
                console.log("GOT TRANSACTION ID IS ", response, response.status === 'success')
                if (response.data?.status === 'success') {
                  const trans_id = response.data.data.kt_transaction_id;
                  console.log("GOT TRANSACTION ID IS ", trans_id)
                  const link = 'https://staging.eatluvnpray.org/kits_demo/kits.php?transaction_id='.concat(trans_id);
                  window.open(link, "_blank");
                }
              })
              .catch(err => console.log("ERROR ADDING PAYMENT ", err))
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else setShowPopUp('You can not proceed without verifying your email address. Please create your account and profile first.');
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

  const applyCouponCode = () => {
    // setCouponCode(1);
    // {"gift_code":"vhfnzjaxitqc"}
    ELPViewApiService("kits_redeemcode", {"gift_code":editCoupon})
      .then((response) => {
        console.log("RESPONSE KITS CODE  ", response);
        if (response.data.status === "success") {
          showSuccessToast(response.data.data.message)
          setCouponCode(parseInt(kitsDetail.month_array[priceIndex].kp_discount));
        }
        else{
          showErrorToast("Un Identified Coupon!");
        }
      })
      .catch(err => console.log("ERROR CAUSED ", err));
  }
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
                              {kitsDetail.month_array[priceIndex].kp_discount}
                            </div>
                          </div>
                          <div className="mb-2 fs17 col14 fw500">
                            {kitsDetail.month_array[priceIndex].kp_max_range_month} months kit plan
                          </div>
                          <div className="fs17 col14 fw500">1 Kit</div>
                          <hr className="hrB" />
                          <div className="promocodes">

                            {
                              openCode ? (
                                <div className="promo2">
                                  <span className="position-relative">
                                    <Form.Control
                                      type="text"
                                      className="btnPromo minBtn"
                                      name="Kits_coupon"
                                      value={editCoupon}
                                      onChange={(e) => { setCoupon(e.target.value) }}
                                      maxLength={8}
                                    />
                                  </span>
                                  <span className="fs14 fw700 col26 text-uppercase ml-3" onClick={applyCouponCode}>Apply</span>
                                </div>
                              ) : <Button className="btnPromo" onClick={() => { setOpenCode(true) }}>Have Promo Code?</Button>
                            }
                            {
                              applyCode > 0 ?
                                <>
                                  <div className="fs17 col14 fw500">Coupon Code</div>
                                  <div className="fs22 fw500 col64">
                                    -
                                    <i className="fa fa-inr"></i>
                                    {applyCode}
                                  </div>
                                  <div className="fs17 col14 fw500">{editCoupon}</div>
                                </>
                                : null
                            }
                          </div>
                        </div>
                        <div className="orderTwo mt-3">
                          <div className="catOne">
                            <div className="fs16 fw500 col18">Total Amount</div>
                            <div className="fs22 fw600 col18">
                              <i className="fa fa-inr"></i>
                              {kitsDetail.month_array[priceIndex].kp_discount - applyCode}
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
              {showPopUp}
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










