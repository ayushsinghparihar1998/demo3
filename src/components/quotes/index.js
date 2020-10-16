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
            text: 'One of the most sincere forms of respect is actually listening to what another has to say.',
            author: 'Bryant H. McGill'
        },
        {
            text: 'Listening is an art that requires attention over talent, spirit over ego, others over self.',
            author: 'Dean Jackson'
        },
        {
            text: 'Listening is an attitude of the heart, a genuine desire to be with another which both attracts and heals.',
            author: 'L. J. Isham'
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
                                    <Col md={8} lg={9}>
                                        <Image src={Quotefour} alt="" className="pb-3" />
                                        <div className="fs14 fw400 col11">{data.text}</div>
                                        <div className="fw600 fs16 fw500 mt-2">{data.author}</div>
                                    </Col>
                                    <Col md={4} lg={3}>
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