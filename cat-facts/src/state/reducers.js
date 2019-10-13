import * as types from "./actionTypes";

//slices of state;
const initialCat = {
  fetchData: true,
  cats: [],
  fetchError: ""
};

export const catReducer = (state = initialCat, action) => {
  switch (action.type) {
    case types.FETCH_DATA:
      return { ...state, fetchData: true };
    case types.CAT_DATA:
      return { ...state, fetchData: false, cats: action.payload };
    case types.GET_ERROR:
      return { ...state, fetchData: false, fetchError: action.payload };
    default:
      return state;
  }
};

//slices of state;
const initialCatFact = {
  fetchData: false,
  catfacts: [],
  fetchError: ""
};

export const catFactReducer = (state = initialCatFact, action) => {
  switch (action.type) {
    case types.FETCH_FACTS:
      return { ...state, fetchData: true };
    case types.CAT_FACTS:
      return { ...state, fetchData: false, catfacts: action.payload };
    case types.GET_FACTS_ERROR:
      return { ...state, fetchData: false, fetchError: action.payload };
    default:
      return state;
  }
};
