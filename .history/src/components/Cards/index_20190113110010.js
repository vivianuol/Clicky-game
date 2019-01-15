import React from "react";
import Cartoon from "./Cartoon";
import "./style.css"

class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = [{
            imageLoc: "/images/doraemon.png",
            charName: "doraemon"
        }, {
            imageLoc: "/images/super-mareo.png",
            charName: "super-mareo"
        }, {
            imageLoc: "/images/Spongebob_Squarepants.png",
            charName: "Spongebob_Squarepants"
        }, {
            imageLoc: "/images/smurfs.png",
            charName: "smurfs"
        }, {
            imageLoc: "/images/pikachu.png",
            charName: "pikachu"
        }, {
            imageLoc: "/images/Sally_Brown.png",
            charName: "Sally_Brown"
        }, {
            imageLoc: "/images/Minions.png",
            charName: "Minions"
        }, {
            imageLoc: "/images/MarieCat.png",
            charName: "MarieCat"
        }
        ]
    }

        render() {
            return (
                <div className="cards-layout">
                    <Cartoon imageLoc="/images/doraemon.png" charName="doraemon" />
                    <Cartoon imageLoc="/images/super-mareo.png" charName="Mario" />
                    <Cartoon imageLoc="/images/Spongebob-Squarepants.png" charName="Spongebob-Squarepants" />
                    <Cartoon imageLoc="/images/smurfs.png" charName="smurfs" />
                    <Cartoon imageLoc="/images/pikachu.png" charName="pikachu" />
                    <Cartoon imageLoc="/images/Sally_Brown.png" charName="Sally_Brown" />
                    <Cartoon imageLoc="/images/Minions.png" charName="Minions" />
                    <Cartoon imageLoc="/images/MarieCat.png" charName="MarieCat" />
                </div>
            )
        }
    }

    export default Cards;