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
                <img src={require("./assets/images/goomba-game.jpg")} alt="goomba-game" height="240" width="240"></img>
                <img src={require("./assets/images/Mickey-Mouse.jpg")} alt="Mickey-Mouse" height="240" width="240"></img>
                <img src={require("./assets/images/pikachu.png")} alt="pikachu" height="240" width="240"></img>
                <img src={require("./assets/images/owl.jpg")} alt="owl" height="240" width="240"></img>
                <img src={require("./assets/images/Sponge-Bob.png")} alt="Sponge-Bob" height="240" width="240"></img>
                <img src={require("./assets/images/Sally_Brown.png")} alt="Spongebob-Squarepants" height="240" width="240"></img>
                <img src={require("./assets/images/Spongebob-Squarepants.png")} alt="Spongebob-Squarepants" height="240" width="240"></img>
                <img src={require("./assets/images/super-mareo.png")} alt="super-mareo" height="240" width="240"></img> 
            </div>
        );
    }
}