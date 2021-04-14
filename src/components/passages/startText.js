import React, { Component } from "react";
import {
  Container, Button
} from "react-bootstrap";
import CrossTwo from "../../assets/images/crosstwo.png";
import logopink from "../../assets/images/elplogopink.png";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import { Redirect } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import { getLocalStorage } from "../../common/helpers/Utils";

class StartTest extends Component {    
  render() { 
    return (
        <div className="page__wrapper innerpage">
            <div className="main_baner">
            <NavBar {...this.props} />
            </div>
            <div className="ngo_services plans passageLayout">   
            <Container>
                <div className="ngo_listing mt-4 mb-4">
                    <div className="fs28 fw600 col8 w-100 mb-2 mt-4">
                        Hospitality Management
                    </div> 
                    <div className="fs16 fw300 mb-5">   
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures </p>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures </p>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures </p>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures </p>  
                        
                    </div> 
                    <div className="mt-5 mb-5">
                        <Button type="button" className="btnTyp5">Start Test</Button> 
                    </div>
                  
                    </div>
            </Container>
            </div>
            <Footer />
        </div> 
        );
     } 
}
export default StartTest; 

