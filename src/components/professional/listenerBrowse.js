import React, {Component} from "react";
import {Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Requestuserthree from "../../assets/images/pro_img3.svg";
import Aflag from "../../assets/images/australia_flag.svg";
import Iflag from "../../assets/images/india_flag.svg";
import Messagefour from "../../assets/images/msg4.svg";
import Melida from "../../assets/images/melida.svg";
import Searches from "../../assets/images/searches.svg";
import Starblank from "../../assets/images/starempty.svg";
import Starfill from "../../assets/images/starfill.svg";
import Subscribes from "../../assets/images/subscribes.svg";
import Searchbtn from "../../assets/images/search_btn.png";
import {connect} from 'react-redux';
import ReactStars from "react-rating-stars-component";
import {Popover} from 'antd';
import ELPRxApiService from "../../common/services/apiService";

class ListenerBrowse extends Component {
    state = {
        listenerData: [],
        search_keyword: "",
        order_by: "",
        offset: 6,

    }

    componentDidMount() {
        this._getListenerData()
    }

    _getListenerData = async () => {
        try {

            let response = await ELPRxApiService("searchlistener", {
                search_keyword: this.state.search_keyword,
                order_by: this.state.order_by
            })
            this.setState({
                listenerData: response.data.data
            })
        } catch (err) {
            console.log(err)
        }
    }

    _getFilteredListenerData = async () => {
        try {
            let ordered_by = this.state.order_by
            if (ordered_by ==="Ascending"){
                ordered_by = "ASC"
            }else if(ordered_by ==="Descending"){
                ordered_by = "DESC"
            }else if(ordered_by === "Ordered By"){
                ordered_by = ""
            }

            let response = await ELPRxApiService("filteredsearchlistener", {
                search_keyword: this.state.search_keyword,
                order_by: ordered_by
            })
            this.setState({
                listenerData: response.data.data
            })
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
                                                placeholder="Find Keywords"
                                                className="inputTyp2 input3"
                                                id="outlined-email"
                                                variant="outlined"
                                                name="screenName"
                                                onChange={(e) => this.setState({search_keyword: e.target.value})}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3} md={3}>
                                        <Form.Group controlId="exampleForm.ControlSelect1" className="setSelectbtn">
                                            <Form.Control as="select" className="selectTyp1"
                                                          onChange={(e) => this.setState({order_by: e.target.value})}>
                                                <option>Ordered By</option>
                                                <option>Ascending</option>
                                                <option>Descending</option>

                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3} md={3}>
                                        <div className="searchByOrder">
                                            <Button className="btnTyp5 bTyp5" onClick={this._getFilteredListenerData}>
                                                Search
                                            </Button>
                                            <a className="ml-4"><Image src={Searchbtn} alt="Search bar"/></a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="search-listing">
                                <Row>
                                    {/*        <Col lg={4} md={6}>*/}
                                    {/*            <div className="subscribes active">*/}
                                    {/*                <div className="subleft">*/}
                                    {/*                    <Image src={Subscribes} alt=""/>*/}
                                    {/*                    <span>Subscribe</span>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="text-right mt-4 mr-3">*/}
                                    {/*                    <Image src={Messagefour} alt=""/>*/}
                                    {/*                    <span className="fs13 col14 fw400 ml-1">340</span>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="text-center position-relative">*/}
                                    {/*                    <span className="onlines"></span>*/}
                                    {/*                    <span className="offline d-none"></span>*/}
                                    {/*                    <span className="onlineyellow d-none"></span>*/}
                                    {/*                    <Image width={100} src={Requestuser} className="r50"/>*/}
                                    {/*                    <Image src={Aflag} alt="" className="flagset"/>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="col1 fs18 fw600 mt-4">HopePeaceHappiness</div>*/}
                                    {/*                <div className="fs14 col14 fw400">Master 10</div>*/}
                                    {/*                <div className="fs14 col14 fw400">Listens to Over in last week*/}
                                    {/*                </div>*/}
                                    {/*                <div className="starrating">*/}
                                    {/*                    /!* <ReactStars*/}
                                    {/*count={5}*/}
                                    {/*value={item.u_rating ? item.u_rating :0}*/}
                                    {/*onChange={this.ratingChanged(item.id)}*/}
                                    {/*halfIcon={<i className="fa fa-star-half-alt"></i>}*/}
                                    {/*size={24}*/}
                                    {/*//  color="#FABE2C"*/}
                                    {/*activeColor="#FABE2C"*/}
                                    {/*/> *!/*/}
                                    {/*                </div>*/}
                                    {/*                <div>*/}
                                    {/*                    <hr className="shr"/>*/}
                                    {/*                    <div className="fs14 col29 fw300 content_set">*/}
                                    {/*                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                                    {/*                        eiusmod tempor incididunt*/}
                                    {/*                    </div>*/}
                                    {/*                    <Popover content="Hello User" title="Title" trigger="click">*/}
                                    {/*                        <div className="mt-3 mb-3 col10 fs14 fw600 pointer">*/}
                                    {/*                            Read More*/}
                                    {/*                        </div>*/}
                                    {/*                    </Popover>*/}
                                    {/*                </div>*/}
                                    {/*                <div>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </Col>*/}

                                    {this.state.listenerData ? this.state.listenerData.map((obj, i) => {

                                        return this.state.offset > i ? <Col lg={4} md={6}>
                                            <div className="subscribes">
                                                <div className="text-right mt-4 mr-3">
                                                    <Image src={Messagefour} alt=""/>
                                                    <span className="fs13 col14 fw400 ml-1">340</span>
                                                </div>
                                                <div className="text-center position-relative">
                                                    <span className="onlines"></span>
                                                    <span className="offline d-none"></span>
                                                    <span className="onlineyellow d-none"></span>
                                                    <Image width={100} src={obj.u_image} className="r50"/>
                                                    <Image width={35} src={obj.u_flag} alt="" className="flagset"/>
                                                </div>
                                                <div className="col1 fs18 fw600 mt-4">{obj.u_name}</div>
                                                <div className="fs14 col14 fw400">{obj.u_bio}</div>
                                                <div className="fs14 col14 fw400">{obj.u_listen_to}
                                                {/*<div className="fs14 col14 fw400">Listens to  Over in last week*/}
                                                </div>
                                                <div className="starrating">
                                                    {/* <ReactStars
                            count={5}
                            value={item.u_rating ? item.u_rating :0}
                            onChange={this.ratingChanged(item.id)}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            size={24}
                            //  color="#FABE2C"
                            activeColor="#FABE2C"
                            /> */}
                                                </div>
                                                <div>
                                                    <hr className="shr"/>
                                                    <div className="fs14 col29 fw300 content_set">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt
                                                    </div>
                                                    <Popover content="Hello User" title="Title" trigger="click">
                                                        <div className="mt-3 mb-3 col10 fs14 fw600 pointer">
                                                            Read More
                                                        </div>
                                                    </Popover>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </Col> : null

                                    }):null}

                                    {/*        <Col lg={4} md={6}>*/}
                                    {/*            <div className="subscribes">*/}
                                    {/*                <div className="subleft">*/}
                                    {/*                    <Image src={Subscribes} alt=""/>*/}
                                    {/*                    <span>Subscribe</span>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="text-right mt-4 mr-3">*/}
                                    {/*                    <Image src={Messagefour} alt=""/>*/}
                                    {/*                    <span className="fs13 col14 fw400 ml-1">340</span>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="text-center position-relative">*/}
                                    {/*                    <span className="onlines"></span>*/}
                                    {/*                    <span className="offline d-none"></span>*/}
                                    {/*                    <span className="onlineyellow d-none"></span>*/}
                                    {/*                    <Image width={100} src={Requestuser} className="r50"/>*/}
                                    {/*                    <Image src={Aflag} alt="" className="flagset"/>*/}
                                    {/*                </div>*/}
                                    {/*                <div className="col1 fs18 fw600 mt-4">HopePeaceHappiness</div>*/}
                                    {/*                <div className="fs14 col14 fw400">Master 10</div>*/}
                                    {/*                <div className="fs14 col14 fw400">Listens to Over in last week*/}
                                    {/*                </div>*/}
                                    {/*                <div className="starrating">*/}
                                    {/*                    /!* <ReactStars*/}
                                    {/*count={5}*/}
                                    {/*value={item.u_rating ? item.u_rating :0}*/}
                                    {/*onChange={this.ratingChanged(item.id)}*/}
                                    {/*halfIcon={<i className="fa fa-star-half-alt"></i>}*/}
                                    {/*size={24}*/}
                                    {/*//  color="#FABE2C"*/}
                                    {/*activeColor="#FABE2C"*/}
                                    {/*/> *!/*/}
                                    {/*                </div>*/}
                                    {/*                <div>*/}
                                    {/*                    <hr className="shr"/>*/}
                                    {/*                    <div className="fs14 col29 fw300 content_set">*/}
                                    {/*                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
                                    {/*                        eiusmod tempor incididunt*/}
                                    {/*                    </div>*/}
                                    {/*                    <Popover content="Hello User" title="Title" trigger="click">*/}
                                    {/*                        <div className="mt-3 mb-3 col10 fs14 fw600 pointer">*/}
                                    {/*                            Read More*/}
                                    {/*                        </div>*/}
                                    {/*                    </Popover>*/}
                                    {/*                </div>*/}
                                    {/*                <div>*/}
                                    {/*                </div>*/}
                                    {/*            </div>*/}
                                    {/*        </Col>*/}
                                    {this.state.listenerData ? this.state.offset < this.state.listenerData.length ?
                                        <div className="text-center w-100">

                                            <Button
                                                className="btnTyp12"
                                                onClick={() => this.setState({offset: this.state.offset + 6})}
                                            >
                                                show more
                                            </Button>
                                        </div> : null: null
                                    }

                                </Row>
                            </div>
                        </div>
                    </Container>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ListenerBrowse;

