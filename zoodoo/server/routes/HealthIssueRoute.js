const express = require("express");
const HealthIssues = require("../models/HealthIssues");

const HealthIssuesRoute = express.Router();

HealthIssuesRoute.post("/add", async (req, res) => {
  const { foodName, healthIssues } = req.body;

  //create a new health issue
  const newHealthIssues = new HealthIssues({
    foodName,
    healthIssues,
  });
  await newHealthIssues.save();
  //response
  res.status(201).json({ message: "issues added" });
});

//get health issues
HealthIssuesRoute.get("/:id", async (req, res) => {
  const foodname = req.query.foodName;
  try {
    const healthIssues = await HealthIssues.find({ foodName: foodname });
    res.status(200).json(buyHistory);
  } catch (error) {
    res.status(400).json({ message: "cannot retrieve data" });
  }
});

module.exports = HealthIssuesRoute;
