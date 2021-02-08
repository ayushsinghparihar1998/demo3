import React, { Component } from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Button,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap"; 
import { getLocalStorage } from "../../common/helpers/Utils";
import { connect } from "react-redux";
import validationSubscribe from "../../common/validations/validationSubscribe";
import { actionSubscribe } from "../../common/redux/actions";
import Slider from "react-slick";
import ELPViewApiService from "../../common/services/apiService";
import { Link } from "react-router-dom";
import Saves from '../../assets/images/saves.png'; 
import Emotionals from '../../assets/images/emotionals.png';
import loveFill from '../../assets/images/loveFill.png'; 
import feelHappy from '../../assets/images/feelHappy.png';

class Kits extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      workData: "",
      email: "",
    };
  }
  componentDidMount = () => {
    this.get_planlist();
  };
  get_planlist = () => {
    let _this = this;
    // usersubscriber,

    ELPViewApiService("get_planlist", {count: 100, offset: ""})
      .then((response) => {
        if (response && response.data && response.data.status === "success") {
          let data = response.data.data;
          this.setState({
            workData: data.plan_listing,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handlePath() {
    this.props.history.push({
      pathname: "coming-soon",
    });
  }
  render() {
    const settings = {    
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,    
      slidesToScroll: 1,       
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true, 
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }; 
    
    return (  
      <div className="plans kits mt-4 mb-4"> 
        <Container>
          <div className="fs40 col8 fw600 w-100 mb-5 text-center"> 
               ELNP Kits 
          </div>
          <div>
          <Slider {...settings}>
          <div>
              <div className="items-Kits">    
                    <div className="planList">  
                        <div className="planBorder"> 
                            <div className="profile_set">
                                <Image src={Emotionals} alt="" /> 
                            </div> 
                            <div className="planpricing">
                                <div className="text-center fw500 fs22 col64 text-uppercase borderSs">Emotional Welness Kit</div> 
                                <div className="emotion_ul">    
                                    <div className="fs13 col11 fw400">   
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div> 
                                    <ul>
                                         <li>
                                             <span className="sleft col11 fw400">Shelter</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                         <li>
                                             <span className="sleft col11 fw400">Funding home</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                         <li>
                                             <span className="sleft col11 fw400">Orphanhood</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                    </ul>
                                    <Button className="btnType1 greens d-block w-100 mt-4">Buy Now</Button> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div> 
          </div>
          <div>
          <div className="items-Kits">    
                    <div className="planList one-bg">  
                        <div className="planBorder"> 
                            <div className="profile_set">
                                <Image src={loveFill} alt="" />  
                            </div> 
                            <div className="planpricing">
                                <div className="text-center fw500 fs22 col64 text-uppercase borderSs">I’M SEXY</div> 
                                <div className="emotion_ul">    
                                    <div className="fs13 col11 fw400"> 
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div> 
                                    <ul>
                                         <li>
                                             <span className="sleft col11 fw400">Shelter</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                         <li>
                                             <span className="sleft col11 fw400">Funding home</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                         <li>
                                             <span className="sleft col11 fw400">Orphanhood</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                    </ul>
                                    <Button className="btnType1 reds d-block w-100 mt-4">Buy Now</Button> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div> 
          </div>
          <div>
          <div className="items-Kits">    
                    <div className="planList two-bg">   
                        <div className="planBorder"> 
                            <div className="profile_set">
                                <Image src={feelHappy} alt="" />  
                            </div> 
                            <div className="planpricing">
                                <div className="text-center fw500 fs22 col64 text-uppercase borderSs">
                                    I’M SEXY  
                                </div> 
                                <div className="emotion_ul">    
                                    <div className="fs13 col11 fw400"> 
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div> 
                                    <ul>
                                         <li>
                                             <span className="sleft col11 fw400">Shelter</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                         <li>
                                             <span className="sleft col11 fw400">Funding home</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                         <li>
                                             <span className="sleft col11 fw400">Orphanhood</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                    </ul>
                                    <Button className="btnType1 blues d-block w-100 mt-4">Buy Now</Button> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>  
          </div>
          <div>
          <div className="items-Kits">    
                    <div className="planList one-bg">  
                        <div className="planBorder"> 
                            <div className="profile_set">
                                <Image src={loveFill} alt="" /> 
                            </div> 
                            <div className="planpricing">
                                <div className="text-center fw500 fs22 col64 text-uppercase borderSs">
                                    FEELING FAB 
                                </div> 
                                <div className="emotion_ul">    
                                    <div className="fs13 col11 fw400"> 
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div> 
                                    <ul>
                                         <li>
                                             <span className="sleft col11 fw400">Shelter</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                         <li>
                                             <span className="sleft col11 fw400">Funding home</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                         <li>
                                             <span className="sleft col11 fw400">Orphanhood</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                    </ul>
                                    <Button className="btnType1 reds d-block w-100 mt-4">Buy Now</Button> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div> 
          </div>
          <div>
          <div className="items-Kits">    
                    <div className="planList two-bg">  
                        <div className="planBorder"> 
                            <div className="profile_set">
                                <Image src={feelHappy} alt="" /> 
                            </div> 
                            <div className="planpricing">
                                <div className="text-center fw500 fs22 col64 text-uppercase borderSs">Emotional Welness Kit</div> 
                                <div className="emotion_ul">    
                                    <div className="fs13 col11 fw400"> 
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div> 
                                    <ul>
                                         <li>
                                             <span className="sleft col11 fw400">Shelter</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                         <li>
                                             <span className="sleft col11 fw400">Funding home</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                         <li>
                                             <span className="sleft col11 fw400">Orphanhood</span>
                                             <span className="sright col11 fs16 fw500">
                                               <del className="fs14 fw400 mr-2">Rs.650</del> Rs.550
                                             </span> 
                                         </li>
                                    </ul>
                                    <Button className="btnType1 blues d-block w-100 mt-4">Buy Now</Button> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div> 
          </div>
        </Slider>

          </div>
        </Container>
      </div>
    );
  }
}
export default Kits;
