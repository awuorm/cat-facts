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
        console.log("response from server", res);
      dispatch({ type: types.CAT_DATA, payload: res.data });
    })
    .catch(err => {
        console.log("response from server",err.message);
      dispatch(getError(err.message));
    });
};