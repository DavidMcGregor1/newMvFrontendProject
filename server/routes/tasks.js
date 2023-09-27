// backend/routes/tasks.js

const express = require("express");
const router = express.Router();
const Task = require("../models/task"); // Import the Task Model

// Create a new task
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

// Get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching tasks" });
  }
});

// ... Define other API endpoints related to tasks ...

module.exports = router;
