import C from './constants'

export function clickImage(charName) {
    return {
      type: C.CLICK_IMAGE,
      payload: charName
    }
}

export function clickedPreviousImage() {
  return {
    type: C.CLICKED_PREVIOUS_IMAGE
  }
}