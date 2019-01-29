import C from '../constants'
import { combineReducers } from 'redux'

export const gameState = (state={
                            allChars: ["Minions"
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
                                "MarieCat"], 
                            clickedChars: [], 
                            score: 0,
                            topScore: 0
                            }, action) => {
    (action.type === C.CLICK_IMAGE) ?
        [...state, action.payload] :
        state
}

export default combineReducers({gameState})