import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { matchPasswordValidator } from "./validators/matchPassword.validators";

export function generateMyForm(fb : FormBuilder, httpC : HttpClient) : FormGroup{

    return fb.group(
    /*controls : */{
        email : ["", {
                        validators : [Validators.required, Validators.email],
                        asyncValidators : [],
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

