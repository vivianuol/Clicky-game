import C from '../constants'
import { combineReducers } from 'redux'

const allChars = (state=["Minions",       
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
                          "MarieCat"], action) => {
        return (action.type === C.CLICK_IMAGE) ?
        shuffle(state):
        state
                          }

const clickedChars = (state=[], action) => {
  switch(action.type) {
    case C.CLICKED_PREVIOUS_IMAGE:
      return []
    case C.CLICK_IMAGE:
      return [...state, action.payload]
    default:
      return state
  }
}

const currentRecord = (state={score: 0, topScore: 0}, action) => {
  switch(action.type) {
    case C.CLICKED_PREVIOUS_IMAGE:
      return state.score > state.topScore ?
        {score: 0, topScore: state.score} :
        { ...state, score: 0 }
    case C.CLICK_IMAGE:
      return { ...state, score: state.score + 1 };
    default:
      return state
  }
}

function shuffle(posts){
  ///shuffle using some algo
  const result = posts.slice();
  let i = result.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
 return result
 }


export default combineReducers({allChars, clickedChars, currentRecord })