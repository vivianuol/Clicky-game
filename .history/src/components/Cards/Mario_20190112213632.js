import React from "react";
import "./style.css";

function Mario(props) {
    return (
        <div className="item">
            <img src={require("./assets/images/doraemon.png")} alt={props.charName}height="240" width="240"></img>
        </div>
    );
}

export default Mario;