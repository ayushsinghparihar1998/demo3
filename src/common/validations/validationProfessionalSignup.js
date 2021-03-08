import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
import ValidateRegex from "../helpers/ValidateRegex";

function validateInput(data) {
  console.log(data);
  let errors = {};
  console.log("datadatadatadata", data);
  var reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
  var regname = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
  // var regcomma = /^(?!,)(?!.*,.*,.*,.*,.*,.*,.*,.*,.*,.*,.*,.*,.*,.*,)/i;
  var regcomma = /^(?!,)/i;
  var rg = /^.*[^,]$/i;
  var rg2 = /^(?!.*([.,-])\1)[a-zA-Z0-9\s.,-]+$/;
  // var test = reg.test(value.trim());
  if (Validator.isEmpty(data.email)) {
    errors.email = ValidationMessages.email.required;
  } 
  if (!Validator.isEmail(data.email)) {
    errors.email = ValidationMessages.email.invalid;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = ValidationMessages.password.required;
  // } else if (!reg.test(data.password.trim())) {
  //   errors.password = ValidationMessages.password.passwordPattern;
  } 
  if (data.password.trim().length < 6) {
    errors.password = ValidationMessages.password.passwordPattern;
  }

  if (Validator.isEmpty(data.u_image)) {
    errors.u_image = ValidationMessages.u_image.required;
  }

  if (Validator.isEmpty(data.u_bio)) {
    errors.u_bio = ValidationMessages.u_bio.required;
  }

  if (Validator.isEmpty(data.u_birthdate)) {
    errors.u_birthdate = ValidationMessages.u_birthdate.required;
  }

  if (Validator.isEmpty(data.screen_name) || data.screen_name.trim() === "") {
    errors.screen_name = ValidationMessages.screen_name.required;
    console.log(
      "ValidationMessages.screen_name.required",
      ValidationMessages.screen_name.required
    );
  } else if (!regname.test(data.screen_name.trim())) {
    errors.screen_name = ValidationMessages.screen_name.alphaOnly;
  }
  // } else if (!Validator.matches(data.screen_name, ValidateRegex.alphaOnly)) {
  //   errors.screen_name = ValidationMessages.screen_name.alphaOnly;
  // }

  if (Validator.isEmpty(data.u_lang) || data.u_lang.trim() === "") {
    errors.u_lang = ValidationMessages.u_lang.required;
    console.log(
      "ValidationMessages.u_lang.required",
      ValidationMessages.u_lang.required
    );
  } else if (
    !regcomma.test(data.u_lang.trim()) ||
    !rg.test(data.u_lang.trim()) ||
    !rg2.test(data.u_lang.trim())
  ) {
    errors.u_lang = ValidationMessages.u_lang.validtext;
  }

  if (Validator.isEmpty(data.u_mobile) || data.u_mobile.trim() === "") {
    errors.u_mobile = ValidationMessages.u_mobile.required;
  } else if (data.u_mobile.toString().length < 10) {
    errors.u_mobile = ValidationMessages.u_mobile.invalid;
    // } else if (data.u_mobile.toString().length > 15) {
    //   errors.u_mobile = ValidationMessages.u_mobile.invalid;
  }

  if (
    Validator.isEmpty(data.u_work_experience) ||
    data.u_work_experience.trim() === ""
  ) {
    errors.u_work_experience = ValidationMessages.u_work_experience.required;
  }

  if (
    Validator.isEmpty(data.u_area_service) ||
    data.u_area_service.trim() === ""
  ) {
    errors.u_area_service = ValidationMessages.u_area_service.required;
  } else if (
    !regcomma.test(data.u_area_service) ||
    !rg.test(data.u_area_service) ||
    !rg2.test(data.u_area_service)
  ) {
    errors.u_area_service = ValidationMessages.u_area_service.validtext;
  }

  if (!data.u_education) {
    errors.u_education = ValidationMessages.u_education.required;
  }

  if (data.professional_keyword.length == 0) {
    errors.professional_keyword =
      ValidationMessages.professional_keyword.required;
  } else if (
    !regcomma.test(data.professional_keyword) ||
    !rg.test(data.professional_keyword) ||
    !rg2.test(data.professional_keyword)
  ) {
    errors.professional_keyword =
      ValidationMessages.professional_keyword.validtext;
  }

  if (data.professional_cat_name.length == 0) {
    errors.professional_cat_name =
      ValidationMessages.professional_cat_name.required;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
