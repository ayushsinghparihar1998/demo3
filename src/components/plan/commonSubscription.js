import React from 'react';
import Slider from "react-slick";
import PlanSelection from './planSelection';
const CommonSubScription = ({ planEat, planHolistic, settingstwo, dataByCondition, dataDaily, handleShow }) => {
    
    return (
        <>
            <div className="PlanListOne">
                <div className="banLayout">
                    <div className="layTwo">Get
                         <span className="text-uppercase ml-1 mr-1">free audio & video calls</span>
                          by buying any plan </div>
                </div>
                <div className="fs28 fw600 col8 mt-5 mb-4 text-center">
                    Smart Plans
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
                                        {
                                            item?.plan_month_price && item.plan_month_price.length > 0 &&
                                            <PlanSelection
                                                item={item}
                                                handleShow={handleShow}
                                                plan_array={item.plan_month_price}
                                            />
                                        }
                                        
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
                                        {
                                            item?.plan_month_price && item.plan_month_price.length > 0 &&
                                            <PlanSelection
                                                item={item}
                                                handleShow={handleShow}
                                                plan_array={item.plan_month_price}
                                            />
                                        }
                                    </div>
                                </div>
                            );
                        })}
                </Slider>
            </div>
        </>
    )
}

export default CommonSubScription; 