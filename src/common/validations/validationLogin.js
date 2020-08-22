import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";

function validateInput(data) {
  let errors = {};
  console.log("data", data);

  if (Validator.isEmpty(data.email)) {
    errors.email = ValidationMessages.email.required;
  } else if (!Validator.isEmail(data.email)) {
    errors.email = ValidationMessages.email.invalid;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = ValidationMessages.password.required;
  }


  // else if (/\s/.test(data.password)) {
  //   errors.password = ValidationMessages.password.spaceAvoid;
  // } else if (/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(data.password)) {
  //   errors.password = ValidationMessages.password.spacialChar;
  // }

  console.log(errors);

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
