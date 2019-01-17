import React from "react";


function Cartoon(props) {
    return (
        <div className="item" onClick = {props.handleClick} >
            <div className="image" id={props.id}  ></div>
        </div>
    );
}

export default Cartoon;