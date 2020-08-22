import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";

function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.password)) {
    errors.password = ValidationMessages.password.newPassword;
  } else if (/\s/.test(data.password)) {
    errors.password = ValidationMessages.password.spaceAvoid;
  } else if (
    /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(data.password)
  ) {
    errors.password = ValidationMessages.password.spacialChar;
  }

  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = ValidationMessages.password.repeatNewPassword;
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = ValidationMessages.password.resetSame;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
