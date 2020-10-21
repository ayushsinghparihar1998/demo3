import React, { Component } from 'react';
import { Grid, Popup, Container, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import InputComponent from '../../ui/InputComponent';

import logo from '../../../../src/assets/images/logo.svg';
import AdminMainMenu from './AdminMainMenu';
import { actionLogout } from '../../../common/redux/actions';
import { clearLocalStorage } from '../../../common/helpers/Utils';

class AdminHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logout = this.logout.bind(this);
  }

  logout = () => {
    clearLocalStorage();
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="topbar admin">
        <ToastContainer
          autoClose={5000}
          className="custom-toaster-main-cls"
          toastClassName="custom-toaster-bg"
        />
        <Container className="pos-rel">
          <Grid verticalAlign="middle" className="noMargin">
            <Grid.Row>
              <Grid.Column mobile={16} tablet={7} computer={6} className="pd0">
                <NavLink exact to="/">
                  <img
                    src={logo}
                    alt="Spikeview logo"
                    border="0"
                    className="logo"
                  />
                  <span className="logoDescription">spikeview</span>
                </NavLink>

                <Input
                  icon={{ name: 'icon-spikeSearch', link: true }}
                  placeholder="Search here"
                  className="topbarSearch"
                  iconPosition="left"
                />

                {/*<InputComponent
                  placeholder="Search here"
                  icon={true}
                  iconName="search"
                  circular={false}
                  link={true}
                  iconPosition="left"
                  fluid={false}
                  classname="topbarSearch"
                />*/}
              </Grid.Column>
              <Grid.Column mobile={16} tablet={9} computer={10} className="pd0">
                <AdminMainMenu />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Popup
            trigger={<span className="arrow-down"></span>}
            position="top right"
            hideOnScroll
            flowing
            on="click"
          >
            <Popup.Content>
              <span className="pointer" onClick={this.logout}>
                Logout
              </span>
            </Popup.Content>
          </Popup>
        </Container>
      </div>
    );
  }
}

export default connect(
  null,
  { actionLogout }
)(AdminHeader);
