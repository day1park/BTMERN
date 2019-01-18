// posts will have comments

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// post model
const Post = require("../../models/Post");
// profile model
const Profile = require("../../models/Profile");

// validation
const validatePostInput = require("../../validation/post");

// @route GET api/posts/test
// @desc tests post route
// @access public
router.get("/test", (req, res) =>
  res.json({
    msg: "posts works"
  })
);

// @route GET api/posts/
// @desc Get posts
// @access public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "no posts found" }));
});

// @route GET api/posts/:id
// @desc Get post by id
// @access public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .sort({ date: -1 })
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: "no post found with that ID" })
    );
});

// @route POST api/posts
// @desc create post
// @access private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // check validation
    if (!isValid) {
      // if any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

// @route DELETE api/posts/:id
// @desc Delete post
// @access private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // check for post owner
          if (post.user.toString() !== req.user.id) {
            return (
              res
                .status(401)
                //401 = unathorized status
                .json({ notauthorized: "user not authorized" })
            );
          }

          // Delete
          post.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res
            .status(404)
            .json({ postnotfound: "can't find that post to delete" })
        );
    });
  }
);

module.exports = router;
