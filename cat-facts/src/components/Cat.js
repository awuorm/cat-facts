import React from "react";
import { connect } from "react-redux";
import {StyledCat,StyledCatImg} from "../styles";

import cat_icon from "../imgs/cat_icon.jpg";

export const Cat = props => {
  const { cat } = props;
  return (
    <StyledCat>
        <StyledCatImg alt="image of a cat" src={cat_icon}/>
      <h5>
        The {cat.breed} breed from {cat.country} has {cat.origin} origin with
        {cat.pattern} pattern and {cat.coat} coat.
      </h5>
    </StyledCat>
  );
};

export default connect(state => state)(Cat);
