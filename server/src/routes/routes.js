const express = require("express");
const routes = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer");

// Load Post Model

const Post = require("../models/Post");

// @route   POST /posts
// @desc    Create Image Data
// @access  Public
routes.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
  const { originalname: name, size, filename: key } = req.file;

  const post = await Post.create({
    name,
    size,
    key,
    url: ""
  });

  return res.json(post);
});

module.exports = routes;
