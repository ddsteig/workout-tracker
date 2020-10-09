const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  username: {
    type: String,
    trim: true,
    required: "String is required",
  }

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
