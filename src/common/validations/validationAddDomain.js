import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
import ValidateRegex from "../helpers/ValidateRegex";

function validateInput(data) {
  console.log(data);
  let errors = {};
  console.log("datadatadatadata", data);
  // var reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
 
  if (Validator.isEmpty(data.cd_domain_name)) {
    errors.cd_domain_name = ValidationMessages.cd_domain_name.required;
  }
  if (Validator.isEmpty(data.cd_audio_min)) {
    errors.cd_audio_min = ValidationMessages.cd_audio_min.required;
  }
  if (Validator.isEmpty(data.cd_video_min)) {
    errors.cd_video_min = ValidationMessages.cd_video_min.required;
  }
  if (Validator.isEmpty(data.cd_audio_status)) {
    errors.cd_audio_status = ValidationMessages.cd_audio_status.required;
  }
  if (Validator.isEmpty(data.cd_video_status)) {
    errors.cd_video_status = ValidationMessages.cd_video_status.required;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
