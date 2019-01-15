import React from "react";
import { Jumbotron } from 'react-bootstrap';


export default class Main extends
    React.Component {
    render() {
        return (
            <div className="container">
                <div role="img" ariaLabel="click item" className="click-item" style="background-image: url('./assets/images/morty.png')"></div>
            </div>
        );
    }
}