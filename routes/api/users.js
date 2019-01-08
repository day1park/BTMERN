// authentication username email password etc
const express = require("express");
const router = express.Router();
//gravat library
const gravatar = require("gravatar");

// Load User model
const User = require("../../models/User");

// @route GET api/users/test
// @desc tests users route
// @access public
router.get("/test", (req, res) =>
  res.json({
    msg: "users works"
  })
);

// @route GET api/users/register
// @desc register a user
// @access public
router.post("/register", (req, res) => {
  // use mongoose to find if email exists/ findOne is looking for a record access through req.body and then email // something with body-parser middleware
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({ email: "email already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", //rating
        d: "mm" // default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
    }
  });
});

module.exports = router;
