import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";
import { catData, catFactsData } from "../src/state/actionCreators";
import CatList from "./components/CatList";
import  CatFacts  from "./components/CatFacts";

export function App(props) {
  const { catFacts, catFactsData, catData } = props;
  useEffect(() => {
    catData();
    catFactsData();
  }, [catFacts.cats]);
  return (
    <div className="App">
      <CatFacts/>
      <CatList />
    </div>
  );
}

export default connect(
  state => state,
  { catData, catFactsData }
)(App);
