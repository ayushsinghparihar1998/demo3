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
            text: 'It’s up to you today to start making healthy choices. Not choices that are just healthy for your body, but healthy for your mind.',
            author: 'Steve Maraboli'
        },
        {
            text: 'What mental health needs is more sunlight, more candour, and more unashamed conversation.',
            author: 'Glenn Close'
        },
        {
            text: 'It doesn’t have to take over your life, it doesn’t have to define you as a person, it’s just important that you ask for help. It’s not a sign of weakness.',
            author: 'Demi Lovato'
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