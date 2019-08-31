import { combineReducers } from 'redux';
import * as C from '../actions/types';

// function reducerName (initialState = 0, action) {
//     switch (action.type) {
//         case "":
//             return newstate;
//         default:
//             return state
//     }
// }

function shuffle(posts) {
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

function allCards(cards = [
    "Minions"
    , "Smurfs"
    , "SuperMareo"
    , "Spongebob_Squarepants"
    , "Pikachu"
    , "Sally_Brown"
    , "SpongeBob_Transparent"
    , "MarieCat"], action) {

    let c = shuffle(cards);

    switch (action.type) {
        case C.CLICK_NEW_CARD:
            return cards = [...c]
        case C.CLICK_OLD_CARD:
            return cards = [...c]
        default:
            return cards
    }
}


function clickedCards(clickedChars = [], action) {
    switch (action.type) {
        case C.CLICK_NEW_CARD:
            return clickedChars = [...clickedChars, action.payload];
        case C.CLICK_OLD_CARD:
            return clickedChars = [];
        default:
            return clickedChars
    }
}



function score(score = {score:0, 
                        topScore:0}, action) {
    switch (action.type) {
        case C.CLICK_NEW_CARD:
            if(score.score>=score.topScore){
               return {score: score.score + 1,
                    topScore: score.score + 1}; 
            } else {
                return {score: score.score +1,
                        topScore: score.topScore}
            }
            
        case C.CLICK_OLD_CARD:   
            return {
                score: 0,
                topScore: score.topScore
            };
        default:
            return {
                score: score.score,
                topScore: score.topScore
            }
    }
}


const allReducers = combineReducers({ clickedCards, allCards, score });

export default allReducers;

