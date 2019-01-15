import React from "react";
import Cartoon from "./Cartoon";
import "./style.css"


class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {arr: [{
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
        }]
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

    handleOnClick (e) {
        e.preventDefault();
        this.shuffle(this.state.arr);
        this.setState()
    }

        render() {
            return (
                <div className="cards-layout">
                  {this.state.arr.map((object, i) => <Cartoon imageLoc={object.imageLoc} charName={object.charName} key={i} onClick={} />)}
                </div>
            )
        }
    }

    export default Cards;