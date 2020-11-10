import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import {
    Button,
    Image,
    Modal,
    Container,
    Form
} from "react-bootstrap";

import Crossbtn from "../../assets/images/blue_cross.svg";
import Crossbad from "../../assets/images/cross_bad.png";
import Checkgreentwo from "../../assets/images/checkgreen2.svg";
import Starfillone from "../../assets/images/starfillone.svg";
import Starfillempty from "../../assets/images/staremptyone.svg";
import ELPRxApiService from "../../common/services/apiService";
import { getLocalStorage } from "../../common/helpers/Utils";

import Emojibad from '../../assets/images/emoji2.svg';
import Emojiverybad from '../../assets/images/emoji2.svg';
import Emojigood from '../../assets/images/emoji6.svg';
import Emojigreat from '../../assets/images/emoji7.svg';

const RateUsModal = forwardRef(({ userId, disableInputHandler }, ref) => {

    const [isOpen, setIsOpen] = useState(false)
    const [ratingCount, setRatingCount] = useState(0)
    const [rating, setRating] = useState(null)

    useImperativeHandle(
        ref,
        () => ({
            openModal() {
                setIsOpen(true)
            }
        }),
    )

    const _submitsRatingHandler = async () => {
        try {
            let submitReview = await ELPRxApiService("submitReview", {
                rv_text: rating,
                rv_from_id: getLocalStorage('customerInfo').u_id,
                rv_to_id: userId
            })
            console.log("ASAS,", submitReview)
            if (submitReview.data.status == "success") {
                let response = await ELPRxApiService("submitRatings", {
                    rating_count: ratingCount,
                    to_id: userId,
                    from_id: getLocalStorage('customerInfo').u_id
                })
                console.log(response, response)
                if (response.data.status == "success") {
                    setIsOpen(false)
                    disableInputHandler()
                }

            }

        } catch (err) {
            console.log(err);
        }
    }

    const getName = () => {
        let text = null
        if (ratingCount == 1) {
            text = "Very Bad!"
        } else if (ratingCount == 2) {
            text = "Bad!"
        } else if (ratingCount == 3) {
            text = "Good!"
        } else if (ratingCount == 4) {
            text = "Very Good!"
        } else if (ratingCount == 5) {
            text = "Excellent!"
        }
        return text
    }
    const getImage = () => {
        let image = null
        if (ratingCount == 1) {
            image = <Image src={Emojibad} alt="emoji" className="oneemoji" />
        } else if (ratingCount == 2) {
            image = <Image src={Emojiverybad} alt="emoji" className="twoemoji" />
        } else if (ratingCount == 3) {
            image = <Image src={Emojigood} alt="emoji" className="threeemoji" />
        } else if (ratingCount == 4) {
            image = <Image src={Emojigood} alt="emoji" className="threeemoji" />
        } else if (ratingCount == 5) {
            image = <Image src={Emojigreat} alt="emoji" className="fouremoji" />
        }
        return image
    }

    return (
        <>
            <Modal show={isOpen} className="CreateAccount Rate_us">
                <Modal.Header>
                    <Button onClick={() => setIsOpen(false)}>
                        <Image src={Crossbtn} alt="" />
                    </Button>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <div className="layout_box text-center mt-3 mb-4">
                            <div className="col10 fs30 fw600 mt-2 pb-2 text-left">Rate Us</div>
                            <div className="fs300 fs20 col14 mb-4 pb-2 text-left">
                                Give us a quick rating
                          </div>

                            <div className="emojy_manage mb-3 ">
                                {getImage()}




                            </div>
                            {/* <Image src={Checkgreentwo} alt="" className="mb-3" /> */}
                            {
                                ratingCount > 2 ?
                                    <div className="col82 fs18 fw600 mb-3">
                                        {getName()}
                                    </div> :
                                    <div className="col33 fs18 fw600 mb-3">
                                        {getName()}
                                    </div>
                            }

                            {/* <Image src={Crossbad} alt="" className="mb-3 d-none c_bad" />   */}

                            <div className="manage_ratings mb-3">
                                <Image onClick={() => setRatingCount(1)} src={ratingCount >= 1 ? Starfillone : Starfillempty} alt="" className="mr-2" />
                                <Image onClick={() => setRatingCount(2)} src={ratingCount >= 2 ? Starfillone : Starfillempty} alt="" className="mr-2" />
                                <Image onClick={() => setRatingCount(3)} src={ratingCount >= 3 ? Starfillone : Starfillempty} alt="" className="mr-2" />
                                <Image onClick={() => setRatingCount(4)} src={ratingCount >= 4 ? Starfillone : Starfillempty} alt="" className="mr-2" />
                                <Image onClick={() => setRatingCount(5)} src={ratingCount >= 5 ? Starfillone : Starfillempty} alt="" />
                            </div>
                            <div className="comments mb-4">
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control onChange={(e) => setRating(e.target.value)}
                                        as="textarea" rows="3"
                                        className="inputTyp2 cate2"
                                        placeholder="Write your review here.." />
                                </Form.Group>
                            </div>
                            {/* <Image src={Livechatcomment} alt="Livechatcomments" className="mb-4" /> */}
                            <Button onClick={_submitsRatingHandler} className="btnTyp12 btnT12 h-rem fs18">SUBMIT</Button>
                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
})

export default RateUsModal;
