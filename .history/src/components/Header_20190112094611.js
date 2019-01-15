import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Nav>
                    <Navbar.Brand>
                        <h2>Clicky Game</h2>
                    </Navbar.Brand>
                
                    <h4>Click an image to begin!</h4>
                </Nav>
            </Navbar>
        );
    }
}