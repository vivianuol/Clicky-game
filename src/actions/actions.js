import * as C from '../actions/types';


export function clickNewCard(id) {
    return {
        type: C.CLICK_NEW_CARD,
        payload: id
    }
}

export function clickOldCard() {
    return {
        type: C.CLICK_OLD_CARD
    }
}


export const clickCard = (item) => (dispatch, getState) => {

    const currentClickedCards = getState().clickedCards;

    console.log("++++++" + getState().score);
    console.log("++++" + getState().topScore);
    if (currentClickedCards.indexOf(item) >= 0) {
        dispatch(
            clickOldCard()
        )
    }

    else if (currentClickedCards.indexOf(item) < 0) {
            dispatch(
                clickNewCard(item)

            )
        
    }


}

