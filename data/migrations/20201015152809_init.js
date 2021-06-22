exports.up = function (knex) {
  return knex.schema.createTable("dogs", (tbl) => {
    tbl.increments();

    tbl.string("name", 255).notNullable();
    tbl.string("breed", 255).notNullable();
    tbl.string("color", 255).notNullable();
    tbl.float("weight").notNullable();
  });
};

exports.down = function (knex) {
  // undo the operation in up
  return knex.schema.dropTableIfExists("dogs");
};
