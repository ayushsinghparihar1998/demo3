import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Button,
  NavDropdown,
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Form,
  Tabs,
  Tab,
  Table,
  Modal,
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Deleteicon from "../../assets/images/delete_icon.svg";
import { Link } from "react-router-dom";
import { range } from "../../common/helpers/Utils";
import ELPViewApiService from "../../common/services/apiService";
import Deleteusers from "../../assets/images/delete_users.svg";

// import Deleteicon from "../../assets/images/delete_icon.svg";
import Blueicons from "../../assets/images/blue_cross.svg";
class DomainDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domainDetail: [],
      count: 10,
      offset: 1,
      pageno: 1,
      records: 10,
      totalCount: "",
      totalRecordCount: 0,
      deleteConformationModal: false,
      deleteUser : {}
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.id);

    this.getDetails(this.props.match.params.id);
  }

  getPager(total) {
    let startPage = this.state.startPage;
    let endPage = this.state.endPage;
    let totalPage = Math.ceil(total / this.state.records);
    console.log("totalPage", totalPage);
    let pageno = this.state.pageno;

    if (totalPage <= 5) {
      startPage = 1;
      endPage = totalPage;
    } else {
      if (pageno <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (pageno + 1 >= totalPage) {
        startPage = totalPage - 4;
        endPage = totalPage;
      } else {
        startPage = pageno - 2;
        endPage = pageno + 2;
      }
    }
    let startIndex = (pageno - 1) * this.state.records;
    let endIndex = Math.min(startIndex + this.state.records - 1, totalPage - 1);

    // create an array of pages to ng-repeat in the pager control
    let pageArray;
    if (startPage == endPage) {
      console.log("startPage, endPage", startPage, endPage);

      pageArray = [1];
    } else {
      pageArray = range(startPage, endPage);
      console.log("startPage, endPage", startPage, endPage);
    }
    this.setState({
      // records: this.state.records,
      totalPage: totalPage,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pageArray: pageArray,
    });
  }
  onChangePage(page) {
    console.log(page);
    console.log(this.state.pageno);
    this.setState({
      pageno: page,
    });
    if (page == this.state.pageno) {
    } else {
      this.getDetails(this.props.match.params.id);
    }
  }

  getDetails = (id) => {
    let data = {
      count: this.state.count,
      offset: this.state.offset,
      cd_id: id,
    };

    ELPViewApiService("superadmingetcorporatedomaindetailuserlist", data).then(
      (result) => {
        console.log("result", result);
        let domainDetail = [];
        let totalRecordCount = 0;
        if (result && result.status === 200) {
          domainDetail =
            result && result.data && result.data.data
              ? result.data.data.users_list
              : [];
          totalRecordCount =
            result && result.data && result.data.data
              ? result.data.data.totalRecordCount
              : 0;
        }
        this.setState(
          {
            domainDetail,
            totalRecordCount,
          },
          () => {
            this.getPager(this.state.totalRecordCount);
            console.log("domainDetail", this.state.domainDetail);
          }
        );
      }
    );
  };
  adminUserDelete = (deleteUser) => {
    let data = { cd_id: deleteUser.id, cd_status: 2 };
    ELPViewApiService("superadmindeletecorporatedomain", data).then(
      (result) => {
        this.getDetails(this.props.match.params.id);
        console.log(result.data);
        this.handleCloseConformation();
      }
    );
  };
  handleCloseConformation = () => {
    this.setState({
      deleteConformationModal: false,
      deleteUser: {},
    });
  };

  handleOpenConformation = (obj) => {
    this.setState({
      deleteUser: obj,
      deleteConformationModal: true,
    });
  };
  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout adminProfessinal pt-4 pb-5">
          <Container>
            <Row>
              <Col md={3} className="pr-1">
                <div className="adminsidebar">
                  <div className="inner_area">
                    <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                      Quick Links
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div>
                        <div className="fs14 col28 fw500">
                          <Link to={{ pathname: `/adminlistener` }}>Back</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={9} className="pl-1">
                <div className="corporateMember d_detail">
                  <div className="fs22 col10 mb-1">
                    {this.props.match.params.name}
                  </div>
                  <div className="fs15 fw400 col14 mb-4">
                    Lorem Ipsum is simply dummy and typesetting industry.
                  </div>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>Employees</th>
                        <th>Email ID</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.domainDetail &&
                        this.state.domainDetail.map((item) => {
                          return (
                            <tr>
                              <td>
                                {item.u_username ? item.u_username : "--"}
                              </td>
                              <td>{item.email ? item.email : "--"}</td>
                              <td>
                                <Image
                                  src={Deleteicon}
                                  alt=""
                                  onClick={() =>
                                    this.handleOpenConformation(item)
                                  }
                                />
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
            <div className="paginationWrapper">
              <nav aria-label="Page navigation">
                <ul class="pagination pg-blue deliva-pagination justify-content-end">
                  <li class="page-item">
                    <button
                      class="page-link rotate-180 control-btn"
                      aria-label="Previous"
                      onClick={() => this.onChangePage(this.state.pageno - 1)}
                      disabled={
                        this.state.pageno == 1 || this.state.totalPage == 0
                      }
                    >
                      <span className="icon-prev"></span>
                      <span
                        //className="prevNext"
                        className={`sr-only ${
                          this.state.pageno == 1 || this.state.totalPage == 0
                            ? ""
                            : "active"
                        }`}
                      >
                        Previous
                      </span>
                    </button>
                  </li>

                  {this.state.totalPage > 0 &&
                    this.state.pageArray.map((page, ind) => {
                      return (
                        <li class="page-item">
                          <a
                            className={`page-link ${
                              this.state.pageno == page ? "active" : ""
                            }`}
                            onClick={() => this.onChangePage(page)}
                          >
                            {page}
                          </a>
                        </li>
                      );
                    })}

                  <li class="page-item">
                    <button
                      class="page-link control-btn"
                      aria-label="Next"
                      onClick={() => this.onChangePage(this.state.pageno + 1)}
                      disabled={
                        this.state.pageno == this.state.totalPage ||
                        this.state.totalPage == 0
                      }
                    >
                      <span className="icon-next"></span>
                      <span
                        className={`sr-only ${
                          this.state.pageno == this.state.totalPage ||
                          this.state.totalPage == 0
                            ? ""
                            : "active"
                        }`}
                      >
                        Next
                      </span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <Modal
              show={this.state.deleteConformationModal}
              onHide={this.handleCloseConformation}
              className="custom-popUp confirmation-box delete_modal"
              bsSize="small"
            >
              <Modal.Body>
                <div className="delete_user mt-4">
                  <Image src={Deleteusers} alt="" />
                  <Image
                    src={Blueicons}
                    alt=""
                    className="close pointer"
                    onClick={this.handleCloseConformation}
                  />
                  <div className="text-center fs24 mt-4 col64 mb-4">
                    Are you sure want to delete 
                    {this.state.deleteUser.u_username}
                  </div>

                  <div className="text-center mb-5">
                    <button
                      className="btn btn-success text-uppercase"
                      onClick={(event) =>
                        this.adminUserDelete(this.state.deleteUser)
                      }
                    >
                      Yes
                    </button>
                    <button
                      className="btn btn-default text-uppercase sm-btn"
                      onClick={this.handleCloseConformation}
                    >
                      No
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DomainDetail;
