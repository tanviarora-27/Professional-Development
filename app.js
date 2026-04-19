const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

// CREATE TASK
app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).send(task);
});

// GET ALL TASKS
app.get('/tasks', (req, res) => {
  res.status(200).send(tasks);
});

// UPDATE TASK
app.put('/tasks/:id', (req, res) => {
  const id = req.params.id;

  if (!tasks[id]) {
    return res.status(404).send("Task not found");
  }

  tasks[id] = req.body;
  res.send(tasks[id]);
});

// DELETE TASK
app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;

  if (!tasks[id]) {
    return res.status(404).send("Task not found");
  }

  tasks.splice(id, 1);
  res.send("Task deleted");
});

// HEALTH CHECK (important for monitoring stage)
app.get('/health', (req, res) => {
  res.status(200).send("OK");
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

module.exports = app;