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
import { Popover } from 'antd';
import {
    actionSearchListner,
    actionAddrating
} from '../../common/redux/actions';
class Chatsearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listnerList: [],
            search:'',
            recordCount:9
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
    ratingChanged =  (id) => (newRating) => {
        console.log("newRating,id",newRating,id);
           let data = {
                to_id:id,
                rating_count: newRating
            }
        this.props.actionAddrating(data)
    };
      handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handlePagination =() => {
    let listOfSearchLisner = this.state.listOfSearchLisner;
    let recordCount = this.state.recordCount 
    if(listOfSearchLisner &&  listOfSearchLisner.length >0){
        recordCount = recordCount + 9
        this.setState({
            recordCount: recordCount
        });
    }
  }


  content = (dropdown) => (
    <div>
      <div className="popup-drp m-b-30">
       <div className="fs14 col29 fw300 content_set">
            {dropdown}
            </div> 
      </div>
    </div>
  );
    render() {
        let listOfSearchLisner = this.state.listOfSearchLisner ? this.state.listOfSearchLisner : [];
        console.log("listOfSearchLisner",listOfSearchLisner)
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div> 
                <div></div>
                <Footer />
            </div>
        );
    }
}
export default connect(null, {
    actionSearchListner,
    actionAddrating
})(Chatsearch);

