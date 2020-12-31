import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";

function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = ValidationMessages.email.required;
  } else if (!Validator.isEmail(data.email)) {
    errors.email = ValidationMessages.email.invalid;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = ValidationMessages.password.required;
  }


  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
