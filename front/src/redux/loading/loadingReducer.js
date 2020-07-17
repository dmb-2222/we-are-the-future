import { Type } from "../types";

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case Type.ITEM_DATA_FETCH_START:
    case Type.ITEM_ADD_START:
    case Type.ITEM_DELETE_START:
    case Type.ITEM_UPDATE_START:
      return true;
    case Type.ITEM_DATA_FETCH_SUCCESS:
    case Type.ITEM_DATA_FETCH_ERROR:
    case Type.ITEM_ADD_SUCCESS:
    case Type.ITEM_ADD_ERROR:
    case Type.ITEM_DELETE_SUCCESS:
    case Type.ITEM_DELETE_ERROR:
    case Type.ITEM_UPDATE_SUCCESS:
    case Type.ITEM_UPDATE_ERROR:
      return false;
    default:
      return state;
  }
};
export default loadingReducer;
