import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import {
    actionSearchProfessionals, actionAdminGetCategory
} from "../../common/redux/actions";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Requestuserthree from "../../assets/images/pro_img3.svg";
import Aflag from "../../assets/images/australia_flag.svg";
import Iflag from "../../assets/images/india_flag.svg";

class Professionalchatsearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileName: '', searchData: []
        };
    }
    componentDidMount() {
        this.getcategoryList();
        this.searchProfessionalList();
    }

    searchProfessionalList = () => {
        let profileName = this.state.profileName;
        let data = { "category": '', "name": '', "country": '', "state": '', "city": '' }
        this.props.actionSearchProfessionals(data).then((result) => {
            if (result && result.status === 200) {
                console.log("searchhhhh", result);
                let searchData = result && result.data && result.data.data ? result.data.data : [];
                this.setState({ searchData: searchData });
            }
        });
    }

    getcategoryList = () => {
        // let chkUserProfile = this.state.activeProfile;
        // this.setState({ activeProfile: activaClass, pageNumber: pageNumber });
        // let profileListing = [];
        let data = { "count": 1, "offset": 10 }
        this.props.actionAdminGetCategory(data).then((result) => {
            if (result && result.status === 200) {
                console.log("vvvvv", result);
                // profileListing = result && result.data && result.data.data ? result.data.data.listing : [];
                // let totalRecord = result && result.data && result.data.data ? result.data.data.totalRecordCount : 0;
                // this.setState({ profileListing: profileListing, totalRecord: totalRecord });
            }
        });
    }

    searchProfessionalList1 = () => {
        let profileName = this.state.profileName;
        let data = { "category": "'Category 1','Category 2'", "name": profileName, "country": "India", "state": "Madhya pradesh", "city": "" }
        this.props.actionSearchProfessionals(data).then((result) => {
            if (result && result.status === 200) {
                console.log("searchhhhh", result);
                let searchData = result && result.data && result.data.data ? result.data.data : [];
                this.setState({ searchData: searchData });
            }
        });
    }

    handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;
        if (name == 'profileName') {
            this.setState({
                profileName: value,
                categoryList: [],
            });
        }

    }


    render() {
        let categoryList = this.state.categoryList;
        let searchData = this.state.searchData;
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout userdashboards chatsearches pt-4 pb-5">
                    <Container>
                        <Row>
                            <Col md={3}>
                                <div className="left_sidebar">
                                    <div className="inner_side">
                                        <div className="chat-bg fs600 fs17 col18 pl-3 pointer">Refine Your Search</div>
                                        <div className="location">
                                            <div className="col1 fs16 fw500 mb-2">Location</div>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Control as="select"
                                                    className="selectTyp1 select3"
                                                    disabled={true}
                                                    name="date">
                                                    <option>Within 25 Miles of</option>

                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="City, State, Zip or Country"
                                                    className="inputTyp2 input3"
                                                    id="outlined-email"
                                                    variant="outlined"
                                                    name="screenName"
                                                />
                                            </Form.Group>

                                            <div className="col1 fs16 fw500 mb-2">Name</div>
                                            <Form.Group>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Name"
                                                    className="inputTyp2 input3"
                                                    id="outlined-email"
                                                    variant="outlined"
                                                    name="profileName"
                                                    onChange={event => {
                                                        this.handleChange(event);
                                                    }}
                                                />
                                            </Form.Group>
                                            <div className="col1 fs16 fw500 mb-2">Category</div>
                                            <div className="cat-sethight">
                                                {categoryList && categoryList.map((cat, idx) => {
                                                    return (
                                                        <Form.Group controlId="formBasicCheckbox">
                                                            <Form.Check type="checkbox" label="Check me out"
                                                                className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" />
                                                        </Form.Group>
                                                        // <span> {cat}</span>
                                                    )
                                                })}
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Check me out" className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicCheckboxtwo">
                                                    <Form.Check type="checkbox" label="Addiction" className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicCheckboxthree">
                                                    <Form.Check type="checkbox" label="ADHD" className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicCheckboxfour">
                                                    <Form.Check type="checkbox" label="Alcohol Abuse" className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Check me out" className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicCheckboxtwo">
                                                    <Form.Check type="checkbox" label="Addiction" className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicCheckboxthree">
                                                    <Form.Check type="checkbox" label="ADHD" className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicCheckboxfour">
                                                    <Form.Check type="checkbox" label="Alcohol Abuse" className="fw300 fs14 col3 mt-1 checkboxTyp1 check2" />
                                                </Form.Group>
                                            </div>
                                            <Button
                                                className="btnTyp12 btnT12 mt-4 mb-5"
                                                onClick={this.searchProfessionalList1}
                                            >
                                                Search
                                             </Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={9}>
                                <div className="text-center">
                                    <div className="bg-white pl-4 pr-4">
                                        {searchData && searchData.map((searchItem, idx) => {
                                            let categryLen = searchItem.uc_cat_name ? searchItem.uc_cat_name.length : 0;
                                            return (
                                                <div className="d-flex pt-5 pb-5 ml-1 mr-1 text-left border-grays">
                                                    <div className="mr-4">
                                                        <Image src={searchItem.u_image ? searchItem.u_image : Requestuser} alt="" className="r50" />
                                                    </div>
                                                    <div className="pl-2">
                                                        <div className="d-flex justify-content-between">
                                                            <div>
                                                                <div className="col1 fw500 fs18 pb-1">{searchItem.u_name ? searchItem.u_name : ''}</div>
                                                                <div className="col40 fs15 fw400 pb-1">
                                                                    Category:  {searchItem.uc_cat_name && searchItem.uc_cat_name.map((cat, cidx) => {
                                                                    return (
                                                                        <span> {categryLen - 1 > idx ? cat + ", " : cat}</span>
                                                                    )
                                                                })}
                                                                </div>
                                                                {/* <div className="fs14 fw400 col54 pb-1">Licensed Professional Counselor, LPC</div> */}
                                                            </div>
                                                            <div className="">
                                                                <span className="col28 fs14 fs400 pr-3">
                                                                    {searchItem.u_city ? searchItem.u_city : ''}
                                                                </span>
                                                                <Image src={searchItem.u_flagAflag ? searchItem.u_flagAflag : ''} alt="" />
                                                                <div className="col40 fs14 fs400 pt-1">{searchItem.u_mobile ? searchItem.u_mobile : ''}</div>
                                                            </div>
                                                        </div>

                                                        <div className="col28 fs15 fw400 pt-1">{searchItem.u_bio ? searchItem.u_bio : ''}
                                                            {/* <span className="col40 fw500">Read more...</span> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

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

export default connect(null, {
    actionSearchProfessionals, actionAdminGetCategory
})(Professionalchatsearch);



