import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
// To provide redux store to the app the react redux library exports the component called Provider.

import store from './redux/store'
import CakeContainer from './components/CakeContainer';

// Specifying the store as a prop
// We provide store at the top of the application because it will provide store to every component in the application.

const App = () => {
  return (
    <Provider store={store}>    
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
