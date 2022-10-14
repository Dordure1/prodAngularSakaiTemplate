import { AbstractControl, ValidationErrors } from "@angular/forms";

export function matchPasswordValidator(controlGroup : AbstractControl){
    let error : ValidationErrors | null = null

    if(controlGroup.value["password"] && controlGroup.value["Vpassword"]){
        
        if(controlGroup.value["password"] != controlGroup.value["Vpassword"])
        {
            error = { MatchPassword : "Passwords do not match.."}
        }
    }
    return error
}