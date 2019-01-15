import React from "react";
import Doraemon from "./Doraemon";

function Cards(props) {
    return (
        <div>
            <Doraemon imageLoc="/images/doraemon.png" charName="doraemon" />
            <Mario imageLoc="/images/super-mareo.png" charName="Mario" />
        </div>
    );
}

export default Cards;