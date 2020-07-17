import { Type } from "../types";

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case Type.ITEM_DATA_FETCH_SUCCESS:
      return action.payload;
    case Type.ITEM_ADD_SUCCESS:
      return [...state, action.payload];
    case Type.ITEM_DELETE_SUCCESS:
      return state.filter((item) => item.id !== action.payload);
    case Type.ITEM_UPDATE_SUCCESS:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

    default:
      return state;
  }
};
