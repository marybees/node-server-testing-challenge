const express = require("express");

const Dogs = require("dogsModel.js");

const router = express.Router();

router.get("/dogs", (req, res) => {
  Dogs.getAll()
    .then((dogs) => {
      res.json(dogs);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get dogs" });
    });
});

router.get("/dogs/:id", (req, res) => {
  const { id } = req.params;

  Dogs.getById(id)
    .then((dog) => {
      if (dog) {
        res.json(dog);
      } else {
        res.status(404).json({ message: "Could not find dog with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get dog" });
    });
});

router.post("/dogs", (req, res) => {
  const dogData = req.body;

  Projects.add(dogData)
    .then((dog) => {
      res.status(201).json({ added: dog });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to add new dog" });
    });
});

router.put("/dogss/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Dogs.update(id, changes)
    .then((count) => {
      if (count) {
        res.json({ update: count });
      } else {
        res.status(404).json({ message: "Could not find dog with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update dog details" });
    });
});

router.delete("/dogs/:id", (req, res) => {
  const { id } = req.params;

  Dogs.remove(id)
    .then((count) => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json({ message: "Could not find dog with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete dog" });
    });
});

module.exports = router;
