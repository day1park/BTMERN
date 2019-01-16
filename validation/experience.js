const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "job title field is required";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "company field is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "from date field is required";
  }

  return {
    errors,
    // isValid: errors
    //isValid want to check if it is empty has to be a string, errors is an object
    isValid: isEmpty(errors)
  };
};