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
                <img src={"./bartsimpson.jpg"}alt="bartsimpson" height="42" width="42"></img>
            </div>
        );
    }
}