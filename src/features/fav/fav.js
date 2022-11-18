import { createSlice } from "@reduxjs/toolkit";

import Data from "../../PetsApi";

const initialState = {
  pets: Data,
  favItems: [],
  totalFavItems:0,
};

const favSlice = createSlice({
  name: "fav",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const finder = state.favItems.find((item)=>item.id === action.payload.id)?true:false;
      state.favItems = finder?[...state.favItems]:[...state.favItems,action.payload];
      const adder = state.totalFavItems ++; 
      const doNothing = state.totalFavItems + 0;  
       
      state.totalFavItems = finder?adder:doNothing; 
    },
    removeFromCart:(state,action)=>{
      state.favItems = state.favItems.filter((item)=>item.id !== action.payload);
      state.totalFavItems --;
    },
    
    
  },
});

export const { addToCart , removeFromCart } = favSlice.actions;

export default favSlice.reducer;
