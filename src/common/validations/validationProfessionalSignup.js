import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
import ValidateRegex from "../helpers/ValidateRegex";

function validateInput(data) {
  console.log(data);
  let errors = {};
  console.log("datadatadatadata", data);

  //   email	:	prostaging7@yopmail.com
  // password	:	aye@12345
  // device_token	:
  // device_type	:
  // type	:
  // u_birthdate	:	22/08/1992
  // u_school_code	:	1
  // screen_name	:	prostaging7
  // u_lang	:	English
  // u_mobile	:	918817493061
  // u_location	:	Indore
  // u_work_experience	:	5 Years
  // u_hourly_fee	:	INR 1000
  // u_education	:	B.E. From CS branch
  // u_therapy_style	:	test me
  // u_image	:	https://homepages.cae.wisc.edu/~ece533/images/airplane.png
  // 	professional_keyword		[2]
  // 	professional_cat_name

  if (Validator.isEmpty(data.email)) {
    errors.email = ValidationMessages.email.required;
  } else if (!Validator.isEmail(data.email)) {
    errors.email = ValidationMessages.email.invalid;
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = ValidationMessages.password.required;
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
  } else if (!Validator.matches(data.screen_name, ValidateRegex.alphaOnly)) {
    errors.screen_name = ValidationMessages.screen_name.alphaOnly;
  }

  if (Validator.isEmpty(data.u_lang) || data.u_lang.trim() === "") {
    errors.u_lang = ValidationMessages.u_lang.required;
    console.log(
      "ValidationMessages.u_lang.required",
      ValidationMessages.u_lang.required
    );
  } else if (!Validator.matches(data.u_lang, ValidateRegex.alphaOnly)) {
    errors.u_lang = ValidationMessages.u_lang.alphaOnly;
  }

  if (Validator.isEmpty(data.u_mobile) || data.u_mobile.trim() === "") {
    errors.u_mobile = ValidationMessages.u_mobile.required;
  } else if (data.u_mobile.toString().length < 6) {
    errors.u_mobile = ValidationMessages.u_mobile.invalid;
  } else if (data.u_mobile.toString().length > 15) {
    errors.u_mobile = ValidationMessages.u_mobile.invalid;
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
  }

  if (!data.u_education) {
    errors.u_education = ValidationMessages.required;
  }

  if (data.professional_keyword.length == 0) {
    errors.professional_keyword =
      ValidationMessages.professional_keyword.required;
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
