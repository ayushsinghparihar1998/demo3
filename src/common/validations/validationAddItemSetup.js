import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import ValidationMessages from '../helpers/ValidationMessages';

function validateInput(data) {
  console.log(data);
  let errors = {};

  if (Validator.isEmpty(data.item_category_title)) {
    errors.item_category_title = ValidationMessages.item_category_title.required;
  }

  if (Validator.isEmpty(data.food_category_title)) {
    errors.food_category_title = ValidationMessages.food_category_title.required;
  } 

  if (!(data.start_time)) {
    errors.start_time = ValidationMessages.start_time.required;
  }

  if (!(data.end_time)) {
    errors.end_time = ValidationMessages.end_time.required;
  }
  if (Validator.isEmpty(data.cook_time.toString())) {
    errors.cook_time = ValidationMessages.cook_time.required;
  }
  if (Validator.isEmpty(data.per_batch_quantity.toString())) {
    errors.per_batch_quantity = ValidationMessages.per_batch_quantity.required;
  }  

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export default validateInput;
