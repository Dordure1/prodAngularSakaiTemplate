import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function generateMyForm(fb : FormBuilder, httpC : HttpClient) : FormGroup{

    return fb.group(
    /*controls : */{
        emcail : ["", {
                        validators : [Validators.required, Validators.email],
                        asyncValidators : [],
                        updateOn : 'blur'
                    }
                ],
       
    },
    {
        //options  
        validators : [],
        updateOn : 'blur'
    }

    )   
}

