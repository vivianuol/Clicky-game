import React from "react";


function Cartoon(props) {
    return (
        <div className="item"  >
            <div className="image" onClick = {props.handleClick} id={props.id}  ></div>
        </div>
    );
}

export default Cartoon;