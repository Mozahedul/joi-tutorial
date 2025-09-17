const express = require("express");
const Joi = require("joi");
const {
  registerUser,
  loginUser,
} = require("../controllers/registerController");
const runValidation = require("../middlewares/userValidation/validateUser");
const schemas = require("../middlewares/userValidation/schema");

const userRouter = express.Router();

userRouter.post(
  "/register",
  runValidation(schemas.registerSchema),
  registerUser
);

userRouter.post("/login", runValidation(schemas.loginSchema), loginUser);

module.exports = userRouter;
