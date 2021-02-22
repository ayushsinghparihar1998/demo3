import React, { useEffect, useState } from "react";
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
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Mediadetailone from "../../assets/images/mediadetail.svg";
import Sharebtn from "../../assets/images/sharebtn.png";
import ELPRxApiService from "../../common/services/apiService";
import moment from "moment";
import YouTube from "react-youtube";
import VideoIcon from "../../assets/images/videoIcon.png";

const Mediadetails = (props) => {
  const [blogDetail, setBlogDetail] = useState({});
  const [url, seturl] = useState("");
  const [play, setplay] = useState(false);
  const [opts, setopts] = useState({
    height: "390",
    width: "640",
    playerVars: {
      autoplay: play ? false : "",
    },
  });
  useEffect(() => {
    _getBlogDetailHandler();
  }, []);

  const _getBlogDetailHandler = async () => {
    console.log(props.history.location.state.type);
    let api =
      props.history.location.state.type == "blog"
        ? "getBlogDetail"
        : "getvlogs_details";
    let data =
      props.history.location.state.type == "blog"
        ? { bl_id: props.match.params.id }
        : { vl_id: props.match.params.id };
    try {
      let response = await ELPRxApiService(api, data);
      console.log(" detail response", response);
      if (props.history.location.state.type == "blog") {
        setBlogDetail({ ...response.data.data.blog_list[0] });
      } else {
        let url = "";
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = response.data.data[0].vl_video_url.match(
          regExp
        );
        if (match && match[2].length == 11) {
          console.log("match[2]", match[2]);
          url = match[2];
          console.log(url);
        } else {
          //error
        }
        setBlogDetail({ ...response.data.data[0] });
        seturl({ url });
      }
    } catch (err) {
      console.log('err', );
      console.log(err);
    }
  };

  return (
    <div className="page__wrapper innerpage">
      <div className="main_baner">
        <NavBar {...props} />
      </div>
      <div className="ngo_services media_details">
        <Container>
          <div className="ngo_listing mt-4 mb-4">
            <div className="col1 fw600 fs22 text-center w-100 mt-4 pt-3">
              {props.history.location.state.type == "blog"
                ? blogDetail.bl_title
                : blogDetail.vl_title}
            </div>
            <hr className="ngohr" />
            <Row className="mt-4">
              <Col lg={12}>
                <div className="ngo_details mt-2">
                  {props.history.location.state.type == "blog" ? (
                    <Image src={blogDetail.bl_image} alt="" className="w-100" />
                  ) : (
                    <>
                       {/* Dharmpal */} 
                      <Image
                        src={blogDetail.vl_thumbnail_url}
                        alt=""
                        className="w-100"
                      />
                      {play == false ? (
                        ""
                      ) : (
                        <Image 
                          src={VideoIcon}
                          className="iconVideo"
                          onClick={() => setplay(true)}
                        />
                      )}
                      <YouTube videoId={url} opts={opts} />   
                    </>
                  )}
                  <div className="pt-3 pb-3">
                    <div className="col14 fs14 fw400 pt-1">
                      {props.history.location.state.type == "blog"
                        ? moment(blogDetail.bl_datetime).format(
                            "dddd MMM Do YYYY"
                          )
                        : moment(blogDetail.vl_datetime).format(
                            "dddd MMM Do YYYY"
                          )}
                    </div>
                    <div
                      className="fs14 col28 fw300 pt-3 line_txt"
                      dangerouslySetInnerHTML={{
                        __html:
                          props.history.location.state.type == "blog"
                            ? blogDetail.bl_desc
                            : blogDetail.vl_desc,
                      }}
                    ></div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Mediadetails;
