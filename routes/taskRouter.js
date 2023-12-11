const express = require("express");
const {
  createTask,
  readTask,
  readSingle,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.post("/create", createTask);
router.get("/read", readTask);
router.get("/read/:id", readSingle);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);
// router.post("/login",login )

module.exports = router;
