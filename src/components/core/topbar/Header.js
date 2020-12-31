import React, { Component } from 'react';
import { Grid, Popup } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import InputComponent from '../../ui/InputComponent';

import logo from '../../assets/images/logo.svg';
import MainMenu from './MainMenu';

class Header extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="spikeContainer pos-rel">
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

                <InputComponent
                  placeholder="Search Prople/Group"
                  icon={true}
                  iconName="search"
                  circular={false}
                  link={true}
                  iconPosition="left"
                  fluid={false}
                  classname="topbarSearch"
                />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={9} computer={10} className="pd0">
                <MainMenu />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Popup
            trigger={<span className="arrow-down"></span>}
            content="Logout"
            position="top right"
            hideOnScroll
            flowing
            hoverable
          />
        </div>
      </div>
    );
  }
}
export default Header;
