import { combineReducers } from 'redux';
import cakeReducer from './cakes/cakeReducers'
import iceCreamReducer from './iceCreams/iceCreamReducers'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer