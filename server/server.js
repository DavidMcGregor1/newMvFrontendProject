const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/task");
var cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/firstDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/api", require("./routes/tasks"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
