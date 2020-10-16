const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const dogsRouter = require("../dogs/dogsRouter");
const authRouter = require("../auth/authRouter");
const usersRouter = require("../users/usersRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api", dogsRouter);
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

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
