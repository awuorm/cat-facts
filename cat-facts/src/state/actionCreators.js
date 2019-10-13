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
    .get("https://catfact.ninja/breeds?limit=1")
    .then(res => {
      dispatch({ type: types.CAT_DATA, payload: res.data });
    })
    .catch(err => {
      dispatch(getError(err.message));
    });
};