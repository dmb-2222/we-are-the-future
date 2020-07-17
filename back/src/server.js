const express = require("express");
const { port } = require("../config");
const sequelize = require('./bd')
const itemsRouter = require("./items/items.router");

module.exports = class Server {
  constructor() {
    this.server = null;
  }
  async start() {
    this.initServer();
    this.initMiddlewares();
    this.initRoutes();
    await this.initDatabase();
    this.startListening();
  }
  initServer() {
    this.server = express();
  }
  initMiddlewares() {
    this.server
      .use(express.json())
      // .use(express.urlencoded())
      .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        next();
      })
      .use((err, req, res, next) => {
        console.log(req.body);
        delete err.stack;
        next(err);
      })
      .options("*", (req, res) => {
        // allowed XHR methods
        res.header(
          "Access-Control-Allow-Methods",
          "GET, PATCH, PUT, POST, DELETE, OPTIONS"
        );
        res.send();
      });
  }

  initRoutes() {
    this.server.use("/items", itemsRouter);
  }
  async initDatabase() {
    await sequelize
    .authenticate() // connect to DB & authenticate DB user
    .then(() => console.log("Connection to DB was established"))
    .catch((err) => console.log("Error during connection to DB", err));
  }
  startListening() {
    this.server.listen(port, () => {
      console.log("Start server port", port);
    });
  }
};
