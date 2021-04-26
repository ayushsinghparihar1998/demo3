import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import NavBar from "../../../core/nav";
import Editicon from "../../../../assets/images/edit_icon.svg";
import { Link, useHistory, useParams } from "react-router-dom";
import Footer from '../../../core/footer';
import ELPViewApiService from '../../../../common/services/apiService';
import Deleteicon from "../../../../assets/images/delete_icon.svg";
import { showErrorToast, showSuccessToast } from '../../../../common/helpers/Utils';

const ViewPassQA = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const [passListing, setPassListing] = useState();
  const [passageTitle , setPassageTitle] = useState('');
  const openEditPass = (qID) => history.push(`/editPassQA/${id}/${qID}`);
  const openQuestionPage = () => history.push(`/passageQA/${id}`);

  useEffect(() => {
    if (id !== '0') {
      const data = { "count": 10, "offset": 1, "listner_paragraph_id": id }
      ELPViewApiService('superadminget_quesanslistenerlist', data)
        .then((response) => {
          console.log("RESPONSE", response);
          if (response.data.status === 'success') {
            const data = response.data.data;
            console.log("DATA ", data.listing);
            setPassListing(data.listing);
          }
        })
        .catch((err) => new Error(`Error is ${err}`));

      ELPViewApiService('superadminget_detailslistnerparagraphtest', { lp_id: id })
        .then((response) => {
          console.log("RESPONSE ", response)
          if (response.data.status === "success") {
            const data = response.data.data;
            console.log("DATA ", data[0]);
            setPassageTitle(data[0].lp_title);
            // setPassDescribe(data[0].lp_description);
            // setQuesCount(data[0].total_que_count);
            //{list.total_que_count}
          }
        })
        .catch(err => new Error(`Error in Getting PARA ${err}`))
    }
  }, [id]);

  const deleteQuestion = (id) => {
    const data = { ql_id: id, ql_status: '3' }
    ELPViewApiService('superadminqueans_listnerchangestatus', data)
      .then((response) => {
        console.log("RESPONSE", response);
        if (response.data.status === 'success') {
          const data = response.data.data;
          console.log("DATA ", data);
          showErrorToast(response.data.message);
        }
      })
      .catch((err) => new Error(`Error is ${err}`));

  }

  const changeQuestionStatus = (status) => {
    const data = { ql_id: id, ql_status: status }
    ELPViewApiService('superadminqueans_listnerchangestatus', data)
      .then((response) => {
        console.log("RESPONSE", response);
        if (response.data.status === 'success') {
          const data = response.data.data;
          console.log("DATA ", data);
          showSuccessToast(response.data.message);
        }
      })
      .catch((err) => new Error(`Error is ${err}`));
  }

  return (
    <div className="page__wrapper innerpage">
      <div className="main_baner">
        <NavBar {...props} />
      </div>
      <div className="bg_lightBlue">
        <Container>
          <Row>
            <Col md={3} className="pr-1">
              <div className="adminsidebar mt-4">
                <div className="inner_area">
                  <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                    Quick Links
                                    </div>
                  <div className="d-flex m-3 pb-3 border-bottom">
                    <div>
                      <div className="fs14 col28 fw500">
                        <Link to={{ pathname: `/viewPassage/${id}` }}>Back</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} lg={9} className="pl-1">
              <div className="professor_search ViewQa">
                <div className="fs22 fw600 col10" onClick={openQuestionPage}>Question Answer</div>
                <div className="mentalOne">
                  <div className="col14 fs18 fw600">
                    {passageTitle}
                  </div>
                  <div className="position-relative">
                    <Button
                      variant="btnTypAdd"
                      type="button"
                      onClick={openQuestionPage}
                    >
                      <span>
                        <i className="fa fa-plus"></i>
                      </span>{" "}
                        Add More Question
                        <span className="ml-2 b-none">
                        {/* <Image src={Infos} className="infos" /> */}
                      </span>
                    </Button>
                  </div>
                </div>
                {passListing &&
                  passListing.map((item, index) => {
                    return (
                      <div className="QaListings">
                        <div className="QaHeader">
                          <div className="col29 fw500 fs17 pb-1">
                            <strong>Question {index + 1}.</strong>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item.ql_text,
                              }}
                              className="d-inline-block ml-1"
                            ></span>
                          </div>
                          <div className="d-flex ml-auto minw-90">
                            <span
                              className="mr-3 pointer"
                              onClick={() => { openEditPass(item.ql_id) }}
                            >
                              <Image src={Editicon} alt="" />
                            </span>
                            <span
                              className="pointer"
                              onClick={() => { deleteQuestion(item.ql_id) }}
                            >
                              <Image src={Deleteicon} alt="" />
                            </span>
                          </div>
                        </div>
                        <div className="QaBody">

                          <div className="col10 fs17 fw500 mt-2 mb-3">
                            Answer: {item.uc_cat_name.length}
                          </div>
                          <div className="answerDetail">
                            <ul>
                              {item.uc_cat_name.map((val, ii) => {
                                return (
                                  <li>
                                    <strong>{ii + 1} .</strong>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: val.qa_options,
                                      }}
                                      className="d-inline-block ml-1"
                                    ></span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default ViewPassQA;