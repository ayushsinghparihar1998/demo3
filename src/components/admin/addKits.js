import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Button,
  NavDropdown,
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Form,
  Tabs,
  Tab,
} from "react-bootstrap";
import NavBar from "../core/navAdmin";
import Footer from "../core/footer";
import { Link } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import validateInput from "../../common/validations/validationAddKit";
import Axios, { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";
import Deleteicon from "../../assets/images/delete_icon.svg";
import Womanvideo from "../../assets/images/womanvideo.jpg";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import constant from "../../constant";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Validator from "validator";
import ValidationMessages from "../../common/helpers/ValidationMessages";

class AddKits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReloadEditor: false,
      pageType: "",
      paymentList: [],
      pageno: 1,
      records: 10,
      totalCount: "",
      value: 10,
      sliderChange: 0,
      kitObj: {
        kt_name: "",
        kt_desc: "",
        kt_image_url: "",
        kt_price: "",
        kt_overview: "",
        kt_subheading: '',
        kits_service_name: [
          {
            ks_services: "0",
          },
        ],
        kits_price_month: [
          {
            kp_min_range_month: '',
            kp_max_range_month: '',
            kp_price: '',
            kp_discount: ''
          }
        ]
      },

      serviceData: [
        {
          ks_services: "",
          ks_actual_price: "",
          ks_discounted_price: "",
        },
      ],
      errorServiceData: [
        {
          ks_services: "",
          ks_actual_price: "",
          ks_discounted_price: "",
        },
      ],
      errorKits_price_month: [{
        kp_price: '',
        kp_discount: ''
      }],
      count: 10,
      offset: 1,
      errors: {
        kt_name: "",
        kits_service_name: "",
        kt_desc: "",
        kt_image_url: "",
        // kt_price: "",
        kt_overview: '',
        kt_subheading: '',
        
      },
      serviceShow: false,
    };
    this.checkServiceError = this.checkServiceError.bind(this);
  }

  componentDidMount = () => {
    console.log(this.props.match.params.id);
    console.log(this.props);
    if (this.props.match.params.id > 0) {
      this.getKitDetails();
    }
  };

  getKitDetails = () => {
    let data = {
      kt_id: this.props.match.params.id,
    };

    ELPViewApiService("superadminget_kitsdetails", data).then((result) => {
      console.log("result", result.data.data.kits_details_listing[0]);
      let kitObj = {};
      let serviceData = {};
      let errorServiceData = [];

      if (result && result.status === 200) {
        kitObj =
          result && result.data && result.data.data
            ? result.data.data.kits_details_listing[0]
            : [];

        serviceData =
          result && result.data && result.data.data
            ? result.data.data.kits_details_listing[0].kits_services
            : [];

        result.data.data.kits_details_listing[0].kits_services.map((item) => {
          errorServiceData.push({
            ks_actual_price: "",
            ks_discounted_price: "",
            ks_services: "",
          });
        });
        kitObj.kits_service_name = serviceData;
        delete kitObj.kits_services;
      }

      this.setState(
        {
          kitObj,
          serviceData,
          errorServiceData,
          isReloadEditor: true
        },
        () => {
          console.log("kitObj", this.state.kitObj);
          console.log("serviceData", this.state.serviceData);
          this.checkServiceError();
        }
      );
    }).catch((error) => console.log(error));
  };

  handleSubmit = () => {
    let kitObj = this.state.kitObj;
    // let serviceData = this.state.serviceData;
    // let errorServiceData = this.state.errorServiceData;

    // kitObj.kits_service_name = serviceData;
    // delete kitObj.kits_services;
    // delete kitObj.kt_datetime;
    // delete kitObj.kt_price;
    // delete kitObj.kt_status;
    // console.log("SERVICE NAME ", kitObj, errorServiceData);
    // kitObj.kits_service_name.map((item, ind) => {
    //   errorServiceData[ind].ks_services =
    //     item.ks_services.length == 0 ? "Please enter service name" : "";
    //   errorServiceData[ind].ks_actual_price =
    //     +item.ks_actual_price == 0 || item.ks_actual_price.length == 0
    //       ? "Please enter actual price"
    //       : "";
    //   errorServiceData[ind].ks_discounted_price =
    //     +item.ks_discounted_price == 0 || item.ks_discounted_price.length == 0
    //       ? "Please enter discounted price"
    //       : +item.ks_discounted_price >= +item.ks_actual_price
    //         ? "Please enter amount less then actual price"
    //         : "";
    //   console.log("SERVICE NAME ", kitObj, errorServiceData);
    //   if (
    //     item.ks_actual_price
    //       .toString()
    //       .charAt(item.ks_actual_price.length - 1) == "."
    //   ) {
    //     item.ks_actual_price = item.ks_actual_price.replace(/.$/, "");
    //   }
    //   if (
    //     item.ks_discounted_price
    //       .toString()
    //       .charAt(item.ks_discounted_price.length - 1) == "."
    //   ) {
    //     item.ks_discounted_price = item.ks_discounted_price.replace(/.$/, "");
    //   }
    //   console.log("SERVICE NAME ", kitObj, errorServiceData);
    // });
    // this.setState(
    //   {
    //     errorServiceData,
    //     // kitObj
    //   },
    //   () => {
    //     console.log(this.state.errorServiceData);
    //   }
    // );
    const errorKits_price_month = this.state.errorKits_price_month;
    kitObj.kits_price_month.forEach((month_price,index)=>{
      console.log("month_price.kp_price",month_price.kp_price)
      console.log("errors.kits_price_month[index].kp_price" , errorKits_price_month[index])
      console.log("Validator.isEmpty(month_price.kp_price)",Validator.isEmpty(month_price.kp_price))
      if (Validator.isEmpty(month_price.kp_price) || month_price.kp_price.trim() === "") {
        errorKits_price_month[index].kp_price = ValidationMessages.kits_price_month.kp_price.required;
      }
      if (Validator.isEmpty(month_price.kp_discount) || month_price.kp_discount.trim() === "") {
        errorKits_price_month[index].kp_discount = ValidationMessages.kits_price_month.kp_discount.required;
      }
    })
    this.setState({errorKits_price_month},()=>console.log("ERROR KITS PRICE MONTH",errorKits_price_month));
    console.log("DATA GOT ", this.state.kitObj);
    console.log(this.isValid(), "IS VALID ");
    if (this.isValid() ) {//this.isValid() && this.state.serviceShow
      this.setState({
        showLoader: true,
        kitObj,
      });

      let data = this.state.kitObj;
      console.log(data);

      if (this.props.match.params.id > 0) {
        data.kt_id = this.props.match.params.id;
      }

      ELPViewApiService(
        this.props.match.params.id == 0
          ? "superadminadd_kits"
          : "superadminedit_kits",
        data
      )
        .then((result) => {
          if (result && result.data && result.data.status === "success") {
            // this.props.history.push("/admin");
            setTimeout(() => {
              this.props.history.push("/admin");
            }, 1000);
            // this.clear();
          } else {
            this.setState({
              showLoader: false,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            showLoader: false,
          });
      });
    } else {
      this.setState({
        showLoader: false,
      });
    }
  };
  handleSlider = (event, index) => {
    console.log("Handle Change", event);
    let kitObj = this.state.kitObj;
    kitObj.kits_service_name[index].ks_services = `${event} Months`;
    this.setState(
      {
        sliderChange: event,
        kitObj
      },
      () => {
        console.log("SLIDER CHANGE INDEX", index, this.state.kitObj);
      }
    );
  };
  handleChange = (event) => {
    console.log("Handle Change", event);
    const { name, value } = event.target;
    let kitObj = this.state.kitObj;
    kitObj[name] = value;
    this.setState(
      {
        kitObj
      },
      () => {
        console.log(" CHANGE", this.state.kitObj);
      }
    );
  };
  // handleChangeLoop = (event, ind) => {
  //   // let kitObj = this.state.kitObj;
  //   let serviceData = this.state.serviceData;
  //   let errorServiceData = this.state.errorServiceData;

  //   let validName =
  //     event.currentTarget.name == "ks_services"
  //       ? "service name"
  //       : event.currentTarget.name == "ks_discounted_price"
  //         ? "discounted price"
  //         : "actual price";

  //   serviceData.map((item, index) => {
  //     if (ind == index) {
  //       if (event.currentTarget.name == "ks_services") {
  //         item[event.currentTarget.name] = event.currentTarget.value;
  //         errorServiceData[ind][event.currentTarget.name] =
  //           item[event.currentTarget.name].length == 0
  //             ? "Please enter " + validName
  //             : "";
  //       }
  //       // if (!event.currentTarget.value === NaN) {
  //       else
  //         item[event.currentTarget.name] =
  //           !event.currentTarget.value ||
  //             !event.currentTarget.value.length ||
  //             event.currentTarget.value[event.currentTarget.value.length - 1] ===
  //             "."
  //             ? event.currentTarget.value || 0
  //             : parseFloat(event.currentTarget.value) || 0;

  //       var countDot = 0;
  //       var stringArray = event.currentTarget.value.split("");
  //       stringArray.forEach(function (character) {
  //         if (character == ".") {
  //           console.log("yesyes");
  //           countDot++;
  //         }
  //       });
  //       console.log(countDot);
  //       if (countDot > 1) {
  //         item[event.currentTarget.name] = item[event.currentTarget.name].slice(
  //           0,
  //           -1
  //         );
  //       }
  //       if (event.currentTarget.name == "ks_actual_price") {
  //         errorServiceData[ind].ks_actual_price =
  //           +item.ks_actual_price == 0 || item.ks_actual_price.length == 0
  //             ? "Please enter a valid amount"
  //             : "";
  //         errorServiceData[ind].ks_discounted_price =
  //           +item.ks_discounted_price >= +item.ks_actual_price
  //             ? "Please enter amount less then actual price"
  //             : "";
  //       } else if (event.currentTarget.name == "ks_discounted_price") {
  //         errorServiceData[ind].ks_discounted_price =
  //           +item.ks_discounted_price == 0 ||
  //             item.ks_discounted_price.length == 0
  //             ? "Please enter a valid amount"
  //             : +item.ks_discounted_price >= +item.ks_actual_price
  //               ? "Please enter amount less then actual price"
  //               : "";
  //       }

  //       // }
  //       // item.item_category_id = foodId;

  //       // errorServiceData[ind][event.currentTarget.name] =
  //       // item[event.currentTarget.name].length == 0
  //       //   ? "Please enter " + validName
  //       //   : event.currentTarget.name == "ks_actual_price" &&
  //       //     !re.test(event.currentTarget.value)
  //       //   ? "Please enter a valid " + validName
  //       //   : event.currentTarget.name == "ks_discounted_price"
  //       //   ? !re.test(event.currentTarget.value)
  //       //     ? "Please enter a valid " + validName
  //       //     : +event.currentTarget.value > +item.ks_actual_price
  //       //     ? "Please enter amount less then actual price"
  //       //     : ""
  //       //   : "";
  //     }
  //   });
  //   this.setState(
  //     {
  //       serviceData,
  //       errorServiceData,
  //     },
  //     () => {
  //       console.log(this.state.errorServiceData);
  //       console.log(this.state.serviceData);
  //       this.checkServiceError();
  //     }
  //   );
  // };

  isValid() {
    const { errors, isValid } = validateInput(this.state.kitObj);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }

    return isValid;
  }

  // addCategorySetup() {
  //   console.log("ADD CATEGORY")
  //   let obj = {
  //     ks_services: "",
  //     ks_actual_price: "",
  //     ks_discounted_price: "",
  //   };
  //   let serviceData = this.state.serviceData;
  //   let errorServiceData = this.state.errorServiceData;

  //   serviceData.map((item) => {
  //     if (
  //       item.ks_actual_price
  //         .toString()
  //         .charAt(item.ks_actual_price.length - 1) == "."
  //     ) {
  //       item.ks_actual_price = item.ks_actual_price.replace(/.$/, "");
  //     }
  //     if (
  //       item.ks_discounted_price
  //         .toString()
  //         .charAt(item.ks_discounted_price.length - 1) == "."
  //     ) {
  //       item.ks_discounted_price = item.ks_discounted_price.replace(/.$/, "");
  //     }

  //     return item;
  //   });
  //   serviceData.push(obj);
  //   errorServiceData.push({
  //     ks_actual_price: "",
  //     ks_discounted_price: "",
  //     ks_services: "",
  //   });
  //   this.setState(
  //     {
  //       serviceData,
  //       errorServiceData,
  //     },
  //     () => {
  //       this.checkServiceError();
  //     }
  //   );
  // }
  // removeCategorySetup(index) {
  //   let serviceData = this.state.serviceData;
  //   serviceData.splice(index, 1);
  //   this.setState(
  //     {
  //       serviceData,
  //     },
  //     () => {
  //       this.checkServiceError();
  //     }
  //   );
  // }
  checkServiceError = () => {
    let serviceData = this.state.serviceData;
    let errorServiceData = this.state.errorServiceData;

    let arr = [];
    let err = [];
    serviceData.map((item) => {
      arr.push(!Object.values(item).some((o) => o == ""));
    });
    let val = arr.every((o) => o === true);
    if (val == true) {
      errorServiceData.map((item) => {
        err.push(!Object.values(item).some((o) => o !== ""));
      });
      this.setState({
        serviceShow: err.every((o) => o === true),
      });
    } else {
      this.setState({
        serviceShow: val,
      });
    }
  };

  handleUploadPicture = async (event, name) => {
    // const fileObject = event.target.files[0];
    console.log(event.target.files, "FILE OBJECT");
    Object.values(event.target.files)
    .forEach((fileObject)=>{
      if (fileObject) {
        this.setState({
          isUploading: true,
        });
        const formData = new FormData();
        formData.set("u_image", fileObject);
        console.log("formDataformData", formData);
  
        const url = constant.SERVER_URL + "elp/uploadkits_image";
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        Axios.post(url, formData, config).then((response)=>{
          console.log(name, "resultresultresult", response);
          let kitObj = this.state.kitObj;
          kitObj.kt_image_url = response.data.data.filepath;
          this.setState({
            isUploading: false,
            kitObj,
            filename: fileObject.name,
          },()=>console.log("AFTER FILE APPEND",kitObj));
        }, ( err)=>console.log("ERROR ",err));
        
      }
    })
  };
  handlePriceMonth = (event, index) => {
    const { name, value } = event.target;
    let kitObj = this.state.kitObj;
    kitObj.kits_price_month[index][name] = value;
    kitObj.kits_price_month[index].kp_min_range_month = "1";
    kitObj.kits_price_month[index].kp_max_range_month = "3";
    this.setState({ kitObj }, () => console.log("CHANGE PRICE MONTH ", kitObj));
  }
  handleADDMonths = () => {
    const ks = {
      ks_services: "0",
    }
    const kp = {
      kp_min_range_month: '',
      kp_max_range_month: '',
      kp_price: '',
      kp_discount: ''
    }
    const price_month= {
      kp_price: '',
      kp_discount: ''
    }
    let kitObj = this.state.kitObj;
    kitObj.kits_service_name.push(ks);
    kitObj.kits_price_month.push(kp);
    const errorKits_price_month = this.state.errorKits_price_month;
    errorKits_price_month.push(price_month);
    this.setState({ kitObj ,errorKits_price_month }, () => console.log("ADDED MONTH", kitObj,errorKits_price_month));
  }
  removeADDEDMonths = (index) => {
    let kitObj = this.state.kitObj;
    kitObj.kits_service_name[index] = null;
    kitObj.kits_price_month[index] = null;
    const errorKits_price_month = this.state.errorKits_price_month;
    errorKits_price_month[index] = null;
    this.setState({ kitObj , errorKits_price_month }, () => console.log("ADDED MONTH", kitObj , errorKits_price_month));
  }
  render() {
    const { kitObj, errors, errorServiceData } = this.state;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout adminProfessinal addKits pt-4 pb-5">
          <Container>
            <Row>
              <Col md={4} lg={3} className="pr-1">
                <div className="adminsidebar">
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
              <Col md={8} lg={9} className="pl-1">
                <div className="corporateMember subscriptionplan">
                  <div className="fs28 col10 mb-4">
                    {this.props.match.params.id > 0 ? "UPDATE " : "ADD "}ELNP KIT
                  </div>
                  <Form>
                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14">
                        Upload
                      </Form.Label>
                      <div className="mt-1 mb-3 imgSetProfile">
                        <Image src={kitObj.kt_image_url} className="" />{" "}
                      </div>
                      <Form.Group>
                        <Form.File
                          id="exampleFormControlFile1"
                          className="inputTyp2"
                          multiple={true}
                          onChange={(e) =>
                            this.handleUploadPicture(e, "backgroud_img")
                          }
                        />
                        <div className="col27 fs14 fw400 mt-2 error">
                          {errors.kt_image_url}
                        </div>
                      </Form.Group>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14">
                        Kit Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        name="kt_name"
                        value={kitObj.kt_name}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={150}
                      />

                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.kt_name}
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14">
                        Kit Sub-Heading
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        name="kt_subheading"
                        value={kitObj.kt_subheading}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={150}
                      />

                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.kt_subheading}
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14">
                        Kit Description
                      </Form.Label>
                      {(this.props.match.params.id === "0" || this.state.isReloadEditor) && <CKEditor
                        config={{
                          height: 500,
                          maxCharCount: 250,
                          toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'Link']
                        }}
                        editor={ClassicEditor}
                        data={kitObj.kt_desc}

                        onReady={editor => {
                          // You can store the "editor" and use when it is needed.
                          console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          let kitObj = this.state.kitObj;
                          kitObj["kt_desc"] = data;
                          this.setState({ kitObj }, () => console.log("EDITOR CHANGE ", this.state.kitObj.kt_desc))
                        }}

                      />}
                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.kt_desc}
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14">
                        Kit Overview
                      </Form.Label>
                      {
                        (this.props.match.params.id === "0" || this.state.isReloadEditor) &&
                        <CKEditor
                          className="inputTyp2"
                          config={{
                            height: 500,
                            maxCharCount: 250,
                            toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'Link']
                          }}
                          editor={ClassicEditor}
                          data={kitObj.kt_overview}

                          onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            let kitObj = this.state.kitObj;
                            kitObj["kt_overview"] = data;
                            this.setState({ kitObj }, () => console.log("EDITOR CHANGE ", this.state.kitObj.kt_overview))
                          }}
                        />
                      }

                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.kt_overview}
                      </div>
                    </Form.Group>


                    {kitObj.kits_price_month.map((cat, index) => {
                      return (
                        <>
                          {
                            kitObj.kits_service_name.filter((ser_name, indx) => index === indx).map((ser_name, indx) =>
                              <Form.Group className="mb-4" key={ser_name.ks_services}>
                                <Form.Label className="fs20 fw600 col14">
                                  Select range of months
                                </Form.Label>
                                <div className="slider">
                                  <Slider

                                    min={0}
                                    max={9}
                                    step={3}
                                    value={parseInt(ser_name.ks_services)}
                                    onChange={(e) => { this.handleSlider(e, index) }}
                                  />
                                  <div className='value'></div>
                                </div>
                              </Form.Group>
                            )
                          }
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mt-1 mb-4">
                                <Form.Label className="fs20 fw600 col14">
                                  Price
                              </Form.Label>
                                <Form.Control
                                  className="inputTyp2"
                                  type="text"
                                  name="kp_price"
                                  value={cat.kp_price}
                                  onChange={(e) =>
                                    this.handlePriceMonth(e, index)
                                  }
                                  maxLength={7}
                                />
                                <div className="col27 fs14 fw400 mt-2 error">
                                    {this.state.errorKits_price_month[index].kp_price}
                                    </div>
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mt-1 mb-4">
                                <Form.Label className="fs20 fw600 col14">
                                  Discounted Price
                              </Form.Label>
                                <Form.Control
                                  type="text"
                                  className="inputTyp2"
                                  name="kp_discount"
                                  value={cat.kp_discount}
                                  onChange={(e) =>
                                    this.handlePriceMonth(e, index)
                                  }
                                  maxLength={7}
                                />
                                <div className="col27 fs14 fw400 mt-2 error">
                                      {this.state.errorKits_price_month[index].kp_discount}
                                    </div>
                              </Form.Group>
                            </Col>
                            {kitObj.kits_price_month.length > 1 ? (
                              <Col md={1}>
                                <Image
                                  src={Deleteicon}
                                  alt=""
                                  className="deleteUserset"
                                  onClick={() => this.removeADDEDMonths(index)}
                                />
                              </Col>
                            ) : (
                                ""
                              )}
                          </Row>
                        </>
                      );
                    })}
                    <div className="position-relative mb-2">
                      <Button
                        variant="btnTypAdd"
                        type="button"
                        disabled={!this.state.serviceShow}
                        onClick={() => this.handleADDMonths()}
                      >
                        <span onClick={() => this.handleADDMonths()}>
                          <i className="fa fa-plus"></i>
                        </span>{" "}
                        Add Months
                      </Button>
                    </div>

                    <Button
                      variant="primary btnTyp5 mt-4"
                      type="button"
                      onClick={() => this.handleSubmit()}
                    >
                      {this.props.match.params.id > 0 ? "UPDATE" : "SUBMIT"}
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AddKits;
