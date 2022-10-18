import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable,pipe } from "rxjs";
import { EmailCheckServiceService } from "../../../services/email-check-service.service";

export class checkUserExists{
    
    static checkUser(emailCheckServe : EmailCheckServiceService):AsyncValidatorFn|null{
        //si pas de param dans la méthode stc il injecte en mode invisible, l'abstractControl
        //si un param donner, il faut l'injecter depuis l'appel dans le generateform sinon il prends le type abstractcontrol

        return (control : AbstractControl) : Observable <ValidationErrors|null> => {
            return emailCheckServe.checkUser(control.value).pipe(
                map((result)=>{
                    if(result.length>=1){
                        let error  : ValidationErrors | null = { checkUserExists : `${control.value} already been used`}
                        return error
                    }
                    return null 
                })
            )
        }
    }
}