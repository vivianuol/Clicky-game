import React from "react";
import Doraemon from "./Doraemon";

function Cards(props) {
    return (
        <div>
            <Doraemon imageLoc="/images/doraemon.png" charName="doraemon" />
            <Doraemon imageLoc="/images/doraemon.png" charName="doraemon" />
        </div>
    );
}

export default Cards;