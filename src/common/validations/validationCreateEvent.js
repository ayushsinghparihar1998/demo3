import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
import { isWebUri } from "valid-url";

function validateInput(data) {
  let errors = {};

  console.log("data---->", data);

  if (Validator.isEmpty(data.title) || data.title.trim() === "") {
    errors.title = ValidationMessages.title.required;
  }
  if (Validator.isEmpty(data.address) || data.address.trim() === "") {
    errors.address = ValidationMessages.address.required;
  }
  if (Validator.isEmpty(data.start_date)) {
    errors.start_date = ValidationMessages.start_date.required;
  }

  if (Validator.isEmpty(data.end_date)) {
    errors.end_date = ValidationMessages.end_date.required;
  }

  if (Validator.isEmpty(data.ticket_url) || data.ticket_url.trim() === "") {
    errors.ticket_url = ValidationMessages.ticket_url.required;
  } else if (!isWebUri(data.ticket_url)) {
    errors.ticket_url = ValidationMessages.ticket_url.correct_url;
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateInput;
