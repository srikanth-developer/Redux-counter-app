import One from "./Components/One";

import {  Provider } from 'react-redux'
import { createStore } from "redux";
import ReducerStateTransition from "./Components/ReducerStateTransition";
import Two from "./Components/Two";


function App() {
  //create a store
  const store=createStore(ReducerStateTransition)
  return (
    <div className="App">
      <Provider store={store}>
      <One/>
     <Two/>
    </Provider>
    </div>
  );
}

export default (App);
