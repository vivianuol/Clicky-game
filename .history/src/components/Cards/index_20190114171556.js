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
        console.log("clickedChars: " + this.state.clickedChars);
        if(this.state.clickedChars.length > 0 && this.state.clickedChars.indexOf(e.target.alt) > 0) {
           // resetClickedChars()
        } else {
            let newPosts = this.shuffle(this.state.arr);
            this.setState({
                arr: newPosts, 
                clickedChars: [...this.state.clickedChars, e.target.alt]
            })
        }
    }

        render() {
            return (
                <div className="cards-layout">
                  {this.state.arr.map((item, i) => <Cartoon imageLoc={item.imageLoc} charName={item.charName} key={i} handleClick={this.handleOnClick} />)}
                </div>
            )
        }
    }

    export default Cards;