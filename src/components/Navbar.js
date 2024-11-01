// src/components/Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Custom styles if needed
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">.AAI.</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/teacher" className="nav-link" activeClassName="active">Teacher</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/student" className="nav-link" activeClassName="active">Student</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/department" className="nav-link" activeClassName="active">Department</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact with us</NavLink>
                        </li>
                        {/* Dropdown for University Menu */}
                        <li className="nav-item dropdown">
                            <NavLink to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                University
                            </NavLink>
                            <ul className="dropdown-menu bg-green" aria-labelledby="navbarDropdown">
                                <li><NavLink to="/university/add-university" className="dropdown-item" activeClassName="active">Add University</NavLink></li>
                                <li><NavLink to="/university/university-info" className="dropdown-item" activeClassName="active">University Info</NavLink></li>
                                <li><NavLink to="/university/view" className="dropdown-item" activeClassName="active">View University</NavLink></li>
                                <li><NavLink to="/university/update" className="dropdown-item" activeClassName="active">Update University Info</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
