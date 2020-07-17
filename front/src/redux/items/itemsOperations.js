import axios from "axios";

import {
  itemDataFetchStart,
  itemDataFetchSuccess,
  itemDataFetchError,
  itemAddStart,
  itemAddSuccess,
  itemAddError,
  itemDeleteStart,
  itemDeleteSuccess,
  itemDeleteError,
  itemUpdateStart,
  itemUpdateSuccess,
  itemUpdateError,
} from "./itemsActions";
// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.get["Content-Type"] = "application/json";
// axios.defaults.headers.put["Content-Type"] = "application/json";
// axios.defaults.headers.delete["Content-Type"] = "application/json";
// axios.defaults.headers.delete["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.proxy = "http://localhost:8080";
const baseURL = "http://localhost:8080/";

export const getItem = () => (dispatch) => {
  dispatch(itemDataFetchStart());
  axios
    .get(`${baseURL}items`)
    .then((item) => {
      dispatch(itemDataFetchSuccess(item.data));
    })
    .catch((error) => itemDataFetchError(error));
};

// add item

export const addItem = (submittedData) => (dispatch) => {
  dispatch(itemAddStart());
  let { price, image, title, description } = submittedData;
  const reqData = {
    price,
    image,
    title,
    description,
  };
  axios
    .post(`${baseURL}items`, reqData)
    .then((item) => {
      dispatch(itemAddSuccess(item.data));
    })
    .catch((error) => {
      dispatch(itemAddError(error));
    });
};

export const deleteItem = (id) => (dispatch) => {
  dispatch(itemDeleteStart());

  axios
    .delete(`${baseURL}items/${id}`)
    .then(() => {
      dispatch(itemDeleteSuccess(id));
    })
    .catch((error) => {
      dispatch(itemDeleteError(error));
    });
};

export const updateItem = (submittedData) => (dispatch) => {
  dispatch(itemUpdateStart());
  let { price, image, title, description, id } = submittedData;
  const reqData = {
    price,
    image,
    title,
    description,
  };
  axios
    .put(`${baseURL}items/${id}`, reqData)
    .then(() => {
      dispatch(itemUpdateSuccess(submittedData));
    })
    .catch((error) => {
      dispatch(itemUpdateError(error));
    });
};
