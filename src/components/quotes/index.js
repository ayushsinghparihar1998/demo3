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
            text: 'My personal goals are to be happy, healthy and to be surrounded by loved ones.” ',
            author: 'Kiana Tom'
        },
        {
            text: '“He who has health, has hope; and he who has hope, has everything.” ',
            author: 'Thomas Carlyle'
        },
        {
            text: '“Love yourself first and everything falls into line.” ',
            author: 'Lucille Ball'
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