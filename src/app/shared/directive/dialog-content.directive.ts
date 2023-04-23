import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[dialog-content]'
})
export class DialogContentDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.flex = '1 1 1e-09px';
    this.el.nativeElement.style.boxSizing = 'border-box';
    this.el.nativeElement.style.padding = '0 15px';
  }

}
