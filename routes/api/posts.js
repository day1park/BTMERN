// posts will have comments

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// @route GET api/posts/test
// @desc tests post route
// @access public
router.get("/test", (req, res) =>
  res.json({
    msg: "posts works"
  })
);

// @route POST api/posts
// @desc create post
// @access private

module.exports = router;
