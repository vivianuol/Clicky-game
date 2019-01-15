import React from "react";
import Mario from "./Mario";

function Cards(props) {
    return (
        <div className="item">
            <Mario imagesLoc={"/images/doraemon.png"} charName={"doraemon"} />
        </div>
    );
}

export default Cards;