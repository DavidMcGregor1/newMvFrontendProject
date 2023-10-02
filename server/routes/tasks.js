const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.post("/tasks", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating task" });
  }
});

router.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching tasks" });
  }
});

module.exports = router;
