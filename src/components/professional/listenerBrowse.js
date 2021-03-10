import React, { Component } from "react";
import { Button,Container, Row, Col, Image, Form, Modal } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Messagefour from "../../assets/images/msg4.svg";
import ELPRxApiService from "../../common/services/apiService";
import Crossbtn from "../../assets/images/blue_cross.svg";


class ListenerBrowse extends Component {
    state = {
        listenerData: [],
        search_keyword: "",
        order_by: "",
        offset: 6,
        show3: false,
        currentData: {},
        categoriesList: [],
        selectedCategory: null
    }

    componentDidMount() {
        this._getListenerData()
        this._getAllCategoriesHandler()
    }

    _getAllCategoriesHandler = async () => {
        try {
            let response = await ELPRxApiService("getCategoryList")
            console.log("RESPONSE ",response)
            this.setState({
                categoriesList: response.data.data.categories_list
            })
        } catch (err) {
            console.log(err)
        }
    }

    _getListenerData = async () => {
        try {

            let response = await ELPRxApiService("searchlistener", {
                search_keyword: this.state.search_keyword,
                order_by: this.state.order_by,
            })
            console.log("LISTNER DATA " , response.data.data)
            this.setState({
                listenerData: response.data.data
            })
        } catch (err) {
            console.log(err)
        }
    }

    _getFilteredListenerData = async () => {
        try {


            console.log(this.state.selectedCategory)

            let response = await ELPRxApiService("filteredsearchlistener", {
                search_keyword: this.state.search_keyword,
            })
            this.setState({
                listenerData: response.data.data
            })
        } catch (err) {
            console.log(err)
        }
    }

    bookSessionOpen = (obj) => {
        console.log(obj)

        this.setState({
            show3: true,
            currentData: obj
        });
    };

    bookSessionClose = () => {
        this.setState({ show3: false });
    };

    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                <div className="profile_layout pt-4 pb-5">
                    <Container>
                        <div className="chatsearch w-100">
                            <div className="search-box">
                                <Row>
                                    <Col lg={3} md={3}>
                                        <div className="col1 fw500 fs18 mt-2">Need to talk to someone?</div>
                                    </Col>
                                    <Col lg={3} md={3}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                placeholder="Search by name, keyword"    
                                                className="inputTyp2 input3"
                                                id="outlined-email"
                                                variant="outlined"
                                                name="screenName"
                                                onChange={(e) => this.setState({ search_keyword: e.target.value })}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3} md={3}>
                                        <div className="searchByOrder">
                                            <Button className="btnTyp5 bTyp5" onClick={this._getFilteredListenerData}>
                                                Search
                                            </Button>
                                            {/* <a className="ml-4"><Image src={Searchbtn} alt="Search bar"/></a> */}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="search-listing">
                                <Row>


                                    {this.state.listenerData ? this.state.listenerData.map((obj, i) => {
                                        console.log("CHECK ",obj)
                                        return this.state.offset > i ? <Col lg={4} md={6}>
                                            <div className="subscribes">
                                                <div className="text-right mt-4 mr-3">
                                                    <Image src={Messagefour} alt="" />
                                                    <span className="fs13 col14 fw400 ml-1">{obj.u_chat_count}</span>
                                                </div>
                                                <div className="text-center position-relative">
                                                    {/* <span className="onlines"></span> */}
                                                    <span className="offline d-none"></span>
                                                    <span className="onlineyellow d-none"></span>
                                                    <Image width={100} src={obj.u_image} className="r50" />
                                                    <Image width={35} src={obj.u_flag} alt="" className="flagset" />
                                                </div>
                                                <div className="col1 fs18 fw600 mt-4">{obj.u_name}</div>
                                                <div className="fs14 fs14 fw100 mt-2">{obj.uc_cat_name.join(', ')}</div>
                                                {/* <div className="fs14 col14 fw400">{obj.u_bio}</div> */}
                                                {/* <div className="fs14 col14 fw400">{obj.u_listen_to} */}
                                                {/*<div className="fs14 col14 fw400">Listens to  Over in last week*/}
                                                {/* </div> */}
                                                <div className="starrating">


                                                </div>
                                                <div>
                                                    <hr className="shr" />
                                                    <div className="fs14 col29 fw300 content_set">
                                                        Total Rating: {obj.u_rating}
                                                    </div>
                                                    {/* <Popover content="Hello User" title="Title" trigger="click"> */}
                                                    <div className="mt-3 mb-3 col10 fs14 fw600 pointer" onClick={() => this.bookSessionOpen(obj)}>
                                                        Read Bio
                                                        </div>
                                                    {/* </Popover> */}
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </Col> : null

                                    }) : null}

                                    {this.state.listenerData ? this.state.offset < this.state.listenerData.length ?
                                        <div className="text-center w-100">

                                            <Button
                                                className="btnTyp12"
                                                onClick={() => this.setState({ offset: this.state.offset + 6 })}
                                            >
                                                show more
                                            </Button>
                                        </div> : null : null
                                    }

                                </Row>
                            </div>
                        </div>
                    </Container>
                </div>

                <Modal show={this.state.show3} className="CreateAccount bookSession">
                    <Modal.Header>
                        <Button onClick={this.bookSessionClose}>
                            <Image src={Crossbtn} alt="" />
                        </Button>
                    </Modal.Header>

                    <Modal.Body>

                        <Container>
                            <div className="layout_box text-center mt-3 mb-4">
                                <div className="col10 fs30 fw600 mb-4">{this.state.currentData && this.state.currentData.u_name} (Bio)</div>
                                <div className="fs300 fs20 col14 mb-5 pb-2">
                                    {console.log("CURRENT DATA ", this.state.currentData)}
                                    {this.state.currentData?.u_bio || 'Bio does not Exist!'}
                                </div>
                            </div>
                        </Container>
                    </Modal.Body>
                </Modal>

                <Footer />
            </div>
        );
    }
}

export default ListenerBrowse;
