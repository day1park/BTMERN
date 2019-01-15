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

  if (Validator.isEmpty(data.status)) {
    errors.status = "status field must be filled out";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "skills field is required";
  }

  // check if its not empty, if it is not empty it will check if it is a valid url
  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "not a vaild URL";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "not a vaild URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "not a vaild URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "not a vaild URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "not a vaild URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "not a vaild URL";
    }
  }

  return {
    errors,
    // isValid: errors
    //isValid want to check if it is empty has to be a string, errors is an object
    isValid: isEmpty(errors)
  };
};
