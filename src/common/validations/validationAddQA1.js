import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
import ValidateRegex from "../helpers/ValidateRegex";

function validateInput(data) {
  console.log(data);
  let errors = {};

  //   as_title: "",
  //   as_type: "",
  //   as_total_marks: "",
  //   as_test_price: "",
  //   as_cat_name: [],
  if (Validator.isEmpty(data.as_title) || data.as_title.trim() === "") {
    errors.as_title = ValidationMessages.as_title.required;
  }
  if (Validator.isEmpty(data.as_type) || data.as_type.trim() === "") {
    errors.as_type = ValidationMessages.as_type.required;
  }
  if (Validator.isEmpty(data.as_total_marks)) {
    errors.as_total_marks = ValidationMessages.as_total_marks.required;
  }
  if (
    Validator.isEmpty(data.as_test_price.toString()) ||
    +data.as_test_price == 0
  ) {
    if (+data.as_type == 1) {
      errors.as_test_price = ValidationMessages.as_test_price.required;
    }
  }
  if (data.as_cat_name.length == 0) {
    errors.as_cat_name = ValidationMessages.as_cat_name.required;
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
