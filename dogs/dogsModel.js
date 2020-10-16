const db = require("../data/dbConfig");

module.exports = {
  getAll,
  add,
  getById,
  update,
  remove,
};

function getAll() {
  return db("dogs");
}

function getById(id) {
  return db("dogs").where({ id }).first();
}

function add(dog) {
  return db("dogs")
    .insert(dog, "id")
    .then((ids) => {
      const id = ids[0];
      return getById(id);
    });
}

function update(id, changes) {
  return db("dogs").where({ id }).update(changes);
}

function remove(id) {
  return db("dogs").where({ id }).del();
}
