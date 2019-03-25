const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

// Make the node file read the .env file
dotenv.config();

const app = express();

// Database Setup
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "temp", "uploads"))
);

app.use(require("./routes/routes"));

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
