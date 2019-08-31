import React from "react";
//import Cartoon from "./Cartoon";
import "./style.css";


const Cards = ({ allCards = ["Minions"
    , "Smurfs"
    , "SuperMareo"
    , "Spongebob_Squarepants"
    , "Pikachu"
    , "Sally_Brown"
    , "SpongeBob_Transparent"
    , "MarieCat"
], onClickCard = f => f}) =>

    (

        <div className="cards-layout wrapper">
            {allCards.map((item, i) => (<div className="item" key={i} >
                <div className="image" id={item} onClick={(() => {
                    console.log( item + " onclicked");
                    return onClickCard(item)
                }
                )}></div>
            </div>
            ))
                /*<Cartoon id={item} key={i} onClick= { () => onClickCard(i)} />) */
            }
        </div>

    )

export default Cards;