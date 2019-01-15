import React from "react";


function Cartoon(props) {
    return (
        <div className="item" onClick = {props.handleClick} >
            <img src={props.imageLoc} alt={props.charName} height="240" width="240" ></img>
        </div>
    );
}

export default Cartoon;