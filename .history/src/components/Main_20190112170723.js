import React from "react";
import { } from 'react-bootstrap';


var styles = {
    backgroundImage: 'url(assets/images/bartsimpson.jpg)'
}


export default class Main extends
    React.Component {

    render() {
        return (
            <div className="container">
                <div className="clear">
                </div>
                <div className="item">
                    <img src={require("./assets/images/doraemon.png")} alt="bartsimpson" height="240" width="240"></img>
                </div>
                <div className="item">
                    <img src={require("./assets/images/goomba-game.jpg")} alt="goomba-game" height="240" width="240"></img>
                </div>
                <div className="item">
                    <img src={require("./assets/images/Mickey-Mouse.jpg")} alt="Mickey-Mouse" height="240" width="240"></img>
                </div>
                <div className="item">
                    <img src={require("./assets/images/pikachu.png")} alt="pikachu" height="240" width="240"></img>
                </div>
                <div className="item">
                    <img src={require("./assets/images/MarieCat.png")} alt="MarieCat" height="240" width="240"></img>
                </div>
                <div className="item">
                    <img src={require("./assets/images/Sponge-Bob.png")} alt="Sponge-Bob" height="240" width="240"></img>
                </div>
                <div className="item">
                    <img src={require("./assets/images/Sally_Brown.png")} alt="Sally_Brown" height="240" width="240"></img>
                </div>
                <div className="item">
                    <img src={require("./assets/images/Spongebob-Squarepants.png")} alt="Spongebob-Squarepants" height="240" width="240"></img>
                </div>
                <div className="item">
                    <img src={require("./assets/images/super-mareo.png")} alt="super-mareo" height="240" width="240"></img>
                </div>
                <div className="item">
                    <img src={require("./assets/images/chipmunks.jpg")} alt="chipmunks" height="240" width="240"></img>
                </div>
                <div className="item">
                    <img src={require("./assets/images/Minions.png")} alt="minions" height="240" width="240"></img>
                </div>
            </div>
        );
    }
}