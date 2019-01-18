const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post must be between 10 and 300 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "The text is required";
  }

  return {
    errors,
    // isValid: errors
    //isValid want to check if it is empty has to be a string, errors is an object
    isValid: isEmpty(errors)
  };
};
