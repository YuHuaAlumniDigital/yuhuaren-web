import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[table]'
})
export class TableDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.flex = '1 1 1e-09px';
    this.el.nativeElement.style.boxSizing = 'border-box';
  }
}
