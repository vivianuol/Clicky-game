import C from '../constants'
import appReducer from './reducers'
import { clickedPreviousImage } from '../actions'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const detectClickPreviousImage = store => next => action => {
  if (action.type === C.CLICK_IMAGE) {
    if(store.getState().clickedChars.indexOf(action.payload) >= 0) {
      store.dispatch(clickedPreviousImage())
    }
  } 
  return next(action)
}

export default () => {
  return applyMiddleware(logger, detectClickPreviousImage)(createStore)(appReducer)
}
