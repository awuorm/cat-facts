import React from "react";
import { connect } from "react-redux";
import {StyledCat,StyledCatImg} from "../styles";

export const CatFacts = props => {
  const { realCatFacts } = props;
  return (
    <div>
        {realCatFacts.catfacts.map((fact, index) => <h5 key={index}>{fact.fact}</h5>)}
    </div>
  );
};

export default connect(state => state)(CatFacts);

 