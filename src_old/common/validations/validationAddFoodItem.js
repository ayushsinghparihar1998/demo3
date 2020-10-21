import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";

function validateInput(data) {
  let errors = {};
  //   title: '',
  //   diet_id: '',
  //   cuisine_id: '',
  //   big_image: '',
  //   tile_image: '',
  //   preparation_time: '',
  //   buffer_time: '',
  //   quantity: '',
  //   sizes: [],
  //   ingredients: [],
  //   topping: []

  if (data.ingredients.length == 0) {
    console.log("ingredients");
    errors.ingredients = ValidationMessages.ingredients.required;
  }
  
  if (data.sizes.length == 0) {
    errors.sizes = ValidationMessages.sizes.required;
  } else if (data.sizes[0].price == 0) {
    errors.sizes = ValidationMessages.sizes.notZero;
  }
  if (data.batch_qty.length == 0) {
    errors.batch_qty = ValidationMessages.batch_qty.required;
  } else if (data.batch_qty == 0) {
    errors.batch_qty = ValidationMessages.batch_qty.notZero;
  }
  if (data.allergy.length == 0) {
    errors.allergy = ValidationMessages.allergy.required;
  }
  if (data.ingredients.length == 0) {
    errors.ingredients = ValidationMessages.ingredients.required;
  }
  if (
    Validator.isEmpty(data.cuisine_id.toString()) ||
    data.cuisine_id.toString().trim() === ""
  ) {
    errors.cuisine_id = ValidationMessages.cuisine_id.required;
  }
  if (Validator.isEmpty(data.category_id) || data.category_id.trim() === "") {
    errors.category_id = ValidationMessages.category_id.required;
  }
  if (Validator.isEmpty(data.diet_id) || data.diet_id.trim() === "") {
    errors.diet_id = ValidationMessages.diet_id.required;
  }
  if (Validator.isEmpty(data.title) || data.title.trim() === "") {
    errors.title = ValidationMessages.title.required;
  }
  if (Validator.isEmpty(data.cook_time)) {
    errors.cook_time = ValidationMessages.cook_time.required;
  } else if (data.cook_time == 0) {
    errors.cook_time = ValidationMessages.cook_time.notZero;
  }
  if (Validator.isEmpty(data.big_image)) {
    errors.big_image = ValidationMessages.big_image.required;
  }
  if (Validator.isEmpty(data.tile_image)) {
    errors.tile_image = ValidationMessages.tile_image.required;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
