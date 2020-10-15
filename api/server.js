const express = require("express");

const Dogs = require("../dogs/dogsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "is up and running" });
});

// returns http 200
// returns json
// the body has an api propety and the value is "is up"

server.get("/dogs", (req, res) => {
  Dogs.getAll()
    .then((dogs) => {
      res.status(200).json(dogs);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = server;
