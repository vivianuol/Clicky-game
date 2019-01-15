import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

export default class Heading extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                </Nav>
            </Navbar>
        );
    }
}