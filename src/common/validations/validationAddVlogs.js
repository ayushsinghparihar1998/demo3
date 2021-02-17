import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
// import { isWebUri } from "valid-url";

function validateInput(data) {
  let errors = {};

  console.log("data---->", data);

  if (Validator.isEmpty(data.vl_title) || data.vl_title.trim() === "") {
    errors.vl_title = ValidationMessages.vl_title.required;
  }
  if (Validator.isEmpty(data.vl_desc) || data.vl_desc.trim() === "") {
    errors.vl_desc = ValidationMessages.vl_desc.required;
  }
  if (Validator.isEmpty(data.vl_title)) {
    errors.vl_title = ValidationMessages.vl_title.required;
  }
  if (Validator.isEmpty(data.vl_thumbnail_url)) {
    errors.vl_thumbnail_url = ValidationMessages.vl_thumbnail_url.required;
  }
  if (Validator.isEmpty(data.vl_video_url) || data.vl_video_url.trim() === "") {
    errors.vl_video_url = ValidationMessages.vl_video_url.required;
  } else if (!Validator.isURL(data.vl_video_url)) {
    errors.vl_video_url = ValidationMessages.vl_video_url.correct_url;
  } else if (!data.vl_video_url.includes("youtube")) {
    errors.vl_video_url = ValidationMessages.vl_video_url.correct_you_url;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
