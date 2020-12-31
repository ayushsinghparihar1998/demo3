import React from 'react';
import { Container } from 'semantic-ui-react';
import '../src/components/assets/scss/styleAdmin.scss';

import AdminHeader from './components/core/topbar/AdminHeader';
import Dashboard from '../src/components/admin/Dashboard';
import Login from '../src/components/login/Login';
//import { PostData } from '../src/common/services/apiService'; //new

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'ankur.verma@lmsin.com', //new
      password: '16c1LSUZ6ZDPwxnCjO2AYg==', //ne
      token: null
    };
  }

  handleChange = e => {
    //new
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = e => {
    //new
    e.preventDefault();
    // if (this.state.email && this.state.password) {
    //   PostData('login', this.state);
    //   console.log('Get Token ', localStorage.getItem('token'));
    //   this.setState({
    //     token: localStorage.getItem('token')
    //   });
    // }
  };

  logoutHandler = e => {
    e.preventDefault();
    this.setState({
      token: null
    });
  };
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({
        token: localStorage.getItem('token')
      });
    }
  }

  render() {
    const token = localStorage.getItem('token');
    return (
      <React.Fragment>
        {token ? (
          <div className="pageWrapper">
            <AdminHeader logoutHandler={this.logoutHandler} />
            <Container>
              <Dashboard />
            </Container>
          </div>
        ) : (
          <Login
            email={this.state.email} //new
            password={this.state.password} //new
            handleChange={e => this.handleChange(e)} //new
            handleSubmit={this.handleSubmit}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
