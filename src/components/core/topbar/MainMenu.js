import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function MainMenu() {
    return (
        <Menu secondary className="mainMenu">
            <Menu.Menu position='right'>
                <Menu.Item><NavLink exact to="/" activeClassName="active"><span className="icon-profile"></span>Profile</NavLink></Menu.Item>
                <Menu.Item><NavLink to="/feeds" activeClassName="active"><span className="icon-feed"></span>Feeds</NavLink></Menu.Item>
                <Menu.Item><NavLink exact to="/connections" activeClassName="active"><span className="icon-connection"></span>Connections</NavLink></Menu.Item>
                <Menu.Item><NavLink to="/charts" activeClassName="active"><span className="icon-Chats"></span>Chats</NavLink></Menu.Item>
                <Menu.Item><NavLink exact to="/groups" activeClassName="active"><span className="icon-group"></span>Groups</NavLink></Menu.Item>
                <Menu.Item><NavLink to="/notifications" activeClassName="active"><span className="icon-notification"></span>Notifications</NavLink></Menu.Item>
                <Menu.Item></Menu.Item>                
            </Menu.Menu>
        </Menu>
    )
}

export default MainMenu;
