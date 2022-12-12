const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const group = require("./routes/groups");
const connectDB = require("./db/connectDB");
mongoose.set("strictQuery", false);

app.use(express.static(path.resolve(__dirname, "./frontend/build")));
app.use(express.json());
app.use("/api", group);

const port = process.env.PORT;

const starter = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

starter();
