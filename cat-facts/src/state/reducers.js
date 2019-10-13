import * as types from "./actionTypes";

//slices of state;
const initialCat = {
  fetchData: false,
  cats: [],
  fetchError: ""
};

export const catReducer = (state = initialCat, action) => {
  switch (action.type) {
    case types.FETCH_DATA:
      return { ...state, fetchData: true };
    case types.CAT_DATA:
      return { ...state, cats: action.payload };
    case types.GET_ERROR:
       return {...state, fetchError: action.payload}; 
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
        return { ...state, catfacts: action.payload };
      case types.GET_FACTS_ERROR:
         return {...state, fetchError: action.payload}; 
      default:
        return state;
    }
  };
  
