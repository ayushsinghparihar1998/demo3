import React from 'react';
import {
    Button,
    Row,
    Col,
    Image,
    Form,
    Tabs,
    Tab,
    Modal,
 } from "react-bootstrap";

const FunFact = () => {
    return (
        <div className="inner_body userbg-white mb-3">
            <div className="text-center p-4">
                <div className="col14 fw600 fs22 border-gray pb-3 mb-3">
                    Fun Facts
            </div>
                <div class="funfact blue">
                    <Row>
                        <Col md={9} lg={10} xs={10}>
                            {/* <div className="fs15 fw500 col70 mb-1 mt-2">Did you know?</div> */}
                            <div className="col11 fw400 fs13">Cranberries will bounce like rubber balls when they're ripe.</div>
                        </Col>
                        <Col md={3} lg={2} xs={2}> 
                            <div className="position-relative">
                                <Button className="btnType16">EAT</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="funfact lightpink">
                    <Row>
                        <Col md={9} lg={10} xs={10}>
                            {/* <div className="fs15 fw500 col70 mb-1 mt-2">Did you know?</div> */}
                            <div className="col11 fw400 fs13">Dilated Pupils Show Your Attraction to Someone And Makes You More Attractive.</div>
                        </Col>
                        <Col md={3} lg={2} xs={2}>
                            <div className="position-relative">
                                <Button className="btnType16 funbtn2">Luv</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="funfact lightgreen"> 
                    <Row>
                        <Col md={9} lg={10} xs={10}>
                            {/* <div className="fs15 fw500 col70 mb-1 mt-2">Did you know?</div> */}
                            <div className="col11 fw400 fs13">There are more than 100 styles of yoga.</div>
                        </Col>
                        <Col md={3} lg={2} xs={2}> 
                            <div className="position-relative">
                                <Button className="btnType16 funbtn3">PRAY</Button>
                            </div>
                        </Col>
                    </Row>
                </div>


            </div>
        </div>
    )
}

export default FunFact