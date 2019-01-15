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
                    <Cartoon imageLoc={this.props.imageLoc} charName={this.props.charName} />
                   
                </div>
            )
        }
    }

    export default Cards;