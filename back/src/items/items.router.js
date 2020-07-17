const { Router } = require("express");
const itemsRouter = Router();

const {
  createItem,
  updateItem,
  deleteItem,
  getItem
} = require("./items.controller");

itemsRouter.get("/", getItem);
itemsRouter.post("/", createItem);
itemsRouter.delete('/:id', deleteItem)
itemsRouter.put('/:id', updateItem)


module.exports = itemsRouter;