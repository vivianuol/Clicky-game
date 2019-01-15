import React from "react";
import Cartoon from "./Cartoon";

function Cards(props) {
    return (
        <div>
            <Cartoon imageLoc="/images/doraemon.png" charName="doraemon" />
            <Cartoon imageLoc="/images/super-mareo.png" charName="Mario" />
            <Cartoon imageLoc="/images/Spongebob-Squarepants.png" charName="Spongebob-Squarepants" />
            <Cartoon imageLoc="/images/smurfs.png" charName="smurfs" />
            <Cartoon imageLoc="/images/pikachu.png" charName="pikachu" />
            <Cartoon imageLoc="/images/pikachu.png" charName="pikachu" />
            <Cartoon imageLoc="/images/pikachu.png" charName="pikachu" />
            <Cartoon imageLoc="/images/pikachu.png" charName="pikachu" />
        </div>
    );
}

export default Cards;