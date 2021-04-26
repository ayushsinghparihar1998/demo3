import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { valueRounding } from '../../common/helpers/Utils';
//{"pl_id":"65","pl_amount":"270","pl_month": "3"}
const PlanSelection = ({ plan_array, item , handleShow}) => {
    const [plan_month, setPlanMonth] = useState(plan_array[0]);

    const selectMonth = (event) => {
        debugger;
        const { value } = event.target;
        const selected = plan_array.find(item => item.pp_id === value);
        setPlanMonth(selected);
    }

    const buyNow = () => {
        const data  = {
            pl_id : item.pl_id,
            pl_amount : plan_month.pp_discount_price,
            pl_month : plan_month.pp_max_range_month
        }
        handleShow(data)
    }
    return (
        <>
            <div className="plantwo text-center">
                <div className="d-flex justify-content-center mb-2">
                    <div className="col1 fs20 fw600 text-uppercase">{item.pl_title}</div>
                </div>
                <div className="pt-1">
                    <div className="col14 fs16 fw400 pb-1">
                        <del>Rs. {plan_month.pp_price}</del>
                    </div>
                    <div className="col14 fs30 fw600 pb-1">
                        Rs.{" "}
                        {valueRounding(plan_month.pp_discount_price)}
                    </div>

                    <div className="SelectPlans">
                        <Form.Control onChange={selectMonth} as="select">
                            {
                                plan_array.map((plan_month) =>
                                    <option value={plan_month.pp_id} >
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
                <Button onClick={buyNow} className="btnType1 d-block w-100 mt-4">
                    Buy Now
                </Button>
            </div>
        </>
    )
}

export default PlanSelection;