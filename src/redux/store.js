import { createStore } from 'redux';
import cakeReducer from './cakes/cakeReducers'

// Using the ES6 import syntax

const store = createStore(cakeReducer);

// createStore method accepts a reducer function as its parametre.
// For this we have cakeReducer so we have passed it as a parametre 

export default store