import React, {useState} from 'react';
import "../../components/styles/navbar.css"
import {Link} from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

const Navbar = () => {

    return <>
        <nav>
            <div className="nav-container">
                <div className="link-container">
                    <Link to="/explore">Explore</Link>
                </div>
                <div className="link-container">
                    <Link to="/contribute">Contribute</Link>
                </div>
                <div className="link-container">
                    <Link to="/about">About</Link>
                </div>
                <div className="auth-container">
                    <LoginForm/>
                </div>

            </div>

        </nav>
    </>
}
export default Navbar;

