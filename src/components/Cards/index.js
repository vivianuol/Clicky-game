import React from "react";
import Cartoon from "./Cartoon";
import "./style.css";


class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        arr: [
             "Minions"
        ,       
             "Smurfs"
        , 
             "SuperMareo"
        ,
             "Spongebob_Squarepants"
        , 
            "Pikachu"
        , 
             "Sally_Brown"
        , 
             "SpongeBob_Transparent"
        ,           
            "MarieCat"
        ],

        clickedChars:[],
        updatedScore:0
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
        const id = e.target.id;
        console.log(id + ", onclick!");
        console.log("clickedCharsAmount: " +this.state.clickedChars.length);
        console.log("clickedChars: " + this.state.clickedChars);
        console.log("indexOf: " + this.state.clickedChars.indexOf(id));
        const clickedLength = this.state.clickedChars.length;
        if(clickedLength > 0 && this.state.clickedChars.indexOf(id) >= 0) {
           this.resetClickedChars()
           console.log("existing img clicked.")
           this.props.callbackFromParent(clickedLength);
        } else {
            let newArr = this.shuffle(this.state.arr);
            this.setState({
                arr: newArr, 
                clickedChars: [...this.state.clickedChars, id]
            })
            console.log("new img clicked.")
            console.log(clickedLength+1);
            this.props.callbackFromParent(clickedLength+1);
        }
        
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
                  {this.state.arr.map((item, i) => <Cartoon id={item} key={i} handleClick={this.handleOnClick} />)}
                </div>
            )
        }
    }

    export default Cards;