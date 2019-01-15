const Validator = require("validator");
const isEmpty = require("./is-empty");

// only takes in strings, if not submitted which is required, wont come in as empty string it will come as null
//checks if it is null
module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 40 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Handle is required";
  }

  return {
    errors,
    // isValid: errors
    //isValid want to check if it is empty has to be a string, errors is an object
    isValid: isEmpty(errors)
  };
};
