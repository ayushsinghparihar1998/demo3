import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";

function validateInput(data) {
  let errors = {};
  if (Validator.isEmpty(data.password)) { 
    errors.password = ValidationMessages.password.newPassword;
  } 
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = ValidationMessages.password.confirmNewPassword;
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = ValidationMessages.password.confirmed;
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
