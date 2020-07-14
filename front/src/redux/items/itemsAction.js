import { Type } from "../types";

export const addItems = (item) => ({
    type: Type.ITEMS_ADD,
    payload: item,
  });