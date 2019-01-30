import React from "react";
import Cartoon from "../../container/Cartoon";
import "./style.css";

function Cards(props){
    return (
        <div className="cards-layout wrapper">
            {props.arr.map((item, i) => <Cartoon id={item} key={i} />)}
        </div>
    )
}

export default Cards;