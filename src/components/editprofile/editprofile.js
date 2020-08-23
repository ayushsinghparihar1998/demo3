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
import NavBar from '../core/nav';
import Footer from '../core/footer';
import Profileban from '../../assets/images/profile_ban.svg';
import Profileimg from '../../assets/images/profile_img.svg';
import Usaflag from '../../assets/images/usa_flag.svg';
import warningS from '../../assets/images/w_signal.svg';
import Camera from '../../assets/images/camera.svg';
import Cameratwo from '../../assets/images/camera-white.svg';
import Profileimgnew from '../../assets/images/profileinner_img.svg';
import Videoicon from '../../assets/images/video_icon.svg';
import Checkediconfour from '../../assets/images/checked_icon4.svg';
import Crossblue from '../../assets/images/cross_blue.svg';

class Editprofile extends Component {
  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout pt-4 pb-5">
          <Container>
            <Row>
              <div className="myprofile">
                <Image src={Profileban} alt="" className="w-100" />
                <div className="upload_bg">
                  <Form.File id="custom-filetwo" />
                  <Image src={Cameratwo} alt="" className="camera2" />
                </div>
                <div className="text-center profile_top">
                  <Image
                    src={Profileimg}
                    alt=""
                    className="r50 border_profile"
                  />
                  <Image src={Usaflag} alt="" className="r50 flags" />
                  <div className="upload_pic">
                    <Form.File id="custom-fileone" />
                    <Image src={Camera} alt="" className="camera" />
                  </div>
                </div>
                <div className="mt-4 mb-4 pb-2"></div>
                <div className="text-center user_tab">
                  <Tabs defaultActiveKey="home">
                    <Tab eventKey="home" title="profile info">
                      <Col md={8} className="m-auto">
                        <Form className="text-left mt-5">
                          <Form.Group>
                            <Form.Label className="fs20 fw600 col14">
                              User Name:
                            </Form.Label>
                            <Form.Control
                              type="text"
                              value="Melisa R. Wright"
                              className="inputTyp2"
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label className="fs20 fw600 col14">
                              Email:
                            </Form.Label>
                            <Form.Control
                              type="email"
                              value="melisa_rw@ gmail.com"
                              className="inputTyp2"
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label className="fs20 fw600 col14 mt-2">
                              Password:
                            </Form.Label>
                            <div className="d-flex">
                              <Form.Control
                                type="password"
                                value="passsword"
                                className="inputTyp2"
                              />
                              <Button className="btnTyp11 ml-3">reset</Button>
                            </div>
                          </Form.Group>

                          <Form.Label className="fs20 fw600 col14 mt-2">
                            Date of Birth
                          </Form.Label>
                          <Row>
                            <Col md={3}>
                              <Form.Group>
                                <Form.Control
                                  as="select"
                                  className="selectTyp1"
                                >
                                  <option>Day</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </Form.Control>
                              </Form.Group>
                            </Col>

                            <Col md={3}>
                              <Form.Group>
                                <Form.Control
                                  as="select"
                                  className="selectTyp1"
                                >
                                  <option>Month</option>
                                  <option>1990</option>
                                  <option>1991</option>
                                  <option>1992</option>
                                  <option>1993</option>
                                </Form.Control>
                              </Form.Group>
                            </Col>
                            <Col md={3}>
                              <Form.Group>
                                <Form.Control
                                  as="select"
                                  className="selectTyp1"
                                >
                                  <option>Year</option>
                                  <option>1990</option>
                                  <option>1991</option>
                                  <option>1992</option>
                                  <option>1993</option>
                                </Form.Control>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Button className="btnTyp5 mt-5 mr-3">save</Button>
                          <Button className="btnTyp10 mt-5">cancel</Button>
                        </Form>
                      </Col>
                    </Tab>
                    <Tab eventKey="videos" title="videos">
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
                                      checked
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
                    </Tab>
                    <Tab eventKey="badgesawards" title="Badges & Awards">
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
                    </Tab>
                    <Tab eventKey="Categories" title="Categories">
                      <Col md={8} className="m-auto">
                        <Form className="text-left mt-5">
                          <Form.Group>
                            <div className="d-flex">
                              <Form.Control
                                type="text"
                                value="Categories |"
                                className="inputTyp2 col23"
                              />
                              <Button className="btnTyp11 ml-3">Add</Button>
                            </div>
                            <div className="d-flex mw-customtree">
                              <span className="multiple_d">
                                Work Stress
                                <Image src={Crossblue} alt="" />
                              </span>
                              <span className="multiple_d">
                                Eating Disorders
                                <Image src={Crossblue} alt="" />
                              </span>
                              <span className="multiple_d">
                                Work Stress
                                <Image src={Crossblue} alt="" />
                              </span>
                              <span className="multiple_d">
                                Eating Disorders
                                <Image src={Crossblue} alt="" />
                              </span>
                            </div>
                          </Form.Group>

                          <Button className="btnTyp5 mt-5 mr-3">save</Button>
                          <Button className="btnTyp10 mt-5">cancel</Button>
                        </Form>
                      </Col>
                    </Tab>
                  </Tabs>
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
export default Editprofile;
