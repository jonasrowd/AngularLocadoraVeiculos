import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[locadoraMov]'
})
export class MovDirective {
  //Alterar o ElementRef boa prática de segurança
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#dc143c'
  }

}
