const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  isValid,
};

function find() {
  return db("users").select("id", "username").orderBy("id");
}

function findBy(filter) {
  return db("users as u")
    .join("departments as d", "u.department", "d.id")
    .where(filter)
    .select("u.id", "u.username", "u.password", "d.name as department")
    .orderBy("u.id");
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}

function findById(id) {
  return db("users").where({ id }).first();
}

function isValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  );
}
