exports.seed = function (knex) {
  return knex("dogs")
    .truncate()
    .then(function () {
      return knex("hobbits").insert([
        { name: "Tubby", breed: "Goldendoodle", color: "blonde", weight: 17.4 },
        { name: "Willie", breed: "Boxer Mix", color: "brown", weight: 75 },
        {
          name: "Abbie",
          breed: "Pitbull Husky Mix",
          color: "tan and white",
          weight: 60,
        },
        { name: "Einstein", breed: "Terrier", color: "white", weight: 15 },
      ]);
    });
};
