import React from 'react';
import { Col , Image , Form } from 'react-bootstrap';

const UserListPage = ({
    profileListing, Requestuser , 
    Deleteicon , activeProfile , 
    userProfile , adminChangeUserStatus ,
    adminUserDeleteConfirm
}) => {
    return (
        <Col md={8} lg={9} className="pl-1">
            <div className="professor_search mb-3">
                <div className="fs22 fw600 col10">
                    List of{" "}
                    {activeProfile === "listner"
                        ? "Listeners"
                        : "Users"}
                </div>
            </div>
            {
                profileListing && profileListing.length > 0 &&
                profileListing.map((item, index) => {
                    console.log("SFJK JKNIDBSKFC ", item.u_status)
                    let categryLen = item.uc_cat_name
                        ? item.uc_cat_name.length
                        : 0;
                    return (
                        <div className="adminlistener p-4 mb-3">
                            <div className="d-flex text-left">
                                <div className="mr-2 pt-1">
                                    <Image
                                        src={item.u_image ? item.u_image : Requestuser}
                                        alt=""
                                        className="r50"
                                    />
                                </div>
                                <div className="pl-2 w-100">
                                    <div className="d-flex justify-content-between">
                                        <div
                                            onClick={(e) => {
                                                userProfile(
                                                    e,
                                                    item.id,
                                                    activeProfile
                                                );
                                            }}
                                        >
                                            <div className="col3 fw500 fs18 pb-1">
                                                {item.u_name ? item.u_name : ""}
                                            </div>
                                            <div className="col40 fs15 fw400 pb-1">
                                                Category:{" "}
                                                {item.uc_cat_name &&
                                                    item.uc_cat_name.map((cat, idx) => {
                                                        return (
                                                            <span>
                                                                {" "}
                                                                {categryLen - 1 > idx
                                                                    ? cat + ", "
                                                                    : cat}
                                                            </span>
                                                        );
                                                    })}
                                            </div>
                                            <div className="fs14 fw400 col54 pb-1">
                                                {item.email ? item.email : ""}
                                            </div>
                                        </div>
                                        <div className="mt-auto mb-auto d-flex">
                                            <span className="pr-3 fs14 col47 fw400">
                                                {item.u_status === "1"
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
                                                        adminChangeUserStatus(
                                                            e,
                                                            item.id,
                                                            item.u_status
                                                        );
                                                    }}
                                                    checked={
                                                        item.u_status === "1" ? true : false
                                                    }
                                                />
                                            </span>
                                            <span
                                                onClick={(e) => {
                                                    adminUserDeleteConfirm(
                                                        e,
                                                        item.id,
                                                        item.u_name
                                                    );
                                                }}
                                            >
                                                <Image src={Deleteicon} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </Col>
    )
}

export default UserListPage ;

/**
 * 
 * (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search mb-3">
                    <div className="fs22 fw600 col10">
                      List of{" "}
                      {this.state.activeProfile === "listner"
                        ? "Listeners"
                        : "Users"}
                    </div>
                  </div>
                  {profileListing &&
                    profileListing.length > 0 &&
                    profileListing.map((item, index) => {
                      let categryLen = item.uc_cat_name
                        ? item.uc_cat_name.length
                        : 0;
                      return (
                        <div className="adminlistener p-4 mb-3">
                          <div className="d-flex text-left">
                            <div className="mr-2 pt-1">
                              <Image
                                src={item.u_image ? item.u_image : Requestuser}
                                alt=""
                                className="r50"
                              />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div
                                  onClick={(e) => {
                                    this.userProfile(
                                      e,
                                      item.id,
                                      this.state.activeProfile
                                    );
                                  }}
                                >
                                  <div className="col3 fw500 fs18 pb-1">
                                    {item.u_name ? item.u_name : ""}
                                  </div>
                                  <div className="col40 fs15 fw400 pb-1">
                                    Category:{" "}
                                    {item.uc_cat_name &&
                                      item.uc_cat_name.map((cat, idx) => {
                                        return (
                                          <span>
                                            {" "}
                                            {categryLen - 1 > idx
                                              ? cat + ", "
                                              : cat}
                                          </span>
                                        );
                                      })}
                                  </div>
                                  <div className="fs14 fw400 col54 pb-1">
                                    {item.email ? item.email : ""}
                                  </div>
                                </div>
                                <div className="mt-auto mb-auto d-flex">
                                  <span className="pr-3 fs14 col47 fw400">
                                    {item.u_status == "1"
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
                                        this.adminChangeUserStatus(
                                          e,
                                          item.id,
                                          item.u_status
                                        );
                                      }}
                                      checked={
                                        item.u_status == "1" ? true : false
                                      }
                                    />
                                  </span>
                                  <span
                                    onClick={(e) => {
                                      this.adminUserDeleteConfirm(
                                        e,
                                        item.id,
                                        item.u_name
                                      );
                                    }}
                                  >
                                    <Image src={Deleteicon} alt="" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Col>
              )
 */