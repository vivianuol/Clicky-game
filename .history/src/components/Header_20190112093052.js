import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <h2>Clicky Game</h2>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                </Nav>
            </Navbar>
        );
    }
}