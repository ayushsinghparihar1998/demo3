import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import ValidationMessages from '../helpers/ValidationMessages';
import ValidateRegex from '../helpers/ValidateRegex';

function validateInput(data) {
  console.log(data);
  let errors = {};

  if (Validator.isEmpty(data.first_name) || data.first_name.trim() === '') {
    errors.first_name = ValidationMessages.firstName.required;
  } else if (!Validator.matches(data.first_name, ValidateRegex.alphaOnly)) {
    errors.first_name = ValidationMessages.firstName.alphaOnly;
  }

  if (Validator.isEmpty(data.last_name) || data.last_name.trim() === '') {
    errors.last_name = ValidationMessages.lastName.required;
  } else if (!Validator.matches(data.last_name, ValidateRegex.alphaOnly)) {
    errors.last_name = ValidationMessages.lastName.alphaOnly;
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = ValidationMessages.email.required;
  } else if (!Validator.isEmail(data.email)) {
    errors.email = ValidationMessages.email.invalid;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = ValidationMessages.password.required;
  }
//   if (Validator.isEmpty(data.organisationName)) {
//     errors.organisationName = ValidationMessages.organisationName.required;
//   }

//   if (Validator.isEmpty(data.confirmPassword)) {
//     errors.confirmPassword = ValidationMessages.password.confirmPassword;
//   } else if (data.confirmPassword !== data.password) {
//     errors.confirmPassword = ValidationMessages.password.same;
//   }

  if (Validator.isEmpty(data.phone_number) || data.phone_number.trim() === '') {
    errors.phone_number = ValidationMessages.phoneNumber.invalid;
  } else if (data.phone_number.toString().length < 6) {
    errors.phone_number = ValidationMessages.phoneNumber.invalid;
  } else if (data.phone_number.toString().length > 15) {
    errors.phone_number = ValidationMessages.phoneNumber.invalid;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateInput;
