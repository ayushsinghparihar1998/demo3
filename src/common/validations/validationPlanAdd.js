import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
import ValidateRegex from "../helpers/ValidateRegex";

function validateInput(data) {
  console.log(data);
  let errors = {};
  console.log("datadatadatadata", data);
  // if (Validator.isEmpty(data.pl_save)) {
  //   errors.pl_save = ValidationMessages.pl_save.required;
  // } else if (+data.pl_save === 0) {
  //   errors.pl_save = ValidationMessages.pl_save.correct;
  // }
  if (Validator.isEmpty(data.pl_desc_details)) {
    errors.pl_desc_details = ValidationMessages.pl_desc_details.required;
  }
  // if (Validator.isEmpty("" + data.pl_price)) {
  //   errors.pl_price = ValidationMessages.pl_price.required;
  // } else if (data.pl_price == 0) {
  //   errors.pl_price = ValidationMessages.pl_price.correct;
  // }
  if (Validator.isEmpty(data.pl_title)) {
    errors.pl_title = ValidationMessages.pl_title.required;
  }
  if (Validator.isEmpty(data.plan_type)) {
    errors.plan_type = ValidationMessages.plan_type.required;
  }
  if (data.plan_type == 1 && data.plan_cat_name.length == 0) {
    errors.plan_cat_name = ValidationMessages.plan_cat_name.required;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export function validatePriceMonth(priceMonth) {
  let check = 0
  const error_array = [];
  priceMonth.forEach((pp_month) => {
    // const checkPriceEmpty = Validator.isEmpty(pp_month.pp_discount) && Validator.isEmpty(pp_month.pp_price)
    const updates = {
      pp_min_range_month: '',
      pp_max_range_month: '',
      pp_discount: '',
      pp_price: ''
    }
    if (Validator.isEmpty(pp_month.pp_price)) {
      updates.pp_price = ValidationMessages.pp_month.pp_price.required;
      check++;
    }
    if (Validator.isEmpty(pp_month.pp_discount)) {
      updates.pp_discount = ValidationMessages.pp_month.pp_discount.required;
      check++;
    }
    if (parseInt(pp_month.pp_price) <= parseInt(pp_month.pp_discount)) {
      updates.pp_price = ValidationMessages.pp_month.pp_price.balance;
      updates.pp_discount = ValidationMessages.pp_month.pp_discount.balance;
      check++;
    }
    if(Validator.isEmpty(pp_month.pp_max_range_month)){
      updates.pp_max_range_month = ValidationMessages.pp_month.pp_max_range_month.required;
      check++;
    }
    if (parseInt(pp_month.pp_max_range_month) === 0) {
      updates.pp_max_range_month = ValidationMessages.pp_month.pp_max_range_month.required;
      check++;
    }
    error_array.push(updates);
  });

  if (check === 0) return [];
  else return error_array;

}
export default validateInput;
