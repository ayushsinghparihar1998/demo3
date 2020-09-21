import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
import ValidateRegex from "../helpers/ValidateRegex";

function validateInput(data) {
  console.log(data);
  let errors = {};
  console.log("datadatadatadata", data)
  if (Validator.isEmpty(data.email)) {
    errors.email = ValidationMessages.email.required;
  } else if (!Validator.isEmail(data.email)) {
    errors.email = ValidationMessages.email.invalid;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = ValidationMessages.password.required;
  }
  

  if (Validator.isEmpty(data.screenName)) {
    errors.screenName = ValidationMessages.screenName.required;
  }

  if (!data.u_school_code) {
    errors.u_school_code = ValidationMessages.required;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
