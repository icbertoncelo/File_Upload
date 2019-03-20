const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

// Database Setup
mongoose.connect("mongodb://localhost:27017/upload", {
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(require("./routes/routes"));

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
