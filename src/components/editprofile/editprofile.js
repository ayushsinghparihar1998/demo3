import React, { Component } from 'react';
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
} from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  actionGetProfile,
  actionUpdateUserDetails,
  actionChangePassword,
  actionGetCountry,
  actionGetState,
  actionGetCity,
  actionUploadImage
} from '../../common/redux/actions';
import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';
import moment from 'moment';
import { ToastContainer, toast } from "react-toastify";
import 'react-datepicker/dist/react-datepicker.css';
import CONSTANTS from '../../common/helpers/Constants';
import NavBar from '../core/nav';
import Footer from '../core/footer';
import Profileban from '../../assets/images/profile_ban.svg';
import Profileimg from '../../assets/images/profile_img.svg';
import Usaflag from '../../assets/images/india_flag.svg';
import warningS from '../../assets/images/w_signal.svg';
import Camera from '../../assets/images/camera.svg';
import Cameratwo from '../../assets/images/camera-white.svg';
import Profileimgnew from '../../assets/images/profileinner_img.svg';
import Videoicon from '../../assets/images/video_icon.svg';
import Checkediconfour from '../../assets/images/checked_icon4.svg';
import Crossblue from '../../assets/images/cross_blue.svg';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { setLocalStorage, getLocalStorage, capitalizeFirstLetter } from '../../common/helpers/Utils';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import ELPRxApiService from "../../common/services/apiService";


class Editprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      errors: {},
      userName: '',
      userEmail: '',
      userPassword: '',
      oldPassword: '',
      day: '',
      month: '',
      year: '',
      countryList: [],
      userId: '',
      chats: '',
      lastactive: '',
      listento: '',
      listnersince: '',
      bio: '',
      cityId: '',
      countryId: '',
      flag: '',
      gender: '',
      lang: '',
      rating: '',
      stateId: '',
      mobileNumber: '',
      isUploadingImage: false,
      isUploadingCoverImage: false,
      category: [],
      selectedCategories: []
    };
  }

  componentDidMount() {
    this.getProfile();
    this.getCountry();
    this._getCategoriesHandler()
  }

  handlePasswordChange = (event) => {
    const { name, value } = event.target;
    if (event.target.value.length > 8) {
      var reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
      var test = reg.test(value.trim());
      // if (test) {
      //   // alert("pass");
      // } else {
      //   alert(
      //     "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
      //   );
      // }
    }
    this.setState({ [name]: value.trim() });
  };

  getProfile = () => {
    this.props.actionGetProfile({}).then((result) => {
      if (result && result.status === 200) {
        let profile = result.data.data &&
          result.data.data.profile_list && result.data.data.profile_list
          ? result.data.data.profile_list
          : {};
        let dob = profile.u_birthdate ? profile.u_birthdate.split('/') : ['', '', ''];
        if (dob && dob.length > 0 && dob[1] !== 0) {
          dob[1] = dob[1] - 1
        }
        this.setState({
          userData: profile,
          userName: profile.u_name,
          userEmail: profile.email,
          day: dob[0],
          month: dob[1],
          year: dob[2],
          userId: profile.id,
          chats: profile.chats,
          lastactive: profile.lastactive,
          listento: profile.listento,
          listnersince: profile.listnersince,
          bio: profile.u_bio,
          cityId: profile.u_city,
          countryId: profile.u_country,
          flag: profile.u_flag,
          gender: profile.u_gender,
          lang: profile.u_lang,
          rating: profile.u_rating,
          stateId: profile.u_state,
          mobileNumber: profile.u_mobile,
          u_image: profile.u_image,
          profileImg: '',
          u_cover_image: profile.u_cover_image,
        }, () => {
          this.getState();
          this.getCity();
        });
      }
    });
  };
  getCountry = () => {
    this.props.actionGetCountry({}).then((result) => {
      if (result && result.status === 200) {
        let countryList =
          result.data.data && result.data.data
            ? result.data.data
            : [];
        this.setState({
          countryList: countryList
        });
      }
    });
  };
  getState = () => {
    if (this.state.countryId) {
      this.props.actionGetState({ country_id: this.state.countryId }).then((result) => {
        if (result && result.status === 200) {
          let stateList =
            result.data.data && result.data.data
              ? result.data.data
              : [];
          this.setState({
            stateList: stateList
          });
        }
      });
    }
  };
  getCity = () => {
    if (this.state.stateId) {
      this.props.actionGetCity({ state_id: this.state.stateId }).then((result) => {
        if (result && result.status === 200) {
          let cityList =
            result.data.data && result.data.data
              ? result.data.data
              : [];
          this.setState({
            cityList: cityList
          });
        }
      });
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    let day = this.state.day !== '' ? this.state.day : '';
    let month = this.state.month !== '' ? Number(this.state.month) + 1 : '';
    let year = this.state.year !== '' ? this.state.year : '';
    let dob = '';

    console.log('date', day, month, year);
    if (day && month && year) {
      dob = day + '/' + month + '/' + year;
    }

    let data;
    if (this.state.userPassword !== '') {
      data = {
        email: this.state.userEmail,
        password: this.state.userPassword,
        u_birthdate: dob, 
        u_name: this.state.userName,
        u_gender: this.state.gender,
        u_country: this.state.countryId,
        u_state: this.state.stateId,
        u_city: this.state.cityId,
        u_bio: this.state.bio,
        u_mobile: this.state.mobileNumber,
        u_image: this.state.u_image,
        u_cover_image: this.state.u_cover_image,
      };
    } else {
      data = {
        email: this.state.userEmail,
        u_birthdate: dob,
        u_name: this.state.userName,
        u_gender: this.state.gender,
        u_country: this.state.countryId,
        u_state: this.state.stateId,
        u_city: this.state.cityId,
        u_bio: this.state.bio,
        u_mobile: this.state.mobileNumber,
        u_image: this.state.u_image,
        u_cover_image: this.state.u_cover_image,
      };
    }

    this.props.actionUpdateUserDetails(data).then((result) => {

    });
  };

  handleResetPassword = () => {
    let data = {
      password: this.state.userPassword,
      old_password: this.state.oldPassword
    };
    this.props.actionChangePassword(data).then((result) => {
      console.log('actionChangePassword', result);
    });
  };

  onChangeSelection(value) {
    this.setState({
      countryId: value,
      stateId: '',
      cityId: '',
    }, () => {
      this.getState()
    });

  }
  onChangeSelectionState(value) {
    this.setState({
      stateId: value,
      cityId: '',
    }, () => {
      this.getCity()
    });

  }
  onChangeSelectionCity(value) {
    console.log("valuevaluevalue", value)
    this.setState({
      cityId: value,
    });

  }
  handleMobileChange = (e) => {

    const re = /^[0-9\b]+$/; //rules
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({
        mobileNumber: e.target.value,
      });
    }

    // this.setState({
    //   mobileNumber: value,
    // });
  }
  handleCancel = () => {
    this.props.history.push({
      pathname: "/myprofile",
    });
  }
  handleUploadPicture(event, name) {
    const fileObject = event.target.files[0];
    if (fileObject) {

      if (name == 'u_image') {
        this.setState({
          isUploadingImage: true
        })
      } else {
        this.setState({
          isUploadingCoverImage: true
        })
      }

      let _this = this;
      let uploadPicturesResponse = {};
      let reqArray = [];
      const formData = new FormData();
      formData.set('u_image', fileObject);
      formData.append('thumbnailHeight', 100);
      formData.append('thumbnailWidth', 100);
      formData.append('isCreateThumbnail', true);
      formData.append('fileKey', fileObject.name);
      formData.append('filePath', fileObject.name);
      console.log("formDataformData", formData)

      this.props.actionUploadImage(formData)
        .then((result, error) => {

          console.log(name, "resultresultresult", result)
          let file = result.data.data.filepath;
          console.log("filefile", file)
          this.setState({
            [name]: file
          });

          if (name == 'u_image') {
            this.setState({
              isUploadingImage: false
            })
          } else {
            this.setState({
              isUploadingCoverImage: false
            })
          }

        })
        .catch(e => {

        });
    }
  }
  actionOnUpload(event) {
    toast.dismiss();
  }
  _getCategoriesHandler = async () => {
    try {
      let response = await ELPRxApiService("getCategoryList")
      console.log('=== categories ===', response)
      this.setState({
        category: response.data.data.categories_list
      })

    } catch (err) {
      console.log(err);
    }
  }
  handleCategoryChange = (e) => {
    try {
      let selectedCategories = this.state.selectedCategories;
      selectedCategories.push(JSON.parse(e.target.value))
      this.setState({
        selectedCategories
      })

    } catch (err) {
      console.log(err);
    }
  }
  _removeCategory = (i) => {
    try {
      let selectedCategories = this.state.selectedCategories;
      selectedCategories.splice(i, 1)
      this.setState({
        selectedCategories
      })

    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout pt-4 pb-5">
          <Container>
            <Row>
              <div className="myprofile">
                <Image src={this.state.u_cover_image ? this.state.u_cover_image : Profileban}
                  alt="" className="w-100" />
                <div className="upload_bg">
                  <Form.File
                    id="custom-filetwo"
                    autoComplete="off"
                    onChange={e => {
                      // alert("ASd")
                      this.handleUploadPicture(e, 'u_cover_image')
                    }}
                    onClick={(event) => {
                      event.target.value = null; this.actionOnUpload(event)
                    }}
                  // accept={customConstant.acceptedFormat.imageAcceptFormatType}
                  />
                  <span className="camspam"><Image src={Cameratwo} alt="" className="camera2" /></span> 
                </div>
                <div className="text-center profile_top"> 
                  <Image
                    src={this.state.u_image}
                    alt=""
                    className="r50 border_profile"
                  />
                  <Image src={this.state.flag ? this.state.flag : Usaflag}
                    alt="" width='50px' className="r50 flags" />
                  <div className="upload_pic">
                    <Form.File
                      id="custom-fileone"
                      autoComplete="off"
                      onChange={e =>
                        this.handleUploadPicture(e, 'u_image')
                      }
                      onClick={(event) => {
                        event.target.value = null; this.actionOnUpload(event)
                      }}
                    // accept={customConstant.acceptedFormat.imageAcceptFormatType}
                    />
                    <Image src={Camera} alt="" className="camera" />
                  </div>
                </div>
                <div className="mt-4 mb-4 pb-2"></div>
                <div className="text-center user_tab">
                  {/* <Tabs defaultActiveKey="home">
                    <Tab eventKey="home" title="profile info"> */}
                  <Col md={8} className="m-auto">
                    <Form className="text-left mt-5">
                      <Form.Group>
                        <Form.Label className="fs20 fw600 col14">
                          User Name:
                            </Form.Label>
                        <Form.Control
                          type="text"
                          name="userName"
                          placeholder="User Name"
                          //onChange={this.handleChange}
                          value={this.state.userName}
                          className="inputTyp2"
                          disabled={true}
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="fs20 fw600 col14">
                          Email:
                            </Form.Label>
                        <Form.Control
                          type="email"
                          name="userEmail"
                          placeholder="Email"
                          value={this.state.userEmail}
                          className="inputTyp2"
                          readOnly
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="fs20 fw600 col14 mt-2">
                          Old Password:
                            </Form.Label> 
                        <div className="d-flex">
                          <Form.Control
                            type="password"
                            name="oldPassword"
                            onChange={this.handleChange}
                            value={this.state.oldPassword}
                            className="inputTyp2"
                          />

                        </div>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="fs20 fw600 col14 mt-2">
                          New Password:
                            </Form.Label>
                        <div className="d-flex">

                          <Form.Control
                            type="password"
                            name="userPassword"
                            onChange={this.handlePasswordChange}
                            value={this.state.userPassword}
                            minLength="8"
                            maxLength="15"
                            inputProps={{ maxLength: 15, }}
                            className="inputTyp2"
                          />
                          <Button
                            className="btnTyp11 ml-3"
                            onClick={this.handleResetPassword}>
                            Change Password
                              </Button>
                        </div>
                      </Form.Group> 

                      <Form.Group>
                        <Form.Label className="fs20 fw600 mt-2 col14">
                          Mobile Number:
                            </Form.Label>
                        <Form.Control
                          type="text"
                          name="mobileNumber"
                          placeholder="Mobile Number"
                          onChange={this.handleMobileChange}
                          value={this.state.mobileNumber}
                          className="inputTyp2"
                        />
                      </Form.Group>

                      <Form.Group className="genders">
                        <Form.Label className="fs20 fw600 mt-2 mb-2 col14">
                          Gender:
                            </Form.Label>
                        <span>
                          <span><input type="radio" checked={this.state.gender === 'Male' ? true : false} value="Male" name="gender" onChange={this.handleChange} /> Male</span>
                          <span>
                            <input type="radio" checked={this.state.gender === 'Female' ? true : false} value="Female" name="gender" onChange={this.handleChange} /> Female </span>
                          <span><input type="radio" checked={this.state.gender === 'Others' ? true : false} value="Others" name="gender" onChange={this.handleChange} /> Others</span>
                        </span>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="fs20 fw600 col14">
                          BIO:
                            </Form.Label>
                        <Form.Control
                          type="textarea"
                          name="bio"
                          onChange={this.handleChange}
                          value={this.state.bio}
                          className="inputTyp2"
                          placeholder="Bio"
                        />
                      </Form.Group>
                      <Form.Label className="fs20 fw600 col14 mt-2">
                        Country:
                          </Form.Label>
                      <Row>
                        <Col md={4}>
                          <Select
                            classes="form-control selectTyp1"
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a Country"
                            optionFilterProp="children"
                            onChange={event => this.onChangeSelection(event)}
                            value={this.state.countryId}
                          >
                            <option value="">Select a Country</option>
                            {this.state.countryList && this.state.countryList.map(
                              (item, index) => {
                                return (
                                  <option value={item.country_id}>
                                    {capitalizeFirstLetter(item.country_name)}
                                  </option>
                                );
                              }
                            )}
                          </Select>
                        </Col> 
                        <Col md={4}>
                          <Select
                            classes="form-control selectTyp1"
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a State"
                            optionFilterProp="children"
                            onChange={event => this.onChangeSelectionState(event)}
                            value={this.state.stateId}
                          >
                            <option value="">Select a State</option>
                            {this.state.stateList && this.state.stateList.map(
                              (item, index) => {
                                return (
                                  <option value={item.state_id}>
                                    {capitalizeFirstLetter(item.state_name)}
                                  </option>
                                );
                              }
                            )}
                          </Select>
                        </Col>
                        <Col md={4}>
                          <Select
                            classes="form-control selectTyp1"
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a City"
                            optionFilterProp="children"
                            onChange={event => this.onChangeSelectionCity(event)}
                            value={this.state.cityId}>
                            <option value="">Select a City</option>
                            {this.state.cityList && this.state.cityList.map(
                              (item, index) => {
                                return (
                                  <option value={item.ct_id}>
                                    {capitalizeFirstLetter(item.city)}
                                  </option>
                                );
                              }
                            )}
                          </Select>
                        </Col>
                      </Row>
                      <Form.Label className="fs20 fw600 col14 mt-4">
                        Date of birth:
                          </Form.Label>
                      <Row>
                        <Col md={4}>
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <DayPicker
                              disabled
                              defaultValue="Day"
                              id="day"
                              name="day"
                              classes="form-control selectTyp1"
                              year={this.state.year}
                              month={this.state.month}
                              minDate={moment().startOf('year')}
                              endYearGiven
                              value={this.state.day}
                              onChange={(day) => {
                                this.setState({ day });
                                console.log(day, typeof day);
                              }}
                            />
                          </Form.Group>
                        </Col>

                        <Col md={4}>
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <MonthPicker
                              disabled
                              id="month"
                              name="month"
                              classes="form-control selectTyp1"
                              defaultValue={'Months'}
                              short
                              endYearGiven
                              year={this.state.year}
                              value={this.state.month}
                              onChange={(month) => {
                                this.setState({ month });
                              }}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <YearPicker
                              disabled
                              id="year"
                              name="year"
                              classes="form-control selectTyp1"
                              defaultValue="Year"
                              end={moment().year()}
                              reverse
                              value={this.state.year}
                              onChange={(year) => {
                                this.setState({ year });
                                console.log(year);
                              }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="m-auto txt-center">
                        <Button
                          className="btnTyp5 mt-5 mr-3"
                          onClick={this.handleSubmit}
                          disabled={this.state.isUploadingImage || this.state.isUploadingCoverImage}
                        >
                          {this.state.isUploadingImage || this.state.isUploadingCoverImage ? 'uploading image...' : 'save'}
                        </Button>
                        <Button onClick={this.handleCancel} className="btnTyp10 mt-5">cancel</Button>
                      </div>
                    </Form>
                  </Col>
                  {/* </Tab> */}
                  {/* <Tab eventKey="videos" title="videos">
                      <div className="mx-wcustomtwo m-auto">
                        <Row>
                          <Col md={6}>
                            <div className="profile_infos d-flex mb-4 pb-2">
                              <div className="mr-1">
                                <Form.Group
                                  controlId="profileinfos"
                                  className="mt-5 pt-3"
                                >
                                  <Form.Check
                                    type="checkbox"
                                    className="checkboxTyp1"
                                    label=""
                                    checked
                                  />
                                </Form.Group>
                              </div>
                              <div className="edit_dropdown">
                                <ul>
                                  <li>Edit Video</li>
                                  <li>Delete Video</li>
                                  <li>Publish video to public</li>
                                  <li>
                                    <Form.Check
                                      type="switch"
                                      id="custom-switch"
                                      label=""

                                    />
                                  </li>
                                </ul>
                              </div>
                              <div className="profile-video">
                                <Image
                                  src={Profileimgnew}
                                  alt=""
                                  className=""
                                />
                                <Image
                                  src={Videoicon}
                                  alt=""
                                  className="video_icon"
                                />
                                <div className="col29 fs18 fw500 mt-3 mb-3">
                                  Lorem Ipsum is simply
                                </div>
                                <div className="fs16 col28 fw500 mb-2">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </div>
                                <div className="fs16 col23">23 Jan 2020</div>
                              </div>
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="profile_infos d-flex mb-4 pb-2">
                              <div className="mr-1">
                                <Form.Group
                                  controlId="profileinfotwo"
                                  className="mt-5 pt-3"
                                >
                                  <Form.Check
                                    type="checkbox"
                                    className="checkboxTyp1"
                                    label=""
                                  />
                                </Form.Group>
                              </div>
                              <div className="edit_dropdown d-none">
                                <ul>
                                  <li>Edit Video</li>
                                  <li>Delete Video</li>
                                  <li>Publish video to public</li>
                                  <li>
                                    <Form>
                                      <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label=""
                                        checked
                                      />
                                    </Form>
                                  </li>
                                </ul>
                              </div>
                              <div className="profile-video">
                                <Image
                                  src={Profileimgnew}
                                  alt=""
                                  className=""
                                />
                                <Image
                                  src={Videoicon}
                                  alt=""
                                  className="video_icon"
                                />
                                <div className="col29 fs18 fw500 mt-3 mb-3">
                                  Lorem Ipsum is simply
                                </div>
                                <div className="fs16 col28 fw500 mb-2">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </div>
                                <div className="fs16 col23">23 Jan 2020</div>
                              </div>
                            </div>
                          </Col>

                          <Col md={6}>
                            <div className="profile_infos d-flex mb-4 pb-2">
                              <div className="mr-1">
                                <Form.Group
                                  controlId="profileinfothree"
                                  className="mt-5 pt-3"
                                >
                                  <Form.Check
                                    type="checkbox"
                                    className="checkboxTyp1"
                                    label=""
                                  />
                                </Form.Group>
                              </div>
                              <div className="edit_dropdown d-none">
                                <ul>
                                  <li>Edit Video</li>
                                  <li>Delete Video</li>
                                  <li>Publish video to public</li>
                                  <li>
                                    <Form>
                                      <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label=""
                                        checked
                                      />
                                    </Form>
                                  </li>
                                </ul>
                              </div>
                              <div className="profile-video">
                                <Image
                                  src={Profileimgnew}
                                  alt=""
                                  className=""
                                />
                                <Image
                                  src={Videoicon}
                                  alt=""
                                  className="video_icon"
                                />
                                <div className="col29 fs18 fw500 mt-3 mb-3">
                                  Lorem Ipsum is simply
                                </div>
                                <div className="fs16 col28 fw500 mb-2">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </div>
                                <div className="fs16 col23">23 Jan 2020</div>
                              </div>
                            </div>
                          </Col>

                          <Col md={6}>
                            <div className="profile_infos d-flex mb-4 pb-2">
                              <div className="mr-1">
                                <Form.Group
                                  controlId="profileinfofour"
                                  className="mt-5 pt-3"
                                >
                                  <Form.Check
                                    type="checkbox"
                                    className="checkboxTyp1"
                                    label=""
                                  />
                                </Form.Group>
                              </div>
                              <div className="edit_dropdown d-none">
                                <ul>
                                  <li>Edit Video</li>
                                  <li>Delete Video</li>
                                  <li>Publish video to public</li>
                                  <li>
                                    <Form>
                                      <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label="Check this switch"
                                        checked
                                      />
                                    </Form>
                                  </li>
                                </ul>
                              </div>
                              <div className="profile-video">
                                <Image
                                  src={Profileimgnew}
                                  alt=""
                                  className=""
                                />
                                <Image
                                  src={Videoicon}
                                  alt=""
                                  className="video_icon"
                                />
                                <div className="col29 fs18 fw500 mt-3 mb-3">
                                  Lorem Ipsum is simply
                                </div>
                                <div className="fs16 col28 fw500 mb-2">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </div>
                                <div className="fs16 col23">23 Jan 2020</div>
                              </div>
                            </div>
                          </Col>

                          <Col md={12} className="pl-4 text-left">
                            <Button className="btnTyp5 ml-5 mt-4 mr-3">
                              save
                            </Button>
                            <Button className="btnTyp10 mt-4">cancel</Button>
                          </Col>
                        </Row>
                      </div>
                    </Tab> */}


                  {/* <Tab eventKey="badgesawards" title="Badges & Awards">
                      <Col md={6} className="m-auto text-left pt-5">
                        <div className="mw-40 m-auto d-flex">
                          <div className="w-50 pl-5">
                            <div className="mb-4">
                              <Image src={Checkediconfour} alt="" />
                              <span className="pl-3">Newbie</span>
                            </div>
                            <div className="mb-4">
                              <Image src={Checkediconfour} alt="" />
                              <span className="pl-3">Love Bug</span>
                            </div>
                            <div className="mb-4">
                              <Image src={Checkediconfour} alt="" />
                              <span className="pl-3">Affirmative</span>
                            </div>
                            <div className="mb-4">
                              <Image src={Checkediconfour} alt="" />
                              <span className="pl-3">Listening Ace</span>
                            </div>
                          </div>
                          <div className="w-50">
                            <div className="mb-4">
                              <Image src={Checkediconfour} alt="" />
                              <span className="pl-3">Tik Tok</span>
                            </div>
                            <div className="mb-4">
                              <Image src={Checkediconfour} alt="" />
                              <span className="pl-3">Steadfast Soul</span>
                            </div>
                            <div className="mb-4">
                              <Image src={Checkediconfour} alt="" />
                              <span className="pl-3">First Chat</span>
                            </div>
                            <div className="mb-4">
                              <Image src={Checkediconfour} alt="" />
                              <span className="pl-3">Open Door</span>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Tab> */}

                  {/* <Tab eventKey="Categories" title="Categories">
                      <Col md={8} className="m-auto">
                        <Form className="text-left mt-5">
                          <Form.Group>
                            <div className="d-flex">
                              <Form.Control
                                as="select"
                                // className="selectTyp1 select3"                           
                                placeholder="Category"
                                className="inputTyp2"
                                // error={errors.category ? true : false}
                                id="outlined-pwd"
                                label="category"
                                variant="outlined"
                                name="category"
                                value={this.state.category}
                                // onChange={this.handleChange}
                                inputProps={{
                                  maxLength: 30,
                                }}
                                onChange={this.handleCategoryChange}
                              >
                                <option >select category </option>
                                {
                                  this.state.category.map(obj => {
                                    return <option value={JSON.stringify(obj)}>{obj.cat_name}</option>
                                  })
                                }

                              </Form.Control>
                            </div>
                            <div className="d-flex mw-customtree">
                              {
                                this.state.selectedCategories.map((ele, i) => {
                                  return (
                                    <span className="multiple_d">
                                      {ele.cat_name}
                                      <Image onClick={() => { this._removeCategory(i) }} src={Crossblue} alt="" />
                                    </span>
                                  )
                                })
                              }


                            </div>
                          </Form.Group>

                          <Button className="btnTyp5 mt-5 mr-3">save</Button>
                          <Button className="btnTyp10 mt-5">cancel</Button>
                        </Form>
                      </Col>
                    </Tab> */}
                  {/* </Tabs> */}
                </div>
              </div>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(null, {
  actionGetProfile,
  actionUpdateUserDetails,
  actionChangePassword,
  actionGetCountry,
  actionGetState,
  actionGetCity,
  actionUploadImage
})(Editprofile);
