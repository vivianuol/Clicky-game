import React from "react";
import "./style.css";

function Mario() {
    return (
        <div className="item">
            <img src={require("./assets/images/doraemon.png")} alt={this.props.charName}height="240" width="240"></img>
        </div>
    );
}

export default Mario;