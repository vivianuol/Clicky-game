import React from "react";


function Cartoon(props) {
    return (
        <div className="item" onClick = {props.handleClick} >
            <div id={props.charName} height="240" width="240" ></div>
        </div>
    );
}

export default Cartoon;