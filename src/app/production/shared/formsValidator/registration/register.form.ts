import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmailCheckServiceService } from "../../services/email-check-service.service";
import { checkUserExists } from "./validators/checkUserExist.validators";
import { matchPasswordValidator } from "./validators/matchPassword.validators";

export function generateMyForm(fb : FormBuilder, httpC : HttpClient, emailCheckServe : EmailCheckServiceService) : FormGroup{

    return fb.group(
    /*controls : */{
        email : ["", {
                        validators : [Validators.required, Validators.email],
                        asyncValidators : [checkUserExists.checkUser(emailCheckServe)],
                        updateOn : 'blur'
                    }
                ],
        coopName : ["",{
                        validators : [Validators.required, Validators.minLength(3)],
                        asyncValidators : [],
                        updateOn : 'blur'
        }],

        password : ["", {
                            validators : [Validators.required, Validators.minLength(6)]
                        }
                    ],

        Vpassword : ["",{
                            validators :  [Validators.required, Validators.minLength(6)]
                        }
                    ],
        
        city : ["", {
                            validators : [Validators.required]
                    }
                ],
        
        address : ["", {
                            validators : [Validators.required]
                        }
                    ],

        number : ["", {
                            validators : [Validators.required]
                        }
                ]
    },
    {
        //options  
        validators : [matchPasswordValidator],
        updateOn : 'blur'
    }

    )   
}

