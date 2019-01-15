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
                <img src={require("./bartsimpson.jpg")}alt="bartsimpson" height="120" width="120"></img>
            </div>
        );
    }
}