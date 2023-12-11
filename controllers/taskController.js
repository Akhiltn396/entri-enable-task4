let tasks = [
  {
    id: 1,
    name: "Task 1",
    description: "Description for Task 1",
    status: "Incomplete",
  },
  {
    id: 2,
    name: "Task 2",
    description: "Description for Task 2",
    status: "Complete",
  },
];

// Creating the task
const createTask = (req, res) => {
  try {
    const newTask = req.body;
    newTask.id = tasks.length + 1;
    tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    res.status(500).json("error");
  }
};

// Reading all task
const readTask = (req, res) => {
  res.json(tasks);
};

// Read only single task
const readSingle = (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    res.status(404).json({ message: "Task not found" });
  } else {
    res.json(task);
  }
};

// Update a task
const updateTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    res.status(404).json({ message: "Task not found" });
  } else {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
    res.json(tasks[taskIndex]);
  }
};

// Delete a task

const deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  res.json({ message: "Task deleted successfully" });
};
module.exports = { createTask, readTask, readSingle, updateTask, deleteTask };
