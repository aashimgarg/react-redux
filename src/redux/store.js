import { createStore } from 'redux';
import rootReducer from './rootReducer'

// Using the ES6 import syntax

const store = createStore(rootReducer);

// createStore method accepts a reducer function as its parametre.
// For this we have rootReducer so we have passed it as a parametre 

export default store