import React, { Component } from "react";
//import RRule from "rrule";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

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
  Modal,
} from "react-bootstrap";

import ELPRxApiService from "../../common/services/apiService";
import { getLocalStorage } from "../../common/helpers/Utils";
import NavBar from "../core/nav";
import Crossbtn from "../../assets/images/blue_cross.svg";

export default class CalendarDemo extends Component {
  constructor(props) {
    super(props);

    this.calendarComponentRef = React.createRef();
    this.state = {
      show5: false,

      end_at: "",
      duration: "1 hour",
      recurring: "daily",
      repeat: "1",
      sl_desc: "",
      date: new Date(new Date().setHours(0, 0)),
      starting_at: new Date(new Date().setHours(0, 0)),

      init: false,
      calendarWeekends: true,
      errorTitle: "",
      listOfCalendarEventResponse: [],
      // listOfCalendarEventResponse: this.props.location.state
      //   .listOfCalendarEventResponse,
      calendarEvents: [{}],

      calendarView: {},
      type: "dayGridMonth",
      email_varified: true,
    };
    this.getAllevents = this.getAllevents.bind(this);
    // this.openEvent = this.openEvent.bind(this);
  }

  componentDidMount() {
    let data = getLocalStorage("userInfo")
      ? getLocalStorage("userInfo")
      : getLocalStorage("userInfoProff");
    this.setState({
      email_varified: data.u_verified == 1 ? false : true,
    });

    this.getAllevents();
    let calendarApi = this.calendarComponentRef.current.getApi();
    console.log("calendarApi", calendarApi);
    console.log(calendarApi.view);
  }

  setStartDate(date, type) {
    console.log(new Date());
    console.log(new Date(this.state.date));
    console.log(new Date(new Date(this.state.date)));
    console.log("date", date);

    this.setState({
      [type]: date,
    });
    // let d = t.utc(date).format("HH:mm");
  }
  handleDate = (date) => {
    console.log("date", date);
    this.setState({
      date,
    });

    console.log(this.state.date);
  };

  getAllevents = (start, end, x) => {
    ELPRxApiService("getCalendarEvents").then((response) => {
      console.log("getCalendarEvents", response);
      if (response && response.data && response.data.data) {
        console.log("response", response.data.data.event_list);

        // sl_end_date: "2020-09-03 14:51:38"
        // sl_created_by: "85"
        // sl_end_date: "2020-09-03 00:00:00"
        // sl_desc: "hello i am creating this event"
        // sl_duration: "2 hours"
        // sl_end_at: "18:00:00"
        // sl_end_date: "2020-09-05 00:00:00"
        // sl_id: 46
        // sl_recurring: "daily"
        // sl_repeat: "3"
        // sl_start_at: "16:00:00"
        // sl_status: 1
        // sl_u_id: "85"

        if (response.data.data.event_list) {
          const listOfCalendarEventResponse = response.data.data.event_list.map(
            function (row) {
              return {
                id: row.sl_id,
                title: row.sl_desc,
                startDateTime: row.sl_end_date,
                endDateTime: row.sl_end_date,
              };
            }
          );
          const calendarEvents = response.data.data.event_list.map(function (
            row
          ) {
            let ar = row.sl_end_date.split(" ");
            let ar2 = row.sl_end_date.split(" ");
            ar[1] = row.sl_start_at;
            ar2[1] = row.sl_end_at;
            console.log(ar.join(" "));
            return {
              title: row.sl_desc,
              start: ar.join(" "),
              // start: "2020-09-18 02:30:00", // a property!
              end: ar2.join(" "),
              // ? new Date(row.sl_end_date)
              // : new Date(row.slotStartTimestamp),
            };
          });
          console.log(
            "listOfCalendarEventResponse",
            listOfCalendarEventResponse
          );

          this.setState(
            {
              calendarEvents,
              listOfCalendarEventResponse,
            },
            () => {
              console.log("calendarEvents", this.state.calendarEvents);
            }
          );
        }
      }
    });
  };

  handleDateClick = (arg) => {
    console.log(arg);
  };

  handleCalendarNext = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.next();
    console.log("next");
    console.log(calendarApi.view.props.dateProfile.currentRange);
    this.setState({
      init: true,
      calendarView: calendarApi.view,
    });
    // this.getAllevents(
    //   calendarApi.view.props.dateProfile.currentRange.start,
    //   calendarApi.view.props.dateProfile.currentRange.end,
    //   this.state.type
    // );
  };
  handleCalendarPrev = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.prev();
    console.log("prev");
    console.log(calendarApi.view.props.dateProfile.currentRange);
    this.setState({
      init: true,
      calendarView: calendarApi.view,
    });
    // this.getAllevents(
    //   calendarApi.view.props.dateProfile.currentRange.start,
    //   calendarApi.view.props.dateProfile.currentRange.end,
    //   this.state.type
    // );
  };
  handleCalendartimeGridDay = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.changeView("timeGridDay");
    console.log(calendarApi);
    this.setState({
      init: true,
      calendarView: calendarApi.view,
    });
  };
  handleCalendarGrid = (x) => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    console.log(calendarApi);
    console.log(calendarApi.view);
    calendarApi.changeView(x);
    this.setState({
      type: x,
      calendarView: calendarApi.view,
    });
    // console.log(
    //   "calendarApi.view.props.dateProfile.currentRange.start",
    //   calendarApi.view.props.dateProfile.currentRange.start
    // );
    // console.log("calendarApi.view", calendarApi.view);

    // this.getAllevents(
    //   calendarApi.view.props.dateProfile.currentRange.start,
    //   calendarApi.view.props.dateProfile.currentRange.end,
    //   x
    // );
  };
  handleModal5 = () => {
    this.setState({ show5: true });
  };

  handleClose5 = () => {
    this.setState({
      show5: false,
      end_at: "",
      duration: "1 hour",
      recurring: "daily",
      repeat: "1",
      sl_desc: "",
      date: new Date(new Date().setHours(0, 0)),
      starting_at: new Date(new Date().setHours(0, 0)),
    });
  };
  handleChange = (event, type) => {
    this.setState({
      [type]: event.target.value,
    });

    console.log(event.target.value);
  };

  handleSubmit = () => {
    if (this.state.sl_desc == "") {
      this.setState({
        errorTitle: "Please enter a valid title.",
      });
    } else {
      this.setState({
        errorTitle: "",
      });
      let hour = this.state.starting_at.getHours();
      let min = this.state.starting_at.getMinutes();
      console.log(min);
      console.log(hour);
      let endHour = hour + +this.state.duration.replace(/\D/g, "");
      if (endHour > 23) {
        endHour = endHour - 24;
      }
      console.log(endHour);

      let data = {
        date: moment(this.state.date).format("YYYY-MM-DD"),
        starting_at: moment(this.state.starting_at).format("HH:mm"),
        end_at: ("0" + endHour).slice(-2) + ":" + min,
        duration: this.state.duration,
        recurring: this.state.recurring,
        repeat: +this.state.repeat,
        sl_desc: this.state.sl_desc,
      };
      console.log("data", data);
      ELPRxApiService("postCalendarEvents", data).then((response) => {
        console.log("response", response);

        this.handleClose5();
        this.getAllevents();
      });
    }
  };
  render() {
    const { listOfCalendarEventResponse } = this.state;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>

        <div className="main_calender pt-5">
          <Container>
            <div className="calenderset">
              <div className="bg-white light-shadow p-3">
                <div className="mb-2 py-2 d-flex justify-content-between align-items-center fc-cal-head">
                  <div>
                    <button
                      className="btn b btnTyp9 btnCalender"
                      onClick={this.handleModal5}
                      disabled={this.state.email_varified}
                    >
                      Create Schedule
                      <span className="icon-arrow"></span>
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn btn-prev"
                      onClick={this.handleCalendarPrev}
                    >
                      {" "}
                      <span className="icon-arrow"></span>
                    </button>
                    <button
                      className="btn btn-next"
                      onClick={this.handleCalendarNext}
                    >
                      {" "}
                      <span className="icon-arrow"></span>
                    </button>
                  </div>

                  <div className="fc-btn-group">
                    <button
                      className="btn btn-cal"
                      onClick={() => this.handleCalendarGrid("dayGridMonth")}
                    >
                      month
                    </button>
                    <button
                      className="btn btn-cal"
                      onClick={() => this.handleCalendarGrid("timeGridWeek")}
                    >
                      week
                    </button>
                  </div>
                </div>
                <div className="demo-app">
                  <div className="demo-app-top"></div>
                  <div className="demo-app-calendar">
                    <FullCalendar
                      defaultView="dayGridMonth"
                      header={false}
                      plugins={[
                        timeGridPlugin,
                        dayGridPlugin,
                        interactionPlugin,
                      ]}
                      ref={this.calendarComponentRef}
                      weekends={this.state.calendarWeekends}
                      events={this.state.calendarEvents}
                      eventBorderColor={""}
                      eventLimit={true}
                      views={{
                        timeGrid: {
                          eventLimit: 3, // adjust to 3 only for timeGridWeek/timeGridDay
                        },
                        dayGrid: {
                          eventLimit: 4,
                        },
                      }}
                      expandRows={true}
                      height={1050}
                      handleWindowResize={true}
                      allDaySlot={false}
                      viewRender={function (view, elm) {
                        console.log(view, elm);
                      }}
                      select={function (start, end) {
                        console.log(start, end);
                      }}
                      slotDuration={"01:00:00"}
                      slotLabelInterval={"00:05:00"}
                      dateClick={this.handleDateClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* calender modal start */}

        <Modal
          show={this.state.show5}
          className="CreateAccount question calender_model"
        >
          <Modal.Header>
            <Button onClick={this.handleClose5}>
              <Image src={Crossbtn} alt="" />
            </Button>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <div className="layout_box mt-3 mb-4">
                <div className="col10 fs30 fw600 mb-4 pb-1">
                  Add Scheduled Listening Shift
                </div>
                <Form.Group>
                  <Form.Label className="fs20 fw600 col14">Title:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    className="inputTyp2"
                    variant="outlined"
                    name="Title"
                    autoComplete="off"
                    value={this.state.sl_desc}
                    onChange={(e) => this.handleChange(e, "sl_desc")}
                  />
                  <div className="error alignLeft">
                    {" "}
                    {this.state.errorTitle}
                  </div>
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14 d-block">
                        Date:
                      </Form.Label>
                      {/* <Form.Control
                              type="text"
                              placeholder="Friday 5/8/2020"
                              className="inputTyp2"
                              id="date"
                              variant="outlined"
                              name="screenName"
                              autoComplete="off"
                            /> */}

                      <DatePicker
                        placeholderText="Click to select a date"
                        selected={this.state.date}
                        value={this.state.date}
                        onChange={(event) => this.handleDate(event)}
                        minDate={new Date()}
                        className="form-control inputTyp2"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14 d-block">
                        Starting at:
                      </Form.Label>
                      <DatePicker
                        selected={this.state.starting_at}
                        onChange={(date) =>
                          this.setStartDate(date, "starting_at")
                        }
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={60}
                        // minTime={new Date(this.state.date)}
                        // maxTime = {new Date().setHours(23 , 59)}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className="form-control inputTyp2"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="fs20 fw600 col14">Lasting:</Form.Label>
                  <Form.Control
                    as="select"
                    className="selectTyp1 p3"
                    value={this.state.duration}
                    onChange={(e) => this.handleChange(e, "duration")}
                  >
                    <option>1 hour</option>
                    <option>2 hours</option>
                    <option>3 hours</option>
                    <option>4 hours</option>
                    <option>5 hours</option>
                    <option>6 hours</option>
                    <option>7 hours</option>
                    <option>8 hours</option>
                    <option>9 hours</option>
                    <option>10 hours</option>
                    <option>11 hours</option>
                    <option>12 hours</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="fs20 fw600 col14">
                    Recurring:
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="selectTyp1 p3"
                    value={this.state.recurring}
                    onChange={(e) => this.handleChange(e, "recurring")}
                  >
                    <option>daily</option>
                    <option>weekly</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="d-flex mt-auto mb-auto align-items-center">
                  <Form.Label className="fs20 fw600 col14 mr-3">
                    Repeat for
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="selectTyp1 p3 selectWidth"
                    value={this.state.repeat}
                    onChange={(e) => this.handleChange(e, "repeat")}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                  <div className="fs18 fw300 col14 ml-3">Additional Weeks</div>
                </Form.Group>

                <Button
                  className="btnTyp5 mt-5"
                  type="button"
                  onClick={() => this.handleSubmit()}
                >
                  Save Shift
                </Button>
              </div>
            </Container>
          </Modal.Body>
        </Modal>

        {/* calender modal end */}
      </div>
    );
  }
}
// export default CalendarDemo;
