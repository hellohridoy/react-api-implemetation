// src/components/Navbar.js

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // Optional: for adding custom styles
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    return (
        <nav >
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <label className="logo">.AAI.</label>
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/teacher" activeClassName="active">Teacher</NavLink></li>
                <li><NavLink to="/student" activeClassName="active">Student</NavLink></li>
                <li><NavLink to="/department" activeClassName="active">Department</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact with us</NavLink></li>

                {/* Dropdown for University Menu */}
                <li className="dropdown">
                    <NavLink to="#" className="dropdown-toggle">
                        University <span className="caret"></span>
                    </NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/university/add-university" activeClassName="active">Add University</NavLink></li>
                        <li><NavLink to="/university/university-info" activeClassName="active">University Info</NavLink></li>
                        <li><NavLink to="/university/view" activeClassName="active">View University</NavLink></li>
                        <li><NavLink to="/university/update" activeClassName="active">Update University Info</NavLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
