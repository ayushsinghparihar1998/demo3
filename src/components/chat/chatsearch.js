import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
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
import { connect } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import {
    actionSearchListner
} from '../../common/redux/actions';
class Chatsearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listnerList: [],
            search:''
        };
    }
    componentDidMount() {
        this.getListner();
    }

    getListner = () => {
        let data = {};
        if(this.state.screenName){
            data = {
                order_by:this.state.order_by?this.state.order_by:'',
                search_keyword: this.state.screenName
            }
        }
        this.props.actionSearchListner(data).then((result) => {
            if (result && result.status === 200) {
                let profile = result.data.data ? result.data.data
                    : [];
                this.setState({
                    listOfSearchLisner: profile
                });
            }
        });
    };
    ratingChanged = (newRating) => {
        console.log(newRating);
    };
      handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
    render() {
        let listOfSearchLisner = this.state.listOfSearchLisner ? this.state.listOfSearchLisner : [];
        console.log("this.state.listOfSearchLisner", this.state.listOfSearchLisner)
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
                                    <Col md={3}>
                                        <div className="col1 fw500 fs18 mt-2">Need to talk to someone?</div>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                placeholder="Find Keywords"
                                                className="inputTyp2 input3"
                                                id="outlined-email"
                                                variant="outlined"
                                                name="screenName"
                                                value={this.state.screenName}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    {/*<Col md={3}>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select"
                                                className="selectTyp1 select3"
                                                name="date">
                                                <option>Sort By</option>

                                            </Form.Control>
                                        </Form.Group>
                                    </Col>*/}
                                    <Col md={3}>
                                        <Button onClick={this.getListner} className="btnTyp5 bTyp5">
                                            Search
                                    </Button>
                                        {/*<Image src={Searches} alt="" className="ml-3 pointer" />*/}
                                    </Col>
                                </Row>
                            </div>

                            <div className="search-listing">
                                <Row>
                                    {listOfSearchLisner &&
                                        listOfSearchLisner.length > 0 &&
                                        listOfSearchLisner.map(
                                            (item, index) => {
                                                return (
                                                    <Col md={4}>
                                                        <div className="subscribes active">
                                                            {item.u_paid ?
                                                                <div className="subleft">
                                                                    <Image src={Subscribes} alt="" />
                                                                    <span>Subscribe</span>
                                                                </div> : ''}
                                                            <div className="text-right mt-4 mr-3">
                                                                <Image src={Messagefour} alt="" />
                                                                <span className="fs13 col14 fw400 ml-1">340</span>
                                                            </div>
                                                            <div className="text-center position-relative">
                                                                <Image width={100} src={item.u_image ? item.u_image : Requestuser} className="r50" />
                                                                <Image src={Aflag} alt="" className="flagset" />
                                                            </div>
                                                            <div className="col1 fs18 fw600 mt-4">{item.u_name ? item.u_name : ''}</div>
                                                            <div className="fs14 col14 fw400">Master 10</div>
                                                            <div className="fs14 col14 fw400">Listens to Over {item.u_listen_to ? item.u_listen_to : 0} in last week
                                                        </div>
                                                            <div className="starrating">
                                                                <ReactStars
                                                                    count={5}
                                                                    value={item.u_rating ? item.u_rating :0}
                                                                    onChange={this.ratingChanged}
                                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                                    size={24}
                                                                  //  color="#FABE2C" 
                                                                   activeColor="#FABE2C"
                                                                />
                                                            </div>
                                                            {item.u_bio ? 
                                                            <div>
                                                                <hr className="shr" />
                                                                <div className="fs14 col29 fw300">
                                                                    {item.u_bio ? item.u_bio : ''}
                                                                </div>
                                                                {item.u_bio.length>100?
                                                                <div className="mt-3 mb-3 col10 fs14 fw600 pointer">Read More</div>
                                                           :''}
                                                            </div> :
                                                            <div>  
                                                            <hr className="shr" />
                                                            <div className="fs14 col29 fw300">
                                                                    {item.u_bio ? item.u_bio : ''}
                                                                </div></div>}
                                                            </div>
                                                    </Col>

                                                )
                                            })}
                                   {listOfSearchLisner &&
                                        listOfSearchLisner.length > 10 ?
                                   <div className="text-center w-100">
                                        <Button
                                            className="btnTyp12"
                                            onClick={this.handleSubmit}
                                        >
                                            show more
                                             </Button>
                                    </div>
                                    :''}
                                </Row>
                            </div>
                        </div>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}
export default connect(null, {
    actionSearchListner
})(Chatsearch);

