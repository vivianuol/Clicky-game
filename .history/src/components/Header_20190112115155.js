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
                        <Col xs={6} md={4}>
                            <h2>Clicky Game</h2>
                        </Col>
                        <Col xs={6} md={4}>
                            <h3>Click an image to begin!</h3>
                        </Col>
                        <Col xsHidden md={4}>
                            <code>{'<Col xsHidden md={4} />'}</code>
                        </Col>
                    </Row>
                </Grid>
            </Navbar>
        );
    }
}