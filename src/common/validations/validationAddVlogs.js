import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
// import { isWebUri } from "valid-url";

function validateInput(data) {
  let errors = {};
  var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = data.vl_video_url.match(regExp);
  let url = "url";
  if (match && match[2] && match[2].length == 11) {
    console.log("match[2]", match[2]);
    url = match[2];
    console.log("url", url);
  } else {
    //error
  }
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
  } else if (
    !(
      data.vl_video_url.includes("youtube") ||
      data.vl_video_url.includes("youtu.be")
    )
  ) {
    errors.vl_video_url = ValidationMessages.vl_video_url.correct_you_url;
  } else if (url == "url") {
    errors.vl_video_url = ValidationMessages.vl_video_url.correct_url;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
