import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function AdminMainMenu() {
  return (
    <Menu secondary className="mainMenu">
      <Menu.Menu position="right">
        <Menu.Item>
          <NavLink to="/notifications" activeClassName="active">
            <span className="icon-notification"></span>
          </NavLink>
        </Menu.Item>
        <Menu.Item></Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default AdminMainMenu;
