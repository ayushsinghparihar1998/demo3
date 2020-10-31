import React, { Component } from "react";
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form, Tabs, Tab } from "react-bootstrap";
import NavBar from '../core/nav';
import Footer from '../core/footer';
import Blogstar from "../../assets/images/blog_star.svg";
import Blogsearch from "../../assets/images/blog_search.svg";

class Blockuser extends Component {  
    render() {
        return (
            <div className="page__wrapper innerpage">
                <div className="main_baner">
                    <NavBar {...this.props} />
                </div>
                
                <div className="main_blockuser pt-4 pb-5"> 
                    <Container>
                        <div className="blockusers">
                            <div className="mt-5 pt-5">
                                <Image src={Blogstar} className="blockone" />
                                <Image src={Blogsearch} className="blocktwo" />  
                                <div className="col1 fw500 fs28 mt-4 pt-1 pb-1 mb-4">No blocked Users yet!</div>
                                <Button className="btnTyp5">BACK</Button> 
                            </div>
                        </div>
                    </Container>
                </div>

                <Footer />
            </div>
        );
    }
}
export default Blockuser;  
