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
import validateInput from "../../common/validations/validationAddDomain";
import { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";

import constant from "../../constant"; 
class CreateVlog extends Component { 
  render() {
    return (
      <div className="page__wrapper innerpage">  
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout adminProfessinal addKits pt-4 pb-5">    
          <Container>
            <Row>
              <Col md={3} className="pr-1">
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
                <div className="professor_search listBlogs">
                  <Row className="mb-1">
                    <Col md={8}>
                      <div className="fs22 fw600 col10">
                        List of Press Blogs
                      </div>
                      <div className="fw300 fs16 col14">
                        {/* Lorem Ipsum is simply dummy and typesetting industry. */}
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="text-right pro_cbtn">
                        <Button
                          type="button"
                          className="btnTyp5"
                          onClick={() =>
                            this.changepath(
                              `/professinalBlogPress/0`,
                              "getpressblogListHandler"
                            )
                          }
                        >
                          create press blog
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <Form className="p_form mb-4">
                    <div className="checkCategory">
                      <Form.Group
                        controlId="formBasicCheckbox1"
                        className="row"
                      >
                        {this.state.pressBlogCategory &&
                          this.state.pressBlogCategory.map((item) => {
                            return (
                              <Form.Check
                                type="checkbox"
                                className={`checkthree ${
                                  item.pbc_status == "1" ? "active" : ""
                                }`}
                                label={item.pbc_name}
                                id={item.pbc_id}
                                name={item.pbc_name}
                                // value={item.flag}
                                // checked={item.flag}
                                onChange={(e) =>
                                  this.handleCheckSearch(
                                    e,
                                    "pressBlogCategory",
                                    item.pbc_status == "1" ? "0" : "1"
                                  )
                                }
                                // handleCheck={item.flag}
                                value={item.pbc_id}
                                checked={item.pbc_status == "1"}
                                // onChange={(e) => this.handleCheck(e)}
                              />
                            );
                          })}
                      </Form.Group>
                    </div>
                  </Form>
                </div>
                {this.state.pressblogList &&
                  this.state.pressblogList.map((item) => {
                    return (
                      <div className="adminlistener p-4 mb-3">
                        <div className="d-flex text-left">
                          <div className="mr-2 pt-1">
                            <Image
                              src={item.pbl_image ? item.pbl_image : ""}
                              alt=""
                            />
                          </div>
                          <div className="pl-2 w-100">
                            <div className="d-flex justify-content-between">
                              <div className="w-100">
                                <div className="d-flex">
                                  <div className="col1 fw600 fs18 pb-1">
                                    Hello
                                  </div>
                                  <div className="d-flex ml-auto">
                                    <span className="mr-3">
                                      <Image
                                        src={Editicon}
                                        alt=""
                                        onClick={() =>
                                          this.changepath(
                                            `/professinalBlogPress/${item.pbl_id}`,
                                            "getpressblogListHandler"
                                          )
                                        }
                                      />
                                    </span>
                                    <span>
                                      <Image
                                        src={Deleteicon}
                                        alt=""
                                        onClick={() =>
                                          this.changeStatusBlog(
                                            item.pbl_id,
                                            "superadmin_change_press_blogstatus"
                                          )
                                        }
                                      />
                                    </span>
                                  </div>
                                </div>

                                <div className="mb-1">
                                  <span className="fs16 fw400 col14">
                                    Written by{" "}
                                    <span className="col8">
                                      {item.pbl_written_by}
                                    </span>{" "}
                                  </span>
                                  <span className="ml-3">
                                    <Image
                                      src={blogclock}
                                      className="wSet-20 mr-2"
                                    />
                                    {moment(item.pbl_time).format(
                                      "dddd MMM Do YYYY HH:mm"
                                    )}
                                  </span>
                                </div>

                                <div className="fs16 fw400 col14 pb-1 e_detai">
                                  <strong className="fw600">
                                    Description:{" "}
                                  </strong>
                                  <span
                                    className="fs14"
                                    dangerouslySetInnerHTML={{
                                      __html: item.pbl_desc,
                                    }}
                                  ></span>
                                </div>

                                <div className="eat_category">
                                  {item.press_blog_category &&
                                    item.press_blog_category.map((val) => {
                                      return (
                                        <span className="eatcat">
                                          {val.pbc_cat_name}
                                        </span>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </Col>
            

            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CreateVlog; 



