import * as types from "./actionTypes";

//slices of state;
const initialCat = {
    fetchData: false,
    cats: [],
    fetchError: ""
  };

  export const catReducer = (state= initialCat, action) => {
      switch (action.type) {
          default:
              state;
      }
  }