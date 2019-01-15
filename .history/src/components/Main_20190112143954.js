import React from "react";
import { Jumbotron } from 'react-bootstrap';


    var styles = {
        backgroundImage: 'url(./assets/images/bartsimpson.jpg)'
    }


export default class Main extends
    React.Component {
        
    render() {
        return (
            <div className="container">
                <div role="img" ariaLabel="click item" className="click-item" style={styles}></div>
            </div>
        );
    }
}