import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";
import { catData, catFactsData } from "../src/state/actionCreators";
import CatList from "./components/CatList";
import CatFacts from "./components/CatFacts";
import { StyledApp } from "./styles";
import Spinner from "./components/Spinner";

export function App(props) {
  const { catFacts, catFactsData, catData } = props;
  useEffect(() => {
    catData();
    catFactsData();
  }, [catFactsData, catData]);
  return catFacts.cats.length === 0 ? (
    <Spinner />
  ) : (
    <StyledApp>
      <CatFacts />
      <CatList />
    </StyledApp>
  );
}

export default connect(
  state => state,
  { catData, catFactsData }
)(App);
