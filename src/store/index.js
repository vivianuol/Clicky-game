import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

export default () => {
  return applyMiddleware(logger)(createStore)(appReducer)
}
