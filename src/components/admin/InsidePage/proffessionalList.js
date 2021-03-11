import React from 'react';
import { Col, Form , Button , Row , Image } from 'react-bootstrap';

const ProffListPage = ({changepath , handleSearch , name, Requestuser,proffList, adminChangeUserStatus,
    keyword, handleCheckSearch , keywordArray , catArray , searchSubmit , Editicon, Deleteicon
}) => {
    return (
        <Col md={8} lg={9} className="pl-1">
            <div className="professor_search">
                <Row className="mb-3">
                    <Col md={8}>
                        <div className="fs22 fw600 col10">
                            List of Professionals
                </div>
                    </Col>
                    <Col md={4}>
                        <div className="text-right pro_cbtn">
                            <Button
                                type="button"
                                className="btnTyp5"
                                onClick={() =>
                                    changepath(
                                        "/professionalSignup",
                                        "getProffListing"
                                    )
                                }
                            >
                                create professional
                  </Button>
                        </div>
                    </Col>
                </Row>
                <div className="fs16 col1 mb-4">Search Professional</div>
                <Form className="p_form">
                    <Row>
                        <Col md="6">
                            <Form.Group
                                controlId="formBasicTexts"
                                className="mb-4"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Search name"
                                    className="inputTyp2 inputpProcess"
                                    name="name"
                                    value={name}
                                    onChange={(e) => handleSearch(e)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md="6">
                            <Form.Group
                                controlId="formBasickeyword"
                                className="mb-4"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Search keyword"
                                    className="inputTyp2 inputpProcess"
                                    name="keyword"
                                    value={keyword}
                                    onChange={(e) => this.handleSearch(e)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" lg="6">
                            <Form.Group
                                controlId="formBasicCheckbox2"
                                className="row mb-4 statusCat"
                            >
                                <span className="fs16 fw500 col10 pl-3 pt-1 pr-3">
                                    Status
                                </span>
                                {keywordArray.map((item) => {
                                    return (
                                        <Form.Check
                                            type="checkbox"
                                            className="checkone checkboxTyp1 "
                                            label={item.name}
                                            id={item.value}
                                            name={item.name}
                                            // value={item.flag}
                                            // checked={item.flag}
                                            onChange={(e) =>
                                                handleCheckSearch(e, "keyword", "")
                                            }
                                            // handleCheck={item.flag}
                                            value={item.value}
                                            checked={item.flag == true}
                                        // onChange={(e) => this.handleCheck(e)}
                                        />
                                    );
                                })}

                            </Form.Group>
                        </Col>

                        <Col md="12" lg="6">
                            <Form.Group
                                controlId="formBasicCheckbox4"
                                className="row mb-4 statusCat"
                            >
                                <span className="fs16 fw500 col10 pl-3 pt-1 pr-3">
                                    Category
                    </span>
                                {catArray &&
                                    catArray.map((item) => {
                                        return (
                                            <Form.Check
                                                type="checkbox"
                                                className="checkone checkboxTyp1 "
                                                label={item.name}
                                                id={item.value}
                                                name={item.name}
                                                // value={item.flag}
                                                // checked={item.flag}
                                                onChange={(e) =>
                                                    handleCheckSearch(e, "cat", "")
                                                }
                                                // handleCheck={item.flag}
                                                value={item.value}
                                                checked={item.flag == true}
                                            // onChange={(e) => this.handleCheck(e)}
                                            />
                                        );
                                    })}
                            </Form.Group>
                        </Col>

                        <Col md="12" lg="6">
                            <Button
                                variant="primary process_btn"
                                type="button"
                                onClick={() => searchSubmit()}
                            >
                                search
                  </Button>
                        </Col>
                    </Row>

                    <div className="checkCategory">
                        <Form.Group
                            controlId="formBasicCheckbox1"
                            className="row"
                        ></Form.Group>
                    </div>
                </Form>{" "}
            </div>
            {proffList &&
                proffList.map((item, index) => {
                    // return(
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
                                        <div className="w-100">
                                            <div className="d-flex">
                                                <div
                                                    className="col1 fw600 fs18 pb-1"
                                                    onClick={() =>
                                                        changepath(
                                                            "/professionalDetails/admin/" +
                                                            item.id,
                                                            "getProffListing"
                                                        )
                                                    }
                                                >
                                                    {item.u_name}
                                                </div>

                                                <div className="d-flex ml-auto">
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
                                                                adminChangeUserStatus(
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
                                                    <span>
                                                        <Image
                                                            src={Editicon}
                                                            alt=""
                                                            onClick={() =>
                                                                changepath(
                                                                    `/professionalModify/${item.id}`,
                                                                    "getProffListing"
                                                                )
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

                                            <div className="fs14 fw400 col14 pb-1">
                                                <strong>Age:</strong> {item.u_birthdate}{" "}
                                                Years
                                            </div>

                                            <div className="fs14 fw400 col14 pb-1">
                                                <strong>Work Experience:</strong>{" "}
                                                {item.u_work_experience} Years
                                            </div>

                                            <div className="fs14 fw400 col14 pb-1">
                                                <strong>Email:</strong> {item.email}
                                            </div>
                                            <div className="fs14 fw400 col14 pb-1">
                                                <strong>Keywords:</strong>{" "}
                                                {item.keyword_child_array.join(",")}
                                            </div>
                                            <div className="eat_category">
                                                {item.cat_child_array &&
                                                    item.cat_child_array.map((val) => {
                                                        return (
                                                            <span
                                                                className={
                                                                    val == "Eat"
                                                                        ? "eatcat"
                                                                        : val == "Luv"
                                                                            ? "luvcat"
                                                                            : "praycat"
                                                                }
                                                            >
                                                                {val}
                                                            </span>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );

                    // );
                })}
        </Col>
    )
}
export default ProffListPage;

/**
 * (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search">
                    <Row className="mb-3">
                      <Col md={8}>
                        <div className="fs22 fw600 col10">
                          List of Professionals
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="text-right pro_cbtn">
                          <Button
                            type="button"
                            className="btnTyp5"
                            onClick={() =>
                              this.changepath(
                                "/professionalSignup",
                                "getProffListing"
                              )
                            }
                          >
                            create professional
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <div className="fs16 col1 mb-4">Search Professional</div>
                    <Form className="p_form">
                      <Row>
                        <Col md="6">
                          <Form.Group
                            controlId="formBasicTexts"
                            className="mb-4"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Search name"
                              className="inputTyp2 inputpProcess"
                              name="name"
                              value={this.state.name}
                              onChange={(e) => this.handleSearch(e)}
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group
                            controlId="formBasickeyword"
                            className="mb-4"
                          >
                            <Form.Control
                              type="text"
                              placeholder="Search keyword"
                              className="inputTyp2 inputpProcess"
                              name="keyword"
                              value={this.state.keyword}
                              onChange={(e) => this.handleSearch(e)}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12" lg="6">
                          <Form.Group
                            controlId="formBasicCheckbox2"
                            className="row mb-4 statusCat"
                          >
                            <span className="fs16 fw500 col10 pl-3 pt-1 pr-3">
                              Status
                            </span>
                            {this.state.keywordArray.map((item) => {
                              return (
                                <Form.Check
                                  type="checkbox"
                                  className="checkone checkboxTyp1 "
                                  label={item.name}
                                  id={item.value}
                                  name={item.name}
                                  // value={item.flag}
                                  // checked={item.flag}
                                  onChange={(e) =>
                                    this.handleCheckSearch(e, "keyword", "")
                                  }
                                  // handleCheck={item.flag}
                                  value={item.value}
                                  checked={item.flag == true}
                                // onChange={(e) => this.handleCheck(e)}
                                />
                              );
                            })}

                            {/* 4 : inactive
1 : active
"" : all
</Form.Group>
</Col>

<Col md="12" lg="6">
  <Form.Group
    controlId="formBasicCheckbox4"
    className="row mb-4 statusCat"
  >
    <span className="fs16 fw500 col10 pl-3 pt-1 pr-3">
      Category
    </span>
    {this.state.catArray &&
      this.state.catArray.map((item) => {
        return (
          <Form.Check
            type="checkbox"
            className="checkone checkboxTyp1 "
            label={item.name}
            id={item.value}
            name={item.name}
            // value={item.flag}
            // checked={item.flag}
            onChange={(e) =>
              this.handleCheckSearch(e, "cat", "")
            }
            // handleCheck={item.flag}
            value={item.value}
            checked={item.flag == true}
          // onChange={(e) => this.handleCheck(e)}
          />
        );
      })}
  </Form.Group>
</Col>

<Col md="12" lg="6">
  <Button
    variant="primary process_btn"
    type="button"
    onClick={() => this.searchSubmit()}
  >
    search
  </Button>
</Col>
</Row>

<div className="checkCategory">
<Form.Group
  controlId="formBasicCheckbox1"
  className="row"
></Form.Group>
</div>
</Form>
</div>
{this.state.proffList &&
this.state.proffList.map((item, index) => {
// return(
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
        <div className="w-100">
          <div className="d-flex">
            <div
              className="col1 fw600 fs18 pb-1"
              onClick={() =>
                this.changepath(
                  "/professionalDetails/admin/" +
                  item.id,
                  "getProffListing"
                )
              }
            >
              {item.u_name}
            </div>

            <div className="d-flex ml-auto">
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
              <span>
                <Image
                  src={Editicon}
                  alt=""
                  onClick={() =>
                    this.changepath(
                      `/professionalModify/${item.id}`,
                      "getProffListing"
                    )
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

          <div className="fs14 fw400 col14 pb-1">
            <strong>Age:</strong> {item.u_birthdate}{" "}
            Years
          </div>

          <div className="fs14 fw400 col14 pb-1">
            <strong>Work Experience:</strong>{" "}
            {item.u_work_experience} Years
          </div>

          <div className="fs14 fw400 col14 pb-1">
            <strong>Email:</strong> {item.email}
          </div>
          <div className="fs14 fw400 col14 pb-1">
            <strong>Keywords:</strong>{" "}
            {item.keyword_child_array.join(",")}
          </div>
          <div className="eat_category">
            {item.cat_child_array &&
              item.cat_child_array.map((val) => {
                return (
                  <span
                    className={
                      val == "Eat"
                        ? "eatcat"
                        : val == "Luv"
                          ? "luvcat"
                          : "praycat"
                    }
                  >
                    {val}
                  </span>
                );
              })}
          </div>
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