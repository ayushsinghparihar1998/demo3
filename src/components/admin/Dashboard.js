import React, { Component } from "react";
import { Grid, Form, Button, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator/dist/simple-react-validator";
import { actionLogin } from "../../common/redux/actions";
import { encrypt, decrypt, setLocalStorage } from "../../common/helpers/Utils";
// import SocketIOClient from "socket.io-client";
// const SOCKET_IO_URL = "http://103.21.53.11:8282";
// const socket = SocketIOClient(SOCKET_IO_URL);
// socket.connect();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      className: "msgcolor",
      messages: {
        email: "Enter a valid email",
      },
    });
  }

  componentDidMount() {
    socket.on("connect", function () {
      console.log("connected");     
    });
    
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    let data = {
      email: this.state.email.toLowerCase().trim(),
      password: encrypt(this.state.password.trim()),
    };

    this.props
      .actionLogin(data)
      .then((result) => {
        if (result && result.data && result.data.status === "Success") {
          this.props.history.push({ pathname: "/admin/dashboard" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="verticalMiddle">
        <Grid className="w100" columns={2} centered>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Email</label>
                <Input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                {this.validator.message(
                  "email",
                  this.state.email,
                  "required|email"
                )}
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Input
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                {this.validator.message(
                  "password",
                  this.state.password,
                  "required"
                )}
              </Form.Field>
              <Button primary type="submit">
                Submit
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(null, { actionLogin })(Dashboard);
