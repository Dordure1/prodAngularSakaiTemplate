import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRegistration]'
})
export class RegistrationDirective {

  constructor(private el : ElementRef)
  {
    
      this.el.nativeElement.classList +="text : text-red-500"
  }
}
