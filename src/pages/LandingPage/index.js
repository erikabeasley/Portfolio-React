import React from 'react';
import { Navbar } from 'react-bootstrap'
import "./LandingPage.css";


function LandingPage() {
    return (
        <div id="landing">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home"><h3 id="navHeader">Lesson</h3><h3 id="navHeader2">Works</h3></Navbar.Brand>
            </Navbar>
            
        </div>
    );
}

export default LandingPage;