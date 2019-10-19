import React from "react";
import {StyledSpinnerDiv, StyledSpinnerImg} from "../styles";
import corp_logo from "../imgs/corp_logo.png";


const SpinnerTemplate = () => {

    return (
        <StyledSpinnerDiv>
            <StyledSpinnerImg alt="corporate logo" src={corp_logo}/>

        </StyledSpinnerDiv>
    )

};

export default SpinnerTemplate;

