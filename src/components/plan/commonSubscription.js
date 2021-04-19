import React, { useState } from 'react';
import Slider from "react-slick";
import { Form, } from "react-bootstrap";

import {
    Button
} from "react-bootstrap";
const CommonSubScription = ({ planEat, planHolistic, settingstwo, dataByCondition, dataDaily, handleShow }) => {
    // const eatCondition = item.plan_category.length < 3 ;
    const [sliderState, setSliderState] = useState(0);
    const [itemSlider , setItemSlider] = useState(0);
    const handleSlider = (index , itemIndex) =>{ setSliderState(parseInt(index)); setItemSlider(itemIndex)};
    const filterMonthPrice = (index , itemID) => {
        //if(itemSlider === 0) 
        return (index === sliderState) ;
        //else return (index === sliderState && itemID === itemSlider)
    }
    return (
        <>
        {/* <pre>{JSON.stringify(sliderState, null, 2)}</pre>
        <pre>{JSON.stringify(itemSlider, null, 2)}</pre> */}
            <div className="PlanListOne">
                <div className="banLayout">
                    <div className="layTwo">Get
                         <span className="text-uppercase ml-1 mr-1">free audio video calls</span>
                          by buying any plan </div>
                </div>
                <div className="fs28 fw600 col8 mt-5 mb-4 text-center">
                    Smart Plans
                </div>
                <Slider {...settingstwo}>
                    {
                        dataDaily &&
                        dataDaily.map((item ,itemIndex) => {
                            return ((planHolistic && item.plan_category.length === 3) || (planEat && item.plan_category.length < 3)) ? (
                                <div className="items">
                                    <div className="planList">
                                        <div className="planone">
                                            <div className="offer_bg">
                                                <div className="fs14 fw500 col64 savedata">
                                                    Save {item.pl_save}%
                                                </div>
                                            </div>

                                            <div className="fs24 fw600 col29 text-center text-capitalize">
                                                {
                                                    parseInt(item.pl_type) === 1 ? (
                                                        item.plan_category.length === 3 ? (
                                                            planHolistic &&
                                                            <span className="holisticcat">
                                                                Holistic{" "}
                                                            </span>
                                                        ) : (
                                                                item.plan_category.map((val, index) => {
                                                                    return (
                                                                        <span
                                                                            className={
                                                                                val.puc_cat_name === "Eat"
                                                                                    ? "eatcat"
                                                                                    : val.puc_cat_name === "Luv"
                                                                                        ? "luvcat"
                                                                                        : "praycat"
                                                                            }
                                                                        >
                                                                            {val.puc_cat_name}
                                                                            <span className="andClass">
                                                                                {item.plan_category.length === 2 &&
                                                                                    index === 0
                                                                                    ? " & "
                                                                                    : ""}{" "}
                                                                            </span>
                                                                        </span>
                                                                    );
                                                                })
                                                            )
                                                    ) : (
                                                            "BY CONDITION"
                                                        )}
                                            </div>
                                        </div>
                                        <div className="plantwo text-center">
                                            <div className="d-flex justify-content-center mb-2">
                                                <div className="col1 fs20 fw600 text-uppercase">{item.pl_title}</div>
                                            </div>
                                            <div className="pt-1">
                                                {
                                                    item?.plan_month_price &&
                                                    item.plan_month_price
                                                        .filter((id, index) => filterMonthPrice(index ,item.pl_id))
                                                        .map((plan_month) =>
                                                            <>
                                                                <div className="col14 fs16 fw400 pb-1">
                                                                    <del>Rs. {plan_month.pp_price}</del>
                                                                </div>
                                                                <div className="col14 fs30 fw600 pb-1">
                                                                    Rs.{" "}
                                                                    {parseFloat(plan_month.pp_discount_price).toFixed(
                                                                        2
                                                                    )}
                                                                </div>
                                                            </>
                                                        )
                                                }
                                                <div className="SelectPlans">
                                                    <Form.Control onChange={(e)=>{handleSlider(e.target.value , item.pl_id)}}  as="select">
                                                        {
                                                            item.plan_month_price.map((plan_month , index) =>
                                                                <option value={index}  >
                                                                    {plan_month.pp_max_range_month} Months
                                                                </option>
                                                            )
                                                        }
                                                    </Form.Control>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="planpricing">
                                            <div className="w-100 justify-content-between">
                                                <div className="fs14 fw500 col29 mt-2 mb-3">
                                                    {item.pl_desc_details}
                                                </div>
                                            </div>
                                            {
                                                !!item.pl_pdf_doc &&
                                                <Button
                                                    className="btnTypDown d-block w-100 mt-4"
                                                    onClick={() => { window.open(item.pl_pdf_doc, 'Download') }}
                                                >
                                                    Download program brochure
                                                </Button>
                                            }
                                            <Button onClick={handleShow} className="btnType1 d-block w-100 mt-4">
                                                Buy Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ) : null;
                        })}
                </Slider>
            </div>

            <div className="PlanListOne">
                <div className="fs28 fw600 col8 mt-5 pt-3 mb-4 text-center">
                    By Condition Plans
                </div>
                <Slider {...settingstwo}>
                    {dataByCondition &&
                        dataByCondition.map((item) => {
                            console.log(item.pl_title === 'Early ACCESS' ? item : "ITEM NOT EARLY", dataByCondition)
                            return (
                                <div className="items">
                                    <div className="planList">
                                        <div className="planone">
                                            <div className="offer_bg">
                                                <div className="fs14 fw500 col64 savedata">
                                                    Save {item.pl_save}%
                                                </div>
                                            </div>

                                            <div className="fs24 fw600 col29 text-center text-capitalize">
                                                {/* ------------------ */}

                                                {
                                                    planHolistic && parseInt(item.pl_type) === 1 ? (
                                                        item.plan_category.length === 3 ? (
                                                            <span className="holisticcat">
                                                                Holistic{" "}
                                                            </span>
                                                        ) : (
                                                                item.plan_category.map((val, index) => {
                                                                    // return
                                                                    return (
                                                                        <span
                                                                            className={
                                                                                val.puc_cat_name === "Eat"
                                                                                    ? "eatcat"
                                                                                    : val.puc_cat_name === "Luv"
                                                                                        ? "luvcat"
                                                                                        : "praycat"
                                                                            }
                                                                        >
                                                                            {val.puc_cat_name}
                                                                            <span className="andClass">
                                                                                {item.plan_category.length === 2 &&
                                                                                    index === 0
                                                                                    ? " & "
                                                                                    : ""}{" "}
                                                                            </span>
                                                                        </span>
                                                                    );
                                                                })
                                                            )
                                                    ) : (
                                                            "By Condition"
                                                        )}
                                            </div>
                                        </div>
                                        <div className="plantwo text-center">
                                            <div className="d-flex justify-content-center mb-2">
                                                {/* <Button className="btnSave">
                                                    {item.pl_title}
                                                </Button> */}
                                                <div className="col1 fs20 fw600 text-uppercase">Basic</div>
                                            </div>
                                            <div className="pt-1">
                                                <div className="col14 fs16 fw400 pb-1">
                                                    <del>Rs. {item.pl_price}</del>
                                                </div>
                                                <div className="col14 fs30 fw600 pb-1">
                                                    Rs.{" "}
                                                    {parseFloat(item.pl_discount_price).toFixed(
                                                        2
                                                    )}
                                                </div>
                                                {/* { 
                                                    planHolistic &&
                                                    <div className="col14 fs17 fw400 peryears">
                                                        {parseInt(item.pl_type) === 1 ? "Per Month" : ""}
                                                    </div>
                                                } */}
                                                <div className="SelectPlans">
                                                    <Form.Control as="select">
                                                        <option>3 Months</option>
                                                        <option>6 Months</option>
                                                        <option>9 Months</option>
                                                        <option>12 Months</option>
                                                    </Form.Control>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="planpricing">
                                            <div className="w-100 justify-content-between">
                                                <div className="fs14 fw500 col29 mt-2 mb-3">
                                                    {item.pl_desc_details}
                                                </div>
                                            </div>
                                            {/* {
                                                item.pl_pdf_doc && 
                                                <a href={item.pl_pdf_doc} >Download PDF</a>
                                            } */}
                                            <Button className="btnTypDown d-block w-100 mt-4">
                                                {/* <Link to={{ pathname: "/coming-soon" }}>
                                                Buy Now
                                                </Link> */}
                                                {/* <Link> 
                                                Buy Now  
                                                </Link> */}
                                                    Download program brochure
                                            </Button>
                                            <Button onClick={handleShow} className="btnType1 d-block w-100 mt-4">
                                                Buy Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </Slider>
            </div>
        </>
    )
}

export default CommonSubScription