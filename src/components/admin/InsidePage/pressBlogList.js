import React from 'react';
import { Image, Button, Col , Row, Form } from 'react-bootstrap';
import moment from "moment";

const PressBlogListPage = ({changepath , pressBlogCategory , handleCheckSearch,
    pressblogList, Editicon , Deleteicon , changeStatusBlog , blogclock}) => {
    return(
        <Col md={8} lg={9} className="pl-1">
          <div className="professor_search listBlogs">
            <Row className="mb-1">
              <Col md={8}>
                <div className="fs22 fw600 col10">
                  List of Press Blogs
                </div>
              </Col>
              <Col md={4}>
                <div className="text-right pro_cbtn">
                  <Button
                    type="button"
                    className="btnTyp5"
                    onClick={() =>
                      changepath(
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
                  {pressBlogCategory &&
                    pressBlogCategory.map((item) => {
                      return (
                        <Form.Check
                          type="checkbox"
                          className={`checkthree ${item.pbc_status === "1" ? "active" : ""
                            }`}
                          label={item.pbc_name}
                          id={item.pbc_id}
                          name={item.pbc_name}
                          onChange={(e) =>
                            handleCheckSearch(
                              e,
                              "pressBlogCategory",
                              item.pbc_status === "1" ? "0" : "1"
                            )
                          }
                          value={item.pbc_id}
                          checked={item.pbc_status === "1"}
                        />
                      );
                    })}
                </Form.Group>
              </div>
            </Form>
          </div>
          {pressblogList &&
            pressblogList.map((item) => {
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
                              {item.pbl_title}
                            </div>
                            <div className="d-flex ml-auto">
                              <span className="mr-3">
                                <Image
                                  src={Editicon}
                                  alt=""
                                  onClick={() =>
                                    changepath(
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
                                    changeStatusBlog(
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
      )
}

export default PressBlogListPage