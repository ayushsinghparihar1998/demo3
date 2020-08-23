import React, { Component } from 'react';
import Login from '../login/Login';
import CONSTANTS from '../../common/helpers/Constants';
class Adminlogin extends Component {
  render() {
    console.log('this.propsthis.props', this.props);
    return (
      <div>
        <Login {...this.props} roleType={CONSTANTS.ROLES.SUPER_ADMIN} />
      </div>
    );
  }
}

export default Adminlogin;
