// app.js

const express = require('express');
const app = express();

// In-memory storage for tasks
let tasks = ['Sample Task 1', 'Sample Task 2'];

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to display tasks
app.get('/', (req, res) => {
  res.json({ tasks: tasks });
});

// Route to add a new task
app.post('/add-task', (req, res) => {
  const task = req.body.task;
  if (task && task.trim()) {
    tasks.push(task);
    res.json({ message: 'Task added successfully', tasks: tasks }); // using res.json for consistency
  } else {
    res.status(400).json({ message: 'Invalid task' }); // using res.json for consistency
  }
});

// Instead of calling app.listen here, export the app
module.exports = app;
