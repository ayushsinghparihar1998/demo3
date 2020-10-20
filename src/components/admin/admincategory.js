import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actionGetCategory,
  actionAddCategory,
  actionDeleteCategory,
  actionEditCategory,
} from "../../common/redux/actions";
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
  Modal,
} from "react-bootstrap";

// import NavBar from "../core/nav";
import NavBar from "../core/navAdmin";
import Footer from "../core/footer";
import Requestdetails from "../../assets/images/register2.svg";
import Deleteicon from "../../assets/images/delete_icon.svg";
import Crossbtn from "../../assets/images/blue_cross.svg";
import ELPRxApiService from "../../common/services/apiService";

class Categoryadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfCategory: [],
      errors: {},
    };
  }

  componentDidMount() {
    this._getCategoriesHandler();
  }

  _getCategoriesHandler = async () => {
    try {
      let response = await ELPRxApiService("getSuperAdminCategories");
      console.log("=== categories ===", response);
      this.setState({
        listOfCategory: response.data.data.categories_list,
      });
    } catch (err) {
      console.log(err);
    }
  };
  handleEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.addCategory();
    } else {
      this.addCategory();
    }
  };

  addCategory = async (event) => {
    try {
      console.log({uc_cat_name: [{ uc_cat_name: this.state }]})
      let response = await ELPRxApiService("addCategorySuperAdmin", {
        uc_cat_name: [{ uc_cat_name: this.state.category_name }]
      });
      console.log("=== categories ===", response);
      this._getCategoriesHandler()
      this.setState({ category_name: "" });
    } catch (err) {
      console.log(err);
    }

  };
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      category_name: e.target.value
    },()=>{
      console.log(this.state.category_name)
    })
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
              <Col md={2} className="pr-1"></Col>
              <Col md={9} className="pl-1">
                <div className="adminlistener categorys p-3 mb-3">
                  <Col md={12}>
                    <Form.Group>
                      <div className="d-flex">
                        <div className="w-100">
                          <Form.Label className="fs20 fw600 col14">
                            Add Category
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Category"
                            className="inputTyp2"
                            error={errors.category ? true : false}
                            id="outlined-pwd"
                            autoComplete="off"
                            label="category"
                            variant="outlined"
                            name="category"
                            value={this.state.category_name}
                            onChange={this.handleChange}
                            maxLength="30"
                            inputProps={{
                              maxLength: 30,
                            }}
                          //onKeyPress={this.handleEnter}
                          />
                        </div>
                        <div className="mt-4 pt-2">
                          <Button
                            onClick={this.addCategory}
                            className="btnTyp11 cbttyp2 ml-3 pointer"
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                    </Form.Group>
                    
                    <ul className="category_listing">
                      {this.state.listOfCategory &&
                        this.state.listOfCategory.map((item, index) => {
                          return (
                            <li>
                              <div className="col23 fs16 fw400">
                                {item.cat_name}
                              </div>
                              <div className="c_img">
                                {/* <Image
                                  src={Requestdetails}
                                  alt=""
                                  className="mr-2"
                                />
                                <Image
                                  onClick={(e) => {

                                  }}
                                  src={Deleteicon}
                                  alt=""
                                /> */}
                              </div>
                            </li>
                          );
                        })}

                    </ul>
                  </Col>
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
export default connect(null, {
  actionGetCategory,
  actionAddCategory,
  actionDeleteCategory,
  actionEditCategory,
})(Categoryadmin);
