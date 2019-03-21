const express = require("express");
const routes = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer");

// Load Post Model

const Post = require("../models/Post");

// @route   POST /posts
// @desc    Post Image
// @access  Public
routes.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
  const { originalname: name, size, key } = req.file;

  const post = await Post.create({
    name,
    size,
    key,
    url: ""
  });

  return res.json(post);
});

// @route   GET /posts
// @desc    List all Posts
// @access  Public
routes.get("/posts", async (req, res) => {
  const posts = await Post.find();

  return res.json(posts);
});

// @route   DELETE /posts/:id
// @desc    Delete Post by Id
// @access  Public
routes.delete("/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);

  await post.remove();

  return res.send();
});

module.exports = routes;
