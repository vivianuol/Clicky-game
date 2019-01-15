import React from "react";
import Cartoon from "./Cartoon";
import "./style.css"

class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {[{
            imageLoc: "/images/doraemon.png",
            charName: "doraemon"
        }, {
            imageLoc: "/images/super_mareo.png",
            charName: "super_mareo"
        }, {
            imageLoc: "/images/Spongebob_Squarepants.png",
            charName: "Spongebob_Squarepants"
        }, {
            imageLoc: "/images/SpongeBob_Transparent.png",
            charName: "SpongeBob_Transparent"
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
        ]}
    }

    // var cartoon = [];
    // {for (let i=0; i>this.state.length; i++) {
    //     <Cartoon imageLoc={this.state[i].imageLoc} charName={this.state[i].charName} />
    //     }}

        render() {
            return (
                <div className="cards-layout">
                  {this.state.map((object, i) => <Cartoon imageLoc={object.imageLoc} charName={object.charName} key={i} />)}
                </div>
            )
        }
    }

    export default Cards;