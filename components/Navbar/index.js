import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import css from './Navbar.scss';

class NavigationBar extends Component{
    render(){
        return (
            <Navbar bg="light" variant="light" className={css.nav}>
                <Navbar.Brand href="/">
                    <img
                        alt = ""
                        src= '../../static/logo.png'
                        width="65"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/table">Jeopardy</Nav.Link>
                    <Nav.Link href="/">Photography</Nav.Link>
                    <Nav.Link href="/">About Me</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;
