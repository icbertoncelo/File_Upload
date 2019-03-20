const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

// The goal is to do the uploads of the files
module.exports = {
  dest: path.resolve(__dirname, "..", "..", "temp", "uploads"),
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "..", "temp", "uploads"));
    },
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) {
          callback(err);
        }

        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        callback(null, fileName);
      });
    }
  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req, file, callback) => {
    const allouwedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif"
    ];

    if (allouwedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Invalid File Type"));
    }
  }
};