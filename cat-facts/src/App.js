import React from 'react';
import {connect} from "react-redux";

import './App.css';
import * as actionCreators from "../src/state/actionCreators";

export function App(props) {
  console.log("props from App", App);
  return (
    <div className="App">
     Hello from App!
    </div>
  );
};

export default connect(state => state,actionCreators.catData)(App);
