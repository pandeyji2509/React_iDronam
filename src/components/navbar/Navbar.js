import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/idronam_full_logo.png";
import Footer from '../footer/Footer';
import Container from '../container/container';
import Enterprise from '../enterprise/Enterprise';
import Individual from '../individual/Individual';
import Developer from '../developers/Developers';
import Agriculture from "../agriculture/Agriculture";
function navbar() {
    return (
        <div className="container">
            <div className="navbar">
            <img src={logo} className="logo" alt="idronam"/>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li>
                            <a href="#">Why iDronam?</a>
                        </li>
                        <li>
                            <a href="#contact-us">Contact us</a>
                        </li>
                    </ul>
                </nav>
                <div className="google-btn">
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                    </div>
                    <p className="btn-text"><b>Sign in with google</b></p>
                </div>
            </div>
            <Container/> 
            <Enterprise/>
            <Individual/>
            <Agriculture/>
            <Developer/>
            <Footer/>
        </div>
    )
}

export default navbar;
