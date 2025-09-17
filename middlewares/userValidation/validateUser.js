const runValidation = schema => {
  return (req, res, next) => {
    // 2. Validate the data using schema
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      errors: {
        wrap: {
          label: "",
        },
      },
    });
    console.log("result => ", error);

    if (error) {
      const errorList = error.details.map(err => err.message);
      return res.status(400).json({ msg: "Invalid input", error: errorList });
    }
    next();
  };
};

module.exports = runValidation;
