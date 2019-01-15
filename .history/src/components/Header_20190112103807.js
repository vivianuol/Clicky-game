import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends


    React.Component {
    render() {
        return (
            <Navbar>
                <Grid>
                <Row className="show-grid">
                    <Col md={4}>
                        <code>Clicky Game</code>
                    </Col>
                    <Col md={4}>
                        <code>Click an image to begin!</code>
                    </Col>
                    <Col md={4}>
                        <code>{}</code>
                    </Col>
                </Row>
                </Grid>
            </Navbar>
        );
    }
}