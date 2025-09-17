const Joi = require("joi");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, dob, age, languages } = req.body;
    const user = { name, email, password, dob, age, languages };

    res.status(201).send({ msg: "user created", data: user });
  } catch (error) {
    return res.send({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    res.status(200).send({ msg: "user loggedin" });
  } catch (error) {
    return res.send({ message: error.message });
  }
};

module.exports = { registerUser, loginUser };
