const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const taskRoute = require("./routes/taskRouter");

// Middlewares

app.use("/api/task", taskRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server started at port number ${process.env.PORT}`);
});
