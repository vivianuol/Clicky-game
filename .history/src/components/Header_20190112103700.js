import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends


    React.Component {
    render() {
        return (
            <Navbar>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <code>Clicky Game</code>
                    </Col>
                    <Col xs={6} md={4}>
                        <code>Click an image to begin!</code>
                    </Col>
                    <Col xsHidden md={4}>
                        <code>{}</code>
                    </Col>
                </Row>

                <h2>Clicky Game</h2>
                <h4>Click an image to begin!</h4>
                <h4>score</h4>

            </Navbar>
        );
    }
}