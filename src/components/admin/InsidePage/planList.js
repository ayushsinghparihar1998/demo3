import React from 'react';
import { Row, Form,  Image, Button, Col } from 'react-bootstrap';
const PlanListPage = ({changepath , plan_type 
    , superadminget_planlist , planList,
    modifyAllContent , Deleteicon ,Editicon}) => {
    return (
        <Col md={8} lg={9} className="pl-1">
            <div className="professor_search">
                <Row className="mb-3">
                    <Col md={8}>
                        <div className="fs22 fw600 col10">
                            Subscription Plan
                </div>
                    </Col>
                    <Col md={4}>
                        <div className="text-right pro_cbtn">
                            <Button
                                type="button"
                                className="btnTyp5"
                                onClick={() =>
                                    changepath(
                                        "/addSubscription/0",
                                        "superadminget_planlist",
                                        plan_type
                                    )
                                }
                            >
                                ADD plan
                  </Button>
                        </div>
                    </Col>
                </Row>

                <Form className="p_form mb-4">
                    <Form.Group
                        as={Row}
                        className="justify-content-center customsRadio"
                    >
                        <Form.Check
                            type="radio"
                            id="plan_type1"
                            value={1}
                            name="plan_type"
                            onChange={() => superadminget_planlist(1, 10, 1)}
                            label="Smart"
                            className={`mr-5  ${plan_type === 2 ? "" : "active"
                                }`}
                            checked={+plan_type === 1}
                        />

                        <Form.Check
                            type="radio"
                            id="plan_type2"
                            value={2}
                            name="plan_type"
                            onChange={() => superadminget_planlist(1, 10, 2)}
                            label="By Condition"
                            className={`mr-5  ${plan_type === 1 ? "" : "active"
                                }`}
                            checked={+plan_type === 2}
                        />
                    </Form.Group>
                </Form>
            </div>

            {/* pl_datetime: "2021-01-20 15:29:03"
pl_desc_details: "Silver plan to buy"
pl_discount_price: "2400"
pl_id: "4"
pl_price: "3000"
pl_save: "20"
pl_status: "1"
pl_title: "Platinum Plan new" */}
            {planList &&
                planList.map((item, index) => {
                    return (
                        <div className="adminlistener p-4 mb-3">
                            <div className="d-flex text-left">
                                <div className="pl-2 w-100">
                                    <div className="d-flex justify-content-between">
                                        <div className="w-100">
                                            <div className="d-flex">
                                                <div className="col1 fw600 fs18 pb-1 cursor_d">
                                                    {item.pl_title}
                                                </div>
                                            </div>

                                            <div className="fs15 fw500 col14 pb-1">
                                                <span className="priceone pr-1">
                                                    Amount: Rs.
                              <strong className="fw700">
                                                        {item.pl_price}
                                                    </strong>
                                                </span>{" "}
                            |{/* Rs. {item.pl_discount_price} */}
                                                <span className="pricetwo pl-2">
                                                    Offer:
                              <strong className="fw700 pl-1">
                                                        {item.pl_save}%
                              </strong>
                                                </span>
                                            </div>
                                            <div className="fs15 col14 fw400">
                                                {item.pl_desc_details}{" "}
                                                {/* <a className="col40">Read more...</a> */}
                                            </div>
                                        </div>

                                        <div className="min-wi250">
                                            <div className="d-flex ml-auto justify-content-end">
                                                <span className="pr-3 fs14 col47 fw400">
                                                    {item.pl_status === "2"
                                                        ? "Deactivate"
                                                        : "Activate"}
                                                </span>
                                                <span className="pr-3 disabled">
                                                    <Form.Check
                                                        type="switch"
                                                        id={"custom-switch" + index}
                                                        name={"status" + index}
                                                        label=""
                                                        onClick={(e) => {
                                                            modifyAllContent(
                                                                "PLAN",
                                                                item.pl_id,
                                                                "superadminchange_planstatus",
                                                                item.pl_status === "1" ? "2" : "1"
                                                            );
                                                        }}
                                                        checked={item.pl_status === "1"}
                                                    />
                                                </span>
                                                <span>
                                                    <Image
                                                        onClick={() =>
                                                            changepath(
                                                                "/addSubscription/" + item.pl_id,
                                                                "superadminget_planlist",
                                                                plan_type
                                                            )
                                                        }
                                                        src={Editicon}
                                                        alt=""
                                                    />
                                                </span>
                                                <span>
                                                    <Image
                                                        onClick={(e) => {
                                                            this.handleOpenAllConformation(
                                                                item.pl_title,
                                                                item.pl_id,
                                                                "PLAN"
                                                            );
                                                        }}
                                                        src={Deleteicon}
                                                        alt=""
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex elpCategory">
                                        {item.plan_category.length < 3
                                            ? item.plan_category.map((val) => {
                                                return (
                                                    <span
                                                        className={
                                                            val.puc_cat_name === "Eat"
                                                                ? "eat"
                                                                : val.puc_cat_name === "Luv"
                                                                    ? "luv"
                                                                    : "pray"
                                                        }
                                                    >
                                                        {val.puc_cat_name}
                                                    </span>
                                                );
                                            })
                                            : ""}
                                        {item.plan_category.length === 3 ? (
                                            <span className="holistic">Holistic</span>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </Col>
    )
}
export default PlanListPage

/**
 * (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search">
                    <Row className="mb-3">
                      <Col md={8}>
                        <div className="fs22 fw600 col10">
                          Subscription Plan
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="text-right pro_cbtn">
                          <Button
                            type="button"
                            className="btnTyp5"
                            onClick={() =>
                              this.changepath(
                                "/addSubscription/0",
                                "superadminget_planlist",
                                this.state.plan_type
                              )
                            }
                          >
                            ADD plan
                          </Button>
                        </div>
                      </Col>
                    </Row>

                    <Form className="p_form mb-4">
                      <Form.Group
                        as={Row}
                        className="justify-content-center customsRadio"
                      >
                        <Form.Check
                          type="radio"
                          id="plan_type1"
                          value={1}
                          name="plan_type"
                          onChange={() => this.superadminget_planlist(1, 10, 1)}
                          label="Smart"
                          className={`mr-5  ${this.state.plan_type === 2 ? "" : "active"
                            }`}
                          checked={+this.state.plan_type === 1}
                        />

                        <Form.Check
                          type="radio"
                          id="plan_type2"
                          value={2}
                          name="plan_type"
                          onChange={() => this.superadminget_planlist(1, 10, 2)}
                          label="By Condition"
                          className={`mr-5  ${this.state.plan_type === 1 ? "" : "active"
                            }`}
                          checked={+this.state.plan_type === 2}
                        />
                      </Form.Group>
                    </Form>
                  </div>

                  {/* pl_datetime: "2021-01-20 15:29:03"
pl_desc_details: "Silver plan to buy"
pl_discount_price: "2400"
pl_id: "4"
pl_price: "3000"
pl_save: "20"
pl_status: "1"
// pl_title: "Platinum Plan new" */
// {this.state.planList &&
//     this.state.planList.map((item, index) => {
//       return (
//         <div className="adminlistener p-4 mb-3">
//           <div className="d-flex text-left">
//             <div className="pl-2 w-100">
//               <div className="d-flex justify-content-between">
//                 <div className="w-100">
//                   <div className="d-flex">
//                     <div className="col1 fw600 fs18 pb-1 cursor_d">
//                       {item.pl_title}
//                     </div>
//                   </div>

//                   <div className="fs15 fw500 col14 pb-1">
//                     <span className="priceone pr-1">
//                       Amount: Rs.
//                       <strong className="fw700">
//                         {item.pl_price}
//                       </strong>
//                     </span>{" "}
//                     |{/* Rs. {item.pl_discount_price} */}
//                     <span className="pricetwo pl-2">
//                       Offer:
//                       <strong className="fw700 pl-1">
//                         {item.pl_save}%
//                       </strong>
//                     </span>
//                   </div>
//                   <div className="fs15 col14 fw400">
//                     {item.pl_desc_details}{" "}
//                     {/* <a className="col40">Read more...</a> */}
//                   </div>
//                 </div>

//                 <div className="min-wi250">
//                   <div className="d-flex ml-auto justify-content-end">
//                     <span className="pr-3 fs14 col47 fw400">
//                       {item.pl_status == "2"
//                         ? "Deactivate"
//                         : "Activate"}
//                     </span>
//                     <span className="pr-3 disabled">
//                       <Form.Check
//                         type="switch"
//                         id={"custom-switch" + index}
//                         name={"status" + index}
//                         label=""
//                         onClick={(e) => {
//                           this.modifyAllContent(
//                             "PLAN",
//                             item.pl_id,
//                             "superadminchange_planstatus",
//                             item.pl_status == "1" ? "2" : "1"
//                           );
//                         }}
//                         checked={item.pl_status == "1"}
//                       />
//                     </span>
//                     <span>
//                       <Image
//                         onClick={() =>
//                           this.changepath(
//                             "/addSubscription/" + item.pl_id,
//                             "superadminget_planlist",
//                             this.state.plan_type
//                           )
//                         }
//                         src={Editicon}
//                         alt=""
//                       />
//                     </span>
//                     <span>
//                       <Image
//                         onClick={(e) => {
//                           this.handleOpenAllConformation(
//                             item.pl_title,
//                             item.pl_id,
//                             "PLAN"
//                           );
//                         }}
//                         src={Deleteicon}
//                         alt=""
//                       />
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="d-flex elpCategory">
//                 {item.plan_category.length < 3
//                   ? item.plan_category.map((val) => {
//                     return (
//                       <span
//                         className={
//                           val.puc_cat_name == "Eat"
//                             ? "eat"
//                             : val.puc_cat_name == "Luv"
//                               ? "luv"
//                               : "pray"
//                         }
//                       >
//                         {val.puc_cat_name}
//                       </span>
//                     );
//                   })
//                   : ""}
//                 {item.plan_category.length == 3 ? (
//                   <span className="holistic">Holistic</span>
//                 ) : null}
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     })}
// </Col>
// )
//  */