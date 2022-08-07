const mongoose = require("mongoose");

const { Schema } = mongoose;

const tournamentSchema = new Schema({
  tournamentCode: String,
  tournamentName: String,
});

const Tournament = mongoose.model("Tournament", tournamentSchema);

module.exports = Tournament;
