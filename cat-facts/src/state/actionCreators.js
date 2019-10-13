import * as types from "./actionTypes";
import axios from "axios";

export const fetchData = () => {
  return { type: types.FETCH_DATA };
};

export const getError = err => {
  return { type: types.GET_ERROR, payload: err };
};

export const catData = () => dispatch => {
  dispatch(fetchData());
  axios
    .get("https://cors-anywhere.herokuapp.com/https://catfact.ninja/breeds")
    .then(res => {
      console.log("response from server", res.data.data);
      dispatch({ type: types.CAT_DATA, payload: res.data.data });
    })
    .catch(err => {
      console.log("response from server", err.message);
      dispatch(getError(err.message));
    });
};

export const fetchFacts = () => {
  return { type: types.FETCH_FACTS };
};

export const getFactsError = err => {
  return { type: types.GET_FACTS_ERROR, payload: err };
};

export const catFactsData = () => dispatch => {
  dispatch(fetchFacts());
  axios
    .get("https://cors-anywhere.herokuapp.com/https://catfact.ninja/facts")
    .then(res => {
      console.log("response from  catfacts server", res.data.data);
      dispatch({ type: types.CAT_FACTS, payload: res.data.data });
    })
    .catch(err => {
      console.log("error  from catFacts server", err.message);
      dispatch(getFactsError(err.message));
    });
};
