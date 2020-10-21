import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import ValidationMessages from "../helpers/ValidationMessages";
import ValidateRegex from "../helpers/ValidateRegex";

function validationSubscribe(data) {
    let errors = {};
    if (Validator.isEmpty(data.email)) {
        errors.email = ValidationMessages.email.required;
    } else if (!Validator.isEmail(data.email)) {
        errors.email = ValidationMessages.email.invalid;
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}

export default validationSubscribe;
