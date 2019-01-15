import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Nav>

                    <h2>Clicky Game</h2>
                    <h4>Click an image to begin!</h4>
                    <h4>score</h4>
                </Nav>
            </Navbar>
        );
    }
}