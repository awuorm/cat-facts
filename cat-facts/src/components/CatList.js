import React from "react";
import { connect } from "react-redux";
import Cat from "./Cat";

export const CatList = props => {
  const { catFacts, realCatFacts } = props;
  return (
    <div>
      {catFacts.cats.map((cat, index) => (
        <Cat key={index} cat={cat} />
      ))}
    </div>
  );
};

export default connect(state => state)(CatList);
