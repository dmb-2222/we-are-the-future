import { Type } from "../types";

export const itemDataFetchStart = () => ({
  type: Type.ITEM_DATA_FETCH_START,
});
export const itemDataFetchSuccess = (item) => ({
  type: Type.ITEM_DATA_FETCH_SUCCESS,
  payload: item,
});
export const itemDataFetchError = (error) => ({
  type: Type.ITEM_DATA_FETCH_ERROR,
  payload: { error },
});

// add ITEM
export const itemAddStart = () => ({
  type: Type.ITEM_ADD_START,
});
export const itemAddSuccess = (response) => ({
  type: Type.ITEM_ADD_SUCCESS,
  payload: response,
});
export const itemAddError = (error) => ({
  type: Type.ITEM_ADD_ERROR,
  payload: { error },
});
// delete Item
export const itemDeleteStart = () => ({
  type: Type.ITEM_DELETE_START,
});
export const itemDeleteSuccess = (id) => ({
  type: Type.ITEM_DELETE_SUCCESS,
  payload: id,
});
export const itemDeleteError = (error) => ({
  type: Type.ITEM_DELETE_ERROR,
  payload: { error },
});


// update Item
export const itemUpdateStart = () => ({
  type: Type.ITEM_UPDATE_START,
});
export const itemUpdateSuccess = (item) => ({
  type: Type.ITEM_UPDATE_SUCCESS,
  payload: item,
});
export const itemUpdateError = (error) => ({
  type: Type.ITEM_UPDATE_ERROR,
  payload: { error },
});