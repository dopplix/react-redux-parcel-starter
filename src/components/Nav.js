import React from 'react';
import NavItem from './NavItem';

export default ({currentUserId, onLogoutLinkClicked}) => {
    return (
        <nav className="navbar fixed-top bg-blue">
            <ul className="nav">
                {currentUserId}
                <NavItem path='/home' content="home"/>
                <NavItem path='/user' content="user"/>
                <NavItem path='/' content="logout" onLinkClicked={onLogoutLinkClicked}/>
            </ul>
        </nav>
    )
};