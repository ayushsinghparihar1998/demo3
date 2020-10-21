import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
import ValidateRegex from "../helpers/ValidateRegex";

function validateInput(data) {
  let errors = {};
  console.log(data);

  if (Validator.isEmpty(data.firstname) || data.firstname.trim() === "") {
    errors.firstname = ValidationMessages.firstName.required;
    console.log(
      "ValidationMessages.firstName.required",
      ValidationMessages.firstName.required
    );
  } else if (!Validator.matches(data.firstname, ValidateRegex.alphaOnly)) {
    errors.firstname = ValidationMessages.firstName.alphaOnly;
  }

  if (Validator.isEmpty(data.lastname) || data.lastname.trim() === "") {
    errors.lastname = ValidationMessages.lastName.required;
  } else if (!Validator.matches(data.lastname, ValidateRegex.alphaOnly)) {
    errors.lastname = ValidationMessages.lastName.alphaOnly;
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = ValidationMessages.email.required;
  } else if (!Validator.isEmail(data.email)) {
    errors.email = ValidationMessages.email.invalid;
  }

  if (Validator.isEmpty(data.phone_number) || data.phone_number.trim() === "") {
    errors.phone_number = ValidationMessages.phoneNumber.invalid;
  } else if (data.phone_number.toString().length < 6) {
    errors.phone_number = ValidationMessages.phoneNumber.invalid;
  } else if (data.phone_number.toString().length > 15) {
    errors.phone_number = ValidationMessages.phoneNumber.invalid;
  }

  if (Validator.isEmpty(data.organisation)) {
    errors.organisation = ValidationMessages.organisationName.required;
  }

  // if (Validator.isEmpty(data.address) || data.address.trim() === "") {
  //   errors.address = ValidationMessages.address.required;
  // }

  if (Validator.isEmpty(data.description) || data.description.trim() === "") {
    errors.description = ValidationMessages.description.required;
  }

  if (data.trendingDishes.length == 0) {
    errors.trendingDishes = ValidationMessages.trendingDishes.required;
  }

  if (data.cuisines.length == 0) {
    errors.cuisines = ValidationMessages.cuisines.required;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
