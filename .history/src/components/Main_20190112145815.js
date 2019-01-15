import React from "react";
import {  } from 'react-bootstrap';


    var styles = {
        backgroundImage: 'url(assets/images/bartsimpson.jpg)'
    }


export default class Main extends
    React.Component {
        
    render() {
        return (
            <div className="container">
                <div role="img"
                className="click-item" style={styles}></div>
            </div>
        );
    }
}