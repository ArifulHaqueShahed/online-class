import React from 'react';
import './Header.css';
import logo from '../../images/header-logo.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <div className="header-logo ">
                <img src={logo} alt=""/>
                <h1 className="">A Big Platform of Online Courses</h1>
            </div>
           
        </div>
    );
};

export default Header;