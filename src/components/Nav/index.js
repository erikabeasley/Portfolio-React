import React from 'react';
import { Navbar, Nav } from "react-bootstrap"
import "./Nav.css";


function Navigation() {
    return (
        <>
        <nav class="navBar">
                    <a class="navbar-brand" href="index.html"><img class="myLogo" src="assets/images/EBlogo.png" alt="Logo"></img></a>
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="navbar-right">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="about.html">About Me <span
                                            class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="portfolio.html">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar-right">
                            <a class="socialBtn" class="btn-linkedin"
                                href="https://www.linkedin.com/in/erika-b-6bb94695/" target="_blank">
                                <i class="fab fa-linkedin-in"></i></a>
                            <a class="socialBtn" class="btn-instagram" href="#" target="_blank">
                                <i class="fab fa-instagram"></i></a>
                            <a class="socialBtn" class="btn-github" href="https://github.com/erikabeasley" target="_blank">
                                <i class="fab fa-github"></i></a>
                        </div>
                    </nav>
                </nav>
      </>
    );
}
export default Navigation
