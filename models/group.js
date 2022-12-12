const mongoose = require("mongoose");

const group = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 10,
  },
  imageURL: {
    type: String,
    match: [
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/,
      "Invalid URL",
    ],
    unique: true,
  },
  count: {
    type: Number,
  },
});

module.exports = mongoose.model("Group", group);
