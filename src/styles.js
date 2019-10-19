import styled from "styled-components";

export const StyledCat = styled.div`
  background-color: #d5b256;
  display: flex;
  margin: 1em;
  padding: 2em;
  width: 80vw;
  margin-left: 10vw;
  border-radius: 10em;
`;

export const StyledSpinnerDiv = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: #01233F;
`;

export const StyledSpinnerImg = styled.img`
  margin-top: 35vh;
  padding: 1px;
  margin-right: 5px;
  margin-left: 5px;
  animation: roll 3s infinite;
  transform: rotate(30deg);
  /* opacity: 0.7; */
  @keyframes roll {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;



export const StyledCatImg = styled.img`
  border-radius: 10em;
  margin-top: 1em;
  width: 10vw;
  height: 10vh;
`;

export const StyledApp = styled.div`
  background-color: black;
`;

export const StyledCatFact = styled.div`
  background-color: #f8f800;
  padding: 25px;
  border-radius: 10px;
  width: 80vw;
  margin-left: 10vw;
`;

export const StyledH5 = styled.div`
  margin: 0;
`;
