import React from 'react';
import { Col, Table , Button } from 'react-bootstrap';

const PaymentListPage = ({paymentList}) =>{
    return(
        <Col md={8} lg={9} className="pl-1">
          <div className="professor_search mb-3">
            <div className="fs22 fw600 col10">List of Payments</div>
          </div>
          <div className="table_paymentlayout">
            <Table bordered>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentList.map((elem) => {
                  return (
                    <tr>
                      <td>{elem.pr_email || "-"}</td>
                      <td>{elem.pr_txamount || "-"}</td>
                      <td>
                        <Button className="btnTyp9 reject color1">
                          {elem.pr_status.split("_")[1] || "-"}
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Col>
      )
}
export default PaymentListPage;

/**
 * (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search mb-3">
                    <div className="fs22 fw600 col10">List of Payments</div>
                  </div>
                  <div className="table_paymentlayout">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>Email</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.paymentList.map((elem) => {
                          return (
                            <tr>
                              <td>{elem.pr_email || "-"}</td>
                              <td>{elem.pr_txamount || "-"}</td>
                              <td>
                                <Button className="btnTyp9 reject color1">
                                  {elem.pr_status.split("_")[1] || "-"}
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </Col>
              )
 */