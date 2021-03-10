import React from 'react';
import Slider from "react-slick";
import {
    Button
} from "react-bootstrap";
const CommonSubScription = ({ planEat, planHolistic, settingstwo, dataByCondition, dataDaily, handleShow }) => {
    // const eatCondition = item.plan_category.length < 3 ;
    return (
        <>
            <div className="PlanListOne">
                <div className="fs28 fw600 col8 mt-5 mb-4 text-center">
                    Smart Subscription Plans  
                </div>
                <Slider {...settingstwo}>
                    {
                        dataDaily &&
                        dataDaily.map((item) => {
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
                                                <Button className="btnSave">
                                                    {item.pl_title}
                                                </Button>
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
                                                <div className="col14 fs17 fw400 peryears">
                                                    {parseInt(item.pl_type) === 1 ? "Per Month" : ""}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="planpricing">
                                            <div className="w-100 justify-content-between">
                                                <div className="fs14 fw500 col29 mt-2 mb-3">
                                                    {item.pl_desc_details}
                                                </div>
                                            </div>
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
                    By Condition Subscription Plans
                </div>
                <Slider {...settingstwo}>
                    {dataByCondition &&
                        dataByCondition.map((item) => {
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
                                                <Button className="btnSave">
                                                    {item.pl_title}
                                                </Button>
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
                                                {
                                                    planHolistic &&
                                                    <div className="col14 fs17 fw400 peryears">
                                                        {parseInt(item.pl_type) === 1 ? "Per Month" : ""}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div className="planpricing">
                                            <div className="w-100 justify-content-between">
                                                <div className="fs14 fw500 col29 mt-2 mb-3">
                                                    {item.pl_desc_details}
                                                </div>
                                            </div>
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