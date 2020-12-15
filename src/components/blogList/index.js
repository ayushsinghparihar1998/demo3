import React, { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Blogs from "../../assets/images/blogs.svg";
import ELPRxApiService from "../../common/services/apiService";
import { NavLink } from "react-router-dom";
const BlogList = (props) => {
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    _getBlogListHandler();
  }, []);
  const _getBlogListHandler = async () => {
    try {
      let response = await ELPRxApiService("getBlogList");
      setBlogList([...response.data.data]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="blogs">
      <div className="fs22 col14 fw600 text-center">Blogs</div>
      <hr className="blog_hr" />
      <div className="pl-3">
        <Row>
          {blogList.map((data) => {
            return (
              <Col md={3} sm={6}>
                <div className="blog_detail">
                  <NavLink to={`/mediadetails/${data.bl_id}`}>
                    <Image src={data.bl_image} alt="" />
                    <div className="fs15 pt-2">{data.bl_title}</div>
                  </NavLink>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default BlogList;
