import React from "react";
import { Nav, NavItem } from 'react-bootstrap';

export default class Nav extends React.Component {
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