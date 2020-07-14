import { Type } from "../types";

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case Type.ITEMS_ADD:
      return [...state, action.payload];
    default:
      return state;
  }
};