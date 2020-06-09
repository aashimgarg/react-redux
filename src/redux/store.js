import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import logger from 'redux-logger'

// Using the ES6 import syntax

const store = createStore(rootReducer, applyMiddleware( logger ));

// createStore method accepts a reducer function as its parametre.
// For this we have rootReducer so we have passed it as a parametre 

export default store