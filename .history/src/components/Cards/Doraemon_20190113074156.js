import React from "react";
import "./style.css";

function Doraemon(props) {
    return (
        <div className="item" >
            <img src={props.imageLoc} alt={props.charName} height="240" width="240"></img>
        </div>
    );
}

export default Doraemon;