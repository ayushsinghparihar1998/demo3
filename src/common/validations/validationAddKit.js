import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
import ValidateRegex from "../helpers/ValidateRegex";

function validateInput(data) {
  console.log(data);
  let errors = {};

  if (Validator.isEmpty(data.kt_name) || data.kt_name.trim() === "") {
    errors.kt_name = ValidationMessages.firstName.required;
  } else if (!Validator.matches(data.kt_name, ValidateRegex.alphaOnly)) {
    errors.kt_name = ValidationMessages.firstName.alphaOnly;
  }
  if (Validator.isEmpty(data.kt_desc) || data.kt_desc.trim() === "") {
    errors.kt_desc = ValidationMessages.lastName.required;
  }
  if (Validator.isEmpty(data.kt_image_url)) {
    errors.kt_image_url = ValidationMessages.kt_image_url.required;
  }
  // if (Validator.isEmpty(data.kt_price) || data.kt_price.trim() === "") {
  //   errors.kt_price = ValidationMessages.phoneNumber.invalid;
  // }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
