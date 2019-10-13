import React from "react";
import { connect } from "react-redux";
import {StyledCatFact,StyledH5} from "../styles";

export const CatFacts = props => {
  const { realCatFacts } = props;
  return (
    <StyledCatFact>
  {realCatFacts.catfacts.map((fact, index) => <StyledH5 key={index}>Random cat fact: <StyledH5>{fact.fact}</StyledH5> </StyledH5>)}
    </StyledCatFact>
  );
};

export default connect(state => state)(CatFacts);

 