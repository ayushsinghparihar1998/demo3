import React, { useState } from 'react';
import Quotetwo from '../../assets/images/quote_two.svg';
import Quotefour from '../../assets/images/quote4.png';
import {
    Carousel,
    Row,
    Col,
    Image,
} from "react-bootstrap";
const Quotes = () => {

    const [quotes, setQuotes] = useState([
        {
            text: 'There is hope, even when your brain tells you there isn’t.',
            author: 'John Green'
        },
        {
            text: 'If you are broken, you do not have to stay broken.',
            author: 'Selena Gomez'
        },
        {
            text: 'My dark days made me stronger. Or maybe I already was strong, and they made me prove it.',
            author: 'Emery Lord'
        },
    ])

    return (
        <div className="inner_body">
            <Carousel className="test_carousel">

                {
                    quotes.map(data => {
                        return (
                            <Carousel.Item>
                                <Row>
                                    <Col md={8} lg={9} xs={12}> 
                                        <Image src={Quotefour} alt="" className="pb-3" />
                                        <div className="fs14 fw400 col11">{data.text}</div>
                                        <div className="fw600 fs16 fw500 mt-2">{data.author}</div>
                                    </Col>
                                    <Col md={4} lg={3} xs={12}>  
                                        <Image src={Quotetwo} />
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Quotes