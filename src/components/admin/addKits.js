import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Form
} from "react-bootstrap";
import NavBar from "../core/navAdmin";
import Footer from "../core/footer";
import { Link } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import validateInput from "../../common/validations/validationAddKit";
import Axios from "axios";
import Deleteicon from "../../assets/images/delete_icon.svg";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import constant from "../../constant";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Validator from "validator";
import ValidationMessages from "../../common/helpers/ValidationMessages";
import XCircle from "../../assets/images/XCircle.png";

class AddKits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReloadEditor: false,
      testImage: [],
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
        kt_video_min: "0",
        kt_audio_min: "0",
        kits_image_array: [],
        kits_service_name: [
          {
            ks_services: "0",
            ks_actual_price: "",
            ks_discounted_price: "",
          },
        ],
        kits_price_month: [
          {
            kp_min_range_month: '',
            kp_max_range_month: '1',
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
        kp_discount: '',
        kp_max_range_month: ''
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
        kits_image_array:[]
      },
      serviceShow: false,
      customError: false
    };
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
      console.log("result", result, result.data.data.kits_details_listing[0]);
      let kitObj = {};
      let serviceData = {};
      let errorKits_price_month = [];
      let errorServiceData = [];
      let kits_price_month = {};
      if (result && result.status === 200) {
        kitObj =
          result && result.data && result.data.data
            ? result.data.data.kits_details_listing[0]
            : [];
        kitObj.kits_price_month = kitObj.month_array;
        kitObj.kits_service_name = this.state.kitObj.kits_service_name;
        kitObj.month_array.forEach((item) => {
          errorKits_price_month.push(this.state.errorKits_price_month[0]);
        })
        // serviceData =
        //   result && result.data && result.data.data
        //     ? result.data.data.kits_details_listing[0].kits_services
        //     : [];

        // result.data.data.kits_details_listing[0].kits_services.map((item) => {
        //   errorServiceData.push({
        //     ks_actual_price: "",
        //     ks_discounted_price: "",
        //     ks_services: "",
        //   });
        // });
        kitObj.kits_service_name = serviceData;
        delete kitObj.kits_services;
      }

      this.setState(
        {
          kitObj,
          errorKits_price_month,
          // serviceData,
          // errorServiceData,
          isReloadEditor: true
        },
        () => {
          console.log("kitObj", this.state.kitObj);
          console.log("serviceData", this.state.serviceData);
        }
      );
    }).catch((error) => console.log(error));
  };

  handleSubmit = () => {
    let kitObj = this.state.kitObj;
    let errorCurrent = 0;
    let test = [];
    kitObj.kits_price_month.forEach((month_price, index) => {
      let k = {
        kp_price: '',
        kp_discount: '',
        kp_max_range_month: ''
      };
      if (Validator.isEmpty(month_price.kp_price)) {
        k.kp_price = ValidationMessages.kits_price_month.kp_price.required;
        errorCurrent = errorCurrent + 1;
      }
      // else errorCurrent = false;
      if (Validator.isEmpty(month_price.kp_discount)) {
        k.kp_discount = ValidationMessages.kits_price_month.kp_discount.required;
        errorCurrent = errorCurrent + 1;
      }
      // else errorCurrent = false;
      if (parseInt(month_price.kp_price) <= parseInt(month_price.kp_discount)) {
        k.kp_price = ValidationMessages.kits_price_month.kp_price.balance;
        k.kp_discount = ValidationMessages.kits_price_month.kp_discount.balance;
        errorCurrent = errorCurrent + 1;
      }
      // else errorCurrent = false;
      if (parseInt(month_price.kp_max_range_month) === 0) {
        k.kp_max_range_month = ValidationMessages.kits_price_month.kp_max_range_month.required;
        errorCurrent = errorCurrent + 1;
      }
      // else errorCurrent = false;
      test.push(k);
    })
    this.setState({ errorKits_price_month: test, customError: errorCurrent }, () => console.log("ERROR KITS PRICE MONTH", test, kitObj.kits_price_month));
    console.log("DATA GOT ", this.state.kitObj);
    console.log(this.isValid(), "IS VALID ", !errorCurrent);
    if (this.isValid() && errorCurrent === 0) {//this.isValid() && this.state.serviceShow
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
    kitObj.kits_price_month[index].kp_max_range_month = `${event}`;
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
  handleChange = (event , strat) => {
    console.log("Handle Change", event);
    const { name, value } = event.target;
    let kitObj = this.state.kitObj;
    kitObj[name] = value;
    if(strat){
      // if(parseInt(value) > 0 && parseInt(value) < 20)
      kitObj[name] = (value ? parseInt(value) * 60 : '').toString() ;
    }
    this.setState(
      {
        kitObj
      },
      () => {
        console.log(" CHANGE", this.state.kitObj);
      }
    );
  };


  isValid() {
    const { errors, isValid } = validateInput(this.state.kitObj);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }

    return isValid;
  }


  handleUploadPicture = event => {
    // const fileObject = event.target.files[0];

    // const file = event.target.files[0];
    for (let index = 0; index <= event.target.files.length; index++) {
      const file = event.target.files[index];
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file)
      }
      reader.onloadend = () => {
        const formdata = new FormData();
        formdata.append('tt_images[]', file);
        const url = constant.SERVER_URL + "elp/uploadKits_images";
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        Axios.post(url, formdata, config)
          .then((res) => {
            console.log(res, res.data.status === 'success')

            if (res.data.status === 'success') {
              const data = res.data.data;
              const kitObj =this.state.kitObj;
              kitObj.kits_image_array = kitObj.kits_image_array.concat(data) ;
              kitObj.kt_image_url = kitObj.kt_image_url || data[0].file_path;
              this.setState({ kitObj }, () => console.log("TEST STATE",kitObj));
            }
          })
          .catch(err => err);
      }

    }


  };
  handlePriceMonth = (event, index) => {
    const { name, value } = event.target;
    let kitObj = this.state.kitObj;
    kitObj.kits_price_month[index][name] = value;
    kitObj.kits_price_month[index].kp_min_range_month = "1";
    this.setState({ kitObj }, () => console.log("CHANGE PRICE MONTH ", kitObj));
  }
  handleADDMonths = () => {

    const kp = {
      kp_min_range_month: '',
      kp_max_range_month: '',
      kp_price: '',
      kp_discount: ''
    }
    const price_month = {
      kp_price: '',
      kp_discount: ''
    }
    let kitObj = this.state.kitObj;
    // kitObj.kits_service_name.push(ks);
    kitObj.kits_price_month.push(kp);
    const errorKits_price_month = this.state.errorKits_price_month;
    errorKits_price_month.push(price_month);
    this.setState({ kitObj, errorKits_price_month }, () => console.log("ADDED MONTH", kitObj, errorKits_price_month));
  }
  removeADDEDMonths = (index) => {
    let kitObj = this.state.kitObj;
    kitObj.kits_price_month.splice(index, 1);
    kitObj.kits_service_name.splice(index, 1);

    const errorKits_price_month = this.state.errorKits_price_month;
    errorKits_price_month.splice(index, 1);
    this.setState({ kitObj, errorKits_price_month }, () => console.log("ADDED MONTH", kitObj, errorKits_price_month));
  }

  render() {
    const { kitObj, errors } = this.state;

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
                    {this.props.match.params.id > 0 ? "UPDATE " : "ADD "}ELNP Kits
                  </div>
                  <Form>
                    <Form.Group className="mb-4">
                      <Form.Label className="fs20 fw600 col14">
                        Upload
                      </Form.Label>

                      {
                        // !!kitObj.kt_image_url &&
                        // <div className="mt-1 mb-3 imgSetProfile">
                        //   <Image src={kitObj.kt_image_url} className="" />{" "}
                        //   <Image
                        //     src={XCircle}
                        //     onClick={() => {
                        //       let kitObj = this.state.kitObj;
                        //       kitObj.kt_image_url = '';
                        //       this.setState({ kitObj });
                        //     }}
                        //   />
                        // </div>
                      }
                      {
                        this.props.match.params.id === "0" ?
                          <>
                            {
                              kitObj.kits_image_array.length !== 0 &&  kitObj.kits_image_array.map((file, index) =>
                                <div className="mt-1 mb-3 imgSetProfile">
                                  <Image src={file.file_path} className="" />{" "}
                                  <Image
                                    src={XCircle}
                                    onClick={() => {
                                      let test_img = this.state.kitObj.kits_image_array;
                                      test_img.splice(index, 1);
                                      this.setState({ kitObj: test_img });
                                    }}
                                  />
                                </div>)
                            }
                          </>
                          : <>
                            {
                              kitObj.kits_image_array.map((file, index) =>
                                <div className="mt-1 mb-3 imgSetProfile">
                                  <Image src={file.ki_image_upload || file.file_path} className="" />{" "}
                                  <Image
                                    src={XCircle}
                                    onClick={() => {
                                      let kitObj = this.state.kitObj
                                      kitObj.kits_image_array.splice(index, 1);
                                      this.setState({ kitObj });
                                    }}
                                  />
                                </div>)
                            }
                          </>
                      }
                      <Form.Group>
                        <Form.File
                          id="exampleFormControlFile1"
                          className="inputTyp2"
                          multiple={true}
                          onChange={this.handleUploadPicture}
                        />
                        <div className="col27 fs14 fw400 mt-2 error">
                          { errors.kits_image_array}
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
                            this.setState({ kitObj }, () => console.log("EDITOR CHANGE ", kitObj.kt_overview))
                          }}
                        />
                      }

                      <div className="col27 fs14 fw400 mt-2 error">
                        {errors.kt_overview}
                      </div>
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fs20 fw600 col14">
                            Audio Calls<span className="fw400">(Minutes)</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            className="inputTyp2"
                            name="kt_audio_min"
                            value={parseInt(kitObj.kt_audio_min)/60}
                            onChange={(e) => this.handleChange(e,"a")}
                            max={20}
                            min={0}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <Form.Label className="fs20 fw600 col14">
                            Video Calls<span className="fw400">(Minutes)</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            className="inputTyp2"
                            name="kt_video_min"
                            value={kitObj.kt_video_min ? parseInt(kitObj.kt_video_min)/60 : ''}
                            onChange={(e) => this.handleChange(e,"a")}
                            max={20}
                            min={0}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {kitObj.kits_price_month && kitObj.kits_price_month.map((cat, index) => {
                      return (
                        <>
                          <Form.Group className="mb-4" key={"cat.kp_max_range_month".concat(index)}>
                            <Form.Label className="fs20 fw600 col14">
                              Select range of months
                                </Form.Label>
                            <div className="slider">
                              <Slider

                                min={1}
                                max={12}
                                // step={3}
                                value={cat.kp_max_range_month}
                                onChange={(e) => { this.handleSlider(e, index) }}
                              />
                              <div className="col27 fs14 fw400 mt-2 error">
                                {this.state.errorKits_price_month[index].kp_max_range_month}
                              </div>
                            </div>
                          </Form.Group>
                          <Row>
                            <Col md={5}>  
                              <Form.Group className="mt-1 mb-4">
                                <Form.Label className="fs20 fw600 col14">
                                  Price
                              </Form.Label>
                                <Form.Control
                                  className="inputTyp2"
                                  type="text"
                                  name="kp_price"
                                  value={cat.kp_price}
                                  onChange={(e) => {
                                    this.handlePriceMonth(e, index)
                                  }
                                  }
                                  maxLength={7}
                                />
                                <div className="col27 fs14 fw400 mt-2 error">
                                  {this.state.errorKits_price_month[index].kp_price}
                                </div>
                              </Form.Group>
                            </Col>
                            <Col md={5}>
                              <Form.Group className="mt-1 mb-4">
                                <Form.Label className="fs20 fw600 col14">
                                  Discounted Price
                              </Form.Label>
                                <Form.Control
                                  type="text"
                                  className="inputTyp2"
                                  name="kp_discount"
                                  value={cat.kp_discount}
                                  onChange={(e) => {
                                    this.handlePriceMonth(e, index)
                                  }
                                  }
                                  maxLength={7}
                                />
                                <div className="col27 fs14 fw400 mt-2 error">
                                  {this.state.errorKits_price_month[index].kp_discount}
                                </div>
                              </Form.Group>
                            </Col>
                            {kitObj.kits_price_month.length > 1 ? (
                              <Col md={2}>
                                <Image
                                  src={Deleteicon}
                                  alt=""
                                  className="deleteUserset"
                                  onClick={() => { this.removeADDEDMonths(index) }}
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
                        onClick={() => { this.handleADDMonths() }}
                      >
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>{" "}
                        Add Months
                      </Button>
                    </div>

                    <Button
                      variant="primary btnTyp5 mt-4"
                      type="button"
                      onClick={() => { this.handleSubmit() }}
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
