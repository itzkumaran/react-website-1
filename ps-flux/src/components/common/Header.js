import React from 'react';
import {NavLink} from 'react-router-dom';

function Header() {
    return(
        <nav>
            <NavLink to="/" activeStyle={{ color: 'red' }}>Home</NavLink> 
            {"|"} 
            <NavLink to="/courses" activeStyle={{ color: 'red' }}>Courses</NavLink> 
            {"|"}
            <NavLink to="/about" activeStyle={{ color: 'red' }}>About</NavLink>
        </nav>
    );
}

export default Header;