import React from "react";
import { Jumbotron } from 'react-bootstrap';

function ColorBlock() {
    var styles1 = {
        backgroundImage: 'url('+/assets/images/bartsimpson.jpg +')'
    }
    var styles2 = {

    };
}

export default class Main extends
    React.Component {
        
    render() {
        return (
            <div className="container">
                <div role="img" ariaLabel="click item" className="click-item" style={{backgroundImage: "url('./assets/images/bartsimpson.jpg')"}}></div>
            </div>
        );
    }
}