const Validator = require("validator");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //name of the registration
  //data.name object of stuff to validate
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "name must be between 2 and 30 characters";
  }
  return {
    errors,
    isValid: errors
  };
};
