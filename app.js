const mongoose = require("mongoose");
const express = require("express");
const categoryRoutes = require("./routes/categoryRoutes");
const studentRoutes = require("./routes/studentRoutes");
const app = express();
app.use(express.json());
app.use("/api/categories", categoryRoutes);
app.use("/api/students", studentRoutes);

mongoose
  .connect("mongodb://localhost:27017/educationPlatform")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(3000, () => console.log("Listening on port 3000..."));
