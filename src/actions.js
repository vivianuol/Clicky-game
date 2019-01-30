import C from './constants'

export function clickImage(charName) {
    return {
      type: C.CLICK_IMAGE,
      payload: charName
    }
}