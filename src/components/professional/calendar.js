import React, { Component } from "react";
//import RRule from "rrule";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
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

      init: false,
      calendarWeekends: true,
      listOfCalendarEventResponse: [],
      // listOfCalendarEventResponse: this.props.location.state
      //   .listOfCalendarEventResponse,
      calendarEvents: [
        {
          //   // this object will be "parsed" into an Event Object
          //   title: "The Titleeeee", // a property!
          //   start: "2020-09-08 10:30:00", // a property!
          //   end: "2020-09-09 10:30:00", // a property! ** see important note below about 'end' **
          // },
          // {
          //   // this object will be "parsed" into an Event Object
          //   title: "The Title2", // a property!
          //   start: "2020-09-18 02:30:00", // a property!
          //   end: "2020-09-19 11:30:00", // a property! ** see important note below about 'end' **
        },
      ],
      calendarView: {},
      type: "dayGridMonth",
    };
    this.getAllevents = this.getAllevents.bind(this);
    // this.openEvent = this.openEvent.bind(this);
  }

  componentDidMount() {
    this.getAllevents();
    let calendarApi = this.calendarComponentRef.current.getApi();
    console.log("calendarApi", calendarApi);
    console.log(calendarApi.view);
  }

  getAllevents = (start, end, x) => {
    ELPRxApiService("getCalendarEvents").then((response) => {
      console.log("getCalendarEvents", response);
      if (response && response.data && response.data.data) {
        console.log("response", response.data.data.event_list);

        // sl_created_at: "2020-09-03 14:51:38"
        // sl_created_by: "85"
        // sl_date: "2020-09-03 00:00:00"
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
                startDateTime: row.sl_created_at,
                endDateTime: row.sl_end_date,
              };
            }
          );
          const calendarEvents = response.data.data.event_list.map(function (
            row
          ) {
            return {
              title: row.sl_desc,
              start: row.sl_created_at,
              // start: "2020-09-18 02:30:00", // a property!
              end: row.sl_end_date,
              // ? new Date(row.sl_created_at)
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
    this.setState({ show5: false });
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
                <button className="btn " onClick={this.handleModal5}>
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
              <h6 className="mb-0">
                {this.state.calendarView && this.state.calendarView.title}
              </h6>
              <div className="fc-btn-group">
                <button
                  className="btn btn-cal"
                  onClick={() => this.handleCalendarGrid("dayGridMonth")}
                >
                  Month
                </button>
                <button
                  className="btn btn-cal"
                  onClick={() => this.handleCalendarGrid("timeGridWeek")}
                >
                  Week
                </button>
              </div>
            </div>
            <div className="demo-app">
              <div className="demo-app-top"></div>
              <div className="demo-app-calendar">
                <FullCalendar
                  defaultView="dayGridMonth"
                  header={false}
                  plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
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
                  <Form.Label className="fs20 fw600 col14">Date:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Friday 5/8/2020"
                    className="inputTyp2"
                    id="date"
                    variant="outlined"
                    name="screenName"
                    autoComplete="off"
                  />
                </Form.Group>

                <Form.Group> 
                  <Form.Label className="fs20 fw600 col14">
                    Starting at:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="5:00 am"
                    className="inputTyp2"
                    id="datetwo"
                    variant="outlined"
                    name="screenName"
                    autoComplete="off"
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="fs20 fw600 col14">Lasting:</Form.Label>
                  <Form.Control as="select" className="selectTyp1 p3">
                    <option>5:00 am</option>
                    <option>2:00 am</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="fs20 fw600 col14">
                    Recurring:
                  </Form.Label>
                  <Form.Control as="select" className="selectTyp1 p3">
                    <option>Weekly</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="d-flex mt-auto mb-auto align-items-center">
                  <Form.Label className="fs20 fw600 col14 mr-3">
                    Repeat for
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    className="inputTyp2 w-25"
                    id="date"
                    variant="outlined"
                    name="screenName"
                    autoComplete="off"
                  />
                  <div className="fs18 fw300 col14 ml-3">Additional Weeks</div>
                </Form.Group>

                <Button className="btnTyp5 mt-5">Save Shift</Button>
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
