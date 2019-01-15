import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends


    React.Component {
    render() {
        return (
            // <Navbar>
                <Grid>
                <Row className="show-grid">
                    <Col md={4}>
                        <h2>Clicky Game</h2>
                    </Col>
                    <Col md={4}>
                        <h4>Click an image to begin!</h4>
                    </Col>
                    <Col md={4}>
                        <h4>Click an image to begin!</h4>
                    </Col>
                </Row>
                </Grid>
            // </Navbar>
        );
    }
}