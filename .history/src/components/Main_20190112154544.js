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
                <img src={require("./assets/images/doraemon.png")} alt="bartsimpson" height="240" width="240"></img>
                <img src={require("./assets/images/doraemon.png")} alt="bartsimpson" height="240" width="240"></img>
                <img src={require("./assets/images/doraemon.png")} alt="doraemon" height="240" width="240"></img>
                <img src={require("./assets/images/doraemon.png")} alt="bartsimpson" height="240" width="240"></img>
                <img src={require("./assets/images/doraemon.png")} alt="bartsimpson" height="240" width="240"></img>
                <img src={require("./assets/images/doraemon.png")} alt="bartsimpson" height="240" width="240"></img> 
            </div>
        );
    }
}