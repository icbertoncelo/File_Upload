const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const PostSchema = new Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

PostSchema.pre("save", function() {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`;
  }
});

PostSchema.pre("remove", function() {
  return promisify(
    fs.unlink
  )(path.resolve(__dirname, "..", "..", "temp", "uploads", this.key));
});

module.exports = mongoose.model("Post", PostSchema);
