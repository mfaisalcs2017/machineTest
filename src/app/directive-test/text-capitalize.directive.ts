import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalText]',
})
export class TextCapitalizeDirective {
  constructor(private eltRef: ElementRef) {
    this.eltRef.nativeElement.style.textTransform = 'uppercase';
  }
}
