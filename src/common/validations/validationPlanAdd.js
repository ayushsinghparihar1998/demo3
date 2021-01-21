import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
import ValidateRegex from "../helpers/ValidateRegex";

function validateInput(data) {
  console.log(data);
  let errors = {};
  console.log("datadatadatadata", data);
  if (Validator.isEmpty(data.pl_save)) {
    errors.pl_save = ValidationMessages.pl_save.required;
  }
  if (Validator.isEmpty(data.pl_desc_details)) {
    errors.pl_desc_details = ValidationMessages.pl_desc_details.required;
  }
  if (Validator.isEmpty(data.pl_price)) {
    errors.pl_price = ValidationMessages.pl_price.required;
  }
  if (Validator.isEmpty(data.pl_title)) {
    errors.pl_title = ValidationMessages.pl_title.required;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
