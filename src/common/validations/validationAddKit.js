import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
import ValidateRegex from "../helpers/ValidateRegex";

function validateInput(data) {
  console.log(data);
  let errors = {};

  if (Validator.isEmpty(data.kt_name) || data.kt_name.trim() === "") {
    errors.kt_name = ValidationMessages.kt_name.required;
  } 
  if (Validator.isEmpty(data.kt_subheading) || data.kt_subheading.trim() === "") {
    errors.kt_subheading = ValidationMessages.kt_subheading.required;
  } 
  // else if (!Validator.matches(data.kt_name, ValidateRegex.alphaOnly)) {
  //   errors.kt_name = ValidationMessages.kt_name.alphaOnly;
  // }
  if (Validator.isEmpty(data.kt_desc) || data.kt_desc.trim() === "") {
    errors.kt_desc = ValidationMessages.kt_desc.required;
  }
  if (Validator.isEmpty(data.kt_overview) || data.kt_overview.trim() === "") {
    errors.kt_overview = ValidationMessages.kt_overview.required;
  }
  if (Validator.isEmpty(data.kt_image_url)) {
    errors.kt_image_url = ValidationMessages.kt_image_url.required;
  }
  // data.kits_price_month.forEach((month_price,index)=>{
  //   console.log("month_price.kp_price",month_price.kp_price)
  //   console.log("errors.kits_price_month[index].kp_price" , errors.kits_price_month)
  //   if (Validator.isEmpty(month_price.kp_price) || month_price.kp_price.trim() === "") {
  //     errors.kits_price_month[index].kp_price = ValidationMessages.kits_price_month.kp_price.required;
  //   }
  //   if (Validator.isEmpty(month_price.kits_price_month) || month_price.kp_discount.trim() === "") {
  //     errors.kits_price_month[index].kp_discount = ValidationMessages.kits_price_month.kp_discount.required;
  //   }
  // })

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
