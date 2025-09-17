const express = require("express");
const Joi = require("joi");
const userRouter = require("./routes/user.js");

// initialize an express app
const app = express();

// Parse data from request body with an express json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRouter);

// create an express server
app.listen("5000", () => {
  console.log("Server running on port 5000");
});
