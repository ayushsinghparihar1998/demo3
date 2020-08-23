import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import ValidationMessages from '../helpers/ValidationMessages';
import ValidateRegex from '../helpers/ValidateRegex';

function validateInput(data) {
  console.log(data);
  let errors = {};
  console.log('datadatadatadata', data);
  if (Validator.isEmpty(data.email)) {
    errors.email = ValidationMessages.email.required;
  } else if (!Validator.isEmail(data.email)) {
    errors.email = ValidationMessages.email.invalid;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = ValidationMessages.password.required;
  }

  if (data.action == 'listener_signup') {
    if (Validator.isEmpty(data.screenName)) {
      errors.screenName = ValidationMessages.screenName.required;
    }
  }

  if (data.action == 'user_signup') {
    if (Validator.isEmpty(data.username)) {
      errors.username = ValidationMessages.username.required;
    }
  }

  if (Validator.isEmpty(data.year)) {
    errors.year = ValidationMessages.year.required;
  }

  if (Validator.isEmpty(data.month)) {
    errors.month = ValidationMessages.month.required;
  }

  if (Validator.isEmpty(data.day)) {
    errors.day = ValidationMessages.day.required;
  }

  // if (Validator.isEmpty(data.listOfCategory)) {
  //   errors.listOfCategory = ValidationMessages.category.required;
  // }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
