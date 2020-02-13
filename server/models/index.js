const mongoose = require("mongoose");
const Schema = mongoose.Schema;

newSchema = new Schema({
  title: String,
  body: String
});

module.exports = mongoose.model("Note", newSchema);
