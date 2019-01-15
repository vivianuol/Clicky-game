import React from "react";
import { Jumbotron } from 'react-bootstrap';
 

export default class Header extends
    React.Component {
    render() {
        return (
            <Jumbotron>
                <h1>Clicky Game</h1>
                <p>
                Click on an image to earn points, but don't click on any more than once!
                </p>
            
            </Jumbotron>
        );
    }
}