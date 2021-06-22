const router = require("express").Router();

const Users = require("../users/usersModel");
const restricted = require("../auth/restrictedMiddleware");

router.get("/", restricted, checkRole("dog trainer"), (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err));
});

function checkRole(department) {
  return function (req, res, next) {
    if (req.jwt.department === department) {
      next();
    } else {
      res.status(403).json({ message: "you have no access" });
    }
  };
}

module.exports = router;
