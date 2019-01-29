import React from "react";
import Cartoon from "./Cartoon";
import "./style.css";


function Cards(props) {
    return (
        <div className="cards-layout wrapper">
            {this.props.arr.map((item, i) => <Cartoon id={item} key={i} />)}
        </div>
    )
}

export default Cards;