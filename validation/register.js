const Validator = require("validator");
import isEmpty from "./is-empty";

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //name of the registration
  //data.name object of stuff to validate
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "name must be between 2 and 30 characters";
  }
  return {
    errors,
    // isValid: errors
    //isValid want to check if it is empty has to be a string, errors is an object
    isValid: isEmpty(errors)
  };
};
