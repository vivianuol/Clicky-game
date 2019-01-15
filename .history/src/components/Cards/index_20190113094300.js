import React from "react";
import Cartoon from "./cartoon";

function Cards(props) {
    return (
        <div>
            <Cartoon imageLoc="/images/doraemon.png" charName="doraemon" />
            <Cartoon imageLoc="/images/super-mareo.png" charName="Mario" />
            <Cartoon imageLoc="/images/Spongebob-Squarepants.png" charName="Spongebob-Squarepants" />
            <Cartoon imageLoc="/images/super-mareo.png" charName="Mario" />
        </div>
    );
}

export default Cards;