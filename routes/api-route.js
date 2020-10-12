const Workout = require("../models/Workout");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  

};
