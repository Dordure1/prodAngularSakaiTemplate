import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[registrationValidators]'
  })

export class registrationValidatorsDirective{

    constructor(private el : ElementRef)
    {
        this.el.nativeElement.style.color='#eceff1'
    }

}