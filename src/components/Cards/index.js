import React from "react";
import Cartoon from "./Cartoon";
import "./style.css";

import Minions from "../../../images/Minions.png";
import Doraemon from "../../../images/Doraemon.png";
import SuperMareo from "../../../images/super_mareo.png";
import Spongebob_Squarepants from "../../../images/Spongebob_Squarepants.png";
import SpongeBob_Transparent from "../../../images/SpongeBob_Transparent.png";
import Pikachu from "../../../images/pikachu.png";
import Sally_Brown from "../../../images/Sally_Brown.png";
import MarieCat from "../../../images/MarieCat.png";


class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {arr: [{
            imageLoc: Minions,
            charName: "Minions"
        }, {
            imageLoc: Doraemon,
            charName: "Doraemon"
        }, {
            imageLoc: SuperMareo,
            charName: "SuperMareo"
        }, {
            imageLoc: Spongebob_Squarepants,
            charName: "Spongebob_Squarepants"
        }, {
            imageLoc: Pikachu,
            charName: "Pikachu"
        }, {
            imageLoc: Sally_Brown,
            charName: "Sally_Brown"
        }, {
            imageLoc: SpongeBob_Transparent,
            charName: "SpongeBob_Transparent"
        }, {
            imageLoc: MarieCat,
            charName: "MarieCat"
        }],
        clickedChars:[]
        }
    }

    shuffle(posts){
        ///shuffle using some algo
        let i = posts.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = posts[i];
          posts[i] = posts[j];
          posts[j] = temp;
        }
       return posts
       }

    handleOnClick = e => {
        console.log(e.target.alt + ", onclick!");
        console.log("clickedCharsAmount: " +this.state.clickedChars.length);
        console.log("clickedChars: " + this.state.clickedChars);
        console.log("indexOf: " + this.state.clickedChars.indexOf(e.target.alt));
        if(this.state.clickedChars.length > 0 && this.state.clickedChars.indexOf(e.target.alt) >= 0) {
           this.resetClickedChars()
           console.log("existing img clicked.")
        } else {
            let newArr = this.shuffle(this.state.arr);
            this.setState({
                arr: newArr, 
                clickedChars: [...this.state.clickedChars, e.target.alt]
            })
            console.log("new img clicked.")

        }
        this.props.callbackFromParent(this.state.clickedChars.length);
    }

    resetClickedChars () {
        this.setState({
            arr: this.shuffle(this.state.arr),
            clickedChars: []
        })
    }

        render() {
            return (
                <div className="cards-layout wrapper">
                  {this.state.arr.map((item, i) => <Cartoon imageLoc={item.imageLoc} charName={item.charName} key={i} handleClick={this.handleOnClick} />)}
                </div>
            )
        }
    }

    export default Cards;