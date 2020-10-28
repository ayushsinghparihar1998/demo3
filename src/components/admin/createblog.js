import React, { Component } from "react";
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
import Profileban from "../../assets/images/profile_ban.svg";
import Profileimg from "../../assets/images/profile_img.svg";
import Usaflag from "../../assets/images/usa_flag.svg";
import warningS from "../../assets/images/w_signal.svg";
import Camera from "../../assets/images/camera.svg";
import Cameratwo from "../../assets/images/camera-white.svg";
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Checkgreen from "../../assets/images/checkgreen.svg";
import Yellowstar from "../../assets/images/stars.png";
import Aflag from "../../assets/images/australia_flag.svg";
import Iflag from "../../assets/images/india_flag.svg";
import { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";
import constant from "../../constant"

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class Createblogs extends Component {


  state = {
    isUploading: false,
    filepath: null,
    title: null,
    description: null,
    filename: null

  }


  handleUploadPicture = async (event, name) => {
    const fileObject = event.target.files[0];
    console.log()
    if (fileObject) {
      this.setState({
        isUploading: true
      })
      const formData = new FormData();
      formData.set('u_image', fileObject);
      console.log("formDataformData", formData)


      // const url = "https://staging.eatluvnpray.org/elp/uploadblogimage";
      // "https://eatluvnpray.org/elp/uploadblogimage";
      const url = constant.SERVER_URL + 'elp/uploadblogimage'
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      const response = await post(url, formData, config);
      console.log(name, "resultresultresult", response)

      this.setState({
        isUploading: false,
        filepath: response.data.data.filepath,
        filename: fileObject.name
      })
    }
  }

  _saveBlogHandler = async () => {
    try {
      let response = await ELPRxApiService("createBlog", {
        bl_title: this.state.title,
        bl_image: this.state.filepath,
        bl_desc: this.state.description,
      });
      this.props.history.push('/blogs')
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout pt-4 pb-5">
          <Container>
            <Row>

              <Col sm={12} className="pl-1">
                <div className="createblog">
                  {/* <div className="d-flex mb-4">
                    <div className="col23 fs28 fw600">Create Blog</div>
                    <Button className="btnTyp9 approve">EDIT BLOG</Button>
                  </div> */}

                  <div className="blog_form">
                    <Form>
                      <Form.Group>
                        <Form.Label className="col14 fw600 fs18">Upload blog image</Form.Label>
                        <Form.File onChange={e =>
                          this.handleUploadPicture(e, 'backgroud_img')
                        } id="exampleFormControlFile1" className="fileType2" />
                        <div className="fs16 fw400 col14 tesxtfills">
                          {
                            this.state.filename ?
                              <strong className="col23">{this.state.filename}</strong> :
                              <><strong className="col23">Add file</strong> or drop files here</>
                          }
                        </div>
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail">
                        <Form.Label className="col14 fw600 fs18">Title of the blog</Form.Label>
                        <Form.Control onChange={(e) => this.setState({ title: e.target.value })} type="text" className="inputTyp2" />

                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="col14 fw600 fs18">Description</Form.Label>
                        <CKEditor
                          config={{
                            height:500
                          }}
                          editor={ClassicEditor}
                          // data="<p>Hello from CKEditor 5!</p>"
                          
                          onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            this.setState({ description: data })
                          }}
                          onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                          }}
                        />
                        {/* <Form.Control onChange={(e) => this.setState({ description: e.target.value })} as="textarea" className="inputTyp2 cate2" rows="3" /> */}
                      </Form.Group>
                      {/* <Form.Group controlId="formBasicEmail">
                        <Form.Label className="col14 fw600 fs18">Link to be shared</Form.Label>
                        <Form.Control type="text" placeholder="htttp://socialwelfare.com" className="inputTyp2" />

                      </Form.Group> */}

                      <Button disabled={this.state.isUploading} className="btnTyp4 mt-4" onClick={this._saveBlogHandler}>
                        {this.state.isUploading ? 'UPLOADING' : 'SUBMIT'}
                      </Button>

                    </Form>
                  </div>
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
export default Createblogs;
