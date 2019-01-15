import React from "react";
import Cartoon from "./cartoon";

function Cards(props) {
    return (
        <div>
            <Cartoon imageLoc="/images/doraemon.png" charName="doraemon" />
            <Mario imageLoc="/images/super-mareo.png" charName="Mario" />
        </div>
    );
}

export default Cards;