import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";

function validateInput(data) {
  console.log(data);
  let errors = {};

  if (Validator.isEmpty(data.title)) {
    errors.title = ValidationMessages.title.required;
  }

  if (Validator.isEmpty(data.desc)) {
    errors.desc = ValidationMessages.desc.required;
  }

  if (Validator.isEmpty(data.writtenby)) {
    errors.writtenby = ValidationMessages.writtenby.required;
  }
  if (Validator.isEmpty(data.image)) {
    errors.image = ValidationMessages.image.required;
  }
  if (data.cat.length == 0) {
    errors.cat = ValidationMessages.cat.required;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
