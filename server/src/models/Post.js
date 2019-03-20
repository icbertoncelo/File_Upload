const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("Post", PostSchema);
