import Validator from "validator";
import ValidationMessages from "../../../../common/helpers/ValidationMessages";
const ValidatePassageQA = (errors) => {
    if(!Array.isArray(errors)){
        return false;
    }
    const make_err_array = [];
    let check = 0;
    errors.forEach((error)=>{
        const updates = {
            ls_que_name : '',
            ls_correct_answer : '',
            ls_ans : []
        }
        
        if(Validator.isEmpty(error.ls_que_name) || error.ls_que_name.trim() === ""){
            updates.ls_que_name = ValidationMessages.ques_answ.ques.required;
            check ++ ;
        }
        if(Validator.isEmpty(error.ls_correct_answer) || error.ls_correct_answer.trim() === ""){
            updates.ls_correct_answer = ValidationMessages.ques_answ.correct_ans.required;
            check ++ ;
        }
        error.ls_ans.forEach((answer)=>{
            const answer_check = { option : ''}
            if(Validator.isEmpty(answer.option) || answer.option.trim() === ""){
                answer_check.option = ValidationMessages.ques_answ.answ.required;
                check ++ ; 
            }
            updates.ls_ans.push(answer_check);
            
        });
        
        make_err_array.push(updates);
    });
    if(check > 0)
    return make_err_array;
    else return false;
}
export const ValidatePass = (passageError , passageDescribe) => {
    let passError = {
        passageError : '', 
        passageDescribe : ''
    }
    let check = 0 ;
    if(Validator.isEmpty(passageError) || passageError.trim() === ""){
        passError.passageError = ValidationMessages.pass_err.passageTitle.required;
        check ++;
    }
    if(Validator.isEmpty(passageDescribe) || passageDescribe.trim() === ""){
        passError.passageDescribe = ValidationMessages.pass_err.passageDescribe.required;
        check ++
    }

    if (check === 0) return false; 
    else return passError;
}
export default ValidatePassageQA;